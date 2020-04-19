import React from 'react';
import { motion } from 'framer-motion';
import Head from './matsuri/head';
import Body from './matsuri/body';
import { RightArm, LeftArm } from './matsuri/arms';
import Leg from './matsuri/leg'

export default function Matsuri() {
  return (
    <motion.g id="matsuri">
      <Leg />
      <Body>
        <LeftArm />
        <Head />
      </Body>
      <RightArm />
    </motion.g>
  )
}