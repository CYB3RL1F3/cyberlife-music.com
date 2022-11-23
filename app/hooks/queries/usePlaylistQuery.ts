import { useQuery } from "@apollo/client";
import { profile } from "~/config";
import type {
  PlaylistQuery,
  PlaylistQueryVariables
} from "~/types/gql/PlaylistQuery";
import { playlistGqlQuery } from "~/queries/playlists";

export const usePlaylistQuery = (name: PlaylistQueryVariables["name"]) => {
  return useQuery<PlaylistQuery, PlaylistQueryVariables>(playlistGqlQuery, {
    variables: {
      profile,
      name
    }
  });
};
