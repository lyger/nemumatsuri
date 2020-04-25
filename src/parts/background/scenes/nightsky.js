import React, { useContext } from 'react';
import Dangle from '../elements/dangle';
import { Star, Moon } from '../elements/shapes';
import { ColorContext } from '../../../colorscheme';

export default function NightSky() {
  const [ { dressingColors } ] = useContext(ColorContext)
  return (
    [
      <Dangle key="0" x={146} y={900} swing={-4}><Star color={dressingColors.STAR} tilt={6} scale={0.6} animated burst /></Dangle>,
      <Dangle key="1" x={580} y={700} swing={-10}><Star color={dressingColors.STAR} tilt={5} scale={0.6} animated burst /></Dangle>,
      <Dangle key="2" x={500} y={331} swing={-3}><Star color={dressingColors.STAR} tilt={14} scale={0.7} animated burst /></Dangle>,
      <Dangle key="3" x={820} y={950} swing={-7}><Star color={dressingColors.STAR} tilt={3} scale={0.8} animated burst /></Dangle>,
      <Dangle key="4" x={1054} y={223} swing={-7}><Star color={dressingColors.STAR} tilt={5} scale={1} animated burst /></Dangle>,
      <Dangle key="5" x={1222} y={780} swing={-4}><Star color={dressingColors.STAR} tilt={-11} scale={0.5} animated burst /></Dangle>,
      <Dangle key="6" x={1320} y={666} swing={1}><Star color={dressingColors.STAR} tilt={-4} scale={0.4} animated burst /></Dangle>,
      <Dangle key="7" x={1512} y={150} swing={9}><Star color={dressingColors.STAR} tilt={7} scale={0.9} animated burst /></Dangle>,
      <Dangle key="8" x={1819} y={324} swing={7}><Star color={dressingColors.STAR} tilt={10} scale={0.6} animated burst /></Dangle>,
      <Dangle key="9" x={1639} y={498} swing={6}><Star color={dressingColors.STAR} tilt={-10} scale={0.6} animated burst /></Dangle>,
      <Dangle key="moon" x={250} y={400} swing={-5}><Moon color={dressingColors.STAR} shadow={dressingColors.MOONSHADOW} tilt={-20} r={140} /></Dangle>,
    ]
  );
}
