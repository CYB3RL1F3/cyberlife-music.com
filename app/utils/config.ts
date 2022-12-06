import type { Config } from "~/components/contexts/ConfigContext/ConfigContext.types";
import dotenv from "dotenv";

export const getServerConfig = (): Config | null => {
  const { parsed } = dotenv.config();
  if (typeof process !== "undefined" && process.env) {
    return {
      api: parsed?.API_URL || process.env.API_URL || "",
      apiEndpoint: parsed?.API_ENDPOINT || process.env.API_ENDPOINT || "",
      notificationPoolId:
        parsed?.NOTIFICATION_POOL_ID || process.env.NOTIFICATION_POOL_ID || "",
      mapbox: {
        accessToken: parsed?.MAPBOX_API_KEY || process.env.MAPBOX_API_KEY || "",
        style: "mapbox://styles/cyberlife/cjq9kpl33b01d2smvny3ciast"
      }
    };
  }
  return null;
};

export const getConfig = (): Config | null => {
  if (typeof process !== "undefined" && process.env) {
    return getServerConfig();
  }
  if (typeof window !== "undefined" && window.ENV) {
    return window["ENV"];
  }
  return null;
};

export const getApiUrl = () => {
  const config = getConfig();
  return config?.api;
};

export const getApiEndpoint = () => {
  const config = getConfig();
  return config?.apiEndpoint;
};
