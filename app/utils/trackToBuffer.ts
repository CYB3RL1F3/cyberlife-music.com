import type { ReleaseFragmentTracklistStream } from '../types/gql/ReleaseFragment';
import type { PlaylistQueryPlaylistTracks } from '../types/gql/PlaylistQuery';
import type { PlaylistTrackQueryPlaylistTrack } from '../types/gql/PlaylistTrackQuery';
import type { TrackToBuffer } from '~/components/contexts/PlayerContext/PlayerContext.types';
import { getApiEndpoint } from './config';

export type TrackType =
  | ReleaseFragmentTracklistStream
  | PlaylistQueryPlaylistTracks
  | PlaylistTrackQueryPlaylistTrack;

export type Extra = {
  artist?: string | null;
  album?: string | null;
  nextId?: number | null;
  prevId?: number | null;
};

export const getTrackToBuffer = (track: TrackType, extra?: Extra) => {
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
  };
  return toBuffer;
};
