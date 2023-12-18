import PxMATIC_v1_3_0 from "./assets/testErc20s/v1.3.0/PxMATIC.json";
import PxUSDC_v1_3_0 from "./assets/testErc20s/v1.3.0/PxUSDC.json";
import USDT_v1_5_3 from "./assets/testErc20s/v1.5.3/USDT.json";
import WBTC_v1_5_3 from "./assets/testErc20s/v1.5.3/WBTC.json";
import WMATIC_v1_5_3 from "./assets/testErc20s/v1.5.3/WMATIC.json";
import DAI_v1_5_6 from "./assets/testErc20s/v1.5.6/DAI.json";
import USDC_v1_5_6 from "./assets/testErc20s/v1.5.6/USDC.json";
import WETH_v1_5_6 from "./assets/testErc20s/v1.5.6/WETH.json";

import { DeploymentFilter, VersionDeployments } from "./types";
import { findDeployment, findAllDeployments } from "./utils";

// This is a sorted array (newest to oldest) or all test ERC20 deployments
export const _testErc20Deployments: VersionDeployments[] = [
  DAI_v1_5_6,
  USDC_v1_5_6,
  WETH_v1_5_6,
  USDT_v1_5_3,
  WBTC_v1_5_3,
  WMATIC_v1_5_3,
  PxMATIC_v1_3_0,
  PxUSDC_v1_3_0,
];

export const getTestErc20VersionDeployments = (
  filter?: DeploymentFilter,
): VersionDeployments | undefined => {
  return findDeployment(filter, _testErc20Deployments);
};

export const getAllTestErc20VersionDeployments = (
  filter?: DeploymentFilter,
): VersionDeployments[] => {
  return findAllDeployments(filter, _testErc20Deployments);
};
