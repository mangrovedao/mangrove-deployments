# Next version

- Add functions to get all or latest deployments matching a filter.
- Add function 'getLatestCoreContractsPerNetwork' to get the latest Mangrove deployments for each network along with the corresponding MgvOracle and MgvReader deployments.
- Add function 'getLatestStratContractsPerNetwork' to get the latest latest strat contract deployments for the latest Mangrove deployment for each network..
- Add dependencies to deployments. This allows querying for e.g. periphery or strat contracts that are tied to a specific Mangrove instance.

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
