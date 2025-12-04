import { useMemo } from 'react';

import { usePlayerStore } from '~/hooks/stores/player/usePlayerStore';

export const useTrack = (id: number) => {
  const {
    buffer,
    currentTrackId,
    volume,
    jumping,
    playing,
    play,
    pause,
    setLoad,
    setSeek,
  } = usePlayerStore();

  const currentTrack = buffer[id];

  const isCurrentTrack = currentTrackId === id;

  const isPlaying = isCurrentTrack && playing;

  const togglePlay = () => {
    if (!isPlaying || !isCurrentTrack) {
      play(id);
      return;
    }
    pause();
  };

  const setTrackLoad = (value: number) => {
    setLoad(id, value);
  };
  const setTrackSeek = (value: number, jumping?: boolean) => {
    setSeek(id, value, jumping);
  };

  const onEnded = () => {
    const nextId = currentTrack?.nextId;
    if (!nextId) return;
    play(nextId, true);
  };

  return {
    load: currentTrack?.load || 0,
    seek: currentTrack?.seek || 0,
    url: currentTrack?.url || undefined,
    waveform: currentTrack?.waveform,
    title: currentTrack?.title,
    duration: currentTrack?.duration,
    pageUrl: currentTrack?.pageUrl,
    nextId: currentTrack?.nextId,
    prevId: currentTrack?.prevId,
    isPlaying,
    isCurrentTrack,
    volume,
    jumping,
    togglePlay,
    setLoad: setTrackLoad,
    setSeek: setTrackSeek,
    id,
    onEnded,
  };
};
