"use client"
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { MaskContainer } from './ui/svg-mask-effect';

function Works() {
    const works = ["TRADING-DAPP", "MUSICIA", "CROWDFUNDING DAPP"];
    const controls = [useAnimation(), useAnimation(), useAnimation()];

    useEffect(() => {
        // Start animations when component mounts
        controls.forEach((control, index) => {
            control.start({
                width: 0,
                transition: { duration: 0.5 }
            });
        });
    }, []); // Empty dependency array ensures this effect runs only once, on mount

    const handleHover = (index) => {
        controls[index].start({
            width: "100%",
            transition: { duration: 0.5 }
        });
    };

    const handleHoverEnd = (index) => {
        controls[index].start({
            width: 0,
            transition: { duration: 0.5 }
        });
    };

    return (
        <div id='works' className='md:min-h-screen pb-[24vh] md:pb-0 bg-[#090809] w-full'>

            <div className='flex flex-col font-bold text-6xl md:p-40  text-[#B7AB98]'>
                <div className='mx-5'>
                    <div className='text-3xl font-normal tracking-widest leading-[11vh] md:leading-[6vw]'>MY WORKS {"()"}</div>
                    {works.map((work, index) => (
                        <motion.div
                            key={index}
                            className='md:text-[15.5vh] text-4xl tracking-widest md:leading-[11vw] leading-[6vh]'
                            whileHover={{ backgroundColor: '#4ADE80', color: '#fff' }}
                            animate={{
                                ...controls[index],
                                transition: { delay: index * 0.3, duration: 0.5 } // Adjust delay value as needed
                            }}
                            onHoverStart={() => handleHover(index)}
                            onHoverEnd={() => handleHoverEnd(index)}
                        >
                            {work}
                            <motion.div
                                className='line w-full h-1 bg-[#B7AB98]'
                                animate={controls[index]}
                                initial={{ width: 0 }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Works;
