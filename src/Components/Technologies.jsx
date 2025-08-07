import React from 'react'
import {RiReactjsLine} from 'react-icons/ri'
import java from '../assets/icons8-java-96.png'
import spring from '../assets/spring-boot-96.png'
import mongo from '../assets/icons8-mongodb-96.png'
import postgres from '../assets/icons8-postgresql-100.png'
import jsp from '../assets/jsp.png'
const Technologies = () => {
  return (
    <div className= "border-b text-center flex flex-col  items-center border-neutral-900 pb-24  ">
            <h2 className='text-4xl text-center my-20 font-light'>Technologies</h2>
        <div className="grid grid-cols-2  md:grid-cols-5   gap-4 w-fit  items-center justify-center  transition-all duration-1000 ">
            <div className=' flex items-center justify-center rounded-2xl border-4 border-neutral-700 p-4'>
             <div className='h-15 w-15 md:w-20 md:h-20 '>
              <img src={java} alt="" className='w-full rounded-lg' />
               </div>
            </div>
            <div className=' flex items-center justify-center rounded-2xl border-4 border-neutral-700 p-4'>
             <div className='h-15 w-15 md:w-20 md:h-20 '>
              <img src={spring} alt="" className='w-full rounded-lg' />
               </div>
            </div>
            <div className='flex items-center justify-center rounded-2xl border-4 border-neutral-700 p-4'>
             <div className='h-15 w-15 md:w-20 md:h-20 '>
              <img src={mongo} alt="" className='w-full rounded-lg' />
               </div>
            </div>
            <div className=' flex items-center justify-center rounded-2xl border-4 border-neutral-700 p-4'>
             <div className='h-15 w-15 md:w-20 md:h-20 '>
              <img src={postgres} alt="" className='w-full rounded-lg' />
               </div>
            </div>
            <div className=' flex items-center justify-center rounded-2xl border-4 border-neutral-700 p-4'>
             <div className='h-15 w-15 md:w-20 md:h-20 '>
              <img src={jsp} alt="" className='w-full rounded-lg bg-white' />
               </div>
            </div>
        </div>
    </div>
  )
}

export default Technologies