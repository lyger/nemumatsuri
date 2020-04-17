import React, { createContext, useReducer } from 'react';

function Reducer(state, { type, value }) {
  // TODO
  switch (type) {
    case 'CHANGE_COLOR':
      const { group, key, color } = value;
      const newState = {...state};
      newState[group] = {...state[group]}
      newState[group][key] = color;
      return newState;
    case 'NIGHT':
      return {
        ...state,
        isDay: false,
        backgroundColors: {
          ...state.backgroundColors,
          BACKGROUND: '#6794db',
        }
      }
    case 'DAY':
      return {
        ...state,
        isDay: true,
        backgroundColors: {
          ...state.backgroundColors,
          BACKGROUND: '#bfe7ff',
        }
      }
    default:
      return {...state};
  }
}

const initialState = {
  backgroundColors: {
    BACKGROUND: '#bfe7ff',
    STRIPES: '#a1c6ff',
    STAR: '#fffb8d',
    MOONSHADOW: '#8da8f0',
    STRING: '#676975',
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

export const ColorContext = createContext(initialState);
export default function ColorScheme(props) {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <ColorContext.Provider value={[state, dispatch]}>
      {props.children}
    </ColorContext.Provider>
  );
}