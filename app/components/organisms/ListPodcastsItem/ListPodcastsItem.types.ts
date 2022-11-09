import type {
  PlaylistQueryPlaylist,
  PlaylistQueryPlaylistTracks
} from "~/types/gql/PlaylistQuery";

export type ListPodcastsItemProps = {
  podcast: PlaylistQueryPlaylistTracks;
  artworkFallback?: PlaylistQueryPlaylist["artwork"];
};
