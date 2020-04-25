import React, { useContext } from 'react';
import { motion } from "framer-motion";
import { ColorContext } from '../../../colorscheme';
import { Star } from './shapes';
import Flutter from './flutter';


function Glow({ children }) {
  const [ { specialColors } ] = useContext(ColorContext);
  return (
    <React.Fragment>
      <defs>
        {children}
      </defs>
      <filter id="milestone_blur">
        <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
      </filter>
      {React.Children.map(children, (child, i) =>
        <React.Fragment key={i}>
          <use href={`#${child.props.id}`} style={{stroke: specialColors.TEXT_300K, fill: specialColors.TEXT_300K}} filter="url(#milestone_blur)" />
          <use href={`#${child.props.id}`} style={{stroke: 'white', fill: 'white'}} />
        </React.Fragment>
      )}
    </React.Fragment>
  );
}


function StarBurst({ id, num, x, y, span, shift, duration }) {
  const stars = [];
  const baseTransition = {
    repeatDelay: (1 + Math.random()) * duration,
    delay: (1 + Math.random()) * 1.5,
    loop: Infinity,
  };
  for (let i = 0; i < num; i++) {
    const dx = span * (2 * Math.random() - 1 + shift);
    const dy = span * (1 + Math.random()) * 0.67;
    const dur = (duration || 1) * (9 + Math.random()) * 0.1;
    const variants = {
      init: {x: x, y: y, scale: 0, rotate: 0, opacity: 1},
      xMove: {x: x + dx, transition: {...baseTransition, ease: 'circOut', duration: dur}},
      yMove: {y: y + dy, transition: {...baseTransition, ease: 'circIn', duration: dur}},
      spinScale: {scale: 1, rotate: 360 * (3 + Math.random()) * 0.25, transition: {...baseTransition, ease: 'easeOut', duration: dur}},
      fade: {opacity: [1, 0], transition: {...baseTransition, ease: 'linear', duration: dur, times: [0.7, 1]}}
    };
    stars.push(
      <motion.g
        key={i}
        variants={variants}
        initial="init"
        animate={['xMove', 'yMove', 'spinScale', 'fade']}>
        <Star scale={(0.5 + Math.random() * Math.random()) * 0.12} tilt={Math.random() * 60} />
      </motion.g>
    );
  }
  return(
    <motion.g id={id} initial={{opacity: 1}} animate={{opacity: 1}} exit={{opacity: 0}} style={{rotate: -15}}>
      {stars}
    </motion.g>
  );
}


export default function Milestone() {
  const variants = {
    hide: {pathLength: 0, pathOffset: 0, strokeOpacity: 0},
    show: {pathLength: [0, 1], pathOffset: [0, 0], strokeOpacity: [1, 1], transition: {ease: 'linear', duration: 2, delay: 0.5}},
    exit: {pathLength: [1, 0, 0], pathOffset: [0, 1, 1], strokeOpacity: [1, 1, 0], transition: {ease: 'linear', duration: 2, times: [0, 0.99, 1]}},
  }
  return (
    <Flutter x={40} y={30} span={17} noTransition>
      <Glow>
        <motion.path
          id="milestone_path"
          d="m 0,0 c 0,0 3.5,32.4 -22.8,65.8 -20.4,26 -28.6,19.2 -17,-4.2 21.2,-43 81.1,-59.6 103,-28.4 20.2,28.7 -8.6,86.4 -45.9,120.2 -19.2,17.4 -43.6,23.9 -25.5,2.7 21.7,-25.5 66.6,-38.3 89.1,-5.3 23.1,33.8 -1.9,98.5 -37.5,155.3 -31.8,50.7 -66.1,76.6 -72.1,72.1 -8,-5.8 -5.8,-27 82.7,-117.2 84.2,-85.7 124.7,-176.2 124.7,-176.2 0,0 -33.3,49.9 -31.9,82.8 1.6,40 24.4,64.7 53.8,67.2 30.1,2.6 56.9,-24.2 67.1,-63.4 10.1,-38.7 -29.1,-87.1 -66.2,-89.3 -37.1,-2.1 32.1,13 71.4,11.7 38.7,-1.3 59.5,-7.9 59.5,-7.9 0,0 -33.3,49.9 -31.9,82.8 1.6,40 24.4,64.7 53.8,67.2 30.1,2.6 56.9,-24.2 67.1,-63.4 10.1,-38.7 -29.1,-87.1 -66.2,-89.3 -37.1,-2.1 32.1,13 71.4,11.7 38.7,-1.3 59.5,-7.9 59.5,-7.9 0,0 -33.3,49.9 -31.9,82.8 1.6,40 24.4,64.7 53.8,67.2 30.1,2.6 56.9,-24.2 67.1,-63.4 10.1,-38.7 -29.1,-87.1 -66.2,-89.3 -37.1,-2.1 32.1,13 71.4,11.7 38.7,-1.3 59.5,-7.9 59.5,-7.9 0,0 -33.3,49.9 -31.9,82.8 1.6,40 24.4,64.7 53.8,67.2 30.1,2.6 56.9,-24.2 67.1,-63.4 10.1,-38.7 -29.1,-87.1 -66.2,-89.3 -37.1,-2.1 32.1,13 71.4,11.7 38.7,-1.3 59.5,-7.9 59.5,-7.9 0,0 -33.3,49.9 -31.9,82.8 1.6,40 24.4,64.7 53.8,67.2 30.1,2.6 56.9,-24.2 67.1,-63.4 10.1,-38.7 -29.1,-87.1 -66.2,-89.3 -37.1,-2.1 32.1,13 71.4,11.7 38.7,-1.3 59.5,-7.9 59.5,-7.9 "strokeDasharray="0 1"
          variants={variants}
          initial="hide"
          animate="show"
          exit="exit"
          style={{scale: 0.7, rotate: -15, fillOpacity: 0, strokeWidth: 10, strokeLinejoin: 'round', strokeLinecap: 'round'}} />
        <StarBurst id="milestone_burst1" num={3} x={120} y={160} span={80} shift={-0.4} duration={0.75} />
        <StarBurst id="milestone_burst2" num={4} x={190} y={350} span={80} shift={-0.3} duration={0.75} />
        <StarBurst id="milestone_burst3" num={3} x={300} y={200} span={80} shift={-0.2} duration={0.75} />
        <StarBurst id="milestone_burst4" num={4} x={420} y={120} span={80} shift={0} duration={0.75} />
        <StarBurst id="milestone_burst5" num={3} x={500} y={200} span={80} shift={0.1} duration={0.75} />
        <StarBurst id="milestone_burst6" num={3} x={600} y={100} span={80} shift={0.2} duration={0.75} />
        <StarBurst id="milestone_burst7" num={4} x={730} y={30} span={80} shift={0.4} duration={0.75} />
      </Glow>
    </Flutter>
  );
}