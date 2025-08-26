import { useTrackPlayer } from './useTrackPlayer';
import type { PlaylistTrackQueryPlaylistTrack } from '~/types/gql/PlaylistTrackQuery';
import type { PlaylistQueryPlaylistTracks } from '~/types/gql/PlaylistQuery';
import { usePodcastTrackPosition } from './usePodcastTrackPosition';
import { useHomepageSummary } from '../misc/useHomepageSummary';
import { useMemo } from 'react';

export const usePodcastTrackPlayer = (
  track: PlaylistTrackQueryPlaylistTrack | PlaylistQueryPlaylistTracks,
) => {
  const url = `/podcasts/${track.slug}`;
  const { data, loading } = useHomepageSummary();

  const isInHomePage = useMemo(
    () =>
      loading
        ? false
        : data?.summary?.latestPodcast?.id === track.id ||
          data?.summary?.topPodcast?.id === track.id,
    [
      data?.summary?.latestPodcast?.id,
      data?.summary?.topPodcast?.id,
      track.id,
      loading,
    ],
  );

  const desktop = useMemo(
    () => (isInHomePage ? ['/', '/podcasts', url] : ['/podcasts', url]),
    [isInHomePage, url],
  );

  const contexts = useMemo(
    () => ({
      desktop,
      mobile: [url],
    }),
    [desktop, url],
  );

  const { prevId, nextId } = usePodcastTrackPosition(track.id);
  const playerContext = useTrackPlayer(track, contexts, {
    artist: 'Cyberlife',
    album: 'Podcasts',
    nextId,
    prevId,
  });
  return playerContext;
};
