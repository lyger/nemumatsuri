import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ColorContext } from '../../../colorscheme';

export default function Stripes({ n }) {
  const [ { backgroundColors } ] = useContext(ColorContext);
  const stripeWidth = 1920 / (2 * n + 1);
  const xCoords = [];
  for (let x = 0; x < 2 * n + 1; x++) {
    xCoords.push((x + 0.5) * stripeWidth);
  }
  const parentVariants = {
    hide: {transition: {staggerChildren: 0.1}},
    show: {transition: {staggerChildren: 0.1}},
  };
  const childVariants = {
    hide: { pathLength: 0, transition: { ease: 'easeOut', duration: 0.5} },
    show: { pathLength: 1, transition: { ease: 'easeOut', duration: 0.5} },
  };
  return (
    <motion.g
      initial="hide"
      animate="show"
      variants={parentVariants}
      exit="hide">
      {xCoords.map((x, i) =>
        (i % 2 === 0)
        ? <motion.path
            key={i}
            d={`M${x},1080 L${x},0`}
            variants={childVariants}
            style={{stroke: backgroundColors.BACK_BG, strokeWidth: stripeWidth}} />
        : <motion.path
            key={i}
            d={`M${x},0 L${x},1080`}
            variants={childVariants}
            style={{stroke: backgroundColors.BACK_FG, strokeWidth: stripeWidth}} />)}
    </motion.g>
  );
}
