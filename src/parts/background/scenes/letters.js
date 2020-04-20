import React, { useContext } from 'react';
import Envelope from '../elements/envelope';
import { motion } from 'framer-motion';
import { ColorContext } from '../../../colorscheme';


export default function Letters() {
  const [ { objectColors } ] = useContext(ColorContext);
  const variants1 = {
    hide: {
      rotate: 50,
      transition: {ease: 'easeIn', duration: 0.7},
    },
    show: {
      rotate: -20,
      transition: {ease: 'easeOut', duration: 1},
    },
  };
  const variants2 = {
    hide: {
      rotate: -10,
      transition: {ease: 'easeIn', duration: 0.7},
    },
    show: {
      rotate: 25,
      transition: {ease: 'easeOut', duration: 1},
    },
  };
  const variants3 = {
    hide: {
      rotate: -55,
      transition: {ease: 'easeIn', duration: 0.7},
    },
    show: {
      rotate: 10,
      transition: {ease: 'easeOut', duration: 1},
    },
  };
  const variantsOpen = {
    hide: {
      y: 1300,
      transition: {ease: 'easeIn', duration: 0.7, delay: 0.5},
    },
    show: {
      y: 900,
      transition: {ease: 'easeOut', duration: 1},
    },
  };
  const variantsPaper = {
    hide: {
      y: 0,
      transition: {ease: 'easeIn', duration: 0.7}
    },
    show: {
      y: -110,
      transition: {ease: 'easeOut', duration: 0.5, delay: 0.5}
    },
    recolor: {
      fill: objectColors.PAPER_GB,
      transition: {ease: 'easeInOut', duration: 0.5, delay: 1}
    },
    uncolor: {
      fill: objectColors.PAPER,
      transition: {ease: 'easeInOut', duration: 0.1}
    },
  };
  return (
    <motion.g
      variants={['hide', 'show']}
      initial="hide"
      animate="show"
      exit="hide">
      <defs>
        <filter id="letterLighten">
          <feColorMatrix
            in="SourceGraphic"
            type="matrix"
            values="1 0 0 0 0.05
                    0 1 0 0 0.05
                    0 0 1 0 0.05
                    0 0 0 1 0" />
        </filter>
        <filter id="letterDarken">
          <feColorMatrix
            in="SourceGraphic"
            type="matrix"
            values="1 0 0 0 -0.05
                    0 1 0 0 -0.05
                    0 0 1 0 -0.05
                    0 0 0 1 0" />
        </filter>
      </defs>
      <motion.g
        variants={variants1}
        style={{x: 1000, y: 950, originX: '-400px', originY: '0px'}}>
        <Envelope scale={1.4} filter="letterLighten" />
      </motion.g>
      <motion.g
        variants={variants2}
        style={{x: 1550, y: 1100, originX: '1000px', originY: '0px'}}>
        <Envelope scale={1.7} filter="letterDarken" />
      </motion.g>
      <motion.g
        variants={variants3}
        style={{x: 1120, y: 1000, originX: '500px', originY: '150px'}}>
        <Envelope scale={2} filter="letterDarken" />
      </motion.g>
      <motion.g
        variants={variantsOpen}
        style={{x: 1280}}>
        <Envelope scale={2.3} open>
          <motion.rect
            variants={variantsPaper}
            initial={['hide', 'uncolor']}
            animate={['show', 'recolor', objectColors.PAPER_GB]}
            exit={['hide', 'uncolor']}
            style={{x: 10, width: 222.7, height: 300}} />
        </Envelope>
      </motion.g>
    </motion.g>
  );
}
