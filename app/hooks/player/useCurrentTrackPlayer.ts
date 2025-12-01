import { useTrack } from './useTrack';
import { usePlayerStore } from '~/hooks/stores/player/usePlayerStore';

export const useCurrentTrackPlayer = () => {
  const { currentTrackId } = usePlayerStore();
  const trackPlayer = useTrack(currentTrackId || 0);
  return trackPlayer;
};
