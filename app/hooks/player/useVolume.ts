import { usePlayerContext } from "~/components/contexts/PlayerContext";

export const useVolume = () => {
  const { volume, setVolume } = usePlayerContext();
  return [volume, setVolume] as const;
};
