import type { ReactNode } from "react";

export type TrackPlayerContext = {
  desktop: readonly string[];
  mobile: readonly string[];
};

export type TrackToBuffer = {
  id: number;
  url: string;
  title: string;
  contexts: TrackPlayerContext;
  waveform: string;
  duration: number;
};

export type BufferedTrack = TrackToBuffer & {
  seek: number;
  load: number;
};

export type PlayerContextValues = {
  currentTrackId?: number;
  currentAudioStream?: string;
  volume: number;
  jumping: boolean;
  currentContext?: string;
  currentTrack?: BufferedTrack | null;
  buffer: Buffer;
  playing?: boolean;
  setVolume: (value: number) => void;
  addTrack: (track: TrackToBuffer) => void;
  setCurrentTrack: (id: number) => void;
  play: (id: number) => void;
  pause: (id: number) => void;
  toggle: () => void;
  setLoad: (id: number, value: number) => void;
  setSeek: (id: number, value: number, jumping?: boolean) => void;
  isPlaying: (id: number) => boolean;
  setCurrentTrackContext: (trackContext: string) => void;
};

export type Buffer = Record<string, BufferedTrack>;

export type PlayerContextState = {
  buffer: Buffer;
  currentTrackId?: TrackToBuffer["id"];
  currentContext?: string;
  playing: boolean;
  volume: number;
  jumping: boolean;
};

export type BufferPayload = {
  id: TrackToBuffer["id"];
  value: number;
};

export type SeekPayload = BufferPayload & {
  jumping: boolean;
};

export type PlayerContextAction =
  | {
      type: "ADD_TRACK";
      payload: TrackToBuffer;
    }
  | {
      type: "SET_CURRENT_TRACK";
      payload: TrackToBuffer["id"];
    }
  | {
      type: "SET_PLAYING_STATE";
      payload: boolean;
    }
  | {
      type: "SET_LOAD";
      payload: BufferPayload;
    }
  | {
      type: "SET_SEEK";
      payload: SeekPayload;
    }
  | {
      type: "SET_CURRENT_CONTEXT";
      payload: string;
    }
  | {
      type: "SET_VOLUME";
      payload: number;
    };

export type PlayerContextProviderProps = {
  children: ReactNode;
};
