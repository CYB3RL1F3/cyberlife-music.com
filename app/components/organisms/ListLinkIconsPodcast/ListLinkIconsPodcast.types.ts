import type { PlaylistQueryPlaylistTracks } from "~/types/gql/PlaylistQuery";
import type { TrackFragment } from "~/types/gql/TrackFragment";

export type ListLinkIconsPodcastProps = {
  podcast: TrackFragment | PlaylistQueryPlaylistTracks;
};
