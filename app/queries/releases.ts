import { gql } from "@apollo/client";
import { profile } from "~/config";
import releasesQuery from "~/gql/queries/releases.gql";
import releaseFragments from "~/gql/fragments/releases.gql";
import type {
  ReleasesQuery,
  ReleasesQueryVariables
} from "~/types/gql/ReleasesQuery";
import { runQuery } from "~/utils/graphql";

export const releasesGqlQuery = gql`
  ${releaseFragments}
  ${releasesQuery}
`;

export const runReleasesQuery = () => {
  return runQuery<ReleasesQuery, ReleasesQueryVariables>(releasesGqlQuery, {
    profile
  });
};
