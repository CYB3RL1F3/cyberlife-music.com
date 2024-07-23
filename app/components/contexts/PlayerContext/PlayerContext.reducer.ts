import type {
  PlayerContextAction,
  PlayerContextState,
  BufferPayload,
  TrackToBuffer,
  SeekPayload
} from "./PlayerContext.types";

export const initialState: PlayerContextState = {
  buffer: {},
  playing: false,
  volume: 100,
  jumping: false,
  showExternalPlayer: true
};

const addTrack = (state: PlayerContextState, value: TrackToBuffer) => {
  const { id } = value;
  if (!state.buffer[id]) {
    state.buffer = {
      ...state.buffer,
      [id]: {
        seek: 0,
        load: 0,
        ...value
      }
    };
  }
  return {
    ...state
  };
};

const setSeek = (state: PlayerContextState, payload: SeekPayload) => {
  const { id, value, jumping } = payload;
  if (!state.buffer[id]) return state;
  return {
    ...state,
    jumping,
    buffer: {
      ...state.buffer,
      [id]: {
        ...state.buffer[id],
        seek: value
      }
    }
  };
};

const setLoad = (state: PlayerContextState, payload: BufferPayload) => {
  const { id, value } = payload;
  if (!state.buffer[id]) return state;
  return {
    ...state,
    buffer: {
      ...state.buffer,
      [id]: {
        ...state.buffer[id],
        load: value
      }
    }
  };
};

const playerContextReducer = (
  state = initialState,
  { type, payload }: PlayerContextAction
) => {
  switch (type) {
    case "ADD_TRACK": {
      const updatedState = addTrack(state, payload);
      return updatedState;
    }
    case "SET_CURRENT_TRACK": {
      return {
        ...state,
        currentTrackId: payload
      };
    }
    case "SET_PLAYING_STATE": {
      return {
        ...state,
        playing: payload.playing,
        jumping: payload.jumping
      };
    }
    case "SET_LOAD": {
      const updatedState = setLoad(state, payload);
      return updatedState;
    }
    case "SET_SEEK": {
      const updatedState = setSeek(state, payload);
      return updatedState;
    }
    case "SET_CURRENT_CONTEXT": {
      return {
        ...state,
        currentContext: payload
      };
    }
    case "SET_VOLUME": {
      return {
        ...state,
        volume: payload
      };
    }
    case "SET_SHOW_EXTERNAL_PLAYER": {
      return {
        ...state,
        showExternalPlayer: payload
      };
    }
    default:
      return state;
  }
};

export default playerContextReducer;
