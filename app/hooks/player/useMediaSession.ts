import { useCallback, useEffect, useRef } from 'react';
import { usePlayerContext } from '~/components/contexts/PlayerContext';

export const useMediaSession = () => {
  const { currentTrack, jumping, isPlaying, play, pause, setSeek } =
    usePlayerContext();

  const handlePlay = useCallback(() => {
    if (!currentTrack?.id) return;
    play(currentTrack.id);
  }, [currentTrack?.id, play]);

  const handlePause = useCallback(() => {
    if (!currentTrack?.id) return;
    pause(currentTrack.id);
  }, [currentTrack?.id, pause]);

  const handleSeek = useCallback(
    ({ seekTime }: MediaSessionActionDetails) => {
      if (!currentTrack?.id || typeof seekTime === 'undefined') return;
      console.log('WTF SEEEKK ?????');
      setSeek(currentTrack.id, seekTime, true);
    },
    [currentTrack?.id, setSeek],
  );

  const handlePlayPreviousTrack = useCallback(() => {
    if (!currentTrack?.prevId) return;
    play(currentTrack.prevId);
  }, [currentTrack?.prevId, play]);

  const handlePlayNextTrack = useCallback(() => {
    if (!currentTrack?.nextId) return;
    play(currentTrack.nextId);
  }, [currentTrack?.nextId, play]);

  useEffect(() => {
    if (!('mediaSession' in navigator)) return;
    const id = currentTrack?.id;
    if (!id || !isPlaying(id)) {
      return;
    }

    const metadata = {
      title: currentTrack?.title,
      artist: 'Cyberlife',
      album: currentTrack?.album || '',
      artwork: currentTrack?.artwork
        ? [
            {
              src: currentTrack?.artwork,
              sizes: '96x96',
              type: 'image/png',
            },
            {
              src: currentTrack?.artwork,
              sizes: '128x128',
              type: 'image/png',
            },
            {
              src: currentTrack?.artwork,
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: currentTrack?.artwork,
              sizes: '256x256',
              type: 'image/png',
            },
            {
              src: currentTrack?.artwork,
              sizes: '384x384',
              type: 'image/png',
            },
            {
              src: currentTrack?.artwork,
              sizes: '500x500',
              type: 'image/png',
            },
            {
              src: currentTrack?.artwork,
              sizes: '512x512',
              type: 'image/png',
            },
          ]
        : [],
    };
    navigator.mediaSession.metadata = new MediaMetadata(metadata);
  }, [
    currentTrack?.id,
    currentTrack?.title,
    currentTrack?.album,
    currentTrack?.artist,
    currentTrack?.artwork,
    isPlaying,
  ]);

  useEffect(() => {
    const mediaSession = navigator.mediaSession;

    if (!mediaSession) return;

    mediaSession.setActionHandler('play', handlePlay);
    mediaSession.setActionHandler('pause', handlePause);
    mediaSession.setActionHandler('seekbackward', handleSeek);
    mediaSession.setActionHandler('seekforward', handleSeek);
    mediaSession.setActionHandler('previoustrack', handlePlayPreviousTrack);
    mediaSession.setActionHandler('nexttrack', handlePlayNextTrack);

    return () => {
      mediaSession.setActionHandler('play', null);
      mediaSession.setActionHandler('pause', null);
      mediaSession.setActionHandler('seekbackward', null);
      mediaSession.setActionHandler('seekforward', null);
      mediaSession.setActionHandler('previoustrack', null);
      mediaSession.setActionHandler('nexttrack', null);
    };
  }, [
    handlePlay,
    handlePause,
    handleSeek,
    handlePlayPreviousTrack,
    handlePlayNextTrack,
  ]);

  useEffect(() => {
    const trackId = currentTrack?.id;
    if (!trackId || jumping) return;
    if (!('mediaSession' in navigator)) return;

    const playing = isPlaying(trackId);

    navigator.mediaSession.playbackState = playing ? 'playing' : 'paused';

    if (!currentTrack?.id || playing) {
      return;
    }
    const { seek, duration } = currentTrack;
    const trackDuration = duration / 1000;
    const currentPosition = trackDuration * (seek / 100);
    const playbackRate = 1;

    if (
      Number.isFinite(trackDuration) &&
      trackDuration > 0 &&
      Number.isFinite(currentPosition)
    ) {
      navigator.mediaSession.setPositionState({
        duration: trackDuration,
        playbackRate,
        position: Math.max(0, Math.min(currentPosition, trackDuration)),
      });
    }
  }, [currentTrack?.id, currentTrack?.duration, currentTrack?.seek, isPlaying]);
};
