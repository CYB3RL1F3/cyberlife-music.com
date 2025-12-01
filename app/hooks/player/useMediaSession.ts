import { useCallback, useEffect, useRef, useState } from 'react';

import useDebounceEffect from '~/hooks/misc/useDebouncedEffect';
import { usePlayerStore } from '~/hooks/stores/player/usePlayerStore';

export const useMediaSession = () => {
  const { currentTrack, isPlaying, play, pause, setSeek } = usePlayerStore();

  const handlePlay = useCallback<MediaSessionActionHandler>(() => {
    if (!currentTrack?.id) return;
    window.navigator.mediaSession.playbackState = 'playing';
    play(currentTrack.id);
  }, [currentTrack?.id, play]);

  const handlePause = useCallback<MediaSessionActionHandler>(() => {
    if (!currentTrack?.id) return;
    window.navigator.mediaSession.playbackState = 'paused';
    pause();
  }, [currentTrack?.id, pause]);

  const handleSeek = useCallback<MediaSessionActionHandler>(
    ({ seekTime }) => {
      if (!currentTrack?.id || typeof seekTime === 'undefined') return;

      setSeek(currentTrack.id, seekTime, true);
    },
    [currentTrack?.id, setSeek],
  );

  const handlePlayPreviousTrack = useCallback<MediaSessionActionHandler>(() => {
    if (!currentTrack?.prevId) return;
    play(currentTrack.prevId);
  }, [currentTrack?.prevId, play]);

  const handlePlayNextTrack = useCallback<MediaSessionActionHandler>(() => {
    if (!currentTrack?.nextId) return;
    play(currentTrack.nextId);
  }, [currentTrack?.nextId, play]);

  useEffect(() => {
    if (!('mediaSession' in window.navigator)) return;
    const id = currentTrack?.id;
    if (!id) {
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
    } satisfies MediaMetadataInit;
    window.navigator.mediaSession.metadata = new MediaMetadata(metadata);
  }, [
    currentTrack?.id,
    currentTrack?.title,
    currentTrack?.album,
    currentTrack?.artist,
    currentTrack?.artwork,
    isPlaying,
  ]);

  useEffect(() => {
    const mediaSession = window.navigator.mediaSession;

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

  const [handleStarts, setHandleStarts] = useState(false);

  useEffect(() => {
    const trackId = currentTrack?.id;
    if (!trackId) return;
    if (isPlaying(trackId)) {
      setHandleStarts(true);
      const { duration } = currentTrack;
      const trackDuration = duration / 1000;
      console.log(window.navigator.mediaSession.setPositionState);
      window.navigator.mediaSession.playbackState = 'playing';
      window.navigator.mediaSession.setPositionState({
        duration: trackDuration,
        playbackRate: 1,
        position: 0,
      });
      console.log(trackDuration, window.navigator.mediaSession);
    }
  }, [isPlaying, currentTrack?.id]);

  useDebounceEffect(
    () => {
      if (handleStarts) {
        setHandleStarts(false);
        return;
      }
      window.requestAnimationFrame(() => {
        const trackId = currentTrack?.id;
        if (!trackId) return;
        if (!('mediaSession' in window.navigator)) return;

        const playing = isPlaying(trackId);

        window.navigator.mediaSession.playbackState = playing
          ? 'playing'
          : 'paused';

        if (!currentTrack?.id || !playing) {
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
          window.navigator.mediaSession.setPositionState({
            duration: trackDuration,
            playbackRate,
            position: Math.max(0, Math.min(currentPosition, trackDuration)),
          });
        }
      });
    },
    [currentTrack?.id, currentTrack?.duration, currentTrack?.seek, isPlaying],
    1000,
  );
};
