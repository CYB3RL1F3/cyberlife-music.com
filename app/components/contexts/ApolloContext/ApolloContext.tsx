// ApolloContext.tsx
import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import type { ApolloContextProps } from './ApolloContext.types';
import { omitDeep } from '~/utils/object';
import { getApiUrl } from '~/utils/config';
import { ApolloProvider } from '@apollo/client/react';
import { BaseHttpLink } from '@apollo/client/link/http';

// Déclare la shape de l'état hydraté si tu fais du SSR/SSG

// @ts-expect-error xxx
const cleanupLink = new ApolloLink((operation, forward) => {
  if (operation.variables) {
    operation.variables = omitDeep(operation.variables, '__typename');
  }
  // forward peut être undefined si la chaîne est vide (rare, mais safe)
  return forward ? forward(operation) : null;
});

export const getClient = () => {
  const authLink = setContext((_, { headers }) => {
    // Place ici tes tokens/headers custom si besoin
    return { headers };
  });

  const httpLink = new BaseHttpLink({
    uri: getApiUrl(),
    // credentials: 'include', // décommente si tu utilises des cookies
  });

  const cache =
    typeof window !== 'undefined' && window.__APOLLO_STATE__
      ? new InMemoryCache().restore(window.__APOLLO_STATE__)
      : new InMemoryCache();

  const client = new ApolloClient({
    // @ts-expect-error xxx
    link: ApolloLink.from([authLink, cleanupLink, httpLink]),
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
