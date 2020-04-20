import React, { useContext } from 'react';
import { ColorContext } from '../../../colorscheme';
import Flutter from '../elements/flutter';
import { Heart } from '../elements/shapes';


export default function HeartScatter() {
  const [ { dressingColors } ] = useContext(ColorContext);
  return [
    <Flutter key="1" x={250} y={95} span={19.5}><Heart scale={1.2} color={dressingColors.HEART1} skew={-1} pulse={1.4} tilt={-7} /></Flutter>,
    <Flutter key="2" x={786} y={157} span={41.3}><Heart scale={3.0} color={dressingColors.HEART2} skew={9} pulse={4.6} tilt={19} /></Flutter>,
    <Flutter key="3" x={1443} y={265} span={17.6}><Heart scale={1.6} color={dressingColors.HEART1} skew={-5} pulse={2.5} tilt={-15} /></Flutter>,
    <Flutter key="4" x={977} y={379} span={34.0}><Heart scale={2.4} color={dressingColors.HEART2} skew={4} pulse={3.0} tilt={4} /></Flutter>,
    <Flutter key="5" x={521} y={283} span={28.3}><Heart scale={2.8} color={dressingColors.HEART3} skew={3} pulse={5.0} tilt={-13} /></Flutter>,
    <Flutter key="6" x={1364} y={480} span={15.8}><Heart scale={1.2} color={dressingColors.HEART3} skew={-9} pulse={2.3} tilt={-10} /></Flutter>,
    <Flutter key="7" x={218} y={494} span={22.1}><Heart scale={2.0} color={dressingColors.HEART3} skew={2} pulse={3.8} tilt={13} /></Flutter>,
    <Flutter key="8" x={143} y={563} span={24.4}><Heart scale={1.4} color={dressingColors.HEART1} skew={7} pulse={2.0} tilt={-15} /></Flutter>,
    <Flutter key="9" x={567} y={573} span={41.6}><Heart scale={4.0} color={dressingColors.HEART1} skew={-4} pulse={3.6} tilt={-16} /></Flutter>,
    <Flutter key="10" x={752} y={627} span={53.8}><Heart scale={1.3} color={dressingColors.HEART3} skew={-8} pulse={4.8} tilt={-5} /></Flutter>,
    <Flutter key="11" x={1148} y={634} span={24.1}><Heart scale={1.9} color={dressingColors.HEART3} skew={-9} pulse={2.6} tilt={-6} /></Flutter>,
    <Flutter key="12" x={1714} y={650} span={29.0}><Heart scale={0.9} color={dressingColors.HEART3} skew={7} pulse={2.5} tilt={6} /></Flutter>,
    <Flutter key="13" x={1335} y={727} span={41.2}><Heart scale={2.6} color={dressingColors.HEART1} skew={-10} pulse={2.6} tilt={14} /></Flutter>,
    <Flutter key="14" x={1700} y={149} span={29.1}><Heart scale={3.5} color={dressingColors.HEART2} skew={8} pulse={3.2} tilt={-11} /></Flutter>,
    <Flutter key="15" x={107} y={892} span={25.5}><Heart scale={1.5} color={dressingColors.HEART2} skew={0} pulse={2.8} tilt={2} /></Flutter>,
    <Flutter key="16" x={485} y={943} span={25.6}><Heart scale={2.2} color={dressingColors.HEART2} skew={6} pulse={3.9} tilt={-15} /></Flutter>,
  ];
}
