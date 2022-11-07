import { createContext } from "react";
import { initialState } from "./PlayerContext.reducer";
import type { PlayerContextValues } from "./PlayerContext.types";

export const PlayerContext = createContext<PlayerContextValues>({
  ...initialState,
  setItem: () => undefined,
  setOffset: () => undefined
});
