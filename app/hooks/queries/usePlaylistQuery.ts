import { useQuery } from '@apollo/client/react';

import { profile } from '~/config';
import { playlistGqlQuery } from '~/queries/playlists';
import { PlaylistQuery, PlaylistQueryVariables } from '~/types/gql';

export const usePlaylistQuery = (name: PlaylistQueryVariables['name']) => {
  return useQuery<PlaylistQuery, PlaylistQueryVariables>(playlistGqlQuery, {
    variables: {
      profile,
      name,
    },
  });
};
