import { createContext } from "react";
import type { PlayerContextValues } from "./PlayerContext.types";

export const PlayerContext = createContext<PlayerContextValues>({
  playing: false,
  addTrackToBuffer: () => undefined,
  volume: 100,
  jumping: false,
  setVolume: () => undefined,
  setCurrentTrack: () => undefined,
  play: () => undefined,
  pause: () => undefined,
  toggle: () => undefined,
  isPlaying: () => false,
  setLoad: () => undefined,
  setSeek: () => undefined,
  setCurrentTrackContext: () => undefined,
  buffer: {},
  isExternalPlayerVisible: true,
  setExternalPlayerVisible: () => undefined
});
