import type { useReleaseTrackPlayer } from "~/hooks/player/useReleaseTrackPlayer";

export type ReleaseActionPlayContainerProps = {
  track: Parameters<typeof useReleaseTrackPlayer>[0];
  id: Parameters<typeof useReleaseTrackPlayer>[1];
};
