import { useEffect, useReducer } from 'react';


function isObject (value) {
  return value !== undefined && value !== null && typeof value === 'object' && value.constructor === Object;
}


function equalKeys(a, b) {
  const aKeys = Object.keys(a).sort();
  const bKeys = Object.keys(b).sort();
  if (JSON.stringify(aKeys) !== JSON.stringify(bKeys))  return false;
  return aKeys.reduce((acc, key) => {
    const aIsObj = isObject(a[key]);
    const bIsObj = isObject(b[key]);
    if (aIsObj !== bIsObj) return false;
    if (aIsObj && bIsObj) return acc && equalKeys(a[key], b[key]);
    return acc;
  }, true);
}


export function useShortcuts(list) {
  useEffect(() => {
    const handlers = list.map(({ key, fn }) => {
      function handler(e) {
        switch (e.target.tagName.toLowerCase()) {
          case 'input':
          case 'textarea':
            return;
          default:
            if (e.isComposing || e.keyCode === 229) return;
            if (e.code === key) {
              e.preventDefault();
              e.stopPropagation();
              fn();
            }
        }
      }
      document.addEventListener('keydown', handler);
      return handler;
    });

    function cleanUp() {
      handlers.forEach((handler) => {
        document.removeEventListener('keydown', handler);
      });
    }

    return cleanUp;
  }, [list]);
}


export function useLocalStorageReducer(key, reducer, initialState) {
  let localInitialState;
  try {
    localInitialState = JSON.parse(localStorage.getItem(key));
    if (localInitialState === null || !equalKeys(localInitialState, initialState)) throw new Error();
  } catch (error) {
    localInitialState = initialState;
    localStorage.setItem(key, JSON.stringify(initialState));
  }
  const localReducer = (state, action) => {
    const newState = reducer(state, action);
    localStorage.setItem(key, JSON.stringify(newState));
    return newState;
  }
  return useReducer(localReducer, localInitialState);
}
