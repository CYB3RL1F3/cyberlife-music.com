import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Environment } from '~/types/gql';

export const loader: LoaderFunction = async () => {
  return json(
    {
      api: process.env.API_URL,
      notificationPoolId: process.env.NOTIFICATION_POOL_ID,
      env: Environment[process.env.ENV as keyof typeof Environment],
      mapbox: {
        accessToken: process.env.MAPBOX_API_KEY,
        style: 'mapbox://styles/cyberlife/cjq9kpl33b01d2smvny3ciast',
      },
    },
    {
      status: 200,
      headers: {
        'Cache-Control': 'public, max-age=60',
      },
    },
  );
};
