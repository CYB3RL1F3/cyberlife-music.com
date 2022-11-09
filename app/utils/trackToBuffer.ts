import type { ReleaseFragmentTracklistStream } from "../types/gql/ReleaseFragment";
import type { PlaylistQueryPlaylistTracks } from "../types/gql/PlaylistQuery";
import type { PlaylistTrackQueryPlaylistTrack } from "../types/gql/PlaylistTrackQuery";
import type { TrackToBuffer } from "~/components/contexts/PlayerContext/PlayerContext.types";

type TrackType =
  | ReleaseFragmentTracklistStream
  | PlaylistQueryPlaylistTracks
  | PlaylistTrackQueryPlaylistTrack;

export const getTrackTobuffer = (
  track: TrackType,
  contexts: readonly string[]
) => {
  const toBuffer: TrackToBuffer = {
    id: track.id || 0,
    waveform: track.waveform || "",
    url: track.url || "",
    duration: track.duration || 0,
    contexts
  };
  return toBuffer;
};
