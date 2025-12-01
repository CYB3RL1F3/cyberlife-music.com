import { usePlayerStore } from '~/hooks/stores/player/usePlayerStore';

import { useTrack } from './useTrack';

export const useCurrentTrackPlayer = () => {
  const { currentTrackId } = usePlayerStore();
  const trackPlayer = useTrack(currentTrackId || 0);
  return trackPlayer;
};
