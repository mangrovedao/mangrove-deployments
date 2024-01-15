import { VersionDeployments, VersionNetworkDeployment } from "../../src/types";
import { getVersionDeploymentBaseInfo } from "../../src/utils";

export function firstVersionDeploymentsToVersionNetworkDeployment(
  versionDeployments: VersionDeployments,
  network: string,
): VersionNetworkDeployment {
  return {
    ...getVersionDeploymentBaseInfo(versionDeployments),
    network: network,
    address:
      versionDeployments.networkAddresses[network].allAddresses[0].address,
    dependencies:
      versionDeployments.networkAddresses[network].allAddresses[0].dependencies,
  };
}
