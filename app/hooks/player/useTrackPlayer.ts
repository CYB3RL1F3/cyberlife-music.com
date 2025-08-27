import { useEffect } from 'react';
import { usePlayerContext } from '~/components/contexts/PlayerContext';
import type { TrackType } from '~/utils/trackToBuffer';
import { getTrackToBuffer } from '~/utils/trackToBuffer';
import { useTrackContext } from './useTrackContext';

export const useTrackPlayer = (
  track: TrackType,
  extra?: Parameters<typeof getTrackToBuffer>[1],
) => {
  const playerContext = usePlayerContext();
  const bufferTrack = getTrackToBuffer(track, extra);

  useEffect(() => {
    playerContext.addTrackToBuffer(bufferTrack);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [extra?.nextId]);

  const trackPlayer = useTrackContext(bufferTrack.id);
  return trackPlayer;
};
