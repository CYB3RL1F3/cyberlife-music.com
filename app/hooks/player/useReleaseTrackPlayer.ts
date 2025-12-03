import { Track, Release } from '~/types/gql';

import { useTrackPlayer } from '~/hooks/player/useTrackPlayer';
import { useReleaseTrackPosition } from '~/hooks/player/useReleaseTrackPosition';
import { usePlayerStore } from '../stores/player/usePlayerStore';
import { useEffect } from 'react';
import { getTrackToBuffer } from '~/utils/trackToBuffer';

export const useReleaseTrackPlayer = (track: Track, release: Release) => {
  const { prevId, nextId } = useReleaseTrackPosition(release, track.id);

  const releaseTrackPlayer = useTrackPlayer(track, {
    artist: release?.artist,
    album: release?.title,
    nextId,
    prevId,
    pageUrl: `/releases/${release?.slug}`,
  });

  return releaseTrackPlayer;
};
