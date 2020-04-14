import React from 'react';
import { motion } from 'framer-motion';
import Matsuri from './matsuri';
import Ebifrion from './ebifrion';

export default function Character(props) {
  const bobSpan = 40;
  const swingSpan = 5;
  const variants = {
    swing: {
      rotate: [-swingSpan, swingSpan, -swingSpan],
      transition: {ease: 'easeInOut', duration: props.rate, loop: Infinity}
    },
    bob: {
      y: [-bobSpan, bobSpan, -bobSpan],
      originY: [`${160 - bobSpan}px`, `${160 + bobSpan}px`, `${160 - bobSpan}px`],
      transition: {ease: 'easeInOut', duration: props.rate * 2.67, loop: Infinity},
    },
  }
  return (
    <motion.g
      animate={['swing', 'bob']}
      style={{originX: "930px"}}
      variants={variants}>
      <Ebifrion {...props}>
        <Matsuri {...props} />
      </Ebifrion>
    </motion.g>
  );
}