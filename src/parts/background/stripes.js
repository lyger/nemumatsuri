import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ColorContext } from '../../colorscheme';

export default function Stripes({ n }) {
  const [ { backgroundColors } ] = useContext(ColorContext);
  const stripeWidth = 1920 / (2 * n + 1);
  const xCoords = [];
  for (let x = 0; x < n; x++) {
    xCoords.push((2 * x + 1.5) * stripeWidth);
  }
  const variants = {
    hide: { pathLength: 0, transition: { ease: 'easeOut', duration: 0.5, staggerChildren: 0.2 } },
    show: { pathLength: 1, transition: { ease: 'easeOut', duration: 0.5, staggerChildren: 0.2 } },
  }
  return (
    <motion.g
      initial="hide"
      animate="show"
      variants={variants}
      exit="hide">
      {xCoords.map((x, i) =>
        <motion.path
          key={i}
          d={`M${x},0 L${x},1080`}
          variants={variants}
          style={{stroke: backgroundColors.STRIPES, strokeWidth: stripeWidth}} />)}
    </motion.g>
  );
}
