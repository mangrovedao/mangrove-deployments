import Mangrove_v2_0_1 from "./assets/core/v2.0.1/Mangrove.json";
import MgvOracle_v2_0_1 from "./assets/core/v2.0.1/MgvOracle.json";
import MgvReader_v2_0_1 from "./assets/core/v2.0.1/MgvReader.json";
import Mangrove_v2_0_2 from "./assets/core/v2.0.2/Mangrove.json";
import MgvOracle_v2_0_2 from "./assets/core/v2.0.2/MgvOracle.json";
import MgvReader_v2_0_2 from "./assets/core/v2.0.2/MgvReader.json";
import { DeploymentFilter, VersionDeployments } from "./types";
import { findDeployment } from "./utils";

// This is a sorted array (newest to oldest), exported for tests
export const _mangroveDeployments: VersionDeployments[] = [
  Mangrove_v2_0_2,
  Mangrove_v2_0_1,
];

export const getMangroveVersionDeployments = (
  filter?: DeploymentFilter,
): VersionDeployments | undefined => {
  return findDeployment(filter, _mangroveDeployments);
};

// This is a sorted array (newest to oldest), exported for tests
export const _mgvOracleDeployments: VersionDeployments[] = [
  MgvOracle_v2_0_2,
  MgvOracle_v2_0_1,
];

export const getMgvOracleVersionDeployments = (
  filter?: DeploymentFilter,
): VersionDeployments | undefined => {
  return findDeployment(filter, _mgvOracleDeployments);
};

// This is a sorted array (newest to oldest), exported for tests
export const _mgvReaderDeployments: VersionDeployments[] = [
  MgvReader_v2_0_2,
  MgvReader_v2_0_1,
];

export const getMgvReaderVersionDeployments = (
  filter?: DeploymentFilter,
): VersionDeployments | undefined => {
  return findDeployment(filter, _mgvReaderDeployments);
};

// This is a temporary utility function to get deployments for all the contracts in one go
export const getCoreContractsVersionDeployments = (
  filter?: DeploymentFilter,
): VersionDeployments[] => {
  return [
    getMangroveVersionDeployments(filter),
    getMgvOracleVersionDeployments(filter),
    getMgvReaderVersionDeployments(filter),
  ].filter((x): x is VersionDeployments => x !== undefined);
};
