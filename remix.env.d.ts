/// <reference types="@remix-run/node" />

interface Window {
  __APOLLO_STATE__: any;
  ENV: {
    mapbox: {
      accessToken: string;
      style: string;
    };
    api: string;
    apiEndpoint: string;
    notificationPoolId: string;
  };
}
