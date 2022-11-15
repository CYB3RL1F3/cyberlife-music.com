import type { PlaylistQueryPlaylistTracks } from "~/types/gql/PlaylistQuery";
import { TrackFragment } from "~/types/gql/TrackFragment";

export type PodcastDetailsProps = {
  podcast: TrackFragment;
};
