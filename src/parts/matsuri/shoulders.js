import React from 'react';
import { motion } from 'framer-motion';
import { colors } from './colors'

export default function Shoulders(props) {
  return (
    <motion.g>

      <defs>

        <motion.path
          id="skin_shoulders"
          d="m 954,423 c 0,0 14.62499,0.375 27.74999,2.625 13.125,2.25 22.50001,7.87499 26.62501,15.75 4.125,7.87499 5.3598,10.64619 5.3598,28.27117 -85.46047,59.32746 -119.76617,57.39735 -180.81562,2.88465 -0.52257,-17.38191 2.90282,-29.37997 11.26463,-36.29503 24.90114,-20.59282 109.81604,-13.23578 109.81604,-13.23578 0,0 1.4e-4,0 1.4e-4,0"
          style={{fill: colors.SKIN}} />

        <motion.clipPath id="#skin_shoulders_clip">
          <motion.use href="#skin_shoulders" />
        </motion.clipPath>

      </defs>

      <motion.use href="#skin_shoulders" />
      <motion.path
        id="skin_shoulders_shadow"
        clipPath="url(#skin_shoulders_clip)"
        d="m 834.36452,423.35484 c -10.56566,26.5578 34.86535,83.56697 74.10977,80.65015 39.24442,-2.91682 55.67488,-61.7004 59.26277,-84.48953 -25.17727,-2.80429 -40.00929,-6.13179 -63.1626,-6.07652 -19.6753,0.35634 -58.24247,1.30703 -70.20995,9.9159 0,0 0,0 0,0"
        style={{fill: colors.SKIN_SHADOW}} />

    </motion.g>
  );
}