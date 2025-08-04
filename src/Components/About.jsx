import React from 'react'
import hero from '../assets/Heroimg.jpeg'
import About_img from '../assets/About_img.png'
import {ABOUT_TEXT} from '../constants'
const About = () => {
  return (
    <div className="container mx-auto border-b border-neutral-900 pb-4  ">
        <h2 className="text-center my-20 text-4xl font-light">About <span className='font-thin'>Me</span></h2>
        <div className="flex flex-col lg:flex-row ">
            <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
                <img src={About_img} className='rounded-lg w-3/4 shadow '  alt="" />
            </div>
            </div>
            <div className="w-full lg:w-1/2 ">
            <div className="flex items-center justify-center  lg:justify-start">
                <p className='my-2 max-w-xl py-6 font-light text-center  md:text-left text-sm md:text-sm lg:text-lg tracking-tight'>{ABOUT_TEXT}</p>
            </div>
            </div>
        </div>
    </div>
  )
} 

export default About