"use client"
import React from 'react'
import { motion } from 'framer-motion';
function Marquee() {
    const skills = ["Next.Js", "TailwindCSS", "React.Js", "Node.Js", "Express.Js", "MongoDb","MySql", "C++", "Java", "Python "];
    return (
        <div id='marquee'>
            <div className='w-full py-10 rounded-tl-3xl rounded-tr-3xl  md:h-[70vh]  h-[50vh] bg-[#4ADE80]'>
                <div className='text-3xl text-center mb-10 tracking-wider font-bold text-black'>Skills & Languages</div>
                <div className='text  flex  overflow-hidden whitespace-nowrap'>
                    <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 30 }} className='text-[8vw]  uppercase leading-none font-["Founders_Grotesk_X-Condensed"] font-semibold pt-10 pr-20 -mt-[3vw] '>
                        {skills.map((skill, index) => <span key={index} className='mx-6 text-white'>{skill}</span>)}
                    </motion.h1>
                    <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 30 }} className='text-[8vw] uppercase leading-none font-["Founders_Grotesk_X-Condensed"] font-semibold pt-10 pr-20 -mt-[3vw]'>{skills.map((skill, index) => <span key={index} className='mx-6 text-white'>{skill}</span>)}s</motion.h1>

                </div>
                <div className='text   mt-11 flex  overflow-hidden whitespace-nowrap'>
                    <motion.h1 initial={{ x: "-100%" }} animate={{ x: 0 }} transition={{ ease: "linear", repeat: Infinity, duration: 30 }} className='text-[8vw]  uppercase leading-none font-["Founders_Grotesk_X-Condensed"] font-semibold pt-10 pr-20 -mt-[3vw] '>
                        {skills.map((skill, index) => <span key={index} className='mx-6 text-black'>{skill}</span>)}
                    </motion.h1>
                    <motion.h1 initial={{ x: "-100%" }} animate={{ x: 0 }} transition={{ ease: "linear", repeat: Infinity, duration: 30 }} className='text-[8vw] uppercase leading-none font-["Founders_Grotesk_X-Condensed"] font-semibold pt-10 pr-20 -mt-[3vw]'>{skills.map((skill, index) => <span key={index} className='mx-6 text-black'>{skill}</span>)}s</motion.h1>

                </div>
            </div>
        </div>
    )
}

export default Marquee