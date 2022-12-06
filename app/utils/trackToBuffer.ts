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
  const url = `${apiUrl}/cyberlife/playlists/${track.id}/stream`;
  const toBuffer: TrackToBuffer = {
    contexts,
    duration: track.duration || 0,
    id: track.id || 0,
    title: track.title || "",
    url,
    waveform: track.waveform || ""
  };
  return toBuffer;
};
