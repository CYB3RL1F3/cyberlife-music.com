import type { ReactNode } from "react";
import type { Window } from "../../../../remix.env.d";

export type Config = Window["ENV"];

export type ConfigContextValues = {
  config: Config;
  setConfig?: (config: Config) => void;
};

export type ConfigContextProviderProps = {
  config: Config;
  children: ReactNode;
};
