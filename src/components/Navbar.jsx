import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function Navbar() {
    return (
        <>
            <nav className='mb-20 flex items-center justify-between py-6'>
                <div className='flex shrink-0 items-center'>
                    <h2 className='text-3xl'>A-H</h2>
                </div>
                <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                    <a href="https://www.linkedin.com/in/abdelrhman-hussein-7508b6394/" target='_blank'>
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/Abdelrhman-Hussein" target='_blank'>
                        <FaGithub />
                    </a>
                    <a href="https://www.instagram.com/abdo__husseinn/?next=%2F" target='_blank'>
                        <FaInstagram /> 
                    </a>
                    <a href="https://www.facebook.com/abdelrhman2111" target='_blank'>
                        <FaFacebook />
                    </a>
                </div>
            </nav>
        </>
    )
}
