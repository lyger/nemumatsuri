import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ColorContext } from '../../../colorscheme';


export default function Dangle({ x, y, swing, children }) {
  const [ { backgroundColors } ] = useContext(ColorContext);
  const variants = {
    hide: {
      y: y - 1080,
      transition: { type: 'spring', stiffness: 50, damping: 5, mass: 0.8, delay: 1 + swing / 20 },
    },
    show: {
      y: y,
      transition: { type: 'spring', stiffness: 50, damping: 5, mass: 0.8, delay: 1 + swing / 20 },
    },
    idle: {
      rotate: 0,
      transition: {type: 'spring', stiffness: 10, damping: 0, velocity: swing * 0.1, mass: 15 - 0.5 * Math.abs(swing)},
    },
  }
  return (
    <motion.g
      initial="hide"
      style={{x, originX: '0px', originY: '-1080px'}}
      variants={variants}
      animate={["show", "idle"]}
      exit="hide">
      <path d="M0,-2000 L0,0" style={{stroke: backgroundColors.STRING, strokeWidth: 4}} />
      {children}
    </motion.g>
  );
}
