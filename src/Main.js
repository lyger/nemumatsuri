import React from 'react';
import './Main.scss';
import Character from './parts/character';
import Background from './parts/background';
import Menu from './menu';
import ColorScheme from './colorscheme';
import Scene from './scene';

function Main() {
  return (
    <Scene>
      <ColorScheme>
        <svg className="main" viewBox="0 0 1920 1080">
          <Background />
          <Character />
        </svg>
        <Menu />
      </ColorScheme>
    </Scene>
  );
}

export default Main;
