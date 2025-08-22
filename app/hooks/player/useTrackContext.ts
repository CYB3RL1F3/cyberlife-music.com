import { usePlayerContext } from '~/components/contexts/PlayerContext';
import { useMemo } from 'react';

export const useTrackContext = (id: number) => {
  const {
    buffer,
    currentTrackId,
    volume,
    jumping,
    currentContext,
    playing,
    ...playerContext
  } = usePlayerContext();

  const currentTrack = useMemo(() => buffer[id], [buffer, id]);

  const isCurrentTrack = currentTrackId === id;

  const isPlaying = useMemo(
    () => isCurrentTrack && playing,
    [isCurrentTrack, playing],
  );

  const togglePlay = () => {
    if (!isPlaying || !isCurrentTrack) {
      playerContext.play(id);
      return;
    }
    playerContext.pause(id);
  };

  const setLoad = (value: number) => playerContext.setLoad(id, value);
  const setSeek = (value: number, jumping?: boolean) => {
    playerContext.setSeek(id, value, jumping);
  };

  const isInCurrentContext =
    currentContext &&
    currentTrack?.contexts?.desktop &&
    currentTrack.contexts.desktop.includes(currentContext);

  const onEnded = () => {
    const nextId = currentTrack?.nextId;
    if (!nextId) return;
    playerContext.play(nextId, true);
  };

  return {
    load: currentTrack?.load || 0,
    seek: currentTrack?.seek || 0,
    url: currentTrack?.url || undefined,
    waveform: currentTrack?.waveform,
    title: currentTrack?.title,
    duration: currentTrack?.duration,
    isInCurrentContext,
    isPlaying,
    isCurrentTrack,
    volume,
    jumping,
    togglePlay,
    setLoad,
    setSeek,
    id,
    onEnded,
  };
};
