import React, { useContext } from 'react';
import { motion } from "framer-motion";
import { ColorContext } from '../../../colorscheme';
import Flutter from './flutter';


export default function Milestone() {
  const [ { specialColors } ] = useContext(ColorContext);
  const variants = {
    hide: {pathLength: 0, pathOffset: 0, strokeOpacity: 0},
    show: {pathLength: [0, 1], pathOffset: [0, 0], strokeOpacity: [1, 1], transition: {ease: 'linear', duration: 2, delay: 0.5}},
    exit: {pathLength: [1, 0, 0], pathOffset: [0, 1, 1], strokeOpacity: [1, 1, 0], transition: {ease: 'linear', duration: 2, times: [0, 0.99, 1]}},
  }
  return (
    <Flutter x={40} y={30} span={20} noTransition>
      <defs>
        <motion.path
          id="milestone_path"
          d="m 0,0 c 0,0 3.5,32.4 -22.8,65.8 -20.4,26 -28.6,19.2 -17,-4.2 21.2,-43 81.1,-59.6 103,-28.4 20.2,28.7 -8.6,86.4 -45.9,120.2 -19.2,17.4 -43.6,23.9 -25.5,2.7 21.7,-25.5 66.6,-38.3 89.1,-5.3 23.1,33.8 -1.9,98.5 -37.5,155.3 -31.8,50.7 -66.1,76.6 -72.1,72.1 -8,-5.8 -5.8,-27 82.7,-117.2 84.2,-85.7 124.7,-176.2 124.7,-176.2 0,0 -33.3,49.9 -31.9,82.8 1.6,40 24.4,64.7 53.8,67.2 30.1,2.6 56.9,-24.2 67.1,-63.4 10.1,-38.7 -29.1,-87.1 -66.2,-89.3 -37.1,-2.1 32.1,13 71.4,11.7 38.7,-1.3 59.5,-7.9 59.5,-7.9 0,0 -33.3,49.9 -31.9,82.8 1.6,40 24.4,64.7 53.8,67.2 30.1,2.6 56.9,-24.2 67.1,-63.4 10.1,-38.7 -29.1,-87.1 -66.2,-89.3 -37.1,-2.1 32.1,13 71.4,11.7 38.7,-1.3 59.5,-7.9 59.5,-7.9 0,0 -33.3,49.9 -31.9,82.8 1.6,40 24.4,64.7 53.8,67.2 30.1,2.6 56.9,-24.2 67.1,-63.4 10.1,-38.7 -29.1,-87.1 -66.2,-89.3 -37.1,-2.1 32.1,13 71.4,11.7 38.7,-1.3 59.5,-7.9 59.5,-7.9 0,0 -33.3,49.9 -31.9,82.8 1.6,40 24.4,64.7 53.8,67.2 30.1,2.6 56.9,-24.2 67.1,-63.4 10.1,-38.7 -29.1,-87.1 -66.2,-89.3 -37.1,-2.1 32.1,13 71.4,11.7 38.7,-1.3 59.5,-7.9 59.5,-7.9 0,0 -33.3,49.9 -31.9,82.8 1.6,40 24.4,64.7 53.8,67.2 30.1,2.6 56.9,-24.2 67.1,-63.4 10.1,-38.7 -29.1,-87.1 -66.2,-89.3 -37.1,-2.1 32.1,13 71.4,11.7 38.7,-1.3 59.5,-7.9 59.5,-7.9 "strokeDasharray="0 1"
          variants={variants}
          initial="hide"
          animate="show"
          exit="exit"
          style={{scale: 0.7, rotate: -15, fillOpacity: 0, strokeWidth: 10, strokeLinejoin: 'round', strokeLinecap: 'round'}} />
      </defs>
      <filter id="milestone_blur">
        <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
      </filter>
      <use href="#milestone_path" style={{stroke: specialColors.TEXT_300K}} filter="url(#milestone_blur)" />
      <use href="#milestone_path" style={{stroke: 'white'}} />
    </Flutter>
  );
}