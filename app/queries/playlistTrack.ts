import { gql } from '@apollo/client';
import trackQuery from '~/gql/queries/track.gql';
import trackFragment from '~/gql/fragments/track.gql';

import type {
  PlaylistTrackQuery,
  PlaylistTrackQueryVariables,
} from '~/types/gql';

import { runQuery } from '~/utils/graphql';
import { profile } from '~/config';

export const playlistTrackGqlQuery = gql`
  ${trackFragment}
  ${trackQuery}
`;

export const runPlaylistTrackQuery = async (
  trackId: PlaylistTrackQueryVariables['trackId'],
  keyType: PlaylistTrackQueryVariables['keyType'],
) => {
  return await runQuery<PlaylistTrackQuery, PlaylistTrackQueryVariables>(
    playlistTrackGqlQuery,
    {
      profile,
      trackId,
      keyType,
    },
  );
};
