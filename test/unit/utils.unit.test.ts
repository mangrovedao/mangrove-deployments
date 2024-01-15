import { describe, it } from "mocha";
import { expect } from "chai";

import {
  createContractVersionPattern,
  mangroveNetworkNames,
  toNamedAddressesPerNamedNetwork,
} from "../../src/utils";

describe("utils.ts", () => {
  describe("toNamedAddressesPerNamedNetwork", () => {
    it("should return empty object for empty input", () => {
      expect(toNamedAddressesPerNamedNetwork()).to.deep.equal({});
    });

    it("should ignore undefined deployments", () => {
      expect(
        toNamedAddressesPerNamedNetwork({ "1": { mangrove: undefined } }),
      ).to.deep.equal({
        mainnet: [],
      });
    });

    describe("should map chain IDs to network names", () => {
      Object.keys(mangroveNetworkNames).forEach((chainId) => {
        it(`should map chainId=${chainId} to network=${mangroveNetworkNames[chainId]}`, () => {
          expect(
            toNamedAddressesPerNamedNetwork({
              [chainId]: {
                mangrove: {
                  network: chainId,
                  address: "0x123",
                  contractName: "Mangrove",
                  abi: [{ foo: "bar" }],
                  version: "1.2.3",
                  released: true,
                },
              },
            }),
          ).to.deep.equal({
            [mangroveNetworkNames[chainId]]: [
              { name: "Mangrove", address: "0x123" },
            ],
          });
        });
      });
    });

    it("should use deployment name if present", () => {
      expect(
        toNamedAddressesPerNamedNetwork({
          "1": {
            mangrove: {
              network: "1",
              address: "0x123",
              contractName: "Mangrove",
              deploymentName: "DeploymentName",
              abi: [{ foo: "bar" }],
              version: "1.2.3",
              released: true,
            },
          },
        }),
      ).to.deep.equal({
        mainnet: [{ name: "DeploymentName", address: "0x123" }],
      });
    });

    it("should handle multiple networks", () => {
      expect(
        toNamedAddressesPerNamedNetwork({
          "1": {
            mangrove: {
              network: "1",
              address: "0x123",
              contractName: "Mangrove",
              deploymentName: "DeploymentName",
              abi: [{ foo: "bar" }],
              version: "1.2.3",
              released: true,
            },
          },
          "80001": {
            mangrove: {
              network: "80001",
              address: "0x321",
              contractName: "Mangrove",
              deploymentName: "DeploymentName",
              abi: [{ foo: "bar" }],
              version: "1.2.3",
              released: true,
            },
          },
        }),
      ).to.deep.equal({
        mainnet: [{ name: "DeploymentName", address: "0x123" }],
        maticmum: [{ name: "DeploymentName", address: "0x321" }],
      });
    });

    it("should handle multiple deployment objects", () => {
      expect(
        toNamedAddressesPerNamedNetwork(
          {
            "1": {
              mangrove: {
                network: "1",
                address: "0x123",
                contractName: "Mangrove",
                abi: [{ foo: "bar" }],
                version: "1.2.3",
                released: true,
              },
            },
          },
          {
            "1": {
              kandelLib: {
                network: "1",
                address: "0x321",
                contractName: "Kandel",
                deploymentName: "KandelLib",
                abi: [{ foo: "bar" }],
                version: "3.2.1",
                released: true,
              },
            },
          },
        ),
      ).to.deep.equal({
        mainnet: [
          { name: "Mangrove", address: "0x123" },
          { name: "KandelLib", address: "0x321" },
        ],
      });
    });

    it("should handle multiple deployment objects with same Mangrove if same address", () => {
      expect(
        toNamedAddressesPerNamedNetwork(
          {
            "1": {
              mangrove: {
                network: "1",
                address: "0x123",
                contractName: "Mangrove",
                abi: [{ foo: "bar" }],
                version: "1.2.3",
                released: true,
              },
            },
          },
          {
            "1": {
              mangrove: {
                network: "1",
                address: "0x123",
                contractName: "Mangrove",
                abi: [{ foo: "bar" }],
                version: "1.2.3",
                released: true,
              },
            },
          },
        ),
      ).to.deep.equal({
        mainnet: [{ name: "Mangrove", address: "0x123" }],
      });
    });

    it("should fail for multiple deployment objects with same Mangrove but different address", () => {
      expect(() =>
        toNamedAddressesPerNamedNetwork(
          {
            "1": {
              mangrove: {
                network: "1",
                address: "0x123",
                contractName: "Mangrove",
                abi: [{ foo: "bar" }],
                version: "1.2.3",
                released: true,
              },
            },
          },
          {
            "1": {
              mangrove: {
                network: "1",
                address: "0x321",
                contractName: "Mangrove",
                abi: [{ foo: "bar" }],
                version: "1.2.3",
                released: true,
              },
            },
          },
        ),
      ).to.throw;
    });
  });

  describe("createContractVersionPattern", () => {
    it("should return caret pattern with patch=0 for non-prerelease", () => {
      expect(createContractVersionPattern("1.2.3")).to.equal("^1.2.0");
    });

    it("should return caret pattern with sinlge pre-release component=0 for prerelease", () => {
      expect(createContractVersionPattern("1.2.3-4")).to.equal("^1.2.3-0");
    });

    it("should return caret pattern with last pre-release component=0 for prerelease", () => {
      expect(createContractVersionPattern("1.2.3-alpha.4")).to.equal(
        "^1.2.3-alpha.0",
      );
    });
  });
});
