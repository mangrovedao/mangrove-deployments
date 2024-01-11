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

export type VersionDeployments = {
  contractName: string;
  deploymentName?: string;
  version: string;
  released: boolean;
  abi: any[];
  networkAddresses: Record<
    string,
    {
      primaryAddress?: string;
      allAddresses: AddressAndDependencies[];
    }
  >;
};

export type DeploymentFilter = {
  version?: string;
  released?: boolean;
  network?: string;
  deploymentName?: string;
  dependencies?: Dependency[];
};
