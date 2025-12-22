import React from 'react'
import aboutImage from '../assets/about.jpg'
import { motion } from "motion/react"


export default function About() {
    return (
        <>
            <div className='borderr'>
                <motion.h2 whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.5 }} className='title'>
                    About 
                    <span className='text-neutral-500'> Me</span>
                </motion.h2>
                <div className='flex items-center flex-wrap'>
                    <motion.div whileInView={{opacity:1,x:0}} viewport={{once:true}} initial={{opacity:0,x:-100}} transition={{duration:0.5}} className='w-full lg:w-1/2 lg:p-8'>
                        <div className='flex items-center justify-center'>
                            <img className='rounded-2xl' src={aboutImage} alt="about" />
                        </div>
                    </motion.div>
                    <motion.div whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 0.5 }} className='w-full lg:w-1/2'>
                        <div className='flex justify-center lg:justify-start'>
                            <p className='my-2 max-w-xl py-6'>
                                I believe that great software isn't just about beautiful UI, but about performance, accessibility, and maintainability. I enjoy architecting clean, reusable components and optimizing web applications for the best possible user experience. Whether it's mastering the intricacies of CSS Flexbox and Grid or managing complex states in React, I approach every challenge with an analytical mindset.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}
