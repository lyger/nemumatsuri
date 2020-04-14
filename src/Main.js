import React, { useState } from 'react';
import './Main.css';
import Character from './parts/character';

function Main() {
  const [baseRate, setBaseRate] = useState(3);
  return (
    <svg className="main" viewBox="0 0 1920 1080">
      <Character rate={baseRate} />
    </svg>
  );
}

export default Main;
