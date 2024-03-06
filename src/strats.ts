// v1.0.0
import AaveKandelSeeder_v1_0_0 from "./assets/strats/v1.0.0/AaveKandelSeeder.json";
import AavePooledRouter_v1_0_0 from "./assets/strats/v1.0.0/AavePooledRouter.json";
import KandelLib_v1_0_0 from "./assets/strats/v1.0.0/KandelLib.json";
import KandelSeeder_v1_0_0 from "./assets/strats/v1.0.0/KandelSeeder.json";
import MangroveOrderRouter_v1_0_0 from "./assets/strats/v1.0.0/MangroveOrder-Router.json";
import MangroveOrder_v1_0_0 from "./assets/strats/v1.0.0/MangroveOrder.json";
// v2.0.0-b1.0
import AaveKandelSeeder_v2_0_0_b1_0 from "./assets/strats/v2.0.0-b1.0/AaveKandelSeeder.json";
import AavePooledRouter_v2_0_0_b1_0 from "./assets/strats/v2.0.0-b1.0/AavePooledRouter.json";
import KandelLib_v2_0_0_b1_0 from "./assets/strats/v2.0.0-b1.0/KandelLib.json";
import KandelSeeder_v2_0_0_b1_0 from "./assets/strats/v2.0.0-b1.0/KandelSeeder.json";
import MangroveOrderRouter_v2_0_0_b1_0 from "./assets/strats/v2.0.0-b1.0/MangroveOrder-Router.json";
import MangroveOrder_v2_0_0_b1_0 from "./assets/strats/v2.0.0-b1.0/MangroveOrder.json";
import RouterProxyFactory_v2_0_0_b1_0 from "./assets/strats/v2.0.0-b1.0/RouterProxyFactory.json";
import SimpleAaveLogic_v2_0_0_b1_0 from "./assets/strats/v2.0.0-b1.0/SimpleAaveLogic.json";
import MangroveAmplifier_v2_0_0_b1_0 from "./assets/strats/v2.0.0-b1.0/MangroveAmplifier.json";
// v2.0.1-0
import AaveKandelSeeder_v2_0_1_0 from "./assets/strats/v2.0.1-0/AaveKandelSeeder.json";
import AavePooledRouter_v2_0_1_0 from "./assets/strats/v2.0.1-0/AavePooledRouter.json";
import KandelLib_v2_0_1_0 from "./assets/strats/v2.0.1-0/KandelLib.json";
import KandelSeeder_v2_0_1_0 from "./assets/strats/v2.0.1-0/KandelSeeder.json";
import MangroveAmplifier_v2_0_1_0 from "./assets/strats/v2.0.1-0/MangroveAmplifier.json";
import MangroveOrderRouter_v2_0_1_0 from "./assets/strats/v2.0.1-0/MangroveOrder-Router.json";
import MangroveOrder_v2_0_1_0 from "./assets/strats/v2.0.1-0/MangroveOrder.json";
import RouterProxyFactory_v2_0_1_0 from "./assets/strats/v2.0.1-0/RouterProxyFactory.json";
import SimpleAaveLogic_v2_0_1_0 from "./assets/strats/v2.0.1-0/SimpleAaveLogic.json";
// v2.1.0-0
import BlastMangroveAmplifier_v2_1_0_0 from "./assets/strats/v2.1.0-0/BlastMangroveAmplifier.json";
import BlastMangroveOrderRouter_v2_1_0_0 from "./assets/strats/v2.1.0-0/BlastMangroveOrder-Router.json";
import BlastMangroveOrder_v2_1_0_0 from "./assets/strats/v2.1.0-0/BlastMangroveOrder.json";
import BlastRouterProxyFactory_v2_1_0_0 from "./assets/strats/v2.1.0-0/BlastRouterProxyFactory.json";
// v2.1.0-1
import OrbitLogic_v2_1_0_1 from "./assets/strats/v2.1.0-1/OrbitLogic.json";
// v2.1.0
import BlastMangroveAmplifier_v2_1_0 from "./assets/strats/v2.1.0/BlastMangroveAmplifier.json";
import BlastMangroveOrderRouter_v2_1_0 from "./assets/strats/v2.1.0/BlastMangroveOrder-Router.json";
import BlastMangroveOrder_v2_1_0 from "./assets/strats/v2.1.0/BlastMangroveOrder.json";
import RouterProxyFactory_v2_1_0 from "./assets/strats/v2.1.0/RouterProxyFactory.json";
import BlastKandelSeeder_v2_1_0 from "./assets/strats/v2.1.0/BlastKandelSeeder.json";
import BlastKandelLib_v2_1_0 from "./assets/strats/v2.1.0/BlastKandelLib.json";
import ZeroLendLogic_v2_1_0 from "./assets/strats/v2.1.0/ZeroLendLogic.json";

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
  AaveKandelSeeder_v2_0_1_0,
  AaveKandelSeeder_v2_0_0_b1_0,
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
  AavePooledRouter_v2_0_1_0,
  AavePooledRouter_v2_0_0_b1_0,
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

/** Returns the latest AavePooledRouter deployment matching the filter for each network. */
export const getLatestAavePooledRouterPerNetwork = (
  filter?: DeploymentFilter,
): Record<string, VersionNetworkDeployment> => {
  return findLatestDeploymentPerNetwork(filter, _aavePooledRouterDeployments);
};

//////////////////////////
// KandelLib

/** This is a sorted array (newest to oldest), exported for tests */
export const _kandelLibDeployments: VersionDeployments[] = [
  BlastKandelLib_v2_1_0,
  KandelLib_v2_0_1_0,
  KandelLib_v2_0_0_b1_0,
  KandelLib_v1_0_0,
];

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

/** Returns the latest KandelLib deployment matching the filter for each network. */
export const getLatestKandelLibPerNetwork = (
  filter?: DeploymentFilter,
): Record<string, VersionNetworkDeployment> => {
  return findLatestDeploymentPerNetwork(filter, _kandelLibDeployments);
};

//////////////////////////
// KandelSeeder

/** This is a sorted array (newest to oldest), exported for tests */
export const _kandelSeederDeployments: VersionDeployments[] = [
  BlastKandelSeeder_v2_1_0,
  KandelSeeder_v2_0_1_0,
  KandelSeeder_v2_0_0_b1_0,
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

/** Returns the latest KandelSeeder deployment matching the filter for each network. */
export const getLatestKandelSeederPerNetwork = (
  filter?: DeploymentFilter,
): Record<string, VersionNetworkDeployment> => {
  return findLatestDeploymentPerNetwork(filter, _kandelSeederDeployments);
};

//////////////////////////
// MangroveOrderRouter

/** This is a sorted array (newest to oldest), exported for tests */
export const _mangroveOrderRouterDeployments: VersionDeployments[] = [
  BlastMangroveOrderRouter_v2_1_0,
  BlastMangroveOrderRouter_v2_1_0_0,
  MangroveOrderRouter_v2_0_1_0,
  MangroveOrderRouter_v2_0_0_b1_0,
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

/** Returns the latest MangroveOrderRouter deployment matching the filter for each network. */
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
  BlastMangroveOrder_v2_1_0,
  BlastMangroveOrder_v2_1_0_0,
  MangroveOrder_v2_0_1_0,
  MangroveOrder_v2_0_0_b1_0,
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

/** Returns the latest MangroveOrder deployment matching the filter for each network. */
export const getLatestMangroveOrderPerNetwork = (
  filter?: DeploymentFilter,
): Record<string, VersionNetworkDeployment> => {
  return findLatestDeploymentPerNetwork(filter, _mangroveOrderDeployments);
};

//////////////////////////
// RouterProxyFactory

/** This is a sorted array (newest to oldest), exported for tests */
export const _routerProxyFactoryDeployments: VersionDeployments[] = [
  RouterProxyFactory_v2_1_0,
  BlastRouterProxyFactory_v2_1_0_0,
  RouterProxyFactory_v2_0_1_0,
  RouterProxyFactory_v2_0_0_b1_0,
];

export const getRouterProxyFactoryVersionDeployments = (
  filter?: DeploymentFilter,
): VersionDeployments | undefined => {
  return findDeployment(filter, _routerProxyFactoryDeployments);
};

/** Returns all RouterProxyFactory deployments matching the filter, grouped by network. */
export const getAllRouterProxyFactoryVersionDeploymentsPerNetwork = (
  filter?: DeploymentFilter,
): Record<string, VersionDeployments[]> => {
  return findAllDeploymentsPerNetwork(filter, _routerProxyFactoryDeployments);
};

/** Returns the latest RouterProxyFactory deployment matching the filter for each network. */
export const getLatestRouterProxyFactoryPerNetwork = (
  filter?: DeploymentFilter,
): Record<string, VersionNetworkDeployment> => {
  return findLatestDeploymentPerNetwork(filter, _routerProxyFactoryDeployments);
};

//////////////////////////
// ZeroLendLogic

/** This is a sorted array (newest to oldest), exported for tests */
export const _zeroLendLogicDeployments: VersionDeployments[] = [
  ZeroLendLogic_v2_1_0,
];

export const getZeroLendLogicVersionDeployments = (
  filter?: DeploymentFilter,
): VersionDeployments | undefined => {
  return findDeployment(filter, _zeroLendLogicDeployments);
};

/** Returns all ZeroLendLogic deployments matching the filter, grouped by network. */
export const getAllZeroLendLogicVersionDeploymentsPerNetwork = (
  filter?: DeploymentFilter,
): Record<string, VersionDeployments[]> => {
  return findAllDeploymentsPerNetwork(filter, _zeroLendLogicDeployments);
};

/** Returns the latest ZeroLendLogic deployment matching the filter for each network. */
export const getLatestZeroLendLogicPerNetwork = (
  filter?: DeploymentFilter,
): Record<string, VersionNetworkDeployment> => {
  return findLatestDeploymentPerNetwork(filter, _zeroLendLogicDeployments);
};

//////////////////////////
// SimpleAaveLogic

/** This is a sorted array (newest to oldest), exported for tests */
export const _simpleAaveLogicDeployments: VersionDeployments[] = [
  SimpleAaveLogic_v2_0_1_0,
  SimpleAaveLogic_v2_0_0_b1_0,
];

export const getSimpleAaveLogicVersionDeployments = (
  filter?: DeploymentFilter,
): VersionDeployments | undefined => {
  return findDeployment(filter, _simpleAaveLogicDeployments);
};

/** Returns all SimpleAaveLogic deployments matching the filter, grouped by network. */
export const getAllSimpleAaveLogicVersionDeploymentsPerNetwork = (
  filter?: DeploymentFilter,
): Record<string, VersionDeployments[]> => {
  return findAllDeploymentsPerNetwork(filter, _simpleAaveLogicDeployments);
};

/** Returns the latest SimpleAaveLogic deployment matching the filter for each network. */
export const getLatestSimpleAaveLogicPerNetwork = (
  filter?: DeploymentFilter,
): Record<string, VersionNetworkDeployment> => {
  return findLatestDeploymentPerNetwork(filter, _simpleAaveLogicDeployments);
};

//////////////////////////
// OrbitLogic

export const _orbitLogicDeployments: VersionDeployments[] = [
  OrbitLogic_v2_1_0_1,
];

export const getOrbitLogicVersionDeployments = (
  filter?: DeploymentFilter,
): VersionDeployments | undefined => {
  return findDeployment(filter, _orbitLogicDeployments);
};

/** Returns all OrbitLogic deployments matching the filter, grouped by network. */
export const getAllOrbitLogicVersionDeploymentsPerNetwork = (
  filter?: DeploymentFilter,
): Record<string, VersionDeployments[]> => {
  return findAllDeploymentsPerNetwork(filter, _orbitLogicDeployments);
};

/** Returns the latest OrbitLogic deployment matching the filter for each network. */
export const getLatestOrbitLogicPerNetwork = (
  filter?: DeploymentFilter,
): Record<string, VersionNetworkDeployment> => {
  return findLatestDeploymentPerNetwork(filter, _orbitLogicDeployments);
};

//////////////////////////
// MangroveAmplifier

/** This is a sorted array (newest to oldest), exported for tests */
export const _mangroveAmplifierDeployments: VersionDeployments[] = [
  BlastMangroveAmplifier_v2_1_0,
  BlastMangroveAmplifier_v2_1_0_0,
  MangroveAmplifier_v2_0_1_0,
  MangroveAmplifier_v2_0_0_b1_0,
];

export const getMangroveAmplifierVersionDeployments = (
  filter?: DeploymentFilter,
): VersionDeployments | undefined => {
  return findDeployment(filter, _mangroveAmplifierDeployments);
};

/** Returns all MangroveAmplifier deployments matching the filter, grouped by network. */
export const getAllMangroveAmplifierVersionDeploymentsPerNetwork = (
  filter?: DeploymentFilter,
): Record<string, VersionDeployments[]> => {
  return findAllDeploymentsPerNetwork(filter, _mangroveAmplifierDeployments);
};

/** Returns the latest MangroveAmplifier deployment matching the filter for each network. */
export const getLatestMangroveAmplifierPerNetwork = (
  filter?: DeploymentFilter,
): Record<string, VersionNetworkDeployment> => {
  return findLatestDeploymentPerNetwork(filter, _mangroveAmplifierDeployments);
};

//////////////////////////
// Cross-cutting

/** Get the latest latest strat contract deployments for the latest Mangrove deployment for each network.
 */
export const getLatestStratContractsPerNetwork = (
  filter?: DeploymentFilter,
  mangroveFilter?: DeploymentFilter,
): Record<string, StratContractsNetworkDeployment> => {
  if (mangroveFilter === undefined && filter !== undefined) {
    mangroveFilter = { released: filter.released };
  }
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
      routerProxyFactory:
        getLatestRouterProxyFactoryPerNetwork(stratFilter)[network],
      simpleAaveLogic: getLatestSimpleAaveLogicPerNetwork(stratFilter)[network],
      mangroveAmplifier:
        getLatestMangroveAmplifierPerNetwork(stratFilter)[network],
      orbitLogic: getLatestOrbitLogicPerNetwork(stratFilter)[network],
      zeroLendLogic: getLatestZeroLendLogicPerNetwork(stratFilter)[network],
    };
  }
  return latestStratContractsPerNetwork;
};
