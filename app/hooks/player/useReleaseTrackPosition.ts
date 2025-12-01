import { useReleaseQuery } from '~/hooks/queries/useReleaseQuery';

export const useReleaseTrackPosition = (
  releaseId: string,
  id: number | null,
) => {
  const { data } = useReleaseQuery(releaseId);
  const tracks = data?.releaseItem?.release?.tracklist;
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
    prevId: tracks?.[prevIndex]?.stream?.id,
    nextId: tracks?.[nextIndex]?.stream?.id,
  };
};
