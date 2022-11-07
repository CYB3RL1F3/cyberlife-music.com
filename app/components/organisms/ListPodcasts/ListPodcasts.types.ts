import type { PlaylistQueryPlaylistTracks } from "~/types/gql/PlaylistQuery";

export type ListPodcastsProps = {
  podcasts?: PlaylistQueryPlaylistTracks[] | null;
};
