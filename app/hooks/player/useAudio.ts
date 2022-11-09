import { usePlayerContext } from "~/components/contexts/PlayerContext";

export const useAudio = () => {
  const { currentAudioStream } = usePlayerContext();
  return currentAudioStream;
};
