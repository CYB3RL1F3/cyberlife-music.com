import { useEffect } from 'react';
import { usePlayerContext } from '~/components/contexts/PlayerContext';
import type { TrackPlayerContext } from '~/components/contexts/PlayerContext/PlayerContext.types';
import type { TrackType } from '~/utils/trackToBuffer';
import { getTrackToBuffer } from '~/utils/trackToBuffer';
import { useTrackContext } from './useTrackContext';

export const useTrackPlayer = (
  track: TrackType,
  contexts: TrackPlayerContext,
  extra?: Parameters<typeof getTrackToBuffer>[2],
) => {
  const playerContext = usePlayerContext();
  const bufferTrack = getTrackToBuffer(track, contexts, extra);

  useEffect(() => {
    playerContext.addTrackToBuffer(bufferTrack);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [extra?.nextId, contexts]);

  const trackPlayer = useTrackContext(bufferTrack.id);
  return trackPlayer;
};
