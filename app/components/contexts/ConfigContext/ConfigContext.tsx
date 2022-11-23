import { createContext } from "react";
import type { ConfigContextValues } from "./ConfigContext.types";

export const ConfigContext = createContext<ConfigContextValues>({
  config: {
    API_URL: "",
    NOTIFICATION_POOL_ID: "",
    mapbox: {
      accessToken: "",
      style: ""
    }
  }
});
