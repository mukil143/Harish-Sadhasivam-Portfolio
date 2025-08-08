import React from 'react'
import hero from '../assets/Heroimg.jpeg'
import About_img from '../assets/About_img.png'
import {ABOUT_TEXT} from '../constants'
import { motion } from "motion/react"

const About = () => {
  const container=(delay)=>({
    hidden:{x:-100,opacity:0},
    visible:{x:0,opacity:1,transition:{duration:0.5,delay:delay}}
  })
    const exp=(delay)=>({
    hidden:{x:100,opacity:0},
    visible:{x:0,opacity:1,transition:{duration:0.5,delay:delay}}
  })
  return (
    <div className="   border-b border-neutral-900 pb-4  ">
        <motion.h2 whileInView={{y:0,opacity:1}} initial={{y:-100,opacity:0}} transition={{duration:0.8,delay:0.5}} className="text-center my-20 text-4xl font-light">About <span className='font-thin'>Me</span></motion.h2>
        <div className="flex flex-col md:flex-row lg:flex-row ">
            <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
                <motion.img variants={container(0)} initial="hidden" whileInView={"visible"}  src={About_img} className='rounded-lg w-3/4 md:w-3/4 shadow '  alt="" />
            </div>
            </div>
            <div className="w-full md:w-3/4 lg:w-1/2 ">
            <div className="flex h-full items-start justify-center p-2 lg:justify-center ">
                <motion.p variants={exp(0)} initial="hidden" whileInView={"visible"} className='my-2 max-w-xl  font-light  text-left  line-height md:text-left text-lg  lg:text-lg tracking-tight'><span className='font-semibold tracking-normal'>👋 I'm Harish Sadhasivam</span>{ABOUT_TEXT}</motion.p>
            </div>
            </div>
        </div>
    </div>
  )
} 

export default About