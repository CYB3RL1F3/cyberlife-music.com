import { usePlaylistQuery } from '~/hooks/queries/usePlaylistQuery';
import { Track } from '~/types/gql';
import { usePlayerStore } from '../stores/player/usePlayerStore';
import { useEffect } from 'react';
import { getTrackToBuffer } from '~/utils/trackToBuffer';

export const usePodcastTrackPosition = (
  id?: number | null,
  podcasts?: Track[],
) => {
  const currentIndex = podcasts?.findIndex((track) => track.id === id);
  const prevIndex = currentIndex
    ? currentIndex > 0
      ? currentIndex - 1
      : currentIndex
    : 0;

  const nextIndex =
    currentIndex && podcasts?.length
      ? currentIndex < podcasts.length
        ? currentIndex + 1
        : currentIndex
      : 0;
  const { addTrackToBuffer } = usePlayerStore();

  useEffect(() => {
    podcasts?.forEach((track, index) => {
      const nextId =
        podcasts?.[index + 1]?.id || podcasts?.[podcasts.length - 1]?.id;
      const prevId = podcasts?.[index - 1]?.id || podcasts?.[0]?.id;

      const bufferTrack = getTrackToBuffer(track, {
        artist: 'Cyberlife',
        album: 'Podcasts',
        nextId,
        prevId,
        pageUrl: `/podcasts/${track.slug}`,
      });

      addTrackToBuffer(bufferTrack);
    });
  }, [podcasts]);

  return {
    prevId: podcasts?.[prevIndex]?.id,
    nextId: podcasts?.[nextIndex]?.id,
  };
};
