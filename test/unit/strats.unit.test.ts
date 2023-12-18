import assert from "assert";
import { describe, it } from "mocha";

import AaveKandelSeeder_v1_0_0 from "../../src/assets/strats/v1.0.0/AaveKandelSeeder.json";
import AavePooledRouter_v1_0_0 from "../../src/assets/strats/v1.0.0/AavePooledRouter.json";
import KandelLib_v1_0_0 from "../../src/assets/strats/v1.0.0/KandelLib.json";
import KandelSeeder_v1_0_0 from "../../src/assets/strats/v1.0.0/KandelSeeder.json";
import MangroveOrderRouter_v1_0_0 from "../../src/assets/strats/v1.0.0/MangroveOrder-Router.json";
import MangroveOrder_v1_0_0 from "../../src/assets/strats/v1.0.0/MangroveOrder.json";

import {
  getAaveKandelSeederVersionDeployments,
  getAavePooledRouterVersionDeployments,
  getKandelLibVersionDeployments,
  getKandelSeederVersionDeployments,
  getMangroveOrderRouterVersionDeployments,
  getMangroveOrderVersionDeployments,
  getStratsContractsVersionDeployments,
} from "../../src/strats";

describe("strats.ts", () => {
  describe("getAaveKandelSeederVersionDeployments", () => {
    it("should find the latest deployment first", () => {
      const result = getAaveKandelSeederVersionDeployments({
        released: undefined,
      });
      assert.equal(result, AaveKandelSeeder_v1_0_0);
      // NB: Add older old versions here
      [].forEach((version) => {
        assert.notEqual(result, version);
      });
    });
  });

  describe("getAavePooledRouterVersionDeployments", () => {
    it("should find the latest deployment first", () => {
      const result = getAavePooledRouterVersionDeployments({
        released: undefined,
      });
      assert.equal(result, AavePooledRouter_v1_0_0);
      // NB: Add older old versions here
      [].forEach((version) => {
        assert.notEqual(result, version);
      });
    });
  });

  describe("getKandelLibVersionDeployments", () => {
    it("should find the latest deployment first", () => {
      const result = getKandelLibVersionDeployments({ released: undefined });
      assert.equal(result, KandelLib_v1_0_0);
      // NB: Add older old versions here
      [].forEach((version) => {
        assert.notEqual(result, version);
      });
    });
  });

  describe("getKandelSeederVersionDeployments", () => {
    it("should find the latest deployment first", () => {
      const result = getKandelSeederVersionDeployments({ released: undefined });
      assert.equal(result, KandelSeeder_v1_0_0);
      // NB: Add older old versions here
      [].forEach((version) => {
        assert.notEqual(result, version);
      });
    });
  });

  describe("getMangroveOrderRouterVersionDeployments", () => {
    it("should find the latest deployment first", () => {
      const result = getMangroveOrderRouterVersionDeployments({
        released: undefined,
      });
      assert.equal(result, MangroveOrderRouter_v1_0_0);
      // NB: Add older old versions here
      [].forEach((version) => {
        assert.notEqual(result, version);
      });
    });
  });

  describe("getMangroveOrderVersionDeployments", () => {
    it("should find the latest deployment first", () => {
      const result = getMangroveOrderVersionDeployments({
        released: undefined,
      });
      assert.equal(result, MangroveOrder_v1_0_0);
      // NB: Add older old versions here
      [].forEach((version) => {
        assert.notEqual(result, version);
      });
    });
  });

  describe("getStratsContractsVersionDeployments", () => {
    it("should find the latest deployments first", () => {
      const result = getStratsContractsVersionDeployments({
        released: undefined,
      });

      const expected = [
        AaveKandelSeeder_v1_0_0,
        AavePooledRouter_v1_0_0,
        KandelLib_v1_0_0,
        KandelSeeder_v1_0_0,
        MangroveOrderRouter_v1_0_0,
        MangroveOrder_v1_0_0,
      ];

      assert.deepEqual(result, expected);
    });
  });
});
