/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/node" />

interface Window {
  __APOLLO_STATE__: any;
  ENV: {
    MAPBOX_API_KEY: string;
    api: string;
    notificationPoolId: string;
  };
}
