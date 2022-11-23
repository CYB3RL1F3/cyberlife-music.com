import { gql } from "@apollo/client";
import { profile } from "~/config";
import releaseQuery from "~/gql/queries/release.gql";
import releaseFragments from "~/gql/fragments/release.gql";
import releasesFragments from "~/gql/fragments/releases.gql";
import type {
  ReleaseQuery,
  ReleaseQueryVariables
} from "~/types/gql/ReleaseQuery";
import { runQuery } from "~/utils/graphql";

export const releaseGqlQuery = gql`
  ${releasesFragments}
  ${releaseFragments}
  ${releaseQuery}
`;

export const runReleaseQuery = (id: string) => {
  return runQuery<ReleaseQuery, ReleaseQueryVariables>(releaseGqlQuery, {
    profile,
    id
  });
};
