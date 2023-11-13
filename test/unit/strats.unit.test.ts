import assert from "assert";
import { describe, it } from "mocha";

import AaveKandelSeeder_v0_0_2_3 from "../../src/assets/strats/v0.0.2-3/AaveKandelSeeder.json";
import AavePooledRouter_v0_0_2_3 from "../../src/assets/strats/v0.0.2-3/AavePooledRouter.json";
import KandelSeeder_v0_0_2_3 from "../../src/assets/strats/v0.0.2-3/KandelSeeder.json";
import MangroveOrderRouter_v0_0_2_3 from "../../src/assets/strats/v0.0.2-3/MangroveOrder-Router.json";
import MangroveOrder_v0_0_2_3 from "../../src/assets/strats/v0.0.2-3/MangroveOrder.json";

import {
  getAaveKandelSeederVersionDeployments,
  getAavePooledRouterVersionDeployments,
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
      assert.equal(result, AaveKandelSeeder_v0_0_2_3);
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
      assert.equal(result, AavePooledRouter_v0_0_2_3);
      // NB: Add older old versions here
      [].forEach((version) => {
        assert.notEqual(result, version);
      });
    });
  });

  describe("getKandelSeederVersionDeployments", () => {
    it("should find the latest deployment first", () => {
      const result = getKandelSeederVersionDeployments({ released: undefined });
      assert.equal(result, KandelSeeder_v0_0_2_3);
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
      assert.equal(result, MangroveOrderRouter_v0_0_2_3);
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
      assert.equal(result, MangroveOrder_v0_0_2_3);
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
        AaveKandelSeeder_v0_0_2_3,
        AavePooledRouter_v0_0_2_3,
        KandelSeeder_v0_0_2_3,
        MangroveOrderRouter_v0_0_2_3,
        MangroveOrder_v0_0_2_3,
      ];

      assert.deepEqual(result, expected);
    });
  });
});
