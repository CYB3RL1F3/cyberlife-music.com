import type { ReleaseFragmentTracklistStream } from "../types/gql/ReleaseFragment";
import type { PlaylistQueryPlaylistTracks } from "../types/gql/PlaylistQuery";
import type { PlaylistTrackQueryPlaylistTrack } from "../types/gql/PlaylistTrackQuery";
import type {
  TrackPlayerContext,
  TrackToBuffer
} from "~/components/contexts/PlayerContext/PlayerContext.types";
import { getApiEndpoint } from "./config";

type TrackType =
  | ReleaseFragmentTracklistStream
  | PlaylistQueryPlaylistTracks
  | PlaylistTrackQueryPlaylistTrack;

export const getTrackTobuffer = (
  track: TrackType,
  contexts: TrackPlayerContext
) => {
  const apiUrl = getApiEndpoint();
  const toBuffer: TrackToBuffer = {
    id: track.id || 0,
    waveform: track.waveform || "",
    url: `${apiUrl}/cyberlife/playlists/${track.id}/stream`,
    duration: track.duration || 0,
    contexts
  };
  return toBuffer;
};
