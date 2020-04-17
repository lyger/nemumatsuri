import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import './Main.css';
import Character from './parts/character';
import Background from './parts/background';
import Menu from './menu';
import ColorScheme from './colorscheme';

function Main() {
  const [baseRate, setBaseRate] = useState(3.5);
  const [swing, setSwing] = useState(4.5);
  const [showCharacter, setShowCharacter] = useState(true);
  return (
    <ColorScheme>
      <svg className="main" viewBox="0 0 1920 1080">
        <Background rate={baseRate} />
        <AnimatePresence>
          {showCharacter && <Character rate={baseRate} swing={swing} />}
        </AnimatePresence>
        <circle r="10" cx="1905" cy="15" onClick={() => setShowCharacter(!showCharacter)} style={{fill: showCharacter ? 'green' : 'red'}} />
      </svg>
      <Menu />
    </ColorScheme>
  );
}

export default Main;
