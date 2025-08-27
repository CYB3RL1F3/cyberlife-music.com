import type { useReleaseTrackPlayer } from '~/hooks/player/useReleaseTrackPlayer';

export type ReleaseActionPlayContainerProps = {
  track: Parameters<typeof useReleaseTrackPlayer>[0];
  album?: string | null;
  artist?: string | null;
  nextId?: number | null;
  prevId?: number | null;
};
