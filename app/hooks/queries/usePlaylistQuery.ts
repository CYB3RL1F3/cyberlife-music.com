import { gql, useQuery } from "@apollo/client";
import { profile } from "~/config";
import playlistQuery from "~/gql/queries/playlist.gql";
import type {
  PlaylistQuery,
  PlaylistQueryVariables
} from "~/types/gql/PlaylistQuery";

const query = gql`
  ${playlistQuery}
`;

export const usePlaylistQuery = (name: PlaylistQueryVariables["name"]) => {
  return useQuery<PlaylistQuery, PlaylistQueryVariables>(query, {
    variables: {
      profile,
      name
    }
  });
};
