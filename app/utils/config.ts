import type { Config } from "~/components/contexts/ConfigContext/ConfigContext.types";

export const getServerConfig = (): Config | null => {
  if (typeof process !== "undefined" && process.env) {
    return {
      api: process.env.API_URL || "",
      apiEndpoint: process.env.API_ENDPOINT || "",
      notificationPoolId: process.env.NOTIFICATION_POOL_ID || "",
      mapbox: {
        accessToken: process.env.MAPBOX_API_KEY || "",
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
    return window.ENV;
  }
  return null;
};

export const getApiUrl = () => {
  const config = getConfig();
  console.log("CONFIG >>>> ", config);
  return config?.api;
};

export const getApiEndpoint = () => {
  const config = getConfig();
  console.log("CONFIG >> ", config);
  return config?.apiEndpoint;
};
