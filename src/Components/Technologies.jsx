import React from 'react'
import {RiReactjsLine} from 'react-icons/ri'
import java from '../assets/icons8-java-96.png'
import spring from '../assets/spring-boot-96.png'
import mongo from '../assets/icons8-mongodb-96.png'
import postgres from '../assets/icons8-postgresql-100.png'
import jsp from '../assets/jsp.png'
import { animate, motion } from "motion/react"

const Technologies = () => {

   const iconvariants=(duration)=>({
      initial:{y:-6},
      animate:{
         y:[6,-6],
         transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
           repeatType:"reverse",
         } , 
      },
   })

  return (
    <div className= "border-b text-center flex flex-col  items-center border-neutral-900 pb-24  ">
            <motion.h2 whileInView={{y:0,opacity:1}} initial={{y:-100,opacity:0}} transition={{duration:0.8,delay:0.5}}  className='text-4xl text-center my-20 font-light'>Technologies</motion.h2>
        <div className="grid grid-cols-2  md:grid-cols-5   gap-4 w-fit  items-center justify-center  transition-all duration-1000 ">
            <motion.div variants={iconvariants(2.5)} initial="initial" animate="animate" whileHover={{scale:1.1}} className=' flex items-center justify-center rounded-2xl border-4 border-neutral-700 p-4'>
             <div   className='h-15 w-15 md:w-20 md:h-20 '>
              <img src={java} alt="" className='w-full rounded-lg' />
               </div>
            </motion.div>
            <motion.div variants={iconvariants(3)} initial="initial" animate="animate" whileHover={{scale:1.1}} className=' flex items-center justify-center rounded-2xl border-4 border-neutral-700 p-4'>
             <div className='h-15 w-15 md:w-20 md:h-20 '>
              <img src={spring} alt="" className='w-full rounded-lg' />
               </div>
            </motion.div>
            <motion.div variants={iconvariants(5)} initial="initial" animate="animate" whileHover={{scale:1.1}} className='flex items-center justify-center rounded-2xl border-4 border-neutral-700 p-4'>
             <div className='h-15 w-15 md:w-20 md:h-20 '>
              <img src={mongo} alt="" className='w-full rounded-lg' />
               </div>
            </motion.div>
            <motion.div  variants={iconvariants(2)} initial="initial" animate="animate" whileHover={{scale:1.1}} className=' flex items-center justify-center rounded-2xl border-4 border-neutral-700 p-4'>
             <div className='h-15 w-15 md:w-20 md:h-20 '>
              <img src={postgres} alt="" className='w-full rounded-lg' />
               </div>
            </motion.div>
            <motion.div  variants={iconvariants(2.5)} initial="initial" animate="animate" whileHover={{scale:1.1}} className=' flex items-center justify-center rounded-2xl border-4 border-neutral-700 p-4'>
             <div className='h-15 w-15 md:w-20 md:h-20 '>
              <img src={jsp} alt="" className='w-full rounded-lg bg-white' />
               </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Technologies