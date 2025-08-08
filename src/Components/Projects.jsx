import React from 'react'
import { PROJECTS } from '../constants'
import { animate, motion } from "motion/react"

const Projects = () => {
    const container=(delay)=>({
    hidden:{x:-100,opacity:0},
    visible:{x:0,opacity:1,transition:{duration:0.5,delay:delay}}
  })
    const exp=(delay)=>({
    hidden:{x:100,opacity:0},
    visible:{x:0,opacity:1,transition:{duration:0.5,delay:delay}}
  })
  return (
    <div className=' border-b    border-neutral-900 pb-8 lg:mb-36'>
        <h2 className='text-4xl text-center my-20 font-light'>Projects</h2>
         <div className='' >
                    {PROJECTS.map((project,idx)=>(
                        <div className="flex flex-col  md:flex-row lg:flex-row lg:justify-center mb-4" key={idx}>
                            <motion.div variants={container(0)} initial="hidden" whileInView={"visible"} className="w-full md:w-1/2 lg:max-w-1/4  ">
                            <img  className= ' h-5/6  inline-block rounded-lg w-1/2 md:w-3/4 shadow mb-4 ' src={project.image} alt="" />
                            </motion.div>
                            <motion.div  variants={exp(0)} initial="hidden" whileInView={"visible"} className="w-full md:max-w-xl flex flex-col  mb-8 ">
                                <h2 className='font-semibold text-lg mb-2'>{project.title}</h2>
                                
                                <p className='text-neutral-400 font-light mb-4'>{project.description}</p>
                                <div className="flex flex-wrap gap-2   ">
                                    {project.technologies.map((tech,idx)=>(<span className=" bg-neutral-900 text-violet-500 text-sm px-2 py-1 rounded" key={idx}>{tech}</span>))}
                                </div>
                                
                            </motion.div>  
                        </div>
                    ))}
                </div>
    </div>
  )
}

export default Projects