import type { PlaylistQueryPlaylist } from "~/types/gql/PlaylistQuery";

export type ListPodcastsProps = {
  podcasts?: PlaylistQueryPlaylist["tracks"];
  artwork?: PlaylistQueryPlaylist["artwork"];
};
