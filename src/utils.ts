import { DeploymentFilter, VersionDeployments, Dependency } from "./types";
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
      !semverSatisfies(deployment.version, criteriaWithDefaults.version)
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
