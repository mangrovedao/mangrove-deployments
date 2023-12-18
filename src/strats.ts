import AaveKandelSeeder_v1_0_0 from "./assets/strats/v1.0.0/AaveKandelSeeder.json";
import AavePooledRouter_v1_0_0 from "./assets/strats/v1.0.0/AavePooledRouter.json";
import KandelLib_v1_0_0 from "./assets/strats/v1.0.0/KandelLib.json";
import KandelSeeder_v1_0_0 from "./assets/strats/v1.0.0/KandelSeeder.json";
import MangroveOrderRouter_v1_0_0 from "./assets/strats/v1.0.0/MangroveOrder-Router.json";
import MangroveOrder_v1_0_0 from "./assets/strats/v1.0.0/MangroveOrder.json";

import { DeploymentFilter, VersionDeployments } from "./types";
import { findDeployment } from "./utils";

// This is a sorted array (newest to oldest), exported for tests
export const _aaveKandelSeederDeployments: VersionDeployments[] = [
  AaveKandelSeeder_v1_0_0,
];

export const getAaveKandelSeederVersionDeployments = (
  filter?: DeploymentFilter,
): VersionDeployments | undefined => {
  return findDeployment(filter, _aaveKandelSeederDeployments);
};

// This is a sorted array (newest to oldest), exported for tests
export const _aavePooledRouterDeployments: VersionDeployments[] = [
  AavePooledRouter_v1_0_0,
];

export const getAavePooledRouterVersionDeployments = (
  filter?: DeploymentFilter,
): VersionDeployments | undefined => {
  return findDeployment(filter, _aavePooledRouterDeployments);
};

// This is a sorted array (newest to oldest), exported for tests
export const _kandelLibDeployments: VersionDeployments[] = [KandelLib_v1_0_0];

export const getKandelLibVersionDeployments = (
  filter?: DeploymentFilter,
): VersionDeployments | undefined => {
  return findDeployment(filter, _kandelLibDeployments);
};

// This is a sorted array (newest to oldest), exported for tests
export const _kandelSeederDeployments: VersionDeployments[] = [
  KandelSeeder_v1_0_0,
];

export const getKandelSeederVersionDeployments = (
  filter?: DeploymentFilter,
): VersionDeployments | undefined => {
  return findDeployment(filter, _kandelSeederDeployments);
};

// This is a sorted array (newest to oldest), exported for tests
export const _mangroveOrderRouterDeployments: VersionDeployments[] = [
  MangroveOrderRouter_v1_0_0,
];

export const getMangroveOrderRouterVersionDeployments = (
  filter?: DeploymentFilter,
): VersionDeployments | undefined => {
  return findDeployment(filter, _mangroveOrderRouterDeployments);
};

// This is a sorted array (newest to oldest), exported for tests
export const _mangroveOrderDeployments: VersionDeployments[] = [
  MangroveOrder_v1_0_0,
];

export const getMangroveOrderVersionDeployments = (
  filter?: DeploymentFilter,
): VersionDeployments | undefined => {
  return findDeployment(filter, _mangroveOrderDeployments);
};

// This is a temporary utility function to get deployments for all the contracts in one go
export const getStratsContractsVersionDeployments = (
  filter?: DeploymentFilter,
): VersionDeployments[] => {
  return [
    getAaveKandelSeederVersionDeployments(filter),
    getAavePooledRouterVersionDeployments(filter),
    getKandelLibVersionDeployments(filter),
    getKandelSeederVersionDeployments(filter),
    getMangroveOrderRouterVersionDeployments(filter),
    getMangroveOrderVersionDeployments(filter),
  ].filter((x): x is VersionDeployments => x !== undefined);
};
