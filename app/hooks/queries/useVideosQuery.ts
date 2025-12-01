import { useQuery } from '@apollo/client/react';
import { profile } from '~/config';
import { videosGqlQuery } from '~/queries/videos';
import { VideosQuery, VideosQueryVariables } from '~/types/gql';

export const useVideosQuery = () => {
  return useQuery<VideosQuery, VideosQueryVariables>(videosGqlQuery, {
    variables: {
      profile,
    },
  });
};
