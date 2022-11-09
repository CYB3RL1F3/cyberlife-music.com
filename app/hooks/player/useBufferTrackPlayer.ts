import { useEffect } from "react";
import { usePlayerContext } from "~/components/contexts/PlayerContext";
import type { TrackToBuffer } from "~/components/contexts/PlayerContext/PlayerContext.types";
import { useTrackPlayer } from "./useTrackPlayer";

export const useBufferTrackPlayer = (track: TrackToBuffer) => {
  const playerContext = usePlayerContext();

  useEffect(() => {
    playerContext.addTrack(track);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const trackPlayer = useTrackPlayer(track.id);
  return trackPlayer;
};
