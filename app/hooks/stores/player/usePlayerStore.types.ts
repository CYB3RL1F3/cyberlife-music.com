import type { ReactNode } from 'react';

export type TrackToBuffer = {
  id: number;
  url: string;
  pageUrl: string;
  title: string;
  artist?: string;
  album?: string | null;
  artwork?: string | null;
  waveform: string;
  duration: number;
  nextId?: number | null;
  prevId?: number | null;
};

export type BufferedTrack = TrackToBuffer & {
  seek: number;
  load: number;
};

export type Buffer = Record<string, BufferedTrack>;

export type PlayerState = {
  buffer: Buffer;
  currentTrackId?: number;
  currentTrack: BufferedTrack | null;
  currentContext?: string;
  playing: boolean;
  volume: number;
  jumping: boolean;
  showExternalPlayer: boolean;
};

export type BufferPayload = {
  id: TrackToBuffer['id'];
  value: number;
};

export type SeekPayload = BufferPayload & {
  jumping: boolean;
};

export type PlayerProviderProps = {
  children: ReactNode;
};

export type PlayerActions = {
  addTrackToBuffer: (track: TrackToBuffer) => void;
  setCurrentTrack: (id: number) => void;
  setPlayingState: (playing: boolean, jumping?: boolean) => void;
  play: (id: number, forceJump?: boolean) => void;
  pause: () => void;
  toggle: () => void;
  setLoad: (id: number, value: number) => void;
  setSeek: (id: number, value: number, jumping?: boolean) => void;
  isPlaying: (id: number) => boolean;
  setCurrentTrackContext: (trackContext: string) => void;
  setVolume: (value: number) => void;
  setShowExternalPlayer: (value: boolean) => void;
};

export type PlayerStore = PlayerState & PlayerActions;
