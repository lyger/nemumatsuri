import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ColorContext } from '../../../colorscheme';


function PrivateDots({ spacing, r, color }) {
  const nCols = Math.ceil((1920 + 2 * r) / spacing) - 1;
  const nRows = Math.ceil((1080 + 2 * r) / spacing) - 1;
  const offsetX = ((nCols + 1) * spacing - 1920) / 2;
  const offsetY = ((nRows + 1) * spacing - 1080) / 2;
  const xCoords = [];
  for (let i = 0; i < nCols; i++) {
    xCoords.push((i + 1) * spacing - offsetX);
  }
  const variants = {
    hide: {r: 0},
    show: {r: r},
  }
  const baseTransition = {type: 'spring', stiffness: 100, damping: 5, mass: 0.5}
  return (
    <motion.g
      initial="hide"
      animate="show"
      variants={['hide', 'show']}
      exit="hide">
      {xCoords.flatMap((x, i) => {
        const odd = (i % 2 === 1);
        const els = [];
        for (let j = 0; j < (odd ? nRows : nRows + 1); j++) {
          const y = odd ? (j + 1) * spacing - offsetY : (j + 0.5) * spacing - offsetY;
          els.push(
            <motion.circle
              key={`${i}:${j}`}
              style={{x, y, fill: color}}
              variants={variants}
              transition={{...baseTransition, delay: Math.random()}} />)
        }
        return els;
      })}
    </motion.g>
  )
}


export default function Dots({ spacing }) {
  const [ { backgroundColors } ] = useContext(ColorContext);
  const rFg = 0.25 * spacing;
  const spacingBg = 1.8 * spacing;
  const rBg = 0.67 * spacingBg;
  return [
    <PrivateDots spacing={spacingBg} r={rBg} color={backgroundColors.BACK_BG} />,
    <PrivateDots spacing={spacing} r={rFg} color={backgroundColors.BACK_FG} />,
  ];
}