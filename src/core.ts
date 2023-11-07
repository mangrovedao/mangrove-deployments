import Mangrove_v2_0_0_3 from "./assets/core/v2.0.0-3/Mangrove.json";
import MgvOracle_v2_0_0_3 from "./assets/core/v2.0.0-3/MgvOracle.json";
import MgvReader_v2_0_0_3 from "./assets/core/v2.0.0-3/MgvReader.json";
import { DeploymentFilter, VersionDeployments } from "./types";
import { findDeployment } from "./utils";

// This is a sorted array (newest to oldest), exported for tests
export const _mangroveDeployments: VersionDeployments[] = [Mangrove_v2_0_0_3];

export const getMangroveVersionDeployments = (
  filter?: DeploymentFilter,
): VersionDeployments | undefined => {
  return findDeployment(filter, _mangroveDeployments);
};

// This is a sorted array (newest to oldest), exported for tests
export const _mgvOracleDeployments: VersionDeployments[] = [MgvOracle_v2_0_0_3];

export const getMgvOracleVersionDeployments = (
  filter?: DeploymentFilter,
): VersionDeployments | undefined => {
  return findDeployment(filter, _mgvOracleDeployments);
};

// This is a sorted array (newest to oldest), exported for tests
export const _mgvReaderDeployments: VersionDeployments[] = [MgvReader_v2_0_0_3];

export const getMgvReaderVersionDeployments = (
  filter?: DeploymentFilter,
): VersionDeployments | undefined => {
  return findDeployment(filter, _mgvReaderDeployments);
};
