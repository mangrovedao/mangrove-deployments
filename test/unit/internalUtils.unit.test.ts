import { describe, it } from "mocha";
import { expect } from "chai";

import {
  findAllDeployments,
  findAllDeploymentsPerNetwork,
  findDeployment,
  findLatestDeploymentPerNetwork,
  getVersionDeploymentBaseInfo,
} from "../../src/internalUtils";
import { VersionDeployments } from "../../src/types";

describe("internalUtils.ts", () => {
  describe("findDeployment", () => {
    it("should filter by released by default", () => {
      const testUnreleasedDeployment: VersionDeployments = {
        contractName: "",
        deploymentName: "",
        version: "",
        released: false,
        abi: [],
        networkAddresses: {
          "1": {
            primaryAddress: "0xbeef",
            allAddresses: [{ address: "0xbeef" }],
          },
        },
      };
      const testReleasedDeployment: VersionDeployments = {
        contractName: "",
        deploymentName: "",
        version: "",
        released: true, // Default filter value
        abi: [],
        networkAddresses: {
          "1": {
            primaryAddress: "0xbeef",
            allAddresses: [{ address: "0xbeef" }],
          },
        },
      };

      const testDeployments = [
        testUnreleasedDeployment,
        testUnreleasedDeployment,
        testReleasedDeployment,
      ];

      expect(findDeployment(undefined, testDeployments)).to.equal(
        testReleasedDeployment,
      );

      // should preserve the released flag even if its not explicitly passed
      expect(findDeployment({ network: "1" }, testDeployments)).to.equal(
        testReleasedDeployment,
      );
    });

    it("should return the correct deployment (filtered by version)", () => {
      const testReleasedDeployment1: VersionDeployments = {
        contractName: "",
        deploymentName: "1",
        version: "1.2.3",
        released: true, // Default filter value
        abi: [],
        networkAddresses: {
          "1": {
            primaryAddress: "0xbeef",
            allAddresses: [{ address: "0xbeef" }],
          },
        },
      };
      const testReleasedDeployment2: VersionDeployments = {
        contractName: "",
        deploymentName: "2",
        version: "2.0.0",
        released: true, // Default filter value
        abi: [],
        networkAddresses: {
          "1": {
            primaryAddress: "0xbeef",
            allAddresses: [{ address: "0xbeef" }],
          },
        },
      };

      const testDeployments = [
        testReleasedDeployment2,
        testReleasedDeployment1,
      ];

      // Chronological deployments
      expect(findDeployment({ version: "2.0.0" }, testDeployments)).to.equal(
        testReleasedDeployment2,
      );

      // Incorrect filter:
      expect(findDeployment({ version: "1.3.5" }, testDeployments)).to.be
        .undefined;
    });

    it("should return the correct deployment (filtered by released flag)", () => {
      const testUnreleasedDeployment1: VersionDeployments = {
        contractName: "1",
        deploymentName: "",
        version: "",
        released: false,
        abi: [],
        networkAddresses: {
          "1": {
            primaryAddress: "0xbeef",
            allAddresses: [{ address: "0xbeef" }],
          },
        },
      };
      const testUnreleasedDeployment2: VersionDeployments = {
        contractName: "2",
        deploymentName: "",
        version: "",
        released: false,
        abi: [],
        networkAddresses: {
          "1": {
            primaryAddress: "0xbeef",
            allAddresses: [{ address: "0xbeef" }],
          },
        },
      };
      const testReleasedDeployment1: VersionDeployments = {
        contractName: "3",
        deploymentName: "",
        version: "",
        released: true, // Default filter value
        abi: [],
        networkAddresses: {
          "1": {
            primaryAddress: "0xbeef",
            allAddresses: [{ address: "0xbeef" }],
          },
        },
      };
      const testReleasedDeployment2: VersionDeployments = {
        contractName: "",
        deploymentName: "4",
        version: "",
        released: true, // Default filter value
        abi: [],
        networkAddresses: {
          "1": {
            primaryAddress: "0xbeef",
            allAddresses: [{ address: "0xbeef" }],
          },
        },
      };

      const testDeployments = [
        testUnreleasedDeployment2,
        testUnreleasedDeployment1,
        testReleasedDeployment2,
        testReleasedDeployment1,
      ];

      const testDeploymentsReverse = [...testDeployments].reverse();

      // Chronological deployments
      expect(findDeployment({ released: true }, testDeployments)).to.equal(
        testReleasedDeployment2,
      );

      // Reverse chronological deployments
      expect(
        findDeployment({ released: true }, testDeploymentsReverse),
      ).to.equal(testReleasedDeployment1);
      // Released flag set to false:
      expect(findDeployment({ released: false }, testDeployments)).to.equal(
        testUnreleasedDeployment2,
      );
    });

    it("should return the correct deployment (filtered by network)", () => {
      const testReleasedDeployment1: VersionDeployments = {
        contractName: "1",
        deploymentName: "",
        version: "",
        released: true,
        abi: [],
        networkAddresses: {
          "1": {
            primaryAddress: "0xbeef",
            allAddresses: [{ address: "0xbeef" }],
          },
        },
      };
      const testReleasedDeployment2: VersionDeployments = {
        contractName: "2",
        deploymentName: "",
        version: "",
        released: true,
        abi: [],
        networkAddresses: {
          "73799": {
            primaryAddress: "0xbeef",
            allAddresses: [{ address: "0xbeef" }],
          },
        },
      };
      const testReleasedDeployment3: VersionDeployments = {
        contractName: "3",
        deploymentName: "",
        version: "",
        released: true,
        abi: [],
        networkAddresses: {
          "11297108109": {
            primaryAddress: "0xbeef",
            allAddresses: [{ address: "0xbeef" }],
          },
        },
      };
      const testReleasedDeployment4: VersionDeployments = {
        contractName: "",
        deploymentName: "4",
        version: "",
        released: true,
        abi: [],
        networkAddresses: {
          "1": {
            primaryAddress: "0xbeef",
            allAddresses: [{ address: "0xbeef" }],
          },
        },
      };

      const testDeployments = [
        testReleasedDeployment4,
        testReleasedDeployment3,
        testReleasedDeployment2,
        testReleasedDeployment1,
      ];

      const testDeploymentsReverse = [...testDeployments].reverse();

      // Reverse chronological deployments
      expect(findDeployment({ network: "1" }, testDeploymentsReverse)).to.equal(
        testReleasedDeployment1,
      );
      expect(
        findDeployment({ network: "73799" }, testDeploymentsReverse),
      ).to.equal(testReleasedDeployment2);
      expect(
        findDeployment({ network: "11297108109" }, testDeploymentsReverse),
      ).to.equal(testReleasedDeployment3);
      // Incorrect filter:
      expect(findDeployment({ network: "0" }, testDeploymentsReverse)).to.be
        .undefined;
    });

    it("should return the correct deployment (filtered by dependencies)", () => {
      const testReleasedDeployment1: VersionDeployments = {
        contractName: "",
        deploymentName: "1",
        version: "1.2.3",
        released: true,
        abi: [],
        networkAddresses: {
          "1": {
            primaryAddress: "0xbeef",
            allAddresses: [
              {
                address: "0xbeef",
                dependencies: [
                  { name: "dep1", address: "0xcode" },
                  { name: "dep2", address: "0xbaaf" },
                ],
              },
            ],
          },
        },
      };
      const testReleasedDeployment2: VersionDeployments = {
        contractName: "",
        deploymentName: "2",
        version: "2.0.0",
        released: true,
        abi: [],
        networkAddresses: {
          "1": {
            primaryAddress: "0xbeef",
            allAddresses: [
              {
                address: "0xbeef",
                dependencies: [{ name: "dep1", address: "0xcode" }],
              },
            ],
          },
        },
      };
      const testReleasedDeployment3: VersionDeployments = {
        contractName: "",
        deploymentName: "2",
        version: "2.0.0",
        released: true,
        abi: [],
        networkAddresses: {
          "1": {
            primaryAddress: "0xbeef",
            allAddresses: [
              {
                address: "0xbeef",
                dependencies: [{ name: "dep1", address: "0xodec" }],
              },
            ],
          },
          "2": {
            primaryAddress: "0xbeef",
            allAddresses: [
              {
                address: "0xbeef",
                dependencies: [{ name: "dep1", address: "0xcode" }],
              },
            ],
          },
        },
      };

      const testDeployments = [
        testReleasedDeployment3,
        testReleasedDeployment2,
        testReleasedDeployment1,
      ];

      // No dependencies required
      expect(findDeployment({ dependencies: [] }, testDeployments)).to.equal(
        testReleasedDeployment3,
      );

      // Chronological deployments
      expect(
        findDeployment(
          { dependencies: [{ name: "dep1", address: "0xcode" }] },
          testDeployments,
        ),
      ).to.equal(testReleasedDeployment3);

      // Dependencies respects network
      expect(
        findDeployment(
          { network: "1", dependencies: [{ name: "dep1", address: "0xcode" }] },
          testDeployments,
        ),
      ).to.equal(testReleasedDeployment2);

      // Multiple dependencies
      expect(
        findDeployment(
          {
            dependencies: [
              { name: "dep1", address: "0xcode" },
              { name: "dep2", address: "0xbaaf" },
            ],
          },
          testDeployments,
        ),
      ).to.equal(testReleasedDeployment1);

      // Incorrect filter:
      expect(
        findDeployment(
          { dependencies: [{ name: "nonDep", address: "0xcode" }] },
          testDeployments,
        ),
      ).to.be.undefined;
    });

    it("should return the correct deployment (filtered by version and released)", () => {
      const testReleasedDeployment1: VersionDeployments = {
        contractName: "1",
        deploymentName: "",
        version: "1.0.0",
        released: true,
        abi: [],
        networkAddresses: {
          "1": {
            primaryAddress: "0xbeef",
            allAddresses: [{ address: "0xbeef" }],
          },
        },
      };
      const testReleasedDeployment2: VersionDeployments = {
        contractName: "2",
        deploymentName: "",
        version: "1.1.1",
        released: true,
        abi: [],
        networkAddresses: {
          "1": {
            primaryAddress: "0xbeef",
            allAddresses: [{ address: "0xbeef" }],
          },
        },
      };
      const testReleasedDeployment3: VersionDeployments = {
        contractName: "3",
        deploymentName: "",
        version: "1.2.0",
        released: true,
        abi: [],
        networkAddresses: {
          "1": {
            primaryAddress: "0xbeef",
            allAddresses: [{ address: "0xbeef" }],
          },
        },
      };
      const testReleasedDeployment4: VersionDeployments = {
        contractName: "",
        deploymentName: "4",
        version: "1.3.0",
        released: true,
        abi: [],
        networkAddresses: {
          "1": {
            primaryAddress: "0xbeef",
            allAddresses: [{ address: "0xbeef" }],
          },
        },
      };

      const testDeployments = [
        testReleasedDeployment4,
        testReleasedDeployment3,
        testReleasedDeployment2,
        testReleasedDeployment1,
      ];

      // Chronological deployments
      expect(
        findDeployment({ version: "1.3.0", released: true }, testDeployments),
      ).to.equal(testReleasedDeployment4);
      expect(
        findDeployment({ version: "1.2.0", released: true }, testDeployments),
      ).to.equal(testReleasedDeployment3);
      expect(
        findDeployment({ version: "1.1.1", released: true }, testDeployments),
      ).to.equal(testReleasedDeployment2);
      expect(
        findDeployment({ version: "1.0.0", released: true }, testDeployments),
      ).to.equal(testReleasedDeployment1);
      // Incorrect filter:
      expect(
        findDeployment({ version: "1.0.0", released: false }, testDeployments),
      ).to.be.undefined;
    });

    it("should return the correct deployment (filtered by version and network)", () => {
      const testReleasedDeployment1: VersionDeployments = {
        contractName: "1",
        deploymentName: "",
        version: "1.0.0",
        released: true,
        abi: [],
        networkAddresses: {
          "1": {
            primaryAddress: "0xbeef",
            allAddresses: [{ address: "0xbeef" }],
          },
        },
      };
      const testReleasedDeployment2: VersionDeployments = {
        contractName: "2",
        deploymentName: "",
        version: "1.1.1",
        released: true,
        abi: [],
        networkAddresses: {
          "1": {
            primaryAddress: "0xbeef",
            allAddresses: [{ address: "0xbeef" }],
          },
        },
      };
      const testReleasedDeployment3: VersionDeployments = {
        contractName: "3",
        deploymentName: "",
        version: "1.2.0",
        released: true,
        abi: [],
        networkAddresses: {
          "1": {
            primaryAddress: "0xbeef",
            allAddresses: [{ address: "0xbeef" }],
          },
        },
      };
      const testReleasedDeployment4: VersionDeployments = {
        contractName: "",
        deploymentName: "4",
        version: "1.3.0",
        released: true,
        abi: [],
        networkAddresses: {
          "1": {
            primaryAddress: "0xbeef",
            allAddresses: [{ address: "0xbeef" }],
          },
        },
      };

      const testDeployments = [
        testReleasedDeployment4,
        testReleasedDeployment3,
        testReleasedDeployment2,
        testReleasedDeployment1,
      ];

      // Reverse chronological deployments
      expect(
        findDeployment({ version: "1.0.0", network: "1" }, testDeployments),
      ).to.equal(testReleasedDeployment1);
      expect(
        findDeployment({ version: "1.1.1", network: "1" }, testDeployments),
      ).to.equal(testReleasedDeployment2);
      expect(
        findDeployment({ version: "1.2.0", network: "1" }, testDeployments),
      ).to.equal(testReleasedDeployment3);
      expect(
        findDeployment({ version: "1.3.0", network: "1" }, testDeployments),
      ).to.equal(testReleasedDeployment4);
      // Incorrect filter:
      expect(
        findDeployment({ version: "1.3.0", network: "0" }, testDeployments),
      ).to.be.undefined;
    });

    it("should return the correct deployment (filtered by released and network)", () => {
      const testUnreleasedDeployment1: VersionDeployments = {
        contractName: "",
        deploymentName: "1",
        version: "",
        released: false,
        abi: [],
        networkAddresses: {
          "1": {
            primaryAddress: "0xbeef",
            allAddresses: [{ address: "0xbeef" }],
          },
        },
      };
      const testUnreleasedDeployment2: VersionDeployments = {
        contractName: "",
        deploymentName: "2",
        version: "",
        released: false,
        abi: [],
        networkAddresses: {
          "1": {
            primaryAddress: "0xbeef",
            allAddresses: [{ address: "0xbeef" }],
          },
        },
      };
      const testReleasedDeployment1: VersionDeployments = {
        contractName: "",
        deploymentName: "3",
        version: "",
        released: true,
        abi: [],
        networkAddresses: {
          "1": {
            primaryAddress: "0xbeef",
            allAddresses: [{ address: "0xbeef" }],
          },
        },
      };
      const testReleasedDeployment2: VersionDeployments = {
        contractName: "",
        deploymentName: "4",
        version: "",
        released: true,
        abi: [],
        networkAddresses: {
          "246": {
            primaryAddress: "0xbeef",
            allAddresses: [{ address: "0xbeef" }],
          },
        },
      };
      const testReleasedDeployment3: VersionDeployments = {
        contractName: "5",
        deploymentName: "",
        version: "",
        released: true,
        abi: [],
        networkAddresses: {
          "11297108109": {
            primaryAddress: "0xbeef",
            allAddresses: [{ address: "0xbeef" }],
          },
        },
      };
      const testReleasedDeployment4: VersionDeployments = {
        contractName: "",
        deploymentName: "6",
        version: "",
        released: true,
        abi: [],
        networkAddresses: {
          "1": {
            primaryAddress: "0xbeef",
            allAddresses: [{ address: "0xbeef" }],
          },
        },
      };

      const testDeployments = [
        testUnreleasedDeployment2,
        testUnreleasedDeployment1,
        testReleasedDeployment4,
        testReleasedDeployment3,
        testReleasedDeployment2,
        testReleasedDeployment1,
      ];

      const testDeploymentsReverse = [...testDeployments].reverse();

      // Reverse chronological deployments
      expect(
        findDeployment(
          { released: true, network: "1" },
          testDeploymentsReverse,
        ),
      ).to.equal(testReleasedDeployment1);
      expect(
        findDeployment(
          { released: true, network: "246" },
          testDeploymentsReverse,
        ),
      ).to.equal(testReleasedDeployment2);
      expect(
        findDeployment(
          { released: true, network: "11297108109" },
          testDeploymentsReverse,
        ),
      ).to.equal(testReleasedDeployment3);
      // Incorrect filter:
      expect(
        findDeployment(
          { released: true, network: "0" },
          testDeploymentsReverse,
        ),
      ).to.be.undefined;
      expect(
        findDeployment({ released: false, network: "1" }, testDeployments),
      ).to.equal(testUnreleasedDeployment2);
    });

    it("should return the correct deployment (filtered by version, released, network, and dependencies)", () => {
      const testReleasedDeployment1: VersionDeployments = {
        contractName: "",
        deploymentName: "3",
        version: "1.0.0",
        released: true,
        abi: [],
        networkAddresses: {
          "1": {
            primaryAddress: "0xbeef",
            allAddresses: [
              {
                address: "0xbeef",
                dependencies: [{ name: "dep", address: "0xcode1" }],
              },
            ],
          },
        },
      };
      const testReleasedDeployment2: VersionDeployments = {
        contractName: "",
        deploymentName: "4",
        version: "1.1.1",
        released: true,
        abi: [],
        networkAddresses: {
          "246": {
            primaryAddress: "0xbeef",
            allAddresses: [
              {
                address: "0xbeef",
                dependencies: [{ name: "dep", address: "0xcode2" }],
              },
            ],
          },
        },
      };
      const testReleasedDeployment3: VersionDeployments = {
        contractName: "5",
        deploymentName: "",
        version: "1.2.0",
        released: true,
        abi: [],
        networkAddresses: {
          "73799": {
            primaryAddress: "0xbeef",
            allAddresses: [
              {
                address: "0xbeef",
                dependencies: [{ name: "dep", address: "0xcode3" }],
              },
            ],
          },
        },
      };
      const testReleasedDeployment4: VersionDeployments = {
        contractName: "",
        deploymentName: "6",
        version: "1.3.0",
        released: true,
        abi: [],
        networkAddresses: {
          "11297108109": {
            primaryAddress: "0xbeef",
            allAddresses: [
              {
                address: "0xbeef",
                dependencies: [{ name: "dep", address: "0xcode4" }],
              },
            ],
          },
        },
      };

      const testDeployments = [
        testReleasedDeployment4,
        testReleasedDeployment3,
        testReleasedDeployment2,
        testReleasedDeployment1,
      ];

      const testDeploymentsReverse = [...testDeployments].reverse();
      // Reverse chronological deployments
      expect(
        findDeployment(
          {
            version: "1.0.0",
            released: true,
            network: "1",
            dependencies: [{ name: "dep", address: "0xcode1" }],
          },
          testDeploymentsReverse,
        ),
      ).to.equal(testReleasedDeployment1);
      expect(
        findDeployment(
          {
            version: "1.1.1",
            released: true,
            network: "246",
            dependencies: [{ name: "dep", address: "0xcode2" }],
          },
          testDeploymentsReverse,
        ),
      ).to.equal(testReleasedDeployment2);
      expect(
        findDeployment(
          {
            version: "1.2.0",
            released: true,
            network: "73799",
            dependencies: [{ name: "dep", address: "0xcode3" }],
          },
          testDeploymentsReverse,
        ),
      ).to.equal(testReleasedDeployment3);
      expect(
        findDeployment(
          {
            version: "1.3.0",
            released: true,
            network: "11297108109",
            dependencies: [{ name: "dep", address: "0xcode4" }],
          },
          testDeploymentsReverse,
        ),
      ).to.equal(testReleasedDeployment4);

      // Incorrect filter:
      expect(
        findDeployment(
          {
            version: "1.3.0",
            released: false,
            network: "11297108109",
            dependencies: [{ name: "dep", address: "0xcode4" }],
          },
          testDeploymentsReverse,
        ),
      ).to.be.undefined;
      expect(
        findDeployment(
          {
            version: "1.3.0",
            released: true,
            network: "0",
            dependencies: [{ name: "dep", address: "0xcode4" }],
          },
          testDeploymentsReverse,
        ),
      ).to.be.undefined;
      expect(
        findDeployment(
          {
            version: "2.0.0",
            released: true,
            network: "11297108109",
            dependencies: [{ name: "dep", address: "0xcode4" }],
          },
          testDeploymentsReverse,
        ),
      ).to.be.undefined;
      expect(
        findDeployment(
          {
            version: "1.3.0",
            released: true,
            network: "11297108109",
            dependencies: [{ name: "dep", address: "0xcode1" }],
          },
          testDeploymentsReverse,
        ),
      ).to.be.undefined;
    });
  });

  describe("findAllDeployments", () => {
    it("should handle empty deployments", () => {
      expect(findAllDeployments(undefined, [])).to.deep.equal([]);
    });

    it("should return all matching the filter", () => {
      // Filter variants are assumed covered by findDeployment tests, so only filtering on released here

      const testUnreleasedDeployment: VersionDeployments = {
        contractName: "",
        deploymentName: "",
        version: "",
        released: false,
        abi: [],
        networkAddresses: {
          "1": {
            primaryAddress: "0xbeef",
            allAddresses: [{ address: "0xbeef", dependencies: [] }],
          },
        },
      };
      const testReleasedDeployment1: VersionDeployments = {
        contractName: "",
        deploymentName: "",
        version: "",
        released: true,
        abi: [],
        networkAddresses: {
          "1": {
            primaryAddress: "0xbeef",
            allAddresses: [{ address: "0xbeef", dependencies: [] }],
          },
        },
      };
      const testReleasedDeployment2: VersionDeployments = {
        contractName: "",
        deploymentName: "",
        version: "",
        released: true,
        abi: [],
        networkAddresses: {
          "2": {
            primaryAddress: "0xbeef",
            allAddresses: [{ address: "0xbeef", dependencies: [] }],
          },
        },
      };

      const testDeployments = [
        testUnreleasedDeployment,
        testReleasedDeployment1,
        testUnreleasedDeployment,
        testReleasedDeployment2,
      ];

      expect(
        findAllDeployments({ released: true }, testDeployments),
      ).to.deep.equal([testReleasedDeployment1, testReleasedDeployment2]);

      expect(
        findAllDeployments({ network: "1" }, testDeployments),
      ).to.deep.equal([testReleasedDeployment1]);

      expect(
        findAllDeployments({ network: "31337" }, testDeployments),
      ).to.deep.equal([]);
    });
  });
});

describe("findAllDeploymentsPerNetwork", () => {
  it("should handle empty deployments", () => {
    expect(findAllDeploymentsPerNetwork(undefined, [])).to.deep.equal({});
  });

  it("should filter", () => {
    // Filter variants are assumed covered by findDeployment tests,
    // so this only validates that filtering is applied

    const testUnreleasedDeployment: VersionDeployments = {
      contractName: "",
      deploymentName: "",
      version: "",
      released: false,
      abi: [],
      networkAddresses: {
        "1": {
          primaryAddress: "0xbeef",
          allAddresses: [{ address: "0xbeef", dependencies: [] }],
        },
      },
    };
    const testReleasedDeployment: VersionDeployments = {
      contractName: "",
      deploymentName: "",
      version: "",
      released: true,
      abi: [],
      networkAddresses: {
        "1": {
          primaryAddress: "0xbeef",
          allAddresses: [{ address: "0xbeef", dependencies: [] }],
        },
      },
    };

    const testDeployments = [testUnreleasedDeployment, testReleasedDeployment];

    expect(
      findAllDeploymentsPerNetwork({ released: true }, testDeployments),
    ).to.deep.equal({
      "1": [testReleasedDeployment],
    });
  });

  it("should return full version deployment structure for all listed networks", () => {
    const testReleasedDeployment: VersionDeployments = {
      contractName: "",
      deploymentName: "",
      version: "",
      released: true,
      abi: [],
      networkAddresses: {
        "1": {
          primaryAddress: "0xbeef",
          allAddresses: [{ address: "0xbeef", dependencies: [] }],
        },
        "2": {
          primaryAddress: "0xbeef",
          allAddresses: [{ address: "0xbeef", dependencies: [] }],
        },
      },
    };

    const testDeployments = [testReleasedDeployment];

    expect(
      findAllDeploymentsPerNetwork({ released: true }, testDeployments),
    ).to.deep.equal({
      "1": [testReleasedDeployment],
      "2": [testReleasedDeployment],
    });
  });

  it("should return all version deployments for a network", () => {
    const testReleasedDeployment1: VersionDeployments = {
      contractName: "",
      deploymentName: "",
      version: "1",
      released: true,
      abi: [],
      networkAddresses: {
        "1": {
          primaryAddress: "0xbeef",
          allAddresses: [{ address: "0xbeef", dependencies: [] }],
        },
        "2": {
          primaryAddress: "0xbeef",
          allAddresses: [{ address: "0xbeef", dependencies: [] }],
        },
      },
    };
    const testReleasedDeployment2: VersionDeployments = {
      contractName: "",
      deploymentName: "",
      version: "2",
      released: true,
      abi: [],
      networkAddresses: {
        "1": {
          primaryAddress: "0xbeef",
          allAddresses: [{ address: "0xbeef", dependencies: [] }],
        },
      },
    };

    const testDeployments = [testReleasedDeployment2, testReleasedDeployment1];

    expect(
      findAllDeploymentsPerNetwork({ released: true }, testDeployments),
    ).to.deep.equal({
      "1": [testReleasedDeployment2, testReleasedDeployment1],
      "2": [testReleasedDeployment1],
    });
  });
});

describe("getVersionDeploymentBaseInfo", () => {
  it("should return the correct base info", () => {
    const testReleasedDeployment: VersionDeployments = {
      contractName: "a",
      deploymentName: "b",
      version: "1",
      released: true,
      abi: [{ foo: "bar" }],
      networkAddresses: {
        "1": {
          primaryAddress: "0xbeef",
          allAddresses: [
            {
              address: "0xbeef",
              dependencies: [{ name: "dep", address: "0xcode" }],
            },
          ],
        },
      },
    };

    expect(getVersionDeploymentBaseInfo(testReleasedDeployment)).to.deep.equal({
      contractName: "a",
      deploymentName: "b",
      version: "1",
      released: true,
      abi: [{ foo: "bar" }],
    });
  });
});

describe("findLatestDeploymentPerNetwork", () => {
  it("should handle empty deployments", () => {
    expect(findLatestDeploymentPerNetwork(undefined, [])).to.deep.equal({});
  });

  it("should filter and return latest deployment satisfying dependencies", () => {
    const testUnreleasedDeployment: VersionDeployments = {
      contractName: "a",
      deploymentName: "b",
      version: "2",
      released: false,
      abi: [{ foo: "bar" }],
      networkAddresses: {
        "1": {
          primaryAddress: "0xfeeb1",
          allAddresses: [
            {
              address: "0xfeeb1",
              dependencies: [{ name: "dep", address: "0xodec" }],
            },
            {
              address: "0xfeeb2",
              dependencies: [{ name: "dep", address: "0xcode" }],
            },
            {
              address: "0xfeeb3",
              dependencies: [{ name: "dep", address: "0xcode" }],
            },
          ],
        },
      },
    };

    const testReleasedDeployment: VersionDeployments = {
      contractName: "a",
      deploymentName: "b",
      version: "1",
      released: true,
      abi: [{ foo: "bar" }],
      networkAddresses: {
        "1": {
          primaryAddress: "0xbeef1",
          allAddresses: [
            {
              address: "0xbeef1",
              dependencies: [{ name: "dep", address: "0xodec" }],
            },
            {
              address: "0xbeef2",
              dependencies: [{ name: "dep", address: "0xcode" }],
            },
            {
              address: "0xbeef3",
              dependencies: [{ name: "dep", address: "0xcode" }],
            },
          ],
        },
      },
    };

    const testDeployments = [testUnreleasedDeployment, testReleasedDeployment];

    expect(
      findLatestDeploymentPerNetwork(
        { released: true, dependencies: [{ name: "dep", address: "0xcode" }] },
        testDeployments,
      ),
    ).to.deep.equal({
      "1": {
        ...getVersionDeploymentBaseInfo(testReleasedDeployment),
        network: "1",
        address:
          testReleasedDeployment.networkAddresses["1"].allAddresses[1].address,
        dependencies:
          testReleasedDeployment.networkAddresses["1"].allAddresses[1]
            .dependencies,
      },
    });
  });

  it("should handle multiple networks", () => {
    const testReleasedDeployment: VersionDeployments = {
      contractName: "a",
      deploymentName: "b",
      version: "1",
      released: true,
      abi: [{ foo: "bar" }],
      networkAddresses: {
        "1": {
          primaryAddress: "0xbeef1",
          allAddresses: [
            {
              address: "0xbeef1",
              dependencies: [{ name: "dep", address: "0xcode1" }],
            },
          ],
        },
        "2": {
          primaryAddress: "0xbeef2",
          allAddresses: [
            {
              address: "0xbeef2",
              dependencies: [{ name: "dep", address: "0xcode2" }],
            },
          ],
        },
      },
    };

    const testDeployments = [testReleasedDeployment];

    expect(
      findLatestDeploymentPerNetwork({ released: true }, testDeployments),
    ).to.deep.equal({
      "1": {
        ...getVersionDeploymentBaseInfo(testReleasedDeployment),
        network: "1",
        address:
          testReleasedDeployment.networkAddresses["1"].allAddresses[0].address,
        dependencies:
          testReleasedDeployment.networkAddresses["1"].allAddresses[0]
            .dependencies,
      },
      "2": {
        ...getVersionDeploymentBaseInfo(testReleasedDeployment),
        network: "2",
        address:
          testReleasedDeployment.networkAddresses["2"].allAddresses[0].address,
        dependencies:
          testReleasedDeployment.networkAddresses["2"].allAddresses[0]
            .dependencies,
      },
    });
  });
});
