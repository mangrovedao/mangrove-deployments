export type VersionDeployments = {
  contractName: string;
  deploymentName?: string;
  version: string;
  released: boolean;
  abi: any[];
  networkAddresses: Record<
    string,
    {
      primaryAddress: string;
      allAddresses: string[];
    }
  >;
};

export type DeploymentFilter = {
  version?: string;
  released?: boolean;
  network?: string;
  deploymentName?: string;
};
