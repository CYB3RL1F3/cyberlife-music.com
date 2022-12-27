import { useTrackPlayer } from "./useTrackPlayer";
import type { PlaylistTrackQueryPlaylistTrack } from "~/types/gql/PlaylistTrackQuery";
import type { PlaylistQueryPlaylistTracks } from "~/types/gql/PlaylistQuery";

export const usePodcastTrackPlayer = (
  track: PlaylistTrackQueryPlaylistTrack | PlaylistQueryPlaylistTracks
) => {
  const url = `/podcasts/${track.id || 0}`;
  const contexts = {
    desktop: [`/`, url] as const,
    mobile: [url]
  };
  const playerContext = useTrackPlayer(track, contexts);
  return playerContext;
};
