import React from 'react';
import { motion } from 'framer-motion';
import Head from './matsuri/head';
import Body from './matsuri/body';
import { RightArm, LeftArm } from './matsuri/arms';
import Leg from './matsuri/leg'

export default function Matsuri(props) {
  return (
    <motion.g id="matsuri">
      <Leg {...props} />
      <Body {...props}>
        <LeftArm {...props} />
        <Head {...props} />
      </Body>
      <RightArm {...props} />
    </motion.g>
  )
}