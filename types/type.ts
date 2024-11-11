export interface GithubRepo {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
}

export interface GithubAccount {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
}

export interface InstallationWebhook {
  action: string;
  account: object;
  installation: {
    id: number;
    account: GithubAccount;
    repository_selection: string;
    app_id: number;
    target_type: string;
    permissions: Record<string, string>;
  };
  repositories: GithubRepo[];
}
