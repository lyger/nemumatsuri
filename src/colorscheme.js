import React, { createContext } from 'react';
import { useLocalStorageReducer } from './util';


const initialState_OLD = {
  backgroundColors: {
    BACKGROUND: '#bfe7ff',
    BACK_FG: '#a1c6ff',
    BACK_BG: '#bfe7ff',
  },
  dressingColors: {
    STAR: '#fffb8d',
    MOONSHADOW: '#8da8f0',
    STRING: '#676975',
  },
  objectColors: {
    CASTLE: '#6688de',
  },
  matsuriColors: {
    EYES: '#796d5e',
    SKIN: '#ffe4c5',
    SKIN_SHADOW: '#fdcebf',
    HAIR: '#a98963',
    HAIR_SHADOW: '#a17955',
    YELLOW: '#fffa8b',
    YELLOW_SHADOW: '#f7e085',
    BLACK: '#574b40',
  },
  ebifrionColors: {
    MANE: '#c99659',
    MANE_SHADOW: '#c58453',
    BODY: '#ffc86c',
    BODY_SHADOW: '#fdb561',
    SKIN: '#ffe3aa',
    SKIN_SHADOW: '#fdcbaf',
    TAIL: '#ff9e83',
    TAIL_SHADOW: '#f58d99',
    MOUTH: '#fff3e3',
    FEATURES: '#796d5e',
    BLUSH: '#feb7a8',
  },
};

// Sorekasho's suggestion
const initialState = {
  backgroundColors: {
    BACKGROUND: "#cfeeff",
    BACK_FG: "#acd2ff",
    BACK_BG: "#cfeeff",
  },
  dressingColors: {
    STAR: "#ffff7d",
    MOONSHADOW :"#9eaaff",
    STRING: "#6D7196",
  },
  objectColors: {
    CASTLE:"#5e74b9",
  },
  matsuriColors: {
    EYES: "#7f6851",
    SKIN: "#fff0d5",
    SKIN_SHADOW: "#ffcca5",
    HAIR: "#aa8a61",
    HAIR_SHADOW: "#936c51",
    YELLOW: "#fffaa8",
    YELLOW_SHADOW: "#f0de85",
    BLACK: "#58484E",
  },
  ebifrionColors: {
    MANE: "#cf9c69",
    MANE_SHADOW: "#cf8b58",
    BODY: "#ffce7d",
    BODY_SHADOW: "#ecb367",
    SKIN: "#ffe5af",
    SKIN_SHADOW: "#ffcca5",
    TAIL: "#ffa98f",
    TAIL_SHADOW: "#fa909b",
    MOUTH: "#fff8e9",
    FEATURES: "#7f6851",
    BLUSH: "#ff9498",
  },
};

function Reducer(state, { type, value }) {
  switch (type) {
    case 'CHANGE_COLOR':
      const { group, key, color } = value;
      const newState = {...state};
      newState[group] = {...state[group]}
      newState[group][key] = color;
      return newState;
    case 'RESET':
      return initialState;
    default:
      return {...state};
  }
}

export const ColorContext = createContext(initialState);
export default function ColorScheme(props) {
  const [state, dispatch] = useLocalStorageReducer('colorScheme', Reducer, initialState);
  return (
    <ColorContext.Provider value={[state, dispatch]}>
      {props.children}
    </ColorContext.Provider>
  );
}