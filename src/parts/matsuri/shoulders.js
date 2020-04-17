import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ColorContext } from '../../colorscheme';

export default function Shoulders({ rate }) {
  const breathSpan = 2.5;
  const [{ matsuriColors } ] = useContext(ColorContext);

  return (
    <g>

      <defs>

        <motion.path
          id="skin_shoulders"
          d="m 954,428.625 c 0,0 14.62499,0.375 27.74999,2.625 13.125,2.25 22.50001,7.87499 26.62501,15.75 4.125,7.87499 5.3598,5.02119 5.3598,22.64617 -73.79321,41.03107 -127.98629,48.6469 -180.81562,2.88465 -0.52257,-17.38191 2.90282,-23.75497 11.26463,-30.67003 24.90114,-20.59282 109.81604,-13.23578 109.81604,-13.23578 h 1.4e-4"
          animate={{y: [breathSpan, -breathSpan, breathSpan]}}
          transition={{ease: 'easeInOut', duration: rate * 0.7, loop: Infinity, repeatDelay: rate * 0.3}}
          style={{fill: matsuriColors.SKIN}} />

        <clipPath id="skin_shoulders_clip">
          <use href="#skin_shoulders" />
        </clipPath>

      </defs>

      <use href="#skin_shoulders" />
      <path
        id="skin_shoulders_shadow"
        clipPath="url(#skin_shoulders_clip)"
        d="m 834.36452,423.35484 c -10.56566,26.5578 34.86535,83.56697 74.10977,80.65015 39.24442,-2.91682 55.67488,-61.7004 59.26277,-84.48953 -25.17727,-2.80429 -40.00929,-6.13179 -63.1626,-6.07652 -19.6753,0.35634 -58.24247,1.30703 -70.20995,9.9159 0,0 0,0 0,0"
        style={{fill: matsuriColors.SKIN_SHADOW}} />

    </g>
  );
}