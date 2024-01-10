# Mangrove and Mangrove strats deployments

[![npm version](https://badge.fury.io/js/%40mangrovedao%2Fmangrove-deployments.svg)](https://badge.fury.io/js/%40mangrovedao%2Fmangrove-deployments)
[![CI](https://github.com/mangrovedao/mangrove-deployments/actions/workflows/ci.yml/badge.svg)](https://github.com/mangrovedao/mangrove-deployments/actions/workflows/ci.yml)

This repo contains a collection of deployments of the contracts of the Mangrove [core](https://github.com/mangrovedao/mangrove-core) and [strats](https://github.com/mangrovedao/mangrove-strats) contract repositories.

For each deployment the address on the different networks and the ABIs are available. To get an overview of the available versions check the available [JSON assets](./src/assets/).

## Install

- npm - `npm i @mangrovedao/mangrove-deployments`
- yarn - `yarn add @mangrovedao/mangrove-deployments`

## Usage

It is possible to directly use the JSON files in the [assets folder](./src/assets/) that contain the addresses and ABI definitions.

An alternative is to use the JavaScript library methods to query the deployments. The library supports different methods to get the deployment of a specific contract.

Each of the method takes an optional `DeploymentFilter` as a parameter:

```ts
type DeploymentFilter {
  version?: string;
  released?: boolean;      // Defaults to true.
  network?: string;        // Chain ID of the network
  deploymentName?: string; // An optional deployment name which may be used to differentiate
                           // between multiple deployments of the same contract version.
                           // Used eg for test token deployments to distinguish between tokens
                           // based on the same contract.
  dependencies?: {name: string, address: string};
                           // An optional list of dependencies in the form of a deployment or
                           // contract name and an address.
                           // Can eg be used to get deployments tied to a specific Mangrove instance.
}
```

The method will return a `VersionDeployments` object or `undefined` if no deployment was found for the specified filter.

```ts
type Dependency = {
  name: string;
  address: string;
};

type AddressAndDependencies = {
  address: string;
  dependencies?: Dependency[];
};

type VersionDeployments {
  contractName: string;
  deploymentName?: string;
  version: string;
  released: boolean;           // The deployment is of a released contract version;
  abi: any[];
  networkAddresses: Record<    // Addresses of the contract by network
    string,
    {
      primaryAddress?: string; // An optional primary deployment on the network which should normally be used
      allAddresses: AddressAndDependencies[];
                               // All deployments on the network of this contract version.
    }
  >;
}
```

Note that there might be more than one deployment of a given version. This is particularly relevant for the `Mangrove` contract which may be irrevocably disabled (via the `kill` governance method). If a Mangrove instance is killed the only way to reopen markets is to re-deploy.

- Core

```ts
// Returns the deployments of the latest released Mangrove contract version
const mangrove = getMangroveVersionDeployments();

// Returns latest contract version, even if not finally released yet
const mangroveNightly = getMangroveVersionDeployments({ released: undefined });

// Returns released contract version for specific network
const mangroveGörli = getMangroveVersionDeployments({ network: "5" });

// Returns released contract version for specific version
const mangrove200 = getMangroveVersionDeployments({ version: "2.0.0" });

// Similar methods exist for the MgvReader and MgvOracle contracts
// For these, one will often want to match a specific Mangrove instance
const mgvReader = getMgvReaderVersionDeployments({
  dependencies: [{ name: "Mangrove", address: "0x..." }],
});
const mgvOracle = getMgvOracleVersionDeployments({
  dependencies: [{ name: "Mangrove", address: "0x..." }],
});
```

- Strats

```ts
// MangroveOrder contract
const mangroveOrder = getMangroveOrderVersionDeployments({
  dependencies: [{ name: "Mangrove", address: "0x..." }],
});
const mangroveOrderRouter = getMangroveOrderRouterVersionDeployments({
  dependencies: [{ name: "Mangrove", address: "0x..." }],
});

// Kandel
const kandelSeeder = getKandelSeederVersionDeployments({
  dependencies: [{ name: "Mangrove", address: "0x..." }],
});
const aaveKandelSeeder = getAaveKandelSeederVersionDeployments({
  dependencies: [{ name: "Mangrove", address: "0x..." }],
});
const aavePooledRouter = getAavePooledRouterVersionDeployments({
  dependencies: [{ name: "Mangrove", address: "0x..." }],
});
```

- Test ERC20 tokens

```ts
const testDai = getTestErc20VersionDeployments({ deploymentName: "DAI" });
```

## Notes

This repo is based on [Safe Deployments](https://github.com/safe-global/safe-deployments).

A list of network information can be found at [chainid.network](https://chainid.network/).

## License

This library is released under MIT.
