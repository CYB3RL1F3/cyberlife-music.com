import { gql, useQuery } from "@apollo/client";
import { profile } from "~/config";
import postQuery from "~/gql/queries/post.gql";
import postFragments from "~/gql/fragments/post.gql";
import type { PostQuery, PostQueryVariables } from "~/types/gql/PostQuery";

const query = gql`
  ${postFragments}
  ${postQuery}
`;

export const usePostQuery = (id: string) => {
  return useQuery<PostQuery, PostQueryVariables>(query, {
    variables: {
      profile,
      id
    }
  });
};
