import type { useReleaseTrackPlayer } from '~/hooks/player/useReleaseTrackPlayer';
import { Release } from '~/types/gql';

export type TracklistItem = NonNullable<Release['tracklist']>[number];

export type PlayerReleaseTrackContainerProps = {
  track: Parameters<typeof useReleaseTrackPlayer>[0];
  release: Parameters<typeof useReleaseTrackPlayer>[1];
};
