import React, { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Matsuri from './matsuri';
import Ebifrion from './ebifrion';
import { SceneContext } from '../scene';

export default function Character() {
  const [ { showCharacter, rate, swing, bob } ] = useContext(SceneContext);
  // Force the animation to restart without enter/exit transitions when scene properties change
  const rerenderKey = `r${rate}s${swing}b${bob}`;
  const variants = {
    init: {
      translateY: -1080,
    },
    enter: {
      translateY: 0,
      transition: {type: 'spring', stiffness: 70, damping: 10, mass: 2, delay: 1.5},
    },
    swing: {
      rotate: [-swing, swing, -swing],
      transition: {ease: 'easeInOut', duration: rate, loop: Infinity}
    },
    bob: {
      y: [-bob, bob, -bob],
      originY: [`${160 - bob}px`, `${160 + bob}px`, `${160 - bob}px`],
      transition: {ease: 'easeInOut', duration: rate * 2.67, loop: Infinity},
    },
    exit: {
      translateY: [null, 5 * bob, -1080],
      transition: {ease: 'easeInOut', duration: 1.5},
    },
  };
  return (
    <AnimatePresence>
      {showCharacter && 
        <motion.g
          initial="init"
          animate={['enter', 'swing', 'bob', rerenderKey]}
          style={{originX: "930px"}}
          variants={variants}
          exit="exit">
          <Ebifrion>
            <Matsuri />
          </Ebifrion>
        </motion.g>}
    </AnimatePresence>
  );
}