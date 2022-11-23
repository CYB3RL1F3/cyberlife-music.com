import type { DocumentNode, OperationVariables } from "@apollo/client";
import { getClient } from "~/components/contexts/ApolloContext/ApolloContext";

export const runQuery = async <T, V extends OperationVariables = {}>(
  query: DocumentNode,
  variables: V
) => {
  const graphQlClient = getClient();
  const res = await graphQlClient.query<T, V>({
    query,
    variables
  });
  return res;
};

export const runMutation = async <T, V extends OperationVariables = {}>(
  mutation: DocumentNode,
  variables: V
) => {
  const graphQlClient = getClient();
  const res = await graphQlClient.mutate<T, V>({
    mutation,
    variables
  });
  return res;
};
