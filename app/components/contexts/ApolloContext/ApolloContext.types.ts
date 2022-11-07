import type { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import type { ReactNode } from "react";

export type ApolloContextProps = {
  children?: ReactNode;
  client: ApolloClient<NormalizedCacheObject>;
};
