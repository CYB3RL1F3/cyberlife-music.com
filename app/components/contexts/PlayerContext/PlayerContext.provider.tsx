import { useCallback, useEffect, useReducer } from 'react';
import { PlayerContext } from './PlayerContext';
import playerContextReducer, { initialState } from './PlayerContext.reducer';
import type {
  PlayerContextValues,
  PlayerContextProviderProps,
} from './PlayerContext.types';

const PlayerContextProvider = ({ children }: PlayerContextProviderProps) => {
  const [playerContextState, dispatch] = useReducer(
    playerContextReducer,
    initialState,
  );

  const setPlaying = (playing: boolean, jumping = true) => {
    dispatch({
      type: 'SET_PLAYING_STATE',
      payload: {
        playing,
        jumping,
      },
    });
  };

  const setCurrentTrack: PlayerContextValues['setCurrentTrack'] = (id) => {
    dispatch({
      type: 'SET_CURRENT_TRACK',
      payload: id,
    });
  };

  const addTrackToBuffer: PlayerContextValues['addTrackToBuffer'] = (
    payload,
  ) => {
    dispatch({
      type: 'ADD_TRACK',
      payload,
    });
  };

  const setLoad: PlayerContextValues['setLoad'] = (id, value) => {
    dispatch({
      type: 'SET_LOAD',
      payload: {
        id,
        value,
      },
    });
  };

  const setSeek: PlayerContextValues['setSeek'] = (
    id,
    value,
    jumping = false,
  ) => {
    dispatch({
      type: 'SET_SEEK',
      payload: {
        id,
        value,
        jumping,
      },
    });
  };

  const setCurrentTrackContext: PlayerContextValues['setCurrentTrackContext'] =
    (payload) => {
      dispatch({
        type: 'SET_CURRENT_CONTEXT',
        payload,
      });
    };

  const setVolume: PlayerContextValues['setVolume'] = (value) => {
    const payload = value < 0 ? 0 : value > 100 ? 100 : value;
    dispatch({
      type: 'SET_VOLUME',
      payload,
    });
  };

  const { currentTrackId, currentContext, playing, buffer, volume, jumping } =
    playerContextState;

  const play: PlayerContextValues['play'] = useCallback(
    (id, forceJump) => {
      setCurrentTrack(id);
      const jump = forceJump || buffer[id].seek > 0.1;
      setPlaying(true, jump);
    },
    [buffer],
  );

  const pause: PlayerContextValues['pause'] = useCallback((id) => {
    setCurrentTrack(id);
    setPlaying(false);
  }, []);

  const toggle: PlayerContextValues['toggle'] = () => {
    if (!currentTrackId) return;
    const jump = buffer[currentTrackId].seek > 0.1;
    setPlaying(!playing, jump);
  };

  const currentTrack = currentTrackId ? buffer[currentTrackId] : null;

  const isPlaying: PlayerContextValues['isPlaying'] = useCallback(
    (id) => {
      return playing && currentTrackId === id;
    },
    [currentTrackId, playing],
  );

  return (
    <PlayerContext.Provider
      value={{
        currentTrackId,
        volume,
        jumping,
        currentContext,
        setVolume,
        playing,
        addTrackToBuffer,
        setCurrentTrack,
        play,
        pause,
        toggle,
        isPlaying,
        setLoad,
        setSeek,
        setCurrentTrackContext,
        buffer,
        currentTrack,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
