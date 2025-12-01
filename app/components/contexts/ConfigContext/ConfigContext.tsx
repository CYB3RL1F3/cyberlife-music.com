import { createContext } from 'react';
import type { ConfigContextValues } from './ConfigContext.types';
import { Environment } from '~/types/gql';

export const ConfigContext = createContext<ConfigContextValues>({
  config: {
    api: '',
    apiEndpoint: '',
    notificationPoolId: '',
    env: Environment.Prod,
    paypal: {
      clientId: '',
      baseUrl: '',
    },
    webshopId: '',
    domain: '',
    contactEmail: '',
    mapbox: {
      accessToken: '',
      style: '',
    },
  },
});
