import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ColorContext } from '../../../colorscheme';


export default function Solid({ n }) {
  const [ { backgroundColors } ] = useContext(ColorContext);
  const strokeWidth = Math.floor(540 / n);
  const centerWidth = 1920 - (2 * strokeWidth * n) + 2;
  const centerHeight = 1080 - (2 * strokeWidth * n) + 2;
  const parentVariants = {
    hide: {transition: {staggerChildren: 0.1, staggerDirection: -1}},
    show: {transition: {staggerChildren: 0.1}},
  };
  const childVariants = {
    hide: {scale: 0, transition: {ease: 'easeOut', duration: 1}},
    show: {scale: 1, transition: {ease: 'easeOut', duration: 1}},
  };
  const coords = [];
  for (let i = 0; i < n; i++) coords.push((i + 0.5) * strokeWidth);
  return (
    <motion.g
      variants={parentVariants}
      initial="hide"
      animate="show"
      exit="hide"
      style={{scale: 1}}>
      {coords.map((c, i) => 
        <motion.rect
          key={i}
          x={c} y={c}
          width={1920 - 2 * c} height={1080 - 2 * c}
          variants={childVariants}
          style={{originX: '960px', originY: '540px', stroke: backgroundColors.BACK_BG, strokeWidth: strokeWidth + 2, fillOpacity: 0}} />)}
        <motion.rect
          key="center"
          x={n * strokeWidth - 1} y={n * strokeWidth - 1}
          width={centerWidth} height={centerHeight}
          variants={childVariants}
          style={{originX: '960px', originY: '540px', fill: backgroundColors.BACK_BG}} />
    </motion.g>
  );
}