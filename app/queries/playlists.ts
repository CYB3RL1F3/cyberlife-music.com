import { gql } from "@apollo/client";
import playlistQuery from "~/gql/queries/playlist.gql";
import trackSnippetFragment from "~/gql/fragments/trackSnippet.gql";
import playlistFragment from "~/gql/fragments/playlist.gql";
import type {
  PlaylistQuery,
  PlaylistQueryVariables
} from "~/types/gql/PlaylistQuery";
import { profile } from "~/config";
import { runQuery } from "~/utils/graphql";

export const playlistGqlQuery = gql`
  ${trackSnippetFragment}
  ${playlistFragment}
  ${playlistQuery}
`;

export const runPlaylistQuery = async (
  name: PlaylistQueryVariables["name"]
) => {
  return await runQuery<PlaylistQuery, PlaylistQueryVariables>(
    playlistGqlQuery,
    {
      profile,
      name
    }
  );
};
