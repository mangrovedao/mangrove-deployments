import assert from "assert";
import { describe, it } from "mocha";
import { expect } from "chai";

import Mangrove_v2_0_1 from "../../src/assets/core/v2.0.1/Mangrove.json";
import MgvReader_v2_0_1 from "../../src/assets/core/v2.0.1/MgvReader.json";
import MgvOracle_v2_0_1 from "../../src/assets/core/v2.0.1/MgvOracle.json";

import {
  getMangroveVersionDeployments,
  getMgvReaderVersionDeployments,
  getMgvOracleVersionDeployments,
  getAllMangroveVersionDeploymentsPerNetwork,
  getLatestMangrovePerNetwork,
  getAllMgvReaderVersionDeploymentsPerNetwork,
  getLatestMgvReaderPerNetwork,
  getAllMgvOracleVersionDeploymentsPerNetwork,
  getLatestMgvOraclePerNetwork,
  getLatestCoreContractsPerNetwork,
} from "../../src/core";
import { firstVersionDeploymentsToVersionNetworkDeployment } from "./unitTestUtil";

describe("core.ts", () => {
  describe("Mangrove contract", () => {
    describe("getMangroveVersionDeployments", () => {
      it("should find the latest deployment first", () => {
        const result = getMangroveVersionDeployments({ released: undefined });
        assert.equal(result, Mangrove_v2_0_1);
        // NB: Add older old versions here
        [].forEach((version) => {
          assert.notEqual(result, version);
        });
      });
    });

    describe("getAllMangroveVersionDeploymentsPerNetwork", () => {
      it("should return all deployments grouped by network", () => {
        expect(
          getAllMangroveVersionDeploymentsPerNetwork({ released: undefined }),
        ).to.deep.equal({
          "80001": [Mangrove_v2_0_1],
          "11155111": [Mangrove_v2_0_1],
        });
      });
    });

    describe("getLatestMangrovePerNetwork", () => {
      it("should return the latest deployment for each network", () => {
        expect(
          getLatestMangrovePerNetwork({ released: undefined }),
        ).to.deep.equal({
          "80001": firstVersionDeploymentsToVersionNetworkDeployment(
            Mangrove_v2_0_1,
            "80001",
          ),
          "11155111": firstVersionDeploymentsToVersionNetworkDeployment(
            Mangrove_v2_0_1,
            "11155111",
          ),
        });
      });
    });
  });

  describe("MgvReader contract", () => {
    describe("getMgvReaderVersionDeployments", () => {
      it("should find the latest deployment first", () => {
        const result = getMgvReaderVersionDeployments({ released: undefined });
        assert.equal(result, MgvReader_v2_0_1);
        // NB: Add older old versions here
        [].forEach((version) => {
          assert.notEqual(result, version);
        });
      });
    });

    describe("getAllMgvReaderVersionDeploymentsPerNetwork", () => {
      it("should return all deployments grouped by network", () => {
        expect(
          getAllMgvReaderVersionDeploymentsPerNetwork({ released: undefined }),
        ).to.deep.equal({
          "80001": [MgvReader_v2_0_1],
          "11155111": [MgvReader_v2_0_1],
        });
      });
    });

    describe("getLatestMgvReaderPerNetwork", () => {
      it("should return the latest deployment for each network", () => {
        expect(
          getLatestMgvReaderPerNetwork({ released: undefined }),
        ).to.deep.equal({
          "80001": firstVersionDeploymentsToVersionNetworkDeployment(
            MgvReader_v2_0_1,
            "80001",
          ),
          "11155111": firstVersionDeploymentsToVersionNetworkDeployment(
            MgvReader_v2_0_1,
            "11155111",
          ),
        });
      });
    });
  });

  describe("MgvOracle contract", () => {
    describe("getMgvOracleVersionDeployments", () => {
      it("should find the latest deployment first", () => {
        const result = getMgvOracleVersionDeployments({ released: undefined });
        assert.equal(result, MgvOracle_v2_0_1);
        // NB: Add older old versions here
        [].forEach((version) => {
          assert.notEqual(result, version);
        });
      });
    });

    describe("getAllMgvOracleVersionDeploymentsPerNetwork", () => {
      it("should return all deployments grouped by network", () => {
        expect(
          getAllMgvOracleVersionDeploymentsPerNetwork({ released: undefined }),
        ).to.deep.equal({
          "80001": [MgvOracle_v2_0_1],
          "11155111": [MgvOracle_v2_0_1],
        });
      });
    });

    describe("getLatestMgvOraclePerNetwork", () => {
      it("should return the latest deployment for each network", () => {
        expect(
          getLatestMgvOraclePerNetwork({ released: undefined }),
        ).to.deep.equal({
          "80001": firstVersionDeploymentsToVersionNetworkDeployment(
            MgvOracle_v2_0_1,
            "80001",
          ),
          "11155111": firstVersionDeploymentsToVersionNetworkDeployment(
            MgvOracle_v2_0_1,
            "11155111",
          ),
        });
      });
    });
  });

  describe("getLatestCoreContractsPerNetwork", () => {
    it("should return the latest deployments for each network", () => {
      expect(
        getLatestCoreContractsPerNetwork({ released: undefined }),
      ).to.deep.equal({
        "80001": {
          mangrove: firstVersionDeploymentsToVersionNetworkDeployment(
            Mangrove_v2_0_1,
            "80001",
          ),
          mgvOracle: firstVersionDeploymentsToVersionNetworkDeployment(
            MgvOracle_v2_0_1,
            "80001",
          ),
          mgvReader: firstVersionDeploymentsToVersionNetworkDeployment(
            MgvReader_v2_0_1,
            "80001",
          ),
        },
        "11155111": {
          mangrove: firstVersionDeploymentsToVersionNetworkDeployment(
            Mangrove_v2_0_1,
            "11155111",
          ),
          mgvOracle: firstVersionDeploymentsToVersionNetworkDeployment(
            MgvOracle_v2_0_1,
            "11155111",
          ),
          mgvReader: firstVersionDeploymentsToVersionNetworkDeployment(
            MgvReader_v2_0_1,
            "11155111",
          ),
        },
      });
    });
  });
});
