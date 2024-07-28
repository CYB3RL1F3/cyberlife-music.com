import type { ReactNode } from "react";
import type { Environment } from "~/types/gql/globalTypes";

export type Config = {
  mapbox: {
    accessToken: string;
    style: string;
  };
  api: string;
  apiEndpoint: string;
  notificationPoolId: string;
  env: Environment;
};

export type ConfigContextValues = {
  config: Config;
  setConfig?: (config: Config) => void;
};

export type ConfigContextProviderProps = {
  config: Config;
  children: ReactNode;
};
