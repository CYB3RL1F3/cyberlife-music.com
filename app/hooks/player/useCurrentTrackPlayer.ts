import { usePlayerContext } from "~/components/contexts/PlayerContext";
import { useTrackPlayer } from "./useTrackPlayer";

export const useCurrentTrackPlayer = () => {
  const context = usePlayerContext();
  const id = context.currentTrackId;
  const trackPlayer = useTrackPlayer(id || 0);
  return trackPlayer;
};
