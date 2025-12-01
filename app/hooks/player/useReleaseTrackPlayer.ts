import { Track } from '~/types/gql';
import { useTrackPlayer } from './useTrackPlayer';

export const useReleaseTrackPlayer = (
  track: Track,
  extra?: Parameters<typeof useTrackPlayer>[1],
) => {
  const releaseTrackPlayer = useTrackPlayer(track, extra);
  return releaseTrackPlayer;
};
