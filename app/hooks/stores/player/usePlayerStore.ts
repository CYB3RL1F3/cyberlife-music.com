// usePlayerStore.ts
import { create } from 'zustand';
import type {
  PlayerStore,
  BufferedTrack,
  Buffer,
  PlayerState,
} from './usePlayerStore.types';

const initialState: PlayerState = {
  buffer: {},
  playing: false,
  volume: 100,
  jumping: false,
  showExternalPlayer: true,
  currentTrack: null,
};

export const usePlayerStore = create<PlayerStore>((set, get) => ({
  ...initialState,

  addTrackToBuffer: (track) =>
    set((state) => {
      const id = track.id;
      const existing = state.buffer[id];

      const bufferedTrack: BufferedTrack = existing
        ? { ...existing, ...track }
        : { ...track, seek: 0, load: 0 };

      const buffer: Buffer = {
        ...state.buffer,
        [id]: bufferedTrack,
      };

      const currentTrack =
        state.currentTrackId === id ? bufferedTrack : state.currentTrack;

      return {
        ...state,
        buffer,
        currentTrack,
      };
    }),

  setCurrentTrack: (id) =>
    set((state) => ({
      ...state,
      currentTrackId: id,
      currentTrack: state.buffer[id] ?? null,
    })),

  setPlayingState: (playing, jumping = true) =>
    set(() => ({
      playing,
      jumping,
    })),

  setVolume: (value) =>
    set(() => ({
      volume: value < 0 ? 0 : value > 100 ? 100 : value,
    })),

  setLoad: (id, value) =>
    set((state) => {
      const track = state.buffer[id];
      if (!track) return state;

      const updatedTrack: BufferedTrack = { ...track, load: value };

      return {
        ...state,
        buffer: { ...state.buffer, [id]: updatedTrack },
        currentTrack:
          state.currentTrackId === id ? updatedTrack : state.currentTrack,
      };
    }),

  setSeek: (id, value, jumping = false) =>
    set((state) => {
      const track = state.buffer[id];
      if (!track) return state;

      const updatedTrack: BufferedTrack = { ...track, seek: value };

      return {
        ...state,
        jumping,
        buffer: { ...state.buffer, [id]: updatedTrack },
        currentTrack:
          state.currentTrackId === id ? updatedTrack : state.currentTrack,
      };
    }),

  setCurrentTrackContext: (trackContext) =>
    set(() => ({
      currentContext: trackContext,
    })),

  setShowExternalPlayer: (value) =>
    set(() => ({
      showExternalPlayer: value,
    })),

  play: (id, forceJump) => {
    const { buffer } = get();
    const seek = buffer[id]?.seek ?? 0;
    const jump = forceJump || seek > 0.1;

    set({
      currentTrackId: id,
      currentTrack: buffer[id] ?? null,
      playing: true,
      jumping: jump,
    });
  },

  pause: () => {
    const { currentTrackId, buffer, currentTrack } = get();

    set({
      currentTrackId,
      currentTrack: currentTrackId ? buffer[currentTrackId] : currentTrack,
      playing: false,
      jumping: false,
    });
  },

  toggle: () => {
    const { currentTrackId, buffer, playing } = get();
    if (!currentTrackId) return;

    const seek = buffer[currentTrackId]?.seek ?? 0;
    const jumping = seek > 0.1;

    set({
      playing: !playing,
      jumping,
    });
  },

  isPlaying: (id) => {
    const { currentTrackId, playing } = get();
    return playing && currentTrackId === id;
  },
}));
