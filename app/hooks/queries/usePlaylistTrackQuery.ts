import { useQuery } from "@apollo/client";
import { profile } from "~/config";

import type {
  PlaylistTrackQuery,
  PlaylistTrackQueryVariables
} from "~/types/gql/PlaylistTrackQuery";
import { playlistTrackGqlQuery } from "~/queries/playlistTrack";

export const usePlaylistTrackQuery = (
  trackId: PlaylistTrackQueryVariables["trackId"],
  keyType: PlaylistTrackQueryVariables["keyType"] = "slug"
) => {
  return useQuery<PlaylistTrackQuery, PlaylistTrackQueryVariables>(
    playlistTrackGqlQuery,
    {
      variables: {
        profile,
        trackId,
        keyType
      }
    }
  );
};
