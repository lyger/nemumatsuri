import React from 'react';
import { motion } from 'framer-motion';


export default function Flutter({ x, y, span, children }) {
  const variants = {
    init: {scale: 0},
    enter: {scale: 1, transition: {type: 'spring', stiffness: 100, damping: 5, mass: 0.5, delay: 0.5 + 0.01 * span}},
    flutterX: {x: [x - span, x + span, x - span], transition: {ease: 'easeInOut', loop: Infinity, duration: 0.23 * span}},
    flutterY: {y: [y + span, y - span, y + span], transition: {ease: 'easeInOut', loop: Infinity, duration: 0.17 * span}},
    exit: {scale: 0, transition: {ease: 'easeInOut', duration: 0.5, delay: 0.5 + 0.01 * span}},
  };
  return (
    <motion.g
      variants={variants}
      initial="init"
      animate={['enter', 'flutterX', 'flutterY']}
      exit="exit">
      {children}
    </motion.g>
  );
}
