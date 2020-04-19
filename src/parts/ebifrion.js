import React from 'react';
import Upper from './ebifrion/upper';
import Lower from './ebifrion/lower';

export default function Ebifrion({ children }) {
  return (
    <React.Fragment>
      <Lower />
        {children}
      <Upper />
    </React.Fragment>
  )
}