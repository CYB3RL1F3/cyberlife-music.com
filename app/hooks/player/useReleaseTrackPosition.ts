import { Release, Track } from '~/types/gql';
import { getCyberlifeReleaseTracks } from '~/utils/business/filters';
import { usePlayerStore } from '../stores/player/usePlayerStore';
import { useEffect, useMemo } from 'react';
import { getTrackToBuffer } from '~/utils/trackToBuffer';

export const useReleaseTrackPosition = (
  release: Release,
  trackId: Track['id'],
) => {
  const tracks = useMemo(
    () =>
      getCyberlifeReleaseTracks(release?.tracklist)
        .map((track) => track.stream)
        .filter((stream): stream is Track => Boolean(stream)),
    [release?.tracklist],
  );

  const currentIndex = tracks?.findIndex((track) => track?.id === trackId);

  const prevIndex = currentIndex > 0 ? currentIndex - 1 : 0;

  const nextIndex =
    currentIndex && tracks?.length
      ? currentIndex < tracks.length
        ? currentIndex + 1
        : currentIndex
      : 0;

  const { addTrackToBuffer } = usePlayerStore();

  useEffect(() => {
    tracks?.forEach((track, index) => {
      const nextId = tracks?.[index + 1]?.id || tracks?.[tracks.length - 1]?.id;
      const prevId = tracks?.[index - 1]?.id || tracks?.[0]?.id;

      const bufferTrack = getTrackToBuffer(track, {
        artist: release?.artist,
        album: release?.title,
        nextId,
        prevId,
        pageUrl: `/releases/${release?.slug}`,
      });

      addTrackToBuffer(bufferTrack);
    });
  }, [tracks, release?.artist, release?.title, release?.slug]);

  return {
    prevId: tracks?.[prevIndex]?.id,
    nextId: tracks?.[nextIndex]?.id,
  };
};
