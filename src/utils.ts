import { DeploymentFilter, VersionDeployments } from "./types";
import semverSatisfies from "semver/functions/satisfies";

const DEFAULT_FILTER: DeploymentFilter = { released: true };

function createFilterFunction(criteria: DeploymentFilter) {
  return (deployment: VersionDeployments) => {
    const criteriaWithDefaults: DeploymentFilter = {
      ...DEFAULT_FILTER,
      ...criteria,
    };

    if (
      typeof criteriaWithDefaults.version !== "undefined" &&
      !semverSatisfies(deployment.version, criteriaWithDefaults.version)
    )
      return false;
    if (
      typeof criteriaWithDefaults.released === "boolean" &&
      deployment.released != criteriaWithDefaults.released
    )
      return false;
    if (
      criteriaWithDefaults.network &&
      !deployment.networkAddresses[criteriaWithDefaults.network]
    )
      return false;
    if (
      criteriaWithDefaults.deploymentName &&
      deployment.deploymentName != criteriaWithDefaults.deploymentName
    )
      return false;

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
