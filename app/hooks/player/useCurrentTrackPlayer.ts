import { usePlayerContext } from "~/components/contexts/PlayerContext";
import { useTrackContext } from "./useTrackContext";

export const useCurrentTrackPlayer = () => {
  const context = usePlayerContext();
  const id = context.currentTrackId;
  const trackPlayer = useTrackContext(id || 0);
  return trackPlayer;
};
