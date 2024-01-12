import Mangrove_v2_0_1 from "./assets/core/v2.0.1/Mangrove.json";
import MgvOracle_v2_0_1 from "./assets/core/v2.0.1/MgvOracle.json";
import MgvReader_v2_0_1 from "./assets/core/v2.0.1/MgvReader.json";
import {
  CoreContractsNetworkDeployment,
  DeploymentFilter,
  VersionDeployments,
  VersionNetworkDeployment,
} from "./types";
import {
  findAllDeploymentsPerNetwork,
  findLatestDeploymentPerNetwork,
  findDeployment,
} from "./utils";

//////////////////////////
// Mangrove

/** This is a sorted array (newest to oldest), exported for tests */
export const _mangroveDeployments: VersionDeployments[] = [Mangrove_v2_0_1];

export const getMangroveVersionDeployments = (
  filter?: DeploymentFilter,
): VersionDeployments | undefined => {
  return findDeployment(filter, _mangroveDeployments);
};

/** Returns all Mangrove deployments matching the filter, grouped by network. */
export const getAllMangroveVersionDeploymentsPerNetwork = (
  filter?: DeploymentFilter,
): Record<string, VersionDeployments[]> => {
  return findAllDeploymentsPerNetwork(filter, _mangroveDeployments);
};

/** Returns the latest Mangrove deployment matching the filter for each network. */
export const getLatestMangrovePerNetwork = (
  filter?: DeploymentFilter,
): Record<string, VersionNetworkDeployment> => {
  return findLatestDeploymentPerNetwork(filter, _mangroveDeployments);
};

//////////////////////////
// MgvOracle

/** This is a sorted array (newest to oldest), exported for tests */
export const _mgvOracleDeployments: VersionDeployments[] = [MgvOracle_v2_0_1];

export const getMgvOracleVersionDeployments = (
  filter?: DeploymentFilter,
): VersionDeployments | undefined => {
  return findDeployment(filter, _mgvOracleDeployments);
};

/** Returns all MgvOracle deployments matching the filter, grouped by network. */
export const getAllMgvOracleVersionDeploymentsPerNetwork = (
  filter?: DeploymentFilter,
): Record<string, VersionDeployments[]> => {
  return findAllDeploymentsPerNetwork(filter, _mgvOracleDeployments);
};

/** Returns the latest MgvOracle deployment matching the filter for each network. */
export const getLatestMgvOraclePerNetwork = (
  filter?: DeploymentFilter,
): Record<string, VersionNetworkDeployment> => {
  return findLatestDeploymentPerNetwork(filter, _mgvOracleDeployments);
};

//////////////////////////
// MgvReader

/** This is a sorted array (newest to oldest), exported for tests */
export const _mgvReaderDeployments: VersionDeployments[] = [MgvReader_v2_0_1];

export const getMgvReaderVersionDeployments = (
  filter?: DeploymentFilter,
): VersionDeployments | undefined => {
  return findDeployment(filter, _mgvReaderDeployments);
};

/** Returns all MgvReader deployments matching the filter, grouped by network. */
export const getAllMgvReaderVersionDeploymentsPerNetwork = (
  filter?: DeploymentFilter,
): Record<string, VersionDeployments[]> => {
  return findAllDeploymentsPerNetwork(filter, _mgvReaderDeployments);
};

/** Returns the latest MgvReader deployment matching the filter for each network. */
export const getLatestMgvReaderPerNetwork = (
  filter?: DeploymentFilter,
): Record<string, VersionNetworkDeployment> => {
  return findLatestDeploymentPerNetwork(filter, _mgvReaderDeployments);
};

//////////////////////////
// Cross-cutting

/** Get the latest Mangrove deployments for each network along with the corresponding MgvOracle and MgvReader deployments.
 */
export const getLatestCoreContractsPerNetwork = (
  filter?: DeploymentFilter,
): Record<string, CoreContractsNetworkDeployment> => {
  const latestMangrovePerNetwork = getLatestMangrovePerNetwork(filter);
  const latestCoreContractsPerNetwork: Record<
    string,
    CoreContractsNetworkDeployment
  > = {};
  const filterDependenciesWithoutMangrove =
    filter?.dependencies?.filter((d) => d.name !== "Mangrove") ?? [];
  for (const [network, mangroveDeployment] of Object.entries(
    latestMangrovePerNetwork,
  )) {
    const peripheryFilter = {
      ...filter,
      network,
      dependencies: [
        ...filterDependenciesWithoutMangrove,
        { name: "Mangrove", address: mangroveDeployment.address },
      ],
    };
    latestCoreContractsPerNetwork[network] = {
      mangrove: mangroveDeployment,
      mgvOracle: getLatestMgvOraclePerNetwork(peripheryFilter)[network],
      mgvReader: getLatestMgvReaderPerNetwork(peripheryFilter)[network],
    };
  }
  return latestCoreContractsPerNetwork;
};
