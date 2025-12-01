import { useEffect } from 'react';
import { getTrackToBuffer } from '~/utils/trackToBuffer';
import { useTrack } from './useTrack';
import { usePlayerStore } from '~/hooks/stores/player/usePlayerStore';
import { Track } from '~/types/gql';

export const useTrackPlayer = (
  track: Track,
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
