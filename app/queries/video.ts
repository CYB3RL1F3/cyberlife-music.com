import { gql } from "@apollo/client";
import { profile } from "~/config";
import videoQuery from "~/gql/queries/video.gql";
import videoFragments from "~/gql/fragments/video.gql";
import type { VideoQuery, VideoQueryVariables } from "~/types/gql/VideoQuery";
import { runQuery } from "~/utils/graphql";

export const videoGqlQuery = gql`
  ${videoFragments}
  ${videoQuery}
`;

export const runVideoQuery = (id: string) => {
  return runQuery<VideoQuery, VideoQueryVariables>(videoGqlQuery, {
    profile,
    id
  });
};
