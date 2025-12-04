import type { usePodcastTrackPlayer } from '~/hooks/player/usePodcastTrackPlayer';

export type PodcastActionPlayContainerProps = {
  track: Parameters<typeof usePodcastTrackPlayer>[0];
  podcasts?: Parameters<typeof usePodcastTrackPlayer>[1];
};
