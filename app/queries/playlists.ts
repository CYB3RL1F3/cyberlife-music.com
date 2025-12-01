import { gql } from '@apollo/client';

import playlistQuery from '~/gql/queries/playlist.gql';
import playlistFragment from '~/gql/fragments/playlist.gql';
import { profile } from '~/config';
import { runQuery } from '~/utils/graphql';
import trackFragment from '~/gql/fragments/track.gql';
import { PlaylistQuery, PlaylistQueryVariables } from '~/types/gql';

export const playlistGqlQuery = gql`
  ${trackFragment}
  ${playlistFragment}
  ${playlistQuery}
`;

export const runPlaylistQuery = async (
  name: PlaylistQueryVariables['name'],
) => {
  return await runQuery<PlaylistQuery, PlaylistQueryVariables>(
    playlistGqlQuery,
    {
      profile,
      name,
    },
  );
};
