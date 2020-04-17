import React from 'react';
import { motion } from 'framer-motion';


export default function Burst({ color, r, period }) {
  return (
    <motion.circle
      animate={{r: [0, 0, r * 0.8, r], opacity: [1, 1, 1, 0]}}
      transition={{ease: 'easeInOut', duration: period, times: [0, 0.9, 0.95, 1], loop: Infinity}}
      style={{fillOpacity: 0, stroke: color, strokeWidth: 0.05 * r}} />
  );
}
