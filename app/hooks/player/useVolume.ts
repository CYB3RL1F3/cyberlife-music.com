import { usePlayerStore } from '~/hooks/stores/player/usePlayerStore';

export const useVolume = () => {
  const { volume, setVolume } = usePlayerStore();
  return [volume, setVolume] as const;
};
