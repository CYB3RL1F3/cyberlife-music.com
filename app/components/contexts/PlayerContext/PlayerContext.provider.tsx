import { useReducer } from "react";
import { PlayerContext } from "./PlayerContext";
import playerContextReducer, { initialState } from "./PlayerContext.reducer";
import type {
  PlayerContextValues,
  PlayerContextProviderProps
} from "./PlayerContext.types";

const PlayerContextProvider = ({ children }: PlayerContextProviderProps) => {
  const [playerContextState, dispatch] = useReducer(
    playerContextReducer,
    initialState
  );

  const setPlaying = (isPlaying: boolean) => {
    dispatch({
      type: "SET_PLAYING_STATE",
      payload: isPlaying
    });
  };

  const setCurrentTrack: PlayerContextValues["setCurrentTrack"] = (id) => {
    dispatch({
      type: "SET_CURRENT_TRACK",
      payload: id
    });
  };

  const addTrack: PlayerContextValues["addTrack"] = (payload) => {
    dispatch({
      type: "ADD_TRACK",
      payload
    });
  };

  const setLoad: PlayerContextValues["setLoad"] = (id, value) => {
    dispatch({
      type: "SET_LOAD",
      payload: {
        id,
        value
      }
    });
  };

  const setSeek: PlayerContextValues["setSeek"] = (
    id,
    value,
    jumping = false
  ) => {
    dispatch({
      type: "SET_SEEK",
      payload: {
        id,
        value,
        jumping
      }
    });
  };

  const setCurrentTrackContext: PlayerContextValues["setCurrentTrackContext"] =
    (payload) => {
      dispatch({
        type: "SET_CURRENT_CONTEXT",
        payload
      });
    };

  const setVolume: PlayerContextValues["setVolume"] = (value) => {
    const payload = value < 0 ? 0 : value > 100 ? 100 : value;
    dispatch({
      type: "SET_VOLUME",
      payload
    });
  };

  const { currentTrackId, currentContext, playing, buffer, volume, jumping } =
    playerContextState;

  const play: PlayerContextValues["play"] = (id) => {
    setCurrentTrack(id);
    setPlaying(true);
  };

  const pause: PlayerContextValues["pause"] = (id) => {
    setCurrentTrack(id);
    setPlaying(false);
  };

  const toggle: PlayerContextValues["toggle"] = () => {
    setPlaying(!playing);
  };

  const currentTrack = currentTrackId ? buffer[currentTrackId] : null;

  const isPlaying: PlayerContextValues["isPlaying"] = (id) => {
    return playing && currentTrackId === id;
  };

  return (
    <PlayerContext.Provider
      value={{
        currentTrackId,
        volume,
        jumping,
        currentContext,
        setVolume,
        playing,
        addTrack,
        setCurrentTrack,
        play,
        pause,
        toggle,
        isPlaying,
        setLoad,
        setSeek,
        setCurrentTrackContext,
        buffer,
        currentTrack
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
