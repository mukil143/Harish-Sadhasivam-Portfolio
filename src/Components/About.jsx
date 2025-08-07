import React from 'react'
import hero from '../assets/Heroimg.jpeg'
import About_img from '../assets/About_img.png'
import {ABOUT_TEXT} from '../constants'
const About = () => {
  return (
    <div className="   border-b border-neutral-900 pb-4  ">
        <h2 className="text-center my-20 text-4xl font-light">About <span className='font-thin'>Me</span></h2>
        <div className="flex flex-col md:flex-row lg:flex-row ">
            <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
                <img src={About_img} className='rounded-lg w-3/4 md:w-3/4 shadow '  alt="" />
            </div>
            </div>
            <div className="w-full md:w-3/4 lg:w-1/2 ">
            <div className="flex h-full items-start justify-center p-2 lg:justify-center ">
                <p className='my-2 max-w-xl  font-light  text-left  line-height md:text-left text-lg  lg:text-lg tracking-tight'><span className='font-semibold tracking-normal'>👋 I'm Harish Sadhasivam</span>{ABOUT_TEXT}</p>
            </div>
            </div>
        </div>
    </div>
  )
} 

export default About