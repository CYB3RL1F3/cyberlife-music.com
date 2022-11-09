import { useBufferTrackPlayer } from "./useBufferTrackPlayer";
import type { PlaylistTrackQueryPlaylistTrack } from "~/types/gql/PlaylistTrackQuery";
import type { PlaylistQueryPlaylistTracks } from "~/types/gql/PlaylistQuery";
import { getTrackTobuffer } from "~/utils/trackToBuffer";

export const usePodcastTrackPlayer = (
  track: PlaylistTrackQueryPlaylistTrack | PlaylistQueryPlaylistTracks
) => {
  const contexts = [`/`, `/podcasts/${track.id || 0}`] as const;
  const toBuffer = getTrackTobuffer(track, contexts);
  const playerContext = useBufferTrackPlayer(toBuffer);
  return playerContext;
};
