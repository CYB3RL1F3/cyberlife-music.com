import { useCallback, useEffect } from 'react';
import { usePlayerContext } from '~/components/contexts/PlayerContext';

export const useMediaSession = () => {
  const { currentTrack, isPlaying, play, pause, setSeek } = usePlayerContext();

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

  /* MEDIA SESSION CONTROLS */
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
};
