"use client"
import React, { useState } from 'react'
import { TypewriterEffect, TypewriterEffectSmooth } from './ui/typewriter-effect'

function Contact() {
    const [hoveredElement, setHoveredElement] = useState(null);

    const handleMouseEnter = (element) => {
        setHoveredElement(element);
    };

    const handleMouseLeave = () => {
        setHoveredElement(null);
    };


    const words1 = [
        {
            text: "Linkedin",
        }
    ]
    const words2 = [

        {
            text: "Github",
        },

    ]
    const words3 = [
        {
            text: "Instagram",
        }
    ]
    const words4 = [
        {
            text: "X",
        }
    ]
    return (
        <div id='contact' className='md:min-h-screen pt-11 md:px-48 text-[#B7AB98] bg-[#090809]'>
            <div className='text-3xl tracking-widest font-bold   '>CONTACT ME {"()"}</div>

            <div className="flex flex-col h-[40rem]">
                <div className='grid grid-cols-2 md:gap-14 gap-6 mt-20'>
                    <div className='md:text-6xl' onClick={() => {
                        window.open("https://www.linkedin.com/in/sarthak-mishra-53407125b")

                    }} onMouseEnter={() => handleMouseEnter('Linkedin')} onMouseLeave={handleMouseLeave}>
                        {hoveredElement === 'Linkedin' ? <TypewriterEffectSmooth words={words1} /> : <a >LinkedIn</a>}
                    </div>
                    <div className='md:text-6xl' onClick={() => window.open("https://x.com/Sarthak40896594?t=ksAhOkNMM8pXiT8r2QIVpA&s=09")} onMouseEnter={() => handleMouseEnter('X')} onMouseLeave={handleMouseLeave}>
                        {hoveredElement === 'X' ? <TypewriterEffectSmooth words={words4} /> : <p>X</p>}
                    </div>
                    <div className='md:text-6xl' onClick={() => {
                        window.open("https://github.com/sarthakmishra459")

                    }} onMouseEnter={() => handleMouseEnter('Github')} onMouseLeave={handleMouseLeave}>
                        {hoveredElement === 'Github' ? <TypewriterEffectSmooth words={words2} /> : <p>Github</p>}
                    </div>
                    <div className='md:text-6xl' onClick={() => {
                        window.open("https://www.instagram.com/sarthak_mishra_33/")

                    }} onMouseEnter={() => handleMouseEnter('Instagram')} onMouseLeave={handleMouseLeave}>
                        {hoveredElement === 'Instagram' ? <TypewriterEffectSmooth words={words3} /> : <p>Instagram</p>}
                    </div>
                    <div className='md:text-6xl font-normal tracking-widest'>Email<br></br><span className='md:text-3xl'>sarthakmishra459@gmail.com</span></div>

                </div>



            </div>


        </div>
    )
}

export default Contact