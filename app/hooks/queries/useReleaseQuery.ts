import { gql, useQuery } from "@apollo/client";
import { profile } from "~/config";
import releaseQuery from "~/gql/queries/release.gql";
import type {
  ReleaseQuery,
  ReleaseQueryVariables
} from "~/types/gql/ReleaseQuery";

const query = gql`
  ${releaseQuery}
`;

export const useReleaseQuery = (id: string) => {
  return useQuery<ReleaseQuery, ReleaseQueryVariables>(query, {
    variables: {
      profile,
      id
    }
  });
};
