import React from 'react';
import { motion } from 'framer-motion';
import Matsuri from './matsuri';
import Ebifrion from './ebifrion';

export default function Character({ swing, rate }) {
  const bobSpan = 30;
  const variants = {
    init: {
      translateY: -1080,
    },
    enter: {
      translateY: 0,
      transition: {type: 'spring', stiffness: 70, damping: 10, mass: 2},
    },
    swing: {
      rotate: [-swing, swing, -swing],
      transition: {ease: 'easeInOut', duration: rate, loop: Infinity}
    },
    bob: {
      y: [-bobSpan, bobSpan, -bobSpan],
      originY: [`${160 - bobSpan}px`, `${160 + bobSpan}px`, `${160 - bobSpan}px`],
      transition: {ease: 'easeInOut', duration: rate * 2.67, loop: Infinity},
    },
    exit: {
      translateY: [null, 5 * bobSpan, -1080],
      transition: {ease: 'easeInOut', duration: 1.5},
    },
  }
  return (
    <motion.g
      initial="init"
      animate={['enter', 'swing', 'bob']}
      style={{originX: "930px"}}
      variants={variants}
      exit="exit">
      <Ebifrion rate={rate} swing={swing}>
        <Matsuri rate={rate} swing={swing} />
      </Ebifrion>
    </motion.g>
  );
}