import React from 'react'
import { FaGitAlt } from 'react-icons/fa';
import { IoIosGitBranch } from 'react-icons/io';
import { RiBootstrapLine, RiCss3Line, RiGithubLine, RiHtml5Line, RiJavascriptLine, RiNextjsLine, RiReactjsLine, RiTailwindCssLine } from "react-icons/ri";
import { TbBrandTypescript } from 'react-icons/tb';
import { motion } from "motion/react"

const iconVariants = (duration) => ({
    animate:{
        y : [10, -10],
        transition:{
            duration:duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

export default function Skills() {
    return (
        <>
            <div className='border-b border-neutral-800 pb-24'>
                <motion.h2 whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.5 }} className='title'>
                    Skills
                </motion.h2>
                <motion.div whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} initial={{opacity:0,x:-100}} transition={{duration:1.5}} className='flex flex-wrap items-center justify-center gap-4'>
                    <motion.div
                    variants={iconVariants(2.5)}
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <RiHtml5Line className='text-6xl text-[#E96228]' />
                    </motion.div>
                    <motion.div
                    variants={iconVariants(3)}
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <RiCss3Line className='text-6xl text-[#025BDE]' />
                    </motion.div>
                    <motion.div
                    variants={iconVariants(2.5)}
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <RiJavascriptLine className='text-6xl text-[#F2EB2E]' />
                    </motion.div>
                    <motion.div 
                    variants={iconVariants(4)}
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <TbBrandTypescript className='text-6xl text-[#0176C6]' />
                    </motion.div>
                    <motion.div 
                    variants={iconVariants(3)}
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <RiBootstrapLine className='text-6xl text-[#6D11EE]' />
                    </motion.div>
                    <motion.div 
                    variants={iconVariants(5)}
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <RiTailwindCssLine className='text-6xl text-[#35BCF8]' />
                    </motion.div>
                    <motion.div 
                    variants={iconVariants(3.5)}
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <RiGithubLine className='text-6xl text-white' />
                    </motion.div>
                    <motion.div 
                    variants={iconVariants(6)}
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <IoIosGitBranch className='text-6xl text-[#F44C27]' />
                    </motion.div>
                    <motion.div 
                    variants={iconVariants(2.5)}
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <RiReactjsLine className='text-6xl text-[#57C4DC]'/>
                    </motion.div>
                    <motion.div 
                    variants={iconVariants(4)}
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <RiNextjsLine className='text-6xl text-black' />
                    </motion.div>                    
                </motion.div>
            </div>
        </>
    )
}
