import { useTrackPlayer } from "./useTrackPlayer";
import type { PlaylistTrackQueryPlaylistTrack } from "~/types/gql/PlaylistTrackQuery";
import type { PlaylistQueryPlaylistTracks } from "~/types/gql/PlaylistQuery";
import { usePodcastTrackPosition } from "./usePodcastTrackPosition";

export const usePodcastTrackPlayer = (
  track: PlaylistTrackQueryPlaylistTrack | PlaylistQueryPlaylistTracks
) => {
  const url = `/podcasts/${track.slug}`;
  const contexts = {
    desktop: [`/`, url] as const,
    mobile: [url]
  };
  const { prevId, nextId } = usePodcastTrackPosition(track.id);
  const playerContext = useTrackPlayer(track, contexts, {
    artist: "Cyberlife",
    album: "Podcasts",
    nextId,
    prevId
  });
  return playerContext;
};
