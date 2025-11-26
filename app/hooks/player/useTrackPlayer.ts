import { useEffect } from 'react';
import type { TrackType } from '~/utils/trackToBuffer';
import { getTrackToBuffer } from '~/utils/trackToBuffer';
import { useTrack } from './useTrack';
import { usePlayerStore } from '~/hooks/stores/player/usePlayerStore';

export const useTrackPlayer = (
  track: TrackType,
  extra?: Parameters<typeof getTrackToBuffer>[1],
) => {
  const { addTrackToBuffer } = usePlayerStore();
  const bufferTrack = getTrackToBuffer(track, extra);

  useEffect(() => {
    addTrackToBuffer(bufferTrack);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [extra?.nextId]);

  const trackPlayer = useTrack(bufferTrack.id);
  return trackPlayer;
};
