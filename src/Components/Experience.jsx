import React from 'react'
import { EXPERIENCES } from '../constants'
const Experience = () => {
  return (
    <div className='border-b     border-neutral-900 pb-8 '>
        <h2 className='text-4xl text-center my-20 font-light'>Experience</h2>
        <div className='' >
            {EXPERIENCES.map((experience,idx)=>(
                <div className="flex flex-col  md:flex-row lg:flex-row lg:justify-center mb-4" key={idx}>
                    <div className="w-full md:w-1/2 lg:max-w-1/4  ">
                    <p className='mb-2 text-sm  text-neutral-400'>{experience.year}</p>
                    </div>
                    <div className="w-full md:max-w-xl flex flex-col  mb-8 ">
                        <h2 className='font-semibold text-lg mb-2'>{experience.role} <span>- {experience.company}</span></h2>
                        <p className='text-neutral-400 font-medium pb-2 mb-2'>📍 {experience.location}</p>
                        <p className='text-neutral-400 font-light mb-4'>{experience.description}</p>
                        <div className="flex flex-wrap gap-2   ">
                            {experience.technologies.map((tech,idx)=>(<span className=" bg-neutral-900 text-violet-500 text-sm px-2 py-1 rounded" key={idx}>{tech}</span>))}
                        </div>
                        
                    </div>  
                </div>
            ))}
        </div>
    </div>
  )
}

export default Experience