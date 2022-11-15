import React from "react";
import { ConfigContext } from "./ConfigContext";
import type { ConfigContextProviderProps } from "./ConfigContext.types";

const ConfigContextProvider = ({
  config,
  children
}: ConfigContextProviderProps) => {
  return (
    <ConfigContext.Provider
      value={{
        config
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
};

export default ConfigContextProvider;
