import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from "motion/react"
import { FaRegEye } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";



export default function Projects() {
    return (
        <>
            <div className='borderr'>
                <motion.h2 whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.5 }} className='title'>
                    Projects
                </motion.h2>
                <div>
                    {PROJECTS.map((project,index)=> (
                        <div key={index} className='mb-16 flex flex-wrap lg:justify-center'>
                            <motion.div whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1.5 }} className='w-full lg:w-1/4'>
                                <img className='mb-6 rounded' src={project.image} width={150} height={150} alt={project.title} />
                            </motion.div>
                            <motion.div whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1.5 }} className='w-full max-w-xl lg:w-3/4'>
                                <div className='flex items-center gap-1'>
                                    <h6 className='mb-2 font-semibold'>
                                    {project.title}
                                    </h6>
                                    <a className='ms-3 hover:text-purple-900' href={project.url} target='_blank'>
                                        <FaRegEye className='pb-2' size={33}/>
                                    </a>
                                    <a className='ms-3 hover:text-purple-900' href={project.github} target='_blank'>
                                        <FaGithub className='pb-2' size={33}/>
                                    </a>
                                </div>
                                <p className='mb-4 text-neutral-400'>{project.description}</p>
                                {project.technologies.map((tech,index)=> (
                                    <span  key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>
                                        {tech}
                                    </span>
                                ))}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
