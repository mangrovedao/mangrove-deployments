/**
 * @module
 *
 * Utilities used by the Mangrove smart contract repos.
 */

import { VersionNetworkDeployment } from "./types";
import semver from "semver";

/** Network names used in Mangrove smart contract repos.
 *
 * Taken from ethers.js 5.7 which is used by the Mangrove smart contract repos.
 *
 * Differences:
 * - "homestead" -> "mainnet"
 * - "local" for 31337
 */
export const mangroveNetworkNames = {
  "1": "mainnet",
  "2": "morden",
  "3": "ropsten",
  "4": "rinkeby",
  "5": "goerli",
  "6": "classicKotti",
  "10": "optimism",
  "56": "bnb",
  "42": "kovan",
  "61": "classic",
  "63": "classicMordor",
  "69": "optimism-kovan",
  "97": "bnbt",
  "100": "xdai",
  "137": "matic",
  "420": "optimism-goerli",
  "42161": "arbitrum",
  "80001": "maticmum",
  "31337": "local",
  "421611": "arbitrum-rinkeby",
  "421613": "arbitrum-goerli",
  "1337702": "kintsugi",
  "11155111": "sepolia",
} as Record<string, string>;

/**
 * Transform {@link CoreContractsNetworkDeployment} and {@link StratContractsNetworkDeployment} (possibly both)
 * to a structure that can be easily serialized the JSON format used by the Mangrove smart contract repos when
 * reading addresses:
 *
 * ```
 * {
 *   "mainnet": [
 *     { "name": "Mangrove", "address": "0x..." },
 *     { "name": "MgvOracle", "address": "0x..." },
 *     ...
 *   ],
 *   "maticmum": ...
 * }
 * ```
 *
 * @param deploymentsPerNetworkList List of deployments to transform, i.e. {@link CoreContractsNetworkDeployment} or {@link StratContractsNetworkDeployment} (possibly both).
 * @returns Named addresses grouped by named network.
 */
export function toNamedAddressesPerNamedNetwork<
  T extends Record<
    string,
    Record<string, VersionNetworkDeployment | undefined>
  >,
>(
  ...deploymentsPerNetworkList: T[]
): Record<string, { name: string; address: string }[]> {
  const namedAddressesByNetwork: Record<
    string,
    { name: string; address: string }[]
  > = {};
  for (const deploymentsPerNetwork of deploymentsPerNetworkList) {
    for (const [network, versionNetworkDeployments] of Object.entries(
      deploymentsPerNetwork,
    )) {
      const networkName = mangroveNetworkNames[network];
      let namedAddresses = namedAddressesByNetwork[networkName];
      if (namedAddresses === undefined) {
        namedAddresses = namedAddressesByNetwork[networkName] = [];
      }
      for (const versionNetworkDeployment of Object.values(
        versionNetworkDeployments,
      )) {
        if (versionNetworkDeployment === undefined) {
          continue;
        }
        const name =
          versionNetworkDeployment.deploymentName ??
          versionNetworkDeployment.contractName;
        const address = versionNetworkDeployment.address;
        const existingAddress = namedAddresses.find((a) => a.name == name);
        if (existingAddress !== undefined) {
          if (existingAddress.address != address) {
            throw new Error(
              `Duplicate named address for ${name} on ${networkName} with different addresses: ${address} and ${existingAddress.address}`,
            );
          } else {
            continue;
          }
        }
        namedAddresses.push({ name, address });
      }
    }
  }
  return namedAddressesByNetwork;
}

/** Create an appropriate SemVer pattern for use when querying for deployments that are compatible
 * with a given contract package version.
 *
 * For release versions of contract packages, any deployment of the same major.minor version,
 * _excluding_ prereleases, is considered compatible.
 *
 * For pre-release versions of contract packages, any deployment of the same major.minor version,
 * _including_ prereleases, is considered compatible.
 * This is achieved by replacing the last prerelease component by 0 and using the caret '^' pattern.
 * This pattern is equivalent to '>= x.y.z-0 < x+1.0.0'.
 *
 * Examples:
 * - 2.0.0-alpha.1 => ^2.0.0-alpha.0
 * - 2.0.0-4       => ^2.0.0-0
 *
 * @param contractPackageVersion The version of the contract package to create a pattern for.
 * @returns A SemVer pattern that matches all versions of the contract package that are compatible
 *          with the given version.
 */
export function createContractVersionPattern(
  contractPackageVersion: string,
): string {
  const prereleaseComponents = semver.prerelease(contractPackageVersion);
  if (prereleaseComponents === null) {
    return `^${semver.major(contractPackageVersion)}.${semver.minor(
      contractPackageVersion,
    )}.0`;
  } else {
    const patternPrereleaseComponents = [...prereleaseComponents];
    patternPrereleaseComponents[patternPrereleaseComponents.length - 1] = "0";
    return `^${semver.major(contractPackageVersion)}.${semver.minor(
      contractPackageVersion,
    )}.${semver.patch(
      contractPackageVersion,
    )}-${patternPrereleaseComponents.join(".")}`;
  }
}
