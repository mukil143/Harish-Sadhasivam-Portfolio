import React from 'react'
import {HERO_CONTENT}  from '../constants'
import hero from '../assets/Heroimg.jpeg'
import { FaArrowDownLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className='border-b h-full   border-neutral-900 pb-4 lg:mb-36'>
        <div className="flex flex-col justify-around md:flex-row lg:flex-row ">

        <div className="w-full relative md:w-1/2 lg:max-w-1/2">
        <div className="flex flex-col justify-center items-center  md:items-start">
            <h1 className=' pb-10 lg:pb-16  text-4xl sm:text-5xl   md:text-6xl   font-thin letter-spacing tracking-wider lg:mt-12 lg:text-7xl'>Harish  Sadhasivam</h1>
            <span className="bg-gradient-to-r from-pink-300 text-2xl md:text-3xl lg:text-4xl tracking-tight via-slate-500 to-purple-500 bg-clip-text text-transparent">
                Full Stack Developer
            </span>
            <p className='my-2 max-w-xl py-6 font-light text-center  md:text-left text-sm md:text-sm lg:text-lg tracking-tight' >{HERO_CONTENT}</p>
        </div>
        <div className="hidden md:block  mouse ">
    <div className="scroll-ball"></div>
  <p className="scroll-text ">Scroll <FaArrowDownLong/></p>
  </div>
        </div>


        <div className="w-full p-4  h-auto md:w-1/2  lg:max-w-1/2  ">
        <div className="flex justify-center">
          <img src={hero} alt="" className='rounded-lg lg:w-3/4 shadow object-cover' />
        </div>
        </div>  
        </div>
        <div className=" hidden md:block scroll-indicator">
  
</div>


    </div>
  )
}

export default Hero