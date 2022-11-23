import { gql } from "@apollo/client";
import trackQuery from "~/gql/queries/track.gql";
import trackSnippetFragment from "~/gql/fragments/trackSnippet.gql";
import trackFragment from "~/gql/fragments/track.gql";

import type {
  PlaylistTrackQuery,
  PlaylistTrackQueryVariables
} from "~/types/gql/PlaylistTrackQuery";

import { runQuery } from "~/utils/graphql";
import { profile } from "~/config";

export const playlistTrackGqlQuery = gql`
  ${trackSnippetFragment}
  ${trackFragment}
  ${trackQuery}
`;

export const runPlaylistTrackQuery = async (
  trackId: PlaylistTrackQueryVariables["trackId"]
) => {
  return await runQuery<PlaylistTrackQuery, PlaylistTrackQueryVariables>(
    playlistTrackGqlQuery,
    {
      profile,
      trackId
    }
  );
};
