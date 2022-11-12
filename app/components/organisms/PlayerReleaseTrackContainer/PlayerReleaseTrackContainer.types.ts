import type { useReleaseTrackPlayer } from "~/hooks/player/useReleaseTrackPlayer";

export type PlayerReleaseTrackContainerProps = {
  track: Parameters<typeof useReleaseTrackPlayer>[0];
};
