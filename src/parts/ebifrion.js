import React from 'react';
import Upper from './ebifrion/upper';
import Lower from './ebifrion/lower';

export default function Ebifrion(props) {
  return (
    <React.Fragment>
      <Lower {...props} />
      {props.children}
      <Upper {...props} />
    </React.Fragment>
  )
}