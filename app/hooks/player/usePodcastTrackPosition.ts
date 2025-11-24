import { usePlaylistQuery } from '../queries/usePlaylistQuery';

export const usePodcastTrackPosition = (id: number | null) => {
  const { data } = usePlaylistQuery('dj-sets');
  const tracks = data?.playlist?.tracks;
  const currentIndex = tracks?.findIndex((track) => track.id === id);
  const prevIndex = currentIndex
    ? currentIndex > 0
      ? currentIndex - 1
      : currentIndex
    : 0;

  const nextIndex =
    currentIndex && tracks?.length
      ? currentIndex < tracks.length
        ? currentIndex + 1
        : currentIndex
      : 0;

  return {
    prevId: tracks?.[prevIndex]?.id,
    nextId: tracks?.[nextIndex]?.id,
  };
};
