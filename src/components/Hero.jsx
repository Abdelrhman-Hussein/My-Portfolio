import React from 'react'
import profileImage from '../assets/Abdelrahman-Hussein.jpeg'
import { motion } from "motion/react"

//handling motion
const container = (delay) =>({
    hidden: {x:-100, opacity:0},
    visible:{
        x:0,
        opacity:1,
        transition:{duration:0.5, delay:delay}
    }
})

export default function Hero() {
    return (
        <>
            <div className='borderr lg:mb-35'>
                <div className='flex flex-wrap'>
                    <div className='w-full lg:w-1/2'>
                        <div className='flex flex-col items-center lg:items-start'>
                            <motion.h1 variants={container(0)} initial="hidden" animate="visible" className='pb-16 text-4xl font-thin tracking-tight lg:mt-16 lg:text-7xl'>Abdelrhman Hussein</motion.h1>
                            <motion.span variants={container(0.5)} initial="hidden" animate="visible" className='bg-linear-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>
                                Software Engineer <span className='text-2xl'>(Frontend Developer)</span>
                            </motion.span>
                            <motion.p variants={container(1)} initial="hidden" animate="visible" className='my-2 max-w-xl py-6 font-light tracking-tighter'>
                                Freshly graduated Software Engineer with a deep love for Front-end development. I thrive at the intersection of design and logic. My goal is to build fast, responsive, and user-centric applications while staying ahead of the latest industry trends. Beyond just pixels, I care about the architecture and efficiency of the web.
                            </motion.p>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2 lg:p-8'>
                        <div className='flex justify-center'>
                            <motion.img initial={{x:100,opacity:0}} className='rounded-4xl' animate={{x:0,opacity:1}} transition={{duration:1, delay:1.2}} src={profileImage} alt="Abdelrhman Hussein" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
