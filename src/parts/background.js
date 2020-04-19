import React, { useContext } from 'react';
import { ColorContext } from '../colorscheme';
import { SceneContext, BACKDROPS, DRESSINGS, OBJECTS } from '../scene';
import { AnimatePresence } from 'framer-motion';


export default function Background() {
  const [ { backgroundColors } ] = useContext(ColorContext);
  const [ { showBackground, backdropIndex, dressingIndex, objectIndex } ] = useContext(SceneContext);
  const shownElements = [
    BACKDROPS[backdropIndex].element,
    DRESSINGS[dressingIndex].element,
    OBJECTS[objectIndex].element,
  ];
  return (
    <g>
      <rect width="1920" height="1080" style={{fill: backgroundColors.BACKGROUND}}/>
      <AnimatePresence>
        {showBackground && shownElements}
      </AnimatePresence>
    </g>
  )
}