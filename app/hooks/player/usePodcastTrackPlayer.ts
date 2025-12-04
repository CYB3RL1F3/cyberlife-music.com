import { Track } from '~/types/gql';

import { useTrackPlayer } from '~/hooks/player/useTrackPlayer';
import { usePodcastTrackPosition } from '~/hooks/player/usePodcastTrackPosition';

export const usePodcastTrackPlayer = (track: Track, podcasts: Track[]) => {
  const { prevId, nextId } = usePodcastTrackPosition(track.id, podcasts);

  const podcastTrackPlayer = useTrackPlayer(track, {
    artist: 'Cyberlife',
    album: 'Podcasts',
    nextId,
    prevId,
    pageUrl: `/podcasts/${track.slug}`,
  });
  return podcastTrackPlayer;
};
