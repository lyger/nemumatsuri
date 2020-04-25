import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Burst from './burst';


export function Star({ color, tilt, scale, animated, burst }) {
  const baseTilt = tilt || 0;
  const variants = {
    spin: {
      rotate: baseTilt,
      transition: {type: 'spring', stiffness: 20, damping: 0, velocity: 0.5 * tilt, mass: 20 * scale}
    }
  }
  return (
    <motion.g
      variants={animated ? variants: null}
      animate={animated ? 'spin': null}
      style={animated ? {scale} : {scale, rotate: baseTilt}}>
      {burst && <Burst r={150} color={color} period={10 * scale - 0.2 * tilt} />}
      <motion.path
        d="M 63.10928,82.449142 C 58.212811,86.319999 9.7354957,63.68882 3.4989358,63.942337 -2.7376235,64.195854 -49.218101,90.687081 -54.412597,87.226423 c -5.194496,-3.460659 1.34872,-56.558744 -0.819592,-62.411724 -2.168312,-5.852979 -41.726224,-41.872301 -40.04013,-47.881962 1.686094,-6.009662 54.20734,-16.194904 59.103809,-20.065762 4.896469,-3.870857 26.9288124,-52.623249 33.1653717,-52.876766 6.2365599,-0.253517 32.1532583,46.549743 37.3477543,50.010401 5.194497,3.460658 58.369146,9.349344 60.537457,15.202323 2.168312,5.85298 -34.335533,44.964228 -36.021627,50.97389 -1.686094,6.009661 9.145303,58.401462 4.248834,62.272319 z"
        style={{fill: color}} />
    </motion.g>
  );
}


function getMoonPhase() {
  const newMoon = new Date('2020-03-24T18:28:00+09:00');
  const now = Date.now();
  return ((now - newMoon.getTime()) / 2551442878) % 1;
}


export function Moon({ color, shadow, tilt, r }) {
  const [phase, setPhase] = useState(0);
  const upperColor = (phase + 0.25) % 1 < 0.5 ? shadow : color;
  useEffect(() => { setPhase(getMoonPhase()); }, []);
  return (
    <motion.g style={{rotate: tilt}}>
      <circle r={r} cx={0} cy={0} style={{fill: color}} />
      <path
        d={`M0,${-r} a1,1 0 0,${phase < 0.5 ? 0 : 1} 0,${2 * r}`}
        style={{fill: shadow}} />
      <path
        d={`M0,${-r} a${Math.abs(0.25 - (phase % 0.5)) * 4},1 0 0,${(phase % 0.5) < 0.25 ? 1 : 0} 0,${2 * r}`}
        style={{fill: upperColor}} />
      <path d={`M0,${-r} L0,${r}`} style={{stroke: upperColor, strokeWidth: 2}} />
    </motion.g>
  );
}


export function Heart({ color, scale, tilt, skew, pulse }) {
  const filterId = 'heartFilter' + Math.random().toString(36).substr(2, 9);
  return (
    <g>
      <filter id={filterId}>
        <motion.feGaussianBlur
          in="SourceGraphic"
          animate={{stdDeviation: [0, 0.75 * pulse, 0]}}
          transition={{ease: 'easeInOut', duration: 0.3 * pulse, delay: Math.random() * pulse, repeatDelay: 0.7 * pulse, loop: Infinity}} />
      </filter>
      <path
        d="m 0,-25 a 21.213203,21.213203 0 0 0 -30,30 l 27,27 a 4.42426,4.2426 0 0 0 6,0 l 27,-27 a 21.213203,21.213203 0 0 0 -30,-30"
        style={{fill: color, transform: `rotate(${tilt || 0}deg) skewX(${skew || 0}deg) scale(${scale || 1})`}}
        filter={`url(#${filterId})`} />
    </g>
  );
}
