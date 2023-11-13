import assert from "assert";
import { describe, it } from "mocha";

import PxMATIC_v1_3_0 from "../../src/assets/testErc20s/v1.3.0/PxMATIC.json";
import PxUSDC_v1_3_0 from "../../src/assets/testErc20s/v1.3.0/PxUSDC.json";
import USDT_v1_5_3 from "../../src/assets/testErc20s/v1.5.3/USDT.json";
import WBTC_v1_5_3 from "../../src/assets/testErc20s/v1.5.3/WBTC.json";
import WMATIC_v1_5_3 from "../../src/assets/testErc20s/v1.5.3/WMATIC.json";
import DAI_v1_5_6 from "../../src/assets/testErc20s/v1.5.6/DAI.json";
import USDC_v1_5_6 from "../../src/assets/testErc20s/v1.5.6/USDC.json";
import WETH_v1_5_6 from "../../src/assets/testErc20s/v1.5.6/WETH.json";

import {
  getTestErc20VersionDeployments,
  getAllTestErc20VersionDeployments,
  _testErc20Deployments,
} from "../../src/testErc20s";

describe("testErc20s.ts", () => {
  describe("getTestErc20VersionDeployments", () => {
    it("should find the latest deployment first", () => {
      const result = getTestErc20VersionDeployments();
      assert.equal(result, DAI_v1_5_6);
      [
        PxMATIC_v1_3_0,
        PxUSDC_v1_3_0,
        USDT_v1_5_3,
        WBTC_v1_5_3,
        WMATIC_v1_5_3,
        USDC_v1_5_6,
        WETH_v1_5_6,
      ].forEach((version) => {
        assert.notEqual(result, version);
      });
    });

    it("should filter on deployment name", () => {
      const result = getTestErc20VersionDeployments({
        deploymentName: "WBTC",
      });
      assert.equal(result, WBTC_v1_5_3);
      [
        PxMATIC_v1_3_0,
        PxUSDC_v1_3_0,
        USDT_v1_5_3,
        WMATIC_v1_5_3,
        DAI_v1_5_6,
        USDC_v1_5_6,
        WETH_v1_5_6,
      ].forEach((version) => {
        assert.notEqual(result, version);
      });
    });
  });

  describe("getAllTestErc20VersionDeployments", () => {
    it("should find latest deployment of all tokens", () => {
      const result = getAllTestErc20VersionDeployments();
      assert.deepEqual(result, _testErc20Deployments);
    });
  });
});
