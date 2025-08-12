export type Response<T> = {
  status: number;
  data: T;
};
export type ErrorResponse = {
  code: number;
  message: string;
};

export type GeneralResponse = {
  code: number;
  message: string;
};

type Network = "testnet" | "mainnet" | "cyan" | "aqua" | "celeste";
type Chain = "evm" | "solana" | "casper" | "other";

export type Team = {
  id: number;
  name: string;
  display_name: string;
};
export type GetOrganizationsResponse = {
  teams: Team[];
};

export type Project = {
  name: string;
  network: Network;
  project_id: string;
  project_secret: string;
  user_id: string;
  team_id: number;
};

type PlatformType =
  | "web"
  | "react_native"
  | "android"
  | "ios"
  | "flutter"
  | "unreal"
  | "unity";

export type GetProjectResponse = {
  project: Project;
};

export type GetProjectsResponse = {
  projects: Project[];
};

export type CreateProjectRequest = {
  name: string;
  network: Network;
  chain_namespaces: [
    {
      chain_namespace: Chain;
      wallet_permission: boolean;
    },
  ];
  products?: string[];
  platform_types: PlatformType[];
  team_id: number;
};
export type CreateProjectResponse = {
  message: string;
  project_id: string;
};
export type ChainConfigRequest = {
  id?: Number; //for updating an existing chain
  chain_namespace: Chain;
  wallet_permission?: boolean;
  is_deleted?: boolean;
};
export type UpdateProjectRequest = {
  name: string;
  network: Network;
  chain_namespaces?: ChainConfigRequest[];
  platform_types?: PlatformType[];
  team_id: number;
};

export type ChainNamespace = {
  ID: number;
  chain_namespace: Chain;
  wallet_permission: boolean;
  project_id: string;
};
export type GetChainNamespacesResponse = {
  chain_namespaces: ChainNamespace[];
};

export type CreateWhitelistRequest = {
  url: string;
  team_id: number;
};
export type GetWhitelistsResponse = {
  urls: string[] | null;
  signed_urls: Record<string, string>;
};
export type DeleteWhitelistRequest = {
  url: string;
};

export interface DBChainConfigItem {
  chainId: string;
  rpcTarget: string;
  enabled: boolean;
  wsTarget?: string;
  isCustomNetwork?: boolean;
  isTestnet?: boolean;
  chainNamespace?: string;
  displayName?: string;
  blockExplorerUrl?: string;
  ticker?: string;
  tickerName?: string;
  logo?: string;
  decimals?: number;
}
export type DBChainConfig = Array<DBChainConfigItem>;
