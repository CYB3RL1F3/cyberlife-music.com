import { createContext } from "react";
import type { ConfigContextValues } from "./ConfigContext.types";

export const ConfigContext = createContext<ConfigContextValues>({
  config: {
    api: "",
    apiEndpoint: "",
    notificationPoolId: "",
    mapbox: {
      accessToken: "",
      style: ""
    }
  }
});
