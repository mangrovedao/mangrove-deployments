import AaveKandelSeeder_v1_0_0 from "./assets/strats/v1.0.0/AaveKandelSeeder.json";
import AavePooledRouter_v1_0_0 from "./assets/strats/v1.0.0/AavePooledRouter.json";
import KandelLib_v1_0_0 from "./assets/strats/v1.0.0/KandelLib.json";
import KandelSeeder_v1_0_0 from "./assets/strats/v1.0.0/KandelSeeder.json";
import MangroveOrderRouter_v1_0_0 from "./assets/strats/v1.0.0/MangroveOrder-Router.json";
import MangroveOrder_v1_0_0 from "./assets/strats/v1.0.0/MangroveOrder.json";
import { getLatestMangrovePerNetwork } from "./core";

import {
  DeploymentFilter,
  StratContractsNetworkDeployment,
  VersionDeployments,
  VersionNetworkDeployment,
} from "./types";
import {
  findAllDeploymentsPerNetwork,
  findDeployment,
  findLatestDeploymentPerNetwork,
} from "./internalUtils";

//////////////////////////
// AaveKandelSeeder

/** This is a sorted array (newest to oldest), exported for tests */
export const _aaveKandelSeederDeployments: VersionDeployments[] = [
  AaveKandelSeeder_v1_0_0,
];

export const getAaveKandelSeederVersionDeployments = (
  filter?: DeploymentFilter,
): VersionDeployments | undefined => {
  return findDeployment(filter, _aaveKandelSeederDeployments);
};

/** Returns all AaveKandelSeeder deployments matching the filter, grouped by network. */
export const getAllAaveKandelSeederVersionDeploymentsPerNetwork = (
  filter?: DeploymentFilter,
): Record<string, VersionDeployments[]> => {
  return findAllDeploymentsPerNetwork(filter, _aaveKandelSeederDeployments);
};

/** Returns the latest AaveKandelSeeder deployment matching the filter for each network. */
export const getLatestAaveKandelSeederPerNetwork = (
  filter?: DeploymentFilter,
): Record<string, VersionNetworkDeployment> => {
  return findLatestDeploymentPerNetwork(filter, _aaveKandelSeederDeployments);
};

//////////////////////////
// AavePooledRouter

/** This is a sorted array (newest to oldest), exported for tests */
export const _aavePooledRouterDeployments: VersionDeployments[] = [
  AavePooledRouter_v1_0_0,
];

export const getAavePooledRouterVersionDeployments = (
  filter?: DeploymentFilter,
): VersionDeployments | undefined => {
  return findDeployment(filter, _aavePooledRouterDeployments);
};

/** Returns all AavePooledRouter deployments matching the filter, grouped by network. */
export const getAllAavePooledRouterVersionDeploymentsPerNetwork = (
  filter?: DeploymentFilter,
): Record<string, VersionDeployments[]> => {
  return findAllDeploymentsPerNetwork(filter, _aavePooledRouterDeployments);
};

/** Returns the latest AaveKandelSeeder deployment matching the filter for each network. */
export const getLatestAavePooledRouterPerNetwork = (
  filter?: DeploymentFilter,
): Record<string, VersionNetworkDeployment> => {
  return findLatestDeploymentPerNetwork(filter, _aavePooledRouterDeployments);
};

//////////////////////////
// KandelLib

/** This is a sorted array (newest to oldest), exported for tests */
export const _kandelLibDeployments: VersionDeployments[] = [KandelLib_v1_0_0];

export const getKandelLibVersionDeployments = (
  filter?: DeploymentFilter,
): VersionDeployments | undefined => {
  return findDeployment(filter, _kandelLibDeployments);
};

/** Returns all KandelLib deployments matching the filter, grouped by network. */
export const getAllKandelLibVersionDeploymentsPerNetwork = (
  filter?: DeploymentFilter,
): Record<string, VersionDeployments[]> => {
  return findAllDeploymentsPerNetwork(filter, _kandelLibDeployments);
};

/** Returns the latest AaveKandelSeeder deployment matching the filter for each network. */
export const getLatestKandelLibPerNetwork = (
  filter?: DeploymentFilter,
): Record<string, VersionNetworkDeployment> => {
  return findLatestDeploymentPerNetwork(filter, _kandelLibDeployments);
};

//////////////////////////
// KandelSeeder

/** This is a sorted array (newest to oldest), exported for tests */
export const _kandelSeederDeployments: VersionDeployments[] = [
  KandelSeeder_v1_0_0,
];

export const getKandelSeederVersionDeployments = (
  filter?: DeploymentFilter,
): VersionDeployments | undefined => {
  return findDeployment(filter, _kandelSeederDeployments);
};

/** Returns all KandelSeeder deployments matching the filter, grouped by network. */
export const getAllKandelSeederVersionDeploymentsPerNetwork = (
  filter?: DeploymentFilter,
): Record<string, VersionDeployments[]> => {
  return findAllDeploymentsPerNetwork(filter, _kandelSeederDeployments);
};

/** Returns the latest AaveKandelSeeder deployment matching the filter for each network. */
export const getLatestKandelSeederPerNetwork = (
  filter?: DeploymentFilter,
): Record<string, VersionNetworkDeployment> => {
  return findLatestDeploymentPerNetwork(filter, _kandelSeederDeployments);
};

//////////////////////////
// MangroveOrderRouter

/** This is a sorted array (newest to oldest), exported for tests */
export const _mangroveOrderRouterDeployments: VersionDeployments[] = [
  MangroveOrderRouter_v1_0_0,
];

export const getMangroveOrderRouterVersionDeployments = (
  filter?: DeploymentFilter,
): VersionDeployments | undefined => {
  return findDeployment(filter, _mangroveOrderRouterDeployments);
};

/** Returns all MangroveOrderRouter deployments matching the filter, grouped by network. */
export const getAllMangroveOrderRouterVersionDeploymentsPerNetwork = (
  filter?: DeploymentFilter,
): Record<string, VersionDeployments[]> => {
  return findAllDeploymentsPerNetwork(filter, _mangroveOrderRouterDeployments);
};

/** Returns the latest AaveKandelSeeder deployment matching the filter for each network. */
export const getLatestMangroveOrderRouterPerNetwork = (
  filter?: DeploymentFilter,
): Record<string, VersionNetworkDeployment> => {
  return findLatestDeploymentPerNetwork(
    filter,
    _mangroveOrderRouterDeployments,
  );
};

//////////////////////////
// MangroveOrder

/** This is a sorted array (newest to oldest), exported for tests */
export const _mangroveOrderDeployments: VersionDeployments[] = [
  MangroveOrder_v1_0_0,
];

export const getMangroveOrderVersionDeployments = (
  filter?: DeploymentFilter,
): VersionDeployments | undefined => {
  return findDeployment(filter, _mangroveOrderDeployments);
};

/** Returns all MangroveOrder deployments matching the filter, grouped by network. */
export const getAllMangroveOrderVersionDeploymentsPerNetwork = (
  filter?: DeploymentFilter,
): Record<string, VersionDeployments[]> => {
  return findAllDeploymentsPerNetwork(filter, _mangroveOrderDeployments);
};

/** Returns the latest AaveKandelSeeder deployment matching the filter for each network. */
export const getLatestMangroveOrderPerNetwork = (
  filter?: DeploymentFilter,
): Record<string, VersionNetworkDeployment> => {
  return findLatestDeploymentPerNetwork(filter, _mangroveOrderDeployments);
};

//////////////////////////
// Cross-cutting

/** Get the latest latest strat contract deployments for the latest Mangrove deployment for each network.
 */
export const getLatestStratContractsPerNetwork = (
  filter?: DeploymentFilter,
  mangroveFilter?: DeploymentFilter,
): Record<string, StratContractsNetworkDeployment> => {
  const latestMangrovePerNetwork = getLatestMangrovePerNetwork(mangroveFilter);
  const latestStratContractsPerNetwork: Record<
    string,
    StratContractsNetworkDeployment
  > = {};
  const filterDependenciesWithoutMangrove =
    filter?.dependencies?.filter((d) => d.name !== "Mangrove") ?? [];
  for (const [network, mangroveDeployment] of Object.entries(
    latestMangrovePerNetwork,
  )) {
    const stratFilter = {
      ...filter,
      network,
      dependencies: [
        ...filterDependenciesWithoutMangrove,
        { name: "Mangrove", address: mangroveDeployment.address },
      ],
    };
    latestStratContractsPerNetwork[network] = {
      mangrove: mangroveDeployment,
      aaveKandelSeeder:
        getLatestAaveKandelSeederPerNetwork(stratFilter)[network],
      aavePooledRouter:
        getLatestAavePooledRouterPerNetwork(stratFilter)[network],
      kandelLib: getLatestKandelLibPerNetwork(stratFilter)[network],
      kandelSeeder: getLatestKandelSeederPerNetwork(stratFilter)[network],
      mangroveOrderRouter:
        getLatestMangroveOrderRouterPerNetwork(stratFilter)[network],
      mangroveOrder: getLatestMangroveOrderPerNetwork(stratFilter)[network],
    };
  }
  return latestStratContractsPerNetwork;
};
