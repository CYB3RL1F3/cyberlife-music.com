// ApolloContext.tsx
import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';
import { BaseHttpLink } from '@apollo/client/link/http';

import { omitDeep } from '~/utils/object';
import { getApiUrl } from '~/utils/config';

import type { ApolloContextProps } from './ApolloContext.types';

// Déclare la shape de l'état hydraté si tu fais du SSR/SSG

const requestHandler: ApolloLink.RequestHandler = (operation, forward) => {
  if (operation.variables) {
    operation.variables = omitDeep(operation.variables, '__typename');
  }
  return forward(operation);
};

const cleanupLink = new ApolloLink(requestHandler);

export const getClient = () => {
  const httpLink = new BaseHttpLink({
    uri: getApiUrl(),
    // credentials: 'include', // décommente si tu utilises des cookies
  });

  const cache =
    typeof window !== 'undefined' && window.__APOLLO_STATE__
      ? new InMemoryCache().restore(window.__APOLLO_STATE__)
      : new InMemoryCache();

  const client = new ApolloClient({
    link: ApolloLink.from([cleanupLink, httpLink]),
    cache,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
      },
    },
    // ssrMode: typeof window === 'undefined', // active si rendu côté serveur
  });

  return client;
};

const ApolloContext = ({ children, client }: ApolloContextProps) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloContext;
