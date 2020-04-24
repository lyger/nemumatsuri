import React, { createContext } from 'react';
import { useLocalStorageReducer } from './util';
import Stripes from './parts/background/scenes/stripes';
import Dots from './parts/background/scenes/dots';
import Solid from './parts/background/scenes/solid';
import NightSky from './parts/background/scenes/nightsky';
import HeartScatter from './parts/background/scenes/heartscatter';
import Castle from './parts/background/elements/castle';
import Letters from './parts/background/scenes/letters';
import Milestone from './parts/background/elements/milestone';

export const BACKDROPS = [
  {
    icon: <i className="fas fa-square" />,
    element: <Solid key="solid" n={6} />,
    colors: { group: 'backgroundColors', keys: ['BACK_BG'] },
  },
  {
    icon: [<i key="1" className="fas fa-grip-lines-vertical" />, <i key="2" className="fas fa-grip-lines-vertical" />],
    element: <Stripes key="stripes" n={8} />,
    colors: { group: 'backgroundColors', keys: ['BACK_BG', 'BACK_FG'] },
  },
  {
    icon: [<i key="1" className="fas fa-ellipsis-v" />, <i key="2" className="fas fa-ellipsis-v" />, <i key="3" className="fas fa-ellipsis-v" />],
    element: <Dots key="dots" spacing={200} />,
    colors: { group: 'backgroundColors', keys: ['BACK_BG', 'BACK_FG'] },
  },
];

export const DRESSINGS = [
  {
    icon: <i className="fas fa-times" style={{marginLeft: 2, marginRight: 1}} />,
    element: null,
    colors: { group: 'dressingColors', keys: [] },
  },
  {
    icon: <i className="fas fa-star" />,
    element: <NightSky key="nightsky" />,
    colors: { group: 'dressingColors', keys: ['STAR', 'MOONSHADOW', 'STRING'] },
  },
  {
    icon: <i className="fas fa-heart" style={{marginLeft: 1, marginRight: 1}} />,
    element: <HeartScatter key="heartscatter" />,
    colors: { group: 'dressingColors', keys: ['HEART1', 'HEART2', 'HEART3'] },
  },
];

export const OBJECTS = [
  {
    icon: <i className="fas fa-times" style={{marginLeft: 2, marginRight: 1}} />,
    element: null,
    colors: { group: 'objectColors', keys: [] },
  },
  {
    icon: <i className="fab fa-fort-awesome" style={{marginLeft: 1, marginRight: 1}} />,
    element: <Castle key="castle" />,
    colors: { group: 'objectColors', keys: ['CASTLE'] },
  },
  {
    icon: <i className="fas fa-envelope" style={{marginLeft: 1, marginRight: 1}} />,
    element: <Letters key="letters" />,
    colors: { group: 'objectColors', keys: ['ENVELOPE_BODY', 'ENVELOPE_FLAP', 'PAPER', 'PAPER_GB'] },
  },
];

export const SPECIALS = [
  {
    icon: <i className="fas fa-times" style={{marginLeft: 2, marginRight: 1}} />,
    element: null,
    colors: { group: 'specialColors', keys: [] },
  },
  {
    icon: <i className="fas fa-birthday-cake" style={{marginLeft: 2, marginRight: 2}} />,
    element: <Milestone />,
    colors: { group: 'specialColors', keys: ['TEXT_300K'] },
  },
];

const initialState = {
  showBackground: true,
  showCharacter: true,
  backdropIndex: 1,
  dressingIndex: 1,
  objectIndex: 1,
  specialIndex: 1,
  rate: 3.5,
  swing: 4.5,
  bob: 30,
};

function Reducer(state, { type, value }) {
  switch (type) {
    case 'SHOW_CHARACTER':
      return {
        ...state,
        showCharacter: value,
      }
    case 'SHOW_BACKGROUND':
      return {
        ...state,
        showBackground: value,
      }
    case 'SET_BACKDROP':
      return {
        ...state,
        backdropIndex: value,
      }
    case 'SET_DRESSING':
      return {
        ...state,
        dressingIndex: value,
      }
    case 'SET_OBJECT':
      return {
        ...state,
        objectIndex: value,
      }
    case 'SET_SPECIAL':
      return {
        ...state,
        specialIndex: value,
      }
    case 'SET_RATE':
      return {
        ...state,
        rate: value,
      }
    case 'SET_SWING':
      return {
        ...state,
        swing: value,
      }
    case 'SET_BOB':
      return {
        ...state,
        bob: value,
      }
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

export const SceneContext = createContext(initialState);
export default function Scene({ children }) {
  const [ state, dispatch ] = useLocalStorageReducer('scene', Reducer, initialState);
  return (
    <SceneContext.Provider value={[state, dispatch]}>
      {children}
    </SceneContext.Provider>
  );
}
