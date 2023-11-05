import AaveKandelSeeder_v0_0_2_3 from './assets/strats/v0.0.2-3/AaveKandelSeeder.json';
import AavePooledRouter_v0_0_2_3 from './assets/strats/v0.0.2-3/AavePooledRouter.json';
import KandelSeeder_v0_0_2_3 from './assets/strats/v0.0.2-3/KandelSeeder.json';
import MangroveOrderRouter_v0_0_2_3 from './assets/strats/v0.0.2-3/MangroveOrder-Router.json';
import MangroveOrder_v0_0_2_3 from './assets/strats/v0.0.2-3/MangroveOrder.json';
import { DeploymentFilter, VersionDeployments } from './types';
import { findDeployment } from './utils';

// This is a sorted array (newest to oldest), exported for tests
export const _aaveKandelSeederDeployments: VersionDeployments[] = [
  AaveKandelSeeder_v0_0_2_3
]

export const getAaveKandelSeederVersionDeployments = (filter?: DeploymentFilter): VersionDeployments | undefined => {
  return findDeployment(filter, _aaveKandelSeederDeployments)
}

// This is a sorted array (newest to oldest), exported for tests
export const _aavePooledRouterDeployments: VersionDeployments[] = [
  AavePooledRouter_v0_0_2_3
]

export const getAavePooledRouterVersionDeployments = (filter?: DeploymentFilter): VersionDeployments | undefined => {
  return findDeployment(filter, _aavePooledRouterDeployments)
}

// This is a sorted array (newest to oldest), exported for tests
export const _kandelSeederDeployments: VersionDeployments[] = [
  KandelSeeder_v0_0_2_3
]

export const getKandelSeederVersionDeployments = (filter?: DeploymentFilter): VersionDeployments | undefined => {
  return findDeployment(filter, _kandelSeederDeployments)
}

// This is a sorted array (newest to oldest), exported for tests
export const _mangroveOrderRouterDeployments: VersionDeployments[] = [
  MangroveOrderRouter_v0_0_2_3
]

export const getMangroveOrderRouterVersionDeployments = (filter?: DeploymentFilter): VersionDeployments | undefined => {
  return findDeployment(filter, _mangroveOrderRouterDeployments)
}

// This is a sorted array (newest to oldest), exported for tests
export const _mangroveOrderDeployments: VersionDeployments[] = [
  MangroveOrder_v0_0_2_3
]

export const getMangroveOrderVersionDeployments = (filter?: DeploymentFilter): VersionDeployments | undefined => {
  return findDeployment(filter, _mangroveOrderDeployments)
}
