import { gql, useQuery } from "@apollo/client";
import { profile } from "~/config";
import type { PostQuery, PostQueryVariables } from "~/types/gql/PostQuery";
import { postGqlQuery } from "~/queries/post";

export const usePostQuery = (id: string) => {
  return useQuery<PostQuery, PostQueryVariables>(postGqlQuery, {
    variables: {
      profile,
      id
    }
  });
};
