import {
  DeploymentFilter,
  VersionDeployments,
  Dependency,
  VersionNetworkDeployment,
  VersionDeploymentBaseInfo,
} from "./types";
import semverSatisfies from "semver/functions/satisfies";

const DEFAULT_FILTER: DeploymentFilter = { released: true };

function doDependenciesMatch(
  dependencies: Dependency[] | undefined,
  dependencyCriteria: Dependency[] | undefined,
): boolean {
  return (
    !dependencyCriteria ||
    dependencyCriteria.every(
      (c) =>
        dependencies &&
        dependencies.some((d) => d.name == c.name && d.address == c.address),
    )
  );
}

function createFilterFunction(criteria: DeploymentFilter) {
  return (deployment: VersionDeployments) => {
    const criteriaWithDefaults: DeploymentFilter = {
      ...DEFAULT_FILTER,
      ...criteria,
    };

    if (
      typeof criteriaWithDefaults.version !== "undefined" &&
      !semverSatisfies(deployment.version, criteriaWithDefaults.version, {
        includePrerelease: true,
      })
    ) {
      return false;
    }
    if (
      typeof criteriaWithDefaults.released === "boolean" &&
      deployment.released != criteriaWithDefaults.released
    ) {
      return false;
    }
    if (
      criteriaWithDefaults.network &&
      !deployment.networkAddresses[criteriaWithDefaults.network]
    ) {
      return false;
    }
    if (
      criteriaWithDefaults.deploymentName &&
      deployment.deploymentName != criteriaWithDefaults.deploymentName
    ) {
      return false;
    }
    if (
      criteriaWithDefaults.dependencies &&
      Object.entries(deployment.networkAddresses)
        .filter(
          ([network]) =>
            !criteriaWithDefaults.network ||
            network == criteriaWithDefaults.network,
        )
        .flatMap(([, deployments]) =>
          deployments.allAddresses.map((a) => a.dependencies),
        )
        .every(
          (d) => !doDependenciesMatch(d, criteriaWithDefaults.dependencies),
        )
    ) {
      return false;
    }

    return true;
  };
}

export const findDeployment = (
  criteria: DeploymentFilter = DEFAULT_FILTER,
  deployments: VersionDeployments[],
): VersionDeployments | undefined => {
  return deployments.find(createFilterFunction(criteria));
};

export const findAllDeployments = (
  criteria: DeploymentFilter = DEFAULT_FILTER,
  deployments: VersionDeployments[],
): VersionDeployments[] => {
  return deployments.filter(createFilterFunction(criteria));
};

export const findAllDeploymentsPerNetwork = (
  criteria: DeploymentFilter = DEFAULT_FILTER,
  deployments: VersionDeployments[],
): Record<string, VersionDeployments[]> => {
  const deploymentsByNetwork: Record<string, VersionDeployments[]> = {};
  for (const deployment of findAllDeployments(criteria, deployments)) {
    for (const network of Object.keys(deployment.networkAddresses)) {
      if (!createFilterFunction({ ...criteria, network })(deployment)) {
        continue;
      }
      if (!deploymentsByNetwork[network]) {
        deploymentsByNetwork[network] = [];
      }
      deploymentsByNetwork[network].push(deployment);
    }
  }
  return deploymentsByNetwork;
};

export const getVersionDeploymentBaseInfo = (
  versionDeployments: VersionDeployments,
): VersionDeploymentBaseInfo => {
  return {
    contractName: versionDeployments.contractName,
    deploymentName: versionDeployments.deploymentName,
    version: versionDeployments.version,
    released: versionDeployments.released,
    abi: versionDeployments.abi,
  };
};

export const findLatestDeploymentPerNetwork = (
  criteria: DeploymentFilter = DEFAULT_FILTER,
  deployments: VersionDeployments[],
): Record<string, VersionNetworkDeployment> => {
  const deploymentsByNetwork: Record<string, VersionNetworkDeployment> = {};
  for (const [network, networkDeployments] of Object.entries(
    findAllDeploymentsPerNetwork(criteria, deployments),
  )) {
    const latestVersionDeployments = networkDeployments[0];
    const allNetworkAddresses =
      latestVersionDeployments.networkAddresses[network].allAddresses;
    const latestMatchingNetworkAddress = allNetworkAddresses.find((a) =>
      doDependenciesMatch(a.dependencies, criteria.dependencies),
    )!; // We know at least one matches
    const latestVersionDeployment: VersionNetworkDeployment = {
      ...getVersionDeploymentBaseInfo(latestVersionDeployments),
      network: network,
      address: latestMatchingNetworkAddress.address,
      dependencies: latestMatchingNetworkAddress.dependencies,
    };
    deploymentsByNetwork[network] = latestVersionDeployment;
  }
  return deploymentsByNetwork;
};
