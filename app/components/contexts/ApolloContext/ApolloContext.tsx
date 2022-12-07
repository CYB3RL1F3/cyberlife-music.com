import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  ApolloLink,
  InMemoryCache
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import type { ApolloContextProps } from "./ApolloContext.types";
import { omitDeep } from "~/utils/object";
import { getApiUrl } from "~/utils/config";

const cleanupLink = new ApolloLink((operation, forward) => {
  if (operation.variables) {
    operation.variables = omitDeep(operation.variables, "__typename");
  }
  return forward(operation);
});
export const getClient = () => {
  const link = setContext((operation, { headers }) => {
    // get the authentication token from local storage if it exists
    // return the headers to the context so httpLink can read them

    return {
      headers
    };
  });

  const uri = getApiUrl();

  const httpLink = createHttpLink({
    uri
  });

  const cache =
    typeof window !== "undefined"
      ? new InMemoryCache().restore(window.__APOLLO_STATE__)
      : new InMemoryCache();

  const client = new ApolloClient({
    link: link.concat(cleanupLink).concat(httpLink),
    cache,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "cache-and-network"
      }
    }
  });
  return client;
};

const ApolloContext = ({ children, client }: ApolloContextProps) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloContext;
