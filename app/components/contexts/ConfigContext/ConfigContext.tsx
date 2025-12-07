import { createContext } from 'react';

import { Environment } from '~/types/gql';

import type { ConfigContextValues } from './ConfigContext.types';

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
    isMaintenance: false,
  },
});
