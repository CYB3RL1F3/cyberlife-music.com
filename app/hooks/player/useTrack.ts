import dayjs from 'dayjs';
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

  const url = useMemo(() => {
    const token = {
      id,
      type: 'track',
      date: dayjs().toISOString(),
    };

    if (typeof window === 'undefined') return currentTrack?.url;
    const tokenString = window.btoa(JSON.stringify(token));
    const endpoint = currentTrack?.url ? new URL(currentTrack.url) : undefined;
    if (endpoint) endpoint?.searchParams?.append?.('token', tokenString);
    const url = endpoint?.toString();
    return url;
  }, [currentTrack?.url, id]);

  return {
    id,
    url,
    isPlaying,
    isCurrentTrack,
    volume,
    jumping,
    load: currentTrack?.load || 0,
    seek: currentTrack?.seek || 0,
    waveform: currentTrack?.waveform,
    title: currentTrack?.title,
    duration: currentTrack?.duration,
    pageUrl: currentTrack?.pageUrl,
    nextId: currentTrack?.nextId,
    prevId: currentTrack?.prevId,
    togglePlay,
    onEnded,
    setLoad: setTrackLoad,
    setSeek: setTrackSeek,
  };
};
