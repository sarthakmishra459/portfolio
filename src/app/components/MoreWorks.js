"use client"
import React, { useRef, useState } from 'react'
import { motion, useAnimation } from 'framer-motion';
import { ContainerScroll } from './ui/container-scroll';
import { ContainerScroll2 } from './ui/container-screen-2';
function MoreWorks() {
    const works = [
        {
            name: "TRADING DAPP",
            description: "A decentralized trading application which uses machine learning models to predict price movements.",
            link: "https://github.com/sarthakmishra459",
            users: [{
                name: "Manu Arora",
                designation: "Founder, Algochurn",
                image: "./trading.png",
                badge: "Mentor",
            }]
        },
        {
            name: "Drive 3.0",
            description: "A decentralized file sharing application which uses IPFS to store files and view data with details emmited on the blockchain.",
            link: "https://drive3-0-one.vercel.app/",
            users: [{
                name: "Manu Arora",
                designation: "Founder, Algochurn",
                image: "./drive.png",

                badge: "Mentor",
            }]
        },
        {
            name: "CROWDFUNDING DAPP",
            description: "A decentralized crowdfunding application powered by Polygon Matic which provides platform to fund users without any third party agent to ensure trust and privacy.",
            link: "https://incognito-hand-6zh8.vercel.app/",
            users: [{
                name: "Manu Arora",
                designation: "Founder, Algochurn",
                image: "./incognito.png",

                badge: "Mentor",
            }]
        }
    ];
    const apps = ["https://github.com/sarthakmishra459", "https://drive3-0-one.vercel.app/", "https://incognito-hand-6zh8.vercel.app/"]
    const tech = ["Next.Js", "Anchor", "Express.Js", "MongoDb", "Ethers.Js"];
    const controls = useAnimation();

    const handleHover = () => {
        controls.start({
            width: "100%",
            transition: { duration: 0.5 }
        });
    };

    const handleHoverEnd = () => {
        controls.start({
            width: 0,
            transition: { duration: 0.5 }
        });
    };

    const [hoveredWork, setHoveredWork] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);

    const handleMouseEnter = (index) => {
        setHoveredWork(index);
    };

    const handleMouseLeave = () => {
        setHoveredWork(null);
    };

    const handleMouseMove = (event) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
    };
    return (
        <div id='more' className='md:min-h-screen h-full  bg-[#090809] w-full'>
            <div className='flex flex-col font-bold md:text-6xl text-[5vh] md:p-40 text-[#B7AB98]'>
                <div className=' md:tracking-widest font-normal md:leading-[6vw] leading-[6vh] md:m-6 m-20'>MORE WORKS {'()'}</div>
                <div>
                    {works.map((work, index) => {
                        const isLastIndex = index === works.length - 1;
                        const roundedClass = isLastIndex ? "md:items-end text-3xl" : "md:items-center";

                        return (
                            <div
                                key={index}
                                className={`flex md:flex-row flex-col justify-between items-center  mb-28 ${roundedClass}`}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                                onMouseMove={handleMouseMove}
                                onClick={() => {
                                    window.open(work.link)

                                }}
                            >

                                <div className="flex flex-col w-2/3 p-4 rounded-md md:text-[15.5vh] md:tracking-widest md:leading-[8vw] leading-[6vh]">
                                    <div className="font-bold">{work.name}</div>
                                    <p className="text-gray-600 text-3xl tracking-wide">
                                        {work.description}
                                    </p>
                                    <a href="https://github.com/sarthakmishra459" target="_blank" rel="noopener noreferrer" className="text-[1rem] bg-[#B7AB98] hover:bg-[rgb(223,197,155)] w-24 h-11 flex justify-center items-center rounded-md my-4">
                                        <button className="text-black">Visit Site</button>
                                    </a>

                                </div>
                                <div className='flex md:mt-6  justify-end'>
                                    {(index === works.length - 1 || index === 0) ? <ContainerScroll2 users={work.users} /> : <ContainerScroll users={work.users} />}

                                </div>
                                {hoveredWork === index && (
                                    <div
                                        className="fixed bg-cover bg-center"
                                        style={{
                                            top: mousePosition.y + "px",
                                            left: mousePosition.x + "px",
                                        }}
                                    >
                                        <img
                                            src={imgs[index]?.image}
                                            alt="User Image"
                                            className="w-48 h-48  rounded-full object-cover object-center"
                                        />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

            </div>
            <div className='min-h-screen flex flex-col font-bold md:text-6xl text-3xl md:px-40 pb-24 text-[#B7AB98]'>
                <div className='mx-5'>
                    <div className='text-3xl tracking-widest md:leading-[6vw] leading-[16vh]'>TECHNOLOGIES {"()"}</div>

                    {tech.map((work, index) => (
                        <motion.div
                            key={work}
                            className='relative md:text-[15.5vh] text-[6vh] tracking-widest  md:leading-[11vw] leading-[11vh]'
                            whileHover={{ backgroundColor: '#4ADE80', color: '#fff' }}
                            animate={{
                                ...controls,
                                transition: { delay: index * 0.3, duration: 0.5 } // Adjust delay value as needed
                            }}

                            onHoverStart={handleHover}
                            onHoverEnd={handleHoverEnd}
                        >
                            {work}
                            <motion.div
                                className='line w-full h-1 bg-[#B7AB98]'
                                animate={controls}
                                initial={{ width: 0 }}
                            />
                        </motion.div>
                    ))}



                    <div className='w-full h-1 text-[#4ADE80]'>
                        <div className=' text-right'>and many more...</div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default MoreWorks

export const users = [
    {
        name: "Manu Arora",
        designation: "Founder, Algochurn",
        image: "./trading.png",
        badge: "Mentor",
    },
    {
        name: "Manu Arora",
        designation: "Founder, Algochurn",
        image: "./drive.png",
        badge: "Mentor",
    },
    {
        name: "Manu Arora",
        designation: "Founder, Algochurn",
        image: "./incognito.png",
        badge: "Mentor",
    }
];
export const imgs = [
    {
        name: "Manu Arora",
        designation: "Founder, Algochurn",
        image: "./trading.png",
        badge: "Mentor",
    },
    {
        name: "Manu Arora",
        designation: "Founder, Algochurn",
        image: "./drive.png",
        badge: "Mentor",
    },
    {
        name: "Manu Arora",
        designation: "Founder, Algochurn",
        image: "./incognito.png",
        badge: "Mentor",
    }
];