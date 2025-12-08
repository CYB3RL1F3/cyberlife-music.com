import { TrackToBuffer } from '~/hooks/stores/player/usePlayerStore.types';
import { getApiEndpoint } from '~/utils/config';
import { Track } from '~/types/gql';
import dayjs from 'dayjs';

export type Extra = {
  artist?: string | null;
  album?: string | null;
  nextId?: number | null;
  prevId?: number | null;
  pageUrl: string;
};

export const getTrackToBuffer = (track: Track, extra?: Extra) => {
  const apiUrl = getApiEndpoint();
  const url = `${apiUrl}/cyberlife/playlists/${track.id}/stream`;

  const toBuffer: TrackToBuffer = {
    duration: track.duration || 0,
    id: track.id || 0,
    title: track.title || '',
    url,
    waveform: track.waveform || '',
    artist: extra?.artist || '',
    album: extra?.album || '',
    artwork: track.artwork,
    nextId: extra?.nextId,
    prevId: extra?.prevId,
    pageUrl: extra?.pageUrl || '/',
  };

  return toBuffer;
};
