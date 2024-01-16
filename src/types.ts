/**
 * Contract deployments are normally tied to other deployments, such as the Mangrove contract.
 * This is captured by a dependency, which consists of a deployment or contract name and an address.
 */
export type Dependency = {
  name: string;
  address: string;
};

export type AddressAndDependencies = {
  address: string;
  dependencies?: Dependency[];
};

export type VersionDeploymentBaseInfo = {
  contractName: string;
  deploymentName?: string;
  version: string;
  released: boolean;
  abi: any[];
};

export type VersionDeployments = VersionDeploymentBaseInfo & {
  networkAddresses: Record<
    string,
    {
      primaryAddress?: string;
      allAddresses: AddressAndDependencies[];
    }
  >;
};

export type VersionNetworkDeployment = VersionDeploymentBaseInfo & {
  network: string;
  address: string;
  dependencies?: Dependency[];
};

/** A deployment of the core contracts on a network. */
export type CoreContractsNetworkDeployment = {
  mangrove: VersionNetworkDeployment;
  mgvOracle?: VersionNetworkDeployment;
  mgvReader?: VersionNetworkDeployment;
};

/** A deployment of the strat contracts on a network for a specific Mangrove deployment. */
export type StratContractsNetworkDeployment = {
  mangrove: VersionNetworkDeployment;
  aaveKandelSeeder?: VersionNetworkDeployment;
  aavePooledRouter?: VersionNetworkDeployment;
  kandelLib?: VersionNetworkDeployment;
  kandelSeeder?: VersionNetworkDeployment;
  mangroveOrderRouter?: VersionNetworkDeployment;
  mangroveOrder?: VersionNetworkDeployment;
};

export type DeploymentFilter = {
  version?: string;
  released?: boolean;
  network?: string;
  deploymentName?: string;
  dependencies?: Dependency[];
};
