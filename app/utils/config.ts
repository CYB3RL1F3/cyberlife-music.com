import type { Config } from '~/components/contexts/ConfigContext/ConfigContext.types';
import dotenv from 'dotenv';
import { Environment } from '~/types/gql';

export const getServerConfig = (): Config | null => {
  const { parsed } = dotenv.config();
  if (typeof process !== 'undefined' && process.env) {
    return {
      api: parsed?.API_URL || process.env.API_URL || '',
      apiEndpoint: parsed?.API_ENDPOINT || process.env.API_ENDPOINT || '',
      env: Environment[
        (parsed?.ENV || process.env.ENV || '') as keyof typeof Environment
      ],
      notificationPoolId:
        parsed?.NOTIFICATION_POOL_ID || process.env.NOTIFICATION_POOL_ID || '',
      mapbox: {
        accessToken: parsed?.MAPBOX_API_KEY || process.env.MAPBOX_API_KEY || '',
        style: 'mapbox://styles/cyberlife/cjq9kpl33b01d2smvny3ciast',
      },
      paypal: {
        clientId:
          parsed?.PAYPAL_CLIENT_ID || process.env.PAYPAL_CLIENT_ID || '',
        baseUrl: parsed?.PAYPAL_BASE_URL || process.env.PAYPAL_BASE_URL || '',
      },
      webshopId: parsed?.WEBSHOP_ID || process.env.WEBSHOP_ID || '',
      domain:
        parsed?.FRONT_URL ||
        process.env.FRONT_URL ||
        'https://cyberlife-music.com',
      contactEmail:
        parsed?.CONTACT_EMAIL ||
        process.env.CONTACT_EMAIL ||
        'contact@cyberlife-music.com',
    };
  }
  return null;
};

export const getConfig = (): Config | null => {
  if (typeof process !== 'undefined' && process.env) {
    return getServerConfig();
  }
  if (typeof window !== 'undefined' && window.ENV) {
    return window['ENV'] as Config;
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
