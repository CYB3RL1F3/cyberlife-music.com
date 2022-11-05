import {
  ApolloProvider as ReactApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink
} from "@apollo/client";
import type { ApolloProviderProps } from "./ApolloProvider.types";

const ApolloProvider = ({ children, request }: ApolloProviderProps) => {
  const client = new ApolloClient({
    ssrMode: true,
    cache: new InMemoryCache(),
    link: createHttpLink({
      uri: process.env.API_URL,
      headers: request.headers,
      credentials: request.credentials ?? "include" // or "same-origin" if your backend server is the same domain
    })
  });
  return <ReactApolloProvider client={client}>{children}</ReactApolloProvider>;
};

export default ApolloProvider;
