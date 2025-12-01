import { SaveSubscription } from '~/utils/server/pwa-utils.server';
import type { LoaderFunction, ActionFunction } from '@remix-run/node';

export const action: ActionFunction = async ({ request }) => {
  const data = await request.json();
  const subscription = data.subscription;

  SaveSubscription(subscription);

  return { message: 'Done' };
};

export const loader: LoaderFunction = async () => {
  if (!process.env.APPLICATION_KEY) {
    console.error('Application public key is not set in environment variables');
    return null;
  }

  const publicKey = process.env.APPLICATION_KEY;

  return new Response(publicKey, {
    status: 202,
    statusText: 'Successful Operation',
  });
};
