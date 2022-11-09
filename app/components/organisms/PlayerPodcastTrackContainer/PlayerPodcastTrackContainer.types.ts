import type { usePodcastTrackPlayer } from "~/hooks/player/usePodcastTrackPlayer";

export type PlayerPodcastTrackContainerProps = {
  track: Parameters<typeof usePodcastTrackPlayer>[0];
};
