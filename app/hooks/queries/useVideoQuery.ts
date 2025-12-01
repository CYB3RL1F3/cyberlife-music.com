import { useQuery } from '@apollo/client/react';

import { profile } from '~/config';
import { videoGqlQuery } from '~/queries/video';
import { VideoQuery, VideoQueryVariables } from '~/types/gql';

export const useVideoQuery = (
  id: VideoQueryVariables['id'],
  keyType: VideoQueryVariables['keyType'] = 'slug',
) => {
  return useQuery<VideoQuery, VideoQueryVariables>(videoGqlQuery, {
    variables: {
      profile,
      id,
      keyType,
    },
  });
};
