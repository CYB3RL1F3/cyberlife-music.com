import { gql } from '@apollo/client';
import { profile } from '~/config';
import videosQuery from '~/gql/queries/videos.gql';
import videoFragments from '~/gql/fragments/video.gql';
import type { VideosQuery, VideosQueryVariables } from '~/types/gql';
import { runQuery } from '~/utils/graphql';

export const videosGqlQuery = gql`
  ${videoFragments}
  ${videosQuery}
`;

export const runVideosQuery = () => {
  return runQuery<VideosQuery, VideosQueryVariables>(videosGqlQuery, {
    profile,
  });
};
