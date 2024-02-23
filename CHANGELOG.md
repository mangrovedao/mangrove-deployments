# Next version

- Bump `context-addresses` to v1.1.4

# 2.1.0

## New features

- Add JSON schema for assets
- Include pre-releases when matching SemVer ranges

## New contracts supported

- `MangroveAmplifier` contract
- `SimpleAaveLogic` contract
- `RouterProxyFactory` contract

## New deployments

### Blast Sepolia

- core v2.1.0-0: `BlastMangrove`, `MgvOracle`, and `MgvReader`
- strats v2.1.0-0: `BlastMangroveAmplifier`, `BlastMangroveOrder-Router.json`, `BlastMangroveOrder`, and `BlastRouterProxyFactory`
- strats v2.0.1-0: `KandelLib` and `KandelSeeder`
- test ERC20: WBTC test token

### Polygon Mumbai

- strats v2.0.1-0: All strat contracts.
  - Except for `MangroveAmplifier` these are identical to the v2.0.0-b1.0 deployments, as no code was changed in-between; We duplicate them, so we can later simplify and just delete the v2.0.0-b1.0 deployments.
- strats v2.0.0-b1.0: `AaveKandelSeeder`, `AavePooledRouter`, `KandelLib`, `KandelSeeder`, `MangroveOrder`, `MangroveOrder-Router`, `RouterProxyFactory`, `SimpleAaveLogic`

# 2.0.2

- Add Blast Sepolia deployment of mangrove-core v2.0.1

# 2.0.1

- Use Mangrove network names from the [@mangrovedao/context-addresses](https://github.com/mangrovedao/context-addresses) package.

# 2.0.0

- Add dependencies to deployments. This allows querying for e.g. periphery or strat contracts that are tied to a specific Mangrove instance.
- Add functions to get all or latest deployments matching a filter.
- Add function 'getLatestCoreContractsPerNetwork' to get the latest Mangrove deployments for each network along with the corresponding MgvOracle and MgvReader deployments.
- Add function 'getLatestStratContractsPerNetwork' to get the latest latest strat contract deployments for the latest Mangrove deployment for each network.
- Add function 'createContractVersionPattern' to create an appropriate SemVer pattern for use when querying for deployments that are compatible with a given contract package version.
- Add function 'toNamedAddressesPerNamedNetwork' for transforming a query result to a structure that can be easily serialized the JSON format used by the Mangrove smart contract repos.

# 1.0.3

- Consolidate core testnet deployments in the v2.0.1 assets files. This is a workaround until a better querying mechanism is implemented which allows easy querying of the latest addresses for all networks.

# 1.0.2

- Add Sepolia deployment of mangrove-core v2.0.2

# 1.0.1

- Fix KandelLib address and ABI

# 1.0.0

- Initial version containing:
  - Mumbai deployments of mangrove-core 2.0.1 and mangrove-strats 1.0.0
  - Test token deployments to Mumbai and Polygon
