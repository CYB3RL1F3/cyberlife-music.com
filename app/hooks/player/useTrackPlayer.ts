import { useEffect } from "react";
import { usePlayerContext } from "~/components/contexts/PlayerContext";
import type { TrackPlayerContext } from "~/components/contexts/PlayerContext/PlayerContext.types";
import type { TrackType } from "~/utils/trackToBuffer";
import { getTrackTobuffer } from "~/utils/trackToBuffer";
import { useTrackContext } from "./useTrackContext";

export const useTrackPlayer = (
  track: TrackType,
  contexts: TrackPlayerContext
) => {
  const playerContext = usePlayerContext();
  const bufferTrack = getTrackTobuffer(track, contexts);

  useEffect(() => {
    playerContext.addTrackToBuffer(bufferTrack);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const trackPlayer = useTrackContext(bufferTrack.id);
  return trackPlayer;
};
