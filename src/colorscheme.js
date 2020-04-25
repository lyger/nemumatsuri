import React, { createContext } from 'react';
import { useLocalStorageReducer } from './util';


const initialState = {
  backgroundColors: {
    BACKGROUND: '#cfeeff',
    BACK_FG: '#acd2ff',
    BACK_BG: '#cfeeff',
  },
  dressingColors: {
    STAR: '#ffff7d',
    MOONSHADOW :'#9eaaff',
    STRING: '#6D7196',
    HEART1: '#ff8e8f',
    HEART2: '#ffdef4',
    HEART3: '#fbfbeb',
  },
  objectColors: {
    CASTLE:'#5e74b9',
    ENVELOPE_FLAP: '#a7f8ff',
    ENVELOPE_BODY: '#81d3e0',
    PAPER: '#fffff5',
    PAPER_GB: '#fffff5',
  },
  specialColors : {
    TEXT_300K: '#fff200',
  },
  matsuriColors: {
    EYES: '#7f6851',
    SKIN: '#fff0d5',
    SKIN_SHADOW: '#ffcca5',
    HAIR: '#aa8a61',
    HAIR_SHADOW: '#936c51',
    YELLOW: '#fffaa8',
    YELLOW_SHADOW: '#f0de85',
    BLACK: '#58484E',
  },
  ebifrionColors: {
    MANE: '#cf9c69',
    MANE_SHADOW: '#cf8b58',
    BODY: '#ffce7d',
    BODY_SHADOW: '#ecb367',
    SKIN: '#ffe5af',
    SKIN_SHADOW: '#ffcca5',
    TAIL: '#ffa98f',
    TAIL_SHADOW: '#fa909b',
    MOUTH: '#fff8e9',
    FEATURES: '#7f6851',
    BLUSH: '#ff9498',
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