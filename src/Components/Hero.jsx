import React from 'react'
import {HERO_CONTENT}  from '../constants'
import hero from '../assets/Heroimg.jpeg'
import { FaArrowDownLong } from "react-icons/fa6";
import { motion } from "motion/react"

const Hero = () => {
  const container=(delay)=>({
    hidden:{x:-100,opacity:0},
    visible:{x:0,opacity:1,transition:{duration:0.5,delay:delay}}
  })
  return (
    <div className='border-b    border-neutral-900 pb-4 lg:mb-36'>
        <div className="flex flex-col justify-around md:flex-row lg:flex-row ">

        <div className="w-full relative md:w-1/2 lg:max-w-1/2">
        <div className="flex flex-col justify-center items-center  md:items-start">
            <motion.h1 variants={container(0)} initial="hidden" animate="visible" className=' pb-10 lg:pb-16  text-4xl sm:text-5xl   md:text-6xl   font-thin letter-spacing tracking-wider lg:mt-12 lg:text-7xl'>Harish  Sadhasivam</motion.h1>
            <motion.span variants={container(0.4)} initial="hidden" animate="visible"  className="bg-gradient-to-r from-pink-300 text-2xl md:text-3xl lg:text-4xl tracking-tight via-slate-500 to-purple-500 bg-clip-text text-transparent">
                Full Stack Developer
            </motion.span>
            <motion.p variants={container(0.8)} initial="hidden" animate="visible" className='my-2 max-w-xl py-6 font-light text-left  md:text-left text-lg   lg:text-lg tracking-tight' ><span className='text-2xl'>👋</span>  {HERO_CONTENT}</motion.p>
        </div>
        <div className="hidden md:block  mouse ">
    <div className="scroll-ball"></div>
  <p className="scroll-text ">Scroll <FaArrowDownLong/></p>
  </div>
        </div>


        <div className="w-full p-4  h-auto md:w-1/2  lg:max-w-1/2  ">
        <div className="flex justify-center">
          <motion.img initial={{x:+200,opacity:0}}  animate={{x:0,opacity:1,transition:{duration:0.5,delay:0.8}}}  src="https://res.cloudinary.com/deif4iuok/image/upload/v1754552856/Heroimg_xrvnze.jpg" alt="" className='rounded-lg lg:w-3/4 shadow object-cover' />
        </div>
        </div>  
        </div>
        <div className=" hidden md:block scroll-indicator">
  
</div>


    </div>
  )
}

export default Hero