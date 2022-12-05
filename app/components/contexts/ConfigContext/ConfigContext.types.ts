import type { ReactNode } from "react";

export type Config = {
  mapbox: {
    accessToken: string;
    style: string;
  };
  api: string;
  apiEndpoint: string;
  notificationPoolId: string;
};

export type ConfigContextValues = {
  config: Config;
  setConfig?: (config: Config) => void;
};

export type ConfigContextProviderProps = {
  config: Config;
  children: ReactNode;
};
