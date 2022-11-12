import { gql, useQuery } from "@apollo/client";
import { profile } from "~/config";
import trackQuery from "~/gql/queries/track.gql";
import trackSnippetFragment from "~/gql/fragments/trackSnippet.gql";
import trackFragment from "~/gql/fragments/track.gql";

import type {
  PlaylistTrackQuery,
  PlaylistTrackQueryVariables
} from "~/types/gql/PlaylistTrackQuery";

const query = gql`
  ${trackSnippetFragment}
  ${trackFragment}
  ${trackQuery}
`;

export const usePlaylistTrackQuery = (
  trackId: PlaylistTrackQueryVariables["trackId"]
) => {
  return useQuery<PlaylistTrackQuery, PlaylistTrackQueryVariables>(query, {
    variables: {
      profile,
      trackId
    }
  });
};
