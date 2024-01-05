import assert from "assert";
import { describe, it } from "mocha";

import Mangrove_v2_0_1 from "../../src/assets/core/v2.0.1/Mangrove.json";
import MgvReader_v2_0_1 from "../../src/assets/core/v2.0.1/MgvReader.json";
import MgvOracle_v2_0_1 from "../../src/assets/core/v2.0.1/MgvOracle.json";
import Mangrove_v2_0_2 from "../../src/assets/core/v2.0.2/Mangrove.json";
import MgvReader_v2_0_2 from "../../src/assets/core/v2.0.2/MgvReader.json";
import MgvOracle_v2_0_2 from "../../src/assets/core/v2.0.2/MgvOracle.json";

import {
  getMangroveVersionDeployments,
  getMgvReaderVersionDeployments,
  getMgvOracleVersionDeployments,
} from "../../src/core";

describe("core.ts", () => {
  describe("getMangroveVersionDeployments", () => {
    it("should find the latest deployment first", () => {
      const result = getMangroveVersionDeployments({ released: undefined });
      assert.equal(result, Mangrove_v2_0_2);
      // NB: Add older old versions here
      [Mangrove_v2_0_1].forEach((version) => {
        assert.notEqual(result, version);
      });
    });
  });

  describe("getMgvReaderVersionDeployments", () => {
    it("should find the latest deployment first", () => {
      const result = getMgvReaderVersionDeployments({ released: undefined });
      assert.equal(result, MgvReader_v2_0_2);
      // NB: Add older old versions here
      [MgvReader_v2_0_1].forEach((version) => {
        assert.notEqual(result, version);
      });
    });
  });

  describe("getMgvOracleVersionDeployments", () => {
    it("should find the latest deployment first", () => {
      const result = getMgvOracleVersionDeployments({ released: undefined });
      assert.equal(result, MgvOracle_v2_0_2);
      // NB: Add older old versions here
      [MgvOracle_v2_0_1].forEach((version) => {
        assert.notEqual(result, version);
      });
    });
  });
});
