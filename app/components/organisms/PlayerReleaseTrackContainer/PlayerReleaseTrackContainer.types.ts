import type { usePodcastTrackPlayer } from "~/hooks/player/usePodcastTrackPlayer";

export type PlayerReleaseTrackContainerProps = {
  track: Parameters<typeof usePodcastTrackPlayer>[0];
};
