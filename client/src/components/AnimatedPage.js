import React from 'react'
import  { motion } from 'framer-motion';

const animations = {
    initial:{
        opacity:0, scale:0
    },
    animate:{
        opacity: 1, scale:1
    },
    exit:{
        opacity: 0, scale:0
    }
}


export const AnimatedPage = ({children,classes}) => {
  return (
    <motion.div
    variants = {animations}
    initial = 'initial'
    animate = 'animate'
    exit = 'exit'
    className={classes}
    transition={{duration:1, ease:'backInOut'}}
    >{children}</motion.div>
  )
}
