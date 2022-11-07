import { gql, useQuery } from "@apollo/client";
import { profile } from "~/config";
import releasesQuery from "~/gql/queries/releases.gql";
import type {
  ReleasesQuery,
  ReleasesQueryVariables
} from "~/types/gql/ReleasesQuery";

const query = gql`
  ${releasesQuery}
`;

export const useReleasesQuery = () => {
  return useQuery<ReleasesQuery, ReleasesQueryVariables>(query, {
    variables: {
      profile
    }
  });
};
