import assert from "assert";
import { describe, it } from "mocha";

import Mangrove_v2_0_1 from "../../src/assets/core/v2.0.1/Mangrove.json";
import BlastMangrove_v2_1_0_0 from "../../src/assets/core/v2.1.0-0/BlastMangrove.json";
// v1.0.0
import AaveKandelSeeder_v1_0_0 from "../../src/assets/strats/v1.0.0/AaveKandelSeeder.json";
import AavePooledRouter_v1_0_0 from "../../src/assets/strats/v1.0.0/AavePooledRouter.json";
import KandelLib_v1_0_0 from "../../src/assets/strats/v1.0.0/KandelLib.json";
import KandelSeeder_v1_0_0 from "../../src/assets/strats/v1.0.0/KandelSeeder.json";
import MangroveOrderRouter_v1_0_0 from "../../src/assets/strats/v1.0.0/MangroveOrder-Router.json";
import MangroveOrder_v1_0_0 from "../../src/assets/strats/v1.0.0/MangroveOrder.json";
// v2.0.0-b1.0
import AaveKandelSeeder_v2_0_0_b1_0 from "../../src/assets/strats/v2.0.0-b1.0/AaveKandelSeeder.json";
import AavePooledRouter_v2_0_0_b1_0 from "../../src/assets/strats/v2.0.0-b1.0/AavePooledRouter.json";
import KandelLib_v2_0_0_b1_0 from "../../src/assets/strats/v2.0.0-b1.0/KandelLib.json";
import KandelSeeder_v2_0_0_b1_0 from "../../src/assets/strats/v2.0.0-b1.0/KandelSeeder.json";
import MangroveOrderRouter_v2_0_0_b1_0 from "../../src/assets/strats/v2.0.0-b1.0/MangroveOrder-Router.json";
import MangroveOrder_v2_0_0_b1_0 from "../../src/assets/strats/v2.0.0-b1.0/MangroveOrder.json";
import RouterProxyFactory_v2_0_0_b1_0 from "../../src/assets/strats/v2.0.0-b1.0/RouterProxyFactory.json";
import SimpleAaveLogic_v2_0_0_b1_0 from "../../src/assets/strats/v2.0.0-b1.0/SimpleAaveLogic.json";
import MangroveAmplifier_v2_0_0_b1_0 from "../../src/assets/strats/v2.0.0-b1.0/MangroveAmplifier.json";
// v2.0.1-0
import AaveKandelSeeder_v2_0_1_0 from "../../src/assets/strats/v2.0.1-0/AaveKandelSeeder.json";
import AavePooledRouter_v2_0_1_0 from "../../src/assets/strats/v2.0.1-0/AavePooledRouter.json";
import KandelLib_v2_0_1_0 from "../../src/assets/strats/v2.0.1-0/KandelLib.json";
import KandelSeeder_v2_0_1_0 from "../../src/assets/strats/v2.0.1-0/KandelSeeder.json";
import MangroveAmplifier_v2_0_1_0 from "../../src/assets/strats/v2.0.1-0/MangroveAmplifier.json";
import MangroveOrderRouter_v2_0_1_0 from "../../src/assets/strats/v2.0.1-0/MangroveOrder-Router.json";
import MangroveOrder_v2_0_1_0 from "../../src/assets/strats/v2.0.1-0/MangroveOrder.json";
import RouterProxyFactory_v2_0_1_0 from "../../src/assets/strats/v2.0.1-0/RouterProxyFactory.json";
import SimpleAaveLogic_v2_0_1_0 from "../../src/assets/strats/v2.0.1-0/SimpleAaveLogic.json";
// v2.1.0-0
import BlastMangroveAmplifier_v2_1_0_0 from "../../src/assets/strats/v2.1.0-0/BlastMangroveAmplifier.json";
import BlastMangroveOrderRouter_v2_1_0_0 from "../../src/assets/strats/v2.1.0-0/BlastMangroveOrder-Router.json";
import BlastMangroveOrder_v2_1_0_0 from "../../src/assets/strats/v2.1.0-0/BlastMangroveOrder.json";
import BlastRouterProxyFactory_v2_1_0_0 from "../../src/assets/strats/v2.1.0-0/BlastRouterProxyFactory.json";
// v2.1.0-1
import OrbitLogic_v2_1_0_1 from "../../src/assets/strats/v2.1.0-1/OrbitLogic.json";
// v2.1.0
import BlastMangrove_v2_1_0 from "../../src/assets/core/v2.1.0/BlastMangrove.json";
import BlastMangroveAmplifier_v2_1_0 from "../../src/assets/strats/v2.1.0/BlastMangroveAmplifier.json";
import BlastMangroveOrderRouter_v2_1_0 from "../../src/assets/strats/v2.1.0/BlastMangroveOrder-Router.json";
import BlastMangroveOrder_v2_1_0 from "../../src/assets/strats/v2.1.0/BlastMangroveOrder.json";
import BlastRouterProxyFactory_v2_1_0 from "../../src/assets/strats/v2.1.0/BlastRouterProxyFactory.json";
import BlastKandelSeeder_v2_1_0 from "../../src/assets/strats/v2.1.0/BlastKandelSeeder.json";
import BlastKandelLib_v2_1_0 from "../../src/assets/strats/v2.1.0/BlastKandelLib.json";
import ZeroLendLogic_v2_1_0 from "../../src//assets/strats/v2.1.0/ZeroLendLogic.json";

import {
  getAaveKandelSeederVersionDeployments,
  getAavePooledRouterVersionDeployments,
  getAllAaveKandelSeederVersionDeploymentsPerNetwork,
  getAllAavePooledRouterVersionDeploymentsPerNetwork,
  getAllKandelLibVersionDeploymentsPerNetwork,
  getAllKandelSeederVersionDeploymentsPerNetwork,
  getAllMangroveOrderRouterVersionDeploymentsPerNetwork,
  getAllMangroveOrderVersionDeploymentsPerNetwork,
  getAllRouterProxyFactoryVersionDeploymentsPerNetwork,
  getAllSimpleAaveLogicVersionDeploymentsPerNetwork,
  getAllMangroveAmplifierVersionDeploymentsPerNetwork,
  getKandelLibVersionDeployments,
  getKandelSeederVersionDeployments,
  getLatestAaveKandelSeederPerNetwork,
  getLatestAavePooledRouterPerNetwork,
  getLatestKandelLibPerNetwork,
  getLatestKandelSeederPerNetwork,
  getLatestMangroveOrderPerNetwork,
  getLatestMangroveOrderRouterPerNetwork,
  getLatestRouterProxyFactoryPerNetwork,
  getLatestSimpleAaveLogicPerNetwork,
  getLatestStratContractsPerNetwork,
  getLatestMangroveAmplifierPerNetwork,
  getMangroveOrderRouterVersionDeployments,
  getMangroveOrderVersionDeployments,
  getRouterProxyFactoryVersionDeployments,
  getSimpleAaveLogicVersionDeployments,
  getMangroveAmplifierVersionDeployments,
  getAllOrbitLogicVersionDeploymentsPerNetwork,
  getOrbitLogicVersionDeployments,
  getLatestOrbitLogicPerNetwork,
  getAllZeroLendLogicVersionDeploymentsPerNetwork,
  getLatestZeroLendLogicPerNetwork,
  getZeroLendLogicVersionDeployments,
} from "../../src/strats";
import { expect } from "chai";
import { firstVersionDeploymentsToVersionNetworkDeployment } from "./unitTestUtil";

describe("strats.ts", () => {
  describe("AaveKandelSeeder contract", () => {
    describe("getAaveKandelSeederVersionDeployments", () => {
      it("should find the latest deployment first", () => {
        const result = getAaveKandelSeederVersionDeployments({
          released: undefined,
        });
        assert.equal(result, AaveKandelSeeder_v2_0_1_0);
        // NB: Add older old versions here
        [AaveKandelSeeder_v2_0_0_b1_0, AaveKandelSeeder_v1_0_0].forEach(
          (version) => {
            assert.notEqual(result, version);
          },
        );
      });
    });

    describe("getAllAaveKandelSeederVersionDeploymentsPerNetwork", () => {
      it("should return all deployments grouped by network", () => {
        expect(
          getAllAaveKandelSeederVersionDeploymentsPerNetwork({
            released: undefined,
          }),
        ).to.deep.equal({
          "80001": [
            AaveKandelSeeder_v2_0_1_0,
            AaveKandelSeeder_v2_0_0_b1_0,
            AaveKandelSeeder_v1_0_0,
          ],
        });
      });
    });

    describe("getLatestAaveKandelSeederPerNetwork", () => {
      it("should return the latest deployment for each network", () => {
        expect(
          getLatestAaveKandelSeederPerNetwork({ released: undefined }),
        ).to.deep.equal({
          "80001": firstVersionDeploymentsToVersionNetworkDeployment(
            AaveKandelSeeder_v2_0_1_0,
            "80001",
          ),
        });
      });
    });
  });

  describe("AavePooledRouter contract", () => {
    describe("getAavePooledRouterVersionDeployments", () => {
      it("should find the latest deployment first", () => {
        const result = getAavePooledRouterVersionDeployments({
          released: undefined,
        });
        assert.equal(result, AavePooledRouter_v2_0_1_0);
        // NB: Add older old versions here
        [AavePooledRouter_v2_0_0_b1_0, AavePooledRouter_v1_0_0].forEach(
          (version) => {
            assert.notEqual(result, version);
          },
        );
      });
    });

    describe("getAllAavePooledRouterVersionDeploymentsPerNetwork", () => {
      it("should return all deployments grouped by network", () => {
        expect(
          getAllAavePooledRouterVersionDeploymentsPerNetwork({
            released: undefined,
          }),
        ).to.deep.equal({
          "80001": [
            AavePooledRouter_v2_0_1_0,
            AavePooledRouter_v2_0_0_b1_0,
            AavePooledRouter_v1_0_0,
          ],
        });
      });
    });

    describe("getLatestAavePooledRouterPerNetwork", () => {
      it("should return the latest deployment for each network", () => {
        expect(
          getLatestAavePooledRouterPerNetwork({ released: undefined }),
        ).to.deep.equal({
          "80001": firstVersionDeploymentsToVersionNetworkDeployment(
            AavePooledRouter_v2_0_1_0,
            "80001",
          ),
        });
      });
    });
  });

  describe("KandelLib contract", () => {
    describe("getKandelLibVersionDeployments", () => {
      it("should find the latest deployment first", () => {
        const result = getKandelLibVersionDeployments({ released: undefined });
        assert.equal(result, BlastKandelLib_v2_1_0);
        // NB: Add older old versions here
        [KandelLib_v2_0_1_0, KandelLib_v2_0_0_b1_0, KandelLib_v1_0_0].forEach(
          (version) => {
            assert.notEqual(result, version);
          },
        );
      });
    });

    describe("getAllKandelLibVersionDeploymentsPerNetwork", () => {
      it("should return all deployments grouped by network", () => {
        expect(
          getAllKandelLibVersionDeploymentsPerNetwork({ released: undefined }),
        ).to.deep.equal({
          "80001": [
            KandelLib_v2_0_1_0,
            KandelLib_v2_0_0_b1_0,
            KandelLib_v1_0_0,
          ],
          "81457": [BlastKandelLib_v2_1_0],
          "168587773": [KandelLib_v2_0_1_0],
        });
      });
    });

    describe("getLatestKandelLibPerNetwork", () => {
      it("should return the latest deployment for each network", () => {
        expect(
          getLatestKandelLibPerNetwork({ released: undefined }),
        ).to.deep.equal({
          "80001": firstVersionDeploymentsToVersionNetworkDeployment(
            KandelLib_v2_0_1_0,
            "80001",
          ),
          "81457": firstVersionDeploymentsToVersionNetworkDeployment(
            BlastKandelLib_v2_1_0,
            "81457",
          ),
          "168587773": firstVersionDeploymentsToVersionNetworkDeployment(
            KandelLib_v2_0_1_0,
            "168587773",
          ),
        });
      });
    });
  });

  describe("KandelSeeder contract", () => {
    describe("getKandelSeederVersionDeployments", () => {
      it("should find the latest deployment first", () => {
        const result = getKandelSeederVersionDeployments({
          released: undefined,
        });
        assert.equal(result, BlastKandelSeeder_v2_1_0);
        // NB: Add older old versions here
        [
          KandelSeeder_v2_0_1_0,
          KandelSeeder_v2_0_0_b1_0,
          KandelSeeder_v1_0_0,
        ].forEach((version) => {
          assert.notEqual(result, version);
        });
      });
    });

    describe("getAllKandelSeederVersionDeploymentsPerNetwork", () => {
      it("should return all deployments grouped by network", () => {
        expect(
          getAllKandelSeederVersionDeploymentsPerNetwork({
            released: undefined,
          }),
        ).to.deep.equal({
          "80001": [
            KandelSeeder_v2_0_1_0,
            KandelSeeder_v2_0_0_b1_0,
            KandelSeeder_v1_0_0,
          ],
          "81457": [BlastKandelSeeder_v2_1_0],
          "168587773": [KandelSeeder_v2_0_1_0],
        });
      });
    });

    describe("getLatestKandelSeederPerNetwork", () => {
      it("should return the latest deployment for each network", () => {
        expect(
          getLatestKandelSeederPerNetwork({ released: undefined }),
        ).to.deep.equal({
          "80001": firstVersionDeploymentsToVersionNetworkDeployment(
            KandelSeeder_v2_0_1_0,
            "80001",
          ),
          "81457": firstVersionDeploymentsToVersionNetworkDeployment(
            BlastKandelSeeder_v2_1_0,
            "81457",
          ),
          "168587773": firstVersionDeploymentsToVersionNetworkDeployment(
            KandelSeeder_v2_0_1_0,
            "168587773",
          ),
        });
      });
    });
  });

  describe("MangroveOrderRouter contract", () => {
    describe("getMangroveOrderRouterVersionDeployments", () => {
      it("should find the latest deployment first", () => {
        const result = getMangroveOrderRouterVersionDeployments({
          released: undefined,
        });
        assert.equal(result, BlastMangroveOrderRouter_v2_1_0);
        // NB: Add older old versions here
        [
          BlastMangroveOrderRouter_v2_1_0_0,
          MangroveOrderRouter_v2_0_1_0,
          MangroveOrderRouter_v2_0_0_b1_0,
          MangroveOrderRouter_v1_0_0,
        ].forEach((version) => {
          assert.notEqual(result, version);
        });
      });
    });

    describe("getAllMangroveOrderRouterVersionDeploymentsPerNetwork", () => {
      it("should return all deployments grouped by network", () => {
        expect(
          getAllMangroveOrderRouterVersionDeploymentsPerNetwork({
            released: undefined,
          }),
        ).to.deep.equal({
          "80001": [
            MangroveOrderRouter_v2_0_1_0,
            MangroveOrderRouter_v2_0_0_b1_0,
            MangroveOrderRouter_v1_0_0,
          ],
          "81457": [BlastMangroveOrderRouter_v2_1_0],
          "168587773": [BlastMangroveOrderRouter_v2_1_0_0],
        });
      });
    });

    describe("getLatestMangroveOrderRouterPerNetwork", () => {
      it("should return the latest deployment for each network", () => {
        expect(
          getLatestMangroveOrderRouterPerNetwork({ released: undefined }),
        ).to.deep.equal({
          "80001": firstVersionDeploymentsToVersionNetworkDeployment(
            MangroveOrderRouter_v2_0_1_0,
            "80001",
          ),
          "81457": firstVersionDeploymentsToVersionNetworkDeployment(
            BlastMangroveOrderRouter_v2_1_0,
            "81457",
          ),
          "168587773": firstVersionDeploymentsToVersionNetworkDeployment(
            BlastMangroveOrderRouter_v2_1_0_0,
            "168587773",
          ),
        });
      });
    });
  });

  describe("MangroveOrder contract", () => {
    describe("getMangroveOrderVersionDeployments", () => {
      it("should find the latest deployment first", () => {
        const result = getMangroveOrderVersionDeployments({
          released: undefined,
        });
        assert.equal(result, BlastMangroveOrder_v2_1_0);
        // NB: Add older old versions here
        [
          BlastMangroveOrder_v2_1_0_0,
          MangroveOrder_v2_0_1_0,
          MangroveOrder_v2_0_0_b1_0,
          MangroveOrder_v1_0_0,
        ].forEach((version) => {
          assert.notEqual(result, version);
        });
      });
    });

    describe("getAllMangroveOrderVersionDeploymentsPerNetwork", () => {
      it("should return all deployments grouped by network", () => {
        expect(
          getAllMangroveOrderVersionDeploymentsPerNetwork({
            released: undefined,
          }),
        ).to.deep.equal({
          "80001": [
            MangroveOrder_v2_0_1_0,
            MangroveOrder_v2_0_0_b1_0,
            MangroveOrder_v1_0_0,
          ],
          "81457": [BlastMangroveOrder_v2_1_0],
          "168587773": [BlastMangroveOrder_v2_1_0_0],
        });
      });
    });

    describe("getLatestMangroveOrderPerNetwork", () => {
      it("should return the latest deployment for each network", () => {
        expect(
          getLatestMangroveOrderPerNetwork({ released: undefined }),
        ).to.deep.equal({
          "80001": firstVersionDeploymentsToVersionNetworkDeployment(
            MangroveOrder_v2_0_1_0,
            "80001",
          ),
          "81457": firstVersionDeploymentsToVersionNetworkDeployment(
            BlastMangroveOrder_v2_1_0,
            "81457",
          ),
          "168587773": firstVersionDeploymentsToVersionNetworkDeployment(
            BlastMangroveOrder_v2_1_0_0,
            "168587773",
          ),
        });
      });
    });
  });

  describe("RouterProxyFactory contract", () => {
    describe("getRouterProxyFactoryVersionDeployments", () => {
      it("should find the latest deployment first", () => {
        const result = getRouterProxyFactoryVersionDeployments({
          released: undefined,
        });
        assert.equal(result, BlastRouterProxyFactory_v2_1_0);
        // NB: Add older old versions here
        [
          BlastRouterProxyFactory_v2_1_0_0,
          RouterProxyFactory_v2_0_1_0,
          RouterProxyFactory_v2_0_0_b1_0,
        ].forEach((version) => {
          assert.notEqual(result, version);
        });
      });
    });

    describe("getAllRouterProxyFactoryVersionDeploymentsPerNetwork", () => {
      it("should return all deployments grouped by network", () => {
        expect(
          getAllRouterProxyFactoryVersionDeploymentsPerNetwork({
            released: undefined,
          }),
        ).to.deep.equal({
          "80001": [
            RouterProxyFactory_v2_0_1_0,
            RouterProxyFactory_v2_0_0_b1_0,
          ],
          "81457": [BlastRouterProxyFactory_v2_1_0],
          "168587773": [BlastRouterProxyFactory_v2_1_0_0],
        });
      });
    });

    describe("getLatestRouterProxyFactoryPerNetwork", () => {
      it("should return the latest deployment for each network", () => {
        expect(
          getLatestRouterProxyFactoryPerNetwork({ released: undefined }),
        ).to.deep.equal({
          "80001": firstVersionDeploymentsToVersionNetworkDeployment(
            RouterProxyFactory_v2_0_1_0,
            "80001",
          ),
          "81457": firstVersionDeploymentsToVersionNetworkDeployment(
            BlastRouterProxyFactory_v2_1_0,
            "81457",
          ),
          "168587773": firstVersionDeploymentsToVersionNetworkDeployment(
            BlastRouterProxyFactory_v2_1_0_0,
            "168587773",
          ),
        });
      });
    });
  });

  describe("SimpleAaveLogic contract", () => {
    describe("getSimpleAaveLogicVersionDeployments", () => {
      it("should find the latest deployment first", () => {
        const result = getSimpleAaveLogicVersionDeployments({
          released: undefined,
        });
        assert.equal(result, SimpleAaveLogic_v2_0_1_0);
        // NB: Add older old versions here
        [SimpleAaveLogic_v2_0_0_b1_0].forEach((version) => {
          assert.notEqual(result, version);
        });
      });
    });

    describe("getAllSimpleAaveLogicVersionDeploymentsPerNetwork", () => {
      it("should return all deployments grouped by network", () => {
        expect(
          getAllSimpleAaveLogicVersionDeploymentsPerNetwork({
            released: undefined,
          }),
        ).to.deep.equal({
          "80001": [SimpleAaveLogic_v2_0_1_0, SimpleAaveLogic_v2_0_0_b1_0],
        });
      });
    });

    describe("getLatestSimpleAaveLogicPerNetwork", () => {
      it("should return the latest deployment for each network", () => {
        expect(
          getLatestSimpleAaveLogicPerNetwork({ released: undefined }),
        ).to.deep.equal({
          "80001": firstVersionDeploymentsToVersionNetworkDeployment(
            SimpleAaveLogic_v2_0_1_0,
            "80001",
          ),
        });
      });
    });
  });

  describe("ZeroLendLogic contract", () => {
    describe("getZeroLendLogicVersionDeployments", () => {
      it("should find the latest deployment first", () => {
        const result = getZeroLendLogicVersionDeployments({
          released: undefined,
        });
        assert.equal(result, ZeroLendLogic_v2_1_0);
        // NB: Add older old versions here
        [].forEach((version) => {
          assert.notEqual(result, version);
        });
      });
    });

    describe("getAllZeroLendLogicVersionDeploymentsPerNetwork", () => {
      it("should return all deployments grouped by network", () => {
        expect(
          getAllZeroLendLogicVersionDeploymentsPerNetwork({
            released: undefined,
          }),
        ).to.deep.equal({
          "81457": [ZeroLendLogic_v2_1_0],
        });
      });
    });

    describe("getLatestZeroLendLogicPerNetwork", () => {
      it("should return the latest deployment for each network", () => {
        expect(
          getLatestZeroLendLogicPerNetwork({ released: undefined }),
        ).to.deep.equal({
          "81457": firstVersionDeploymentsToVersionNetworkDeployment(
            ZeroLendLogic_v2_1_0,
            "81457",
          ),
        });
      });
    });
  });

  describe("OrbitLogic contract", () => {
    describe("getOrbitLogicVersionDeployments", () => {
      it("should find the latest deployment first", () => {
        const result = getOrbitLogicVersionDeployments({
          released: undefined,
        });
        assert.equal(result, OrbitLogic_v2_1_0_1);
        // NB: Add older old versions here
        [].forEach((version) => {
          assert.notEqual(result, version);
        });
      });
    });

    describe("getAllOrbitLogicVersionDeploymentsPerNetwork", () => {
      it("should return all deployments grouped by network", () => {
        expect(
          getAllOrbitLogicVersionDeploymentsPerNetwork({
            released: undefined,
          }),
        ).to.deep.equal({
          "81457": [OrbitLogic_v2_1_0_1],
          "168587773": [OrbitLogic_v2_1_0_1],
        });
      });
    });

    describe("getLatestOrbitLogicPerNetwork", () => {
      it("should return the latest deployment for each network", () => {
        expect(
          getLatestOrbitLogicPerNetwork({ released: undefined }),
        ).to.deep.equal({
          "81457": firstVersionDeploymentsToVersionNetworkDeployment(
            OrbitLogic_v2_1_0_1,
            "81457",
          ),
          "168587773": firstVersionDeploymentsToVersionNetworkDeployment(
            OrbitLogic_v2_1_0_1,
            "168587773",
          ),
        });
      });
    });
  });

  describe("MangroveAmplifier contract", () => {
    describe("getMangroveAmplifierVersionDeployments", () => {
      it("should find the latest deployment first", () => {
        const result = getMangroveAmplifierVersionDeployments({
          released: undefined,
        });
        assert.equal(result, BlastMangroveAmplifier_v2_1_0);
        // NB: Add older old versions here
        [
          BlastMangroveAmplifier_v2_1_0_0,
          MangroveAmplifier_v2_0_1_0,
          MangroveAmplifier_v2_0_0_b1_0,
        ].forEach((version) => {
          assert.notEqual(result, version);
        });
      });
    });

    describe("getAllMangroveAmplifierVersionDeploymentsPerNetwork", () => {
      it("should return all deployments grouped by network", () => {
        expect(
          getAllMangroveAmplifierVersionDeploymentsPerNetwork({
            released: undefined,
          }),
        ).to.deep.equal({
          "80001": [MangroveAmplifier_v2_0_1_0, MangroveAmplifier_v2_0_0_b1_0],
          "81457": [BlastMangroveAmplifier_v2_1_0],
          "168587773": [BlastMangroveAmplifier_v2_1_0_0],
        });
      });
    });

    describe("getLatestMangroveAmplifierPerNetwork", () => {
      it("should return the latest deployment for each network", () => {
        expect(
          getLatestMangroveAmplifierPerNetwork({ released: undefined }),
        ).to.deep.equal({
          "80001": firstVersionDeploymentsToVersionNetworkDeployment(
            MangroveAmplifier_v2_0_1_0,
            "80001",
          ),
          "81457": firstVersionDeploymentsToVersionNetworkDeployment(
            BlastMangroveAmplifier_v2_1_0,
            "81457",
          ),
          "168587773": firstVersionDeploymentsToVersionNetworkDeployment(
            BlastMangroveAmplifier_v2_1_0_0,
            "168587773",
          ),
        });
      });
    });
  });

  describe("getLatestStratContractsPerNetwork", () => {
    it("should return the latest deployments for each network", () => {
      expect(
        getLatestStratContractsPerNetwork({ released: undefined }),
      ).to.deep.equal({
        "80001": {
          mangrove: firstVersionDeploymentsToVersionNetworkDeployment(
            Mangrove_v2_0_1,
            "80001",
          ),
          aaveKandelSeeder: firstVersionDeploymentsToVersionNetworkDeployment(
            AaveKandelSeeder_v2_0_1_0,
            "80001",
          ),
          aavePooledRouter: firstVersionDeploymentsToVersionNetworkDeployment(
            AavePooledRouter_v2_0_1_0,
            "80001",
          ),
          kandelLib: firstVersionDeploymentsToVersionNetworkDeployment(
            KandelLib_v2_0_1_0,
            "80001",
          ),
          kandelSeeder: firstVersionDeploymentsToVersionNetworkDeployment(
            KandelSeeder_v2_0_1_0,
            "80001",
          ),
          mangroveOrderRouter:
            firstVersionDeploymentsToVersionNetworkDeployment(
              MangroveOrderRouter_v2_0_1_0,
              "80001",
            ),
          mangroveOrder: firstVersionDeploymentsToVersionNetworkDeployment(
            MangroveOrder_v2_0_1_0,
            "80001",
          ),
          routerProxyFactory: firstVersionDeploymentsToVersionNetworkDeployment(
            RouterProxyFactory_v2_0_1_0,
            "80001",
          ),
          simpleAaveLogic: firstVersionDeploymentsToVersionNetworkDeployment(
            SimpleAaveLogic_v2_0_1_0,
            "80001",
          ),
          mangroveAmplifier: firstVersionDeploymentsToVersionNetworkDeployment(
            MangroveAmplifier_v2_0_1_0,
            "80001",
          ),
          orbitLogic: undefined,
          zeroLendLogic: undefined,
        },
        "81457": {
          mangrove: firstVersionDeploymentsToVersionNetworkDeployment(
            BlastMangrove_v2_1_0,
            "81457",
          ),
          aaveKandelSeeder: undefined,
          aavePooledRouter: undefined,
          kandelLib: firstVersionDeploymentsToVersionNetworkDeployment(
            BlastKandelLib_v2_1_0,
            "81457",
          ),
          kandelSeeder: firstVersionDeploymentsToVersionNetworkDeployment(
            BlastKandelSeeder_v2_1_0,
            "81457",
          ),
          mangroveOrderRouter:
            firstVersionDeploymentsToVersionNetworkDeployment(
              BlastMangroveOrderRouter_v2_1_0,
              "81457",
            ),
          mangroveOrder: firstVersionDeploymentsToVersionNetworkDeployment(
            BlastMangroveOrder_v2_1_0,
            "81457",
          ),
          routerProxyFactory: firstVersionDeploymentsToVersionNetworkDeployment(
            BlastRouterProxyFactory_v2_1_0,
            "81457",
          ),
          simpleAaveLogic: undefined,
          mangroveAmplifier: firstVersionDeploymentsToVersionNetworkDeployment(
            BlastMangroveAmplifier_v2_1_0,
            "81457",
          ),
          orbitLogic: firstVersionDeploymentsToVersionNetworkDeployment(
            OrbitLogic_v2_1_0_1,
            "81457",
          ),
          zeroLendLogic: firstVersionDeploymentsToVersionNetworkDeployment(
            ZeroLendLogic_v2_1_0,
            "81457",
          ),
        },
        "11155111": {
          mangrove: firstVersionDeploymentsToVersionNetworkDeployment(
            Mangrove_v2_0_1,
            "11155111",
          ),
          aaveKandelSeeder: undefined,
          aavePooledRouter: undefined,
          kandelLib: undefined,
          kandelSeeder: undefined,
          mangroveOrderRouter: undefined,
          mangroveOrder: undefined,
          routerProxyFactory: undefined,
          simpleAaveLogic: undefined,
          mangroveAmplifier: undefined,
          orbitLogic: undefined,
          zeroLendLogic: undefined,
        },
        "168587773": {
          mangrove: firstVersionDeploymentsToVersionNetworkDeployment(
            BlastMangrove_v2_1_0_0,
            "168587773",
          ),
          aaveKandelSeeder: undefined,
          aavePooledRouter: undefined,
          kandelLib: firstVersionDeploymentsToVersionNetworkDeployment(
            KandelLib_v2_0_1_0,
            "168587773",
          ),
          kandelSeeder: firstVersionDeploymentsToVersionNetworkDeployment(
            KandelSeeder_v2_0_1_0,
            "168587773",
          ),
          mangroveOrderRouter:
            firstVersionDeploymentsToVersionNetworkDeployment(
              BlastMangroveOrderRouter_v2_1_0_0,
              "168587773",
            ),
          mangroveOrder: firstVersionDeploymentsToVersionNetworkDeployment(
            BlastMangroveOrder_v2_1_0_0,
            "168587773",
          ),
          routerProxyFactory: firstVersionDeploymentsToVersionNetworkDeployment(
            BlastRouterProxyFactory_v2_1_0_0,
            "168587773",
          ),
          simpleAaveLogic: undefined,
          mangroveAmplifier: firstVersionDeploymentsToVersionNetworkDeployment(
            BlastMangroveAmplifier_v2_1_0_0,
            "168587773",
          ),
          orbitLogic: firstVersionDeploymentsToVersionNetworkDeployment(
            OrbitLogic_v2_1_0_1,
            "168587773",
          ),
          zeroLendLogic: undefined,
        },
      });
    });
  });
});
