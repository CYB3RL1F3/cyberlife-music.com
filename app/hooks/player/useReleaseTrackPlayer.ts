import { useTrackPlayer } from './useTrackPlayer';
import type { ReleaseFragmentTracklistStream } from '~/types/gql/ReleaseFragment';

export const useReleaseTrackPlayer = (
  track: ReleaseFragmentTracklistStream,
  extra?: Parameters<typeof useTrackPlayer>[1],
) => {
  const playerContext = useTrackPlayer(track, extra);
  return playerContext;
};
