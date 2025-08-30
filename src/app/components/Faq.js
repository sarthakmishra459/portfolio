"use client"
import React, { useState } from 'react'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"

function Faq() {

    const faq = [{ question: "Are you a Full Stack Developer?", answer: "Yes I develop fullstack apps using Next.JS, MongoDB, Javascript, and React. I also build dapps on top of Solana chain using Solana Web3.js SDK, Anchor and Rust." }, { question: "Do you only build Gen AI Applications?", answer: "No, I am also a full stack developer and I develop websites and web apps using Next.js, Node.js, Express.js, and MongoDb. I can build off chain apps as well." }, { question: "Are you exploring other domains?", answer: "Yes currently I am learning Generative AI, Data Science and Machine Learning using Python." }, { question: "How many projects have you made?", answer: "I have built a few projects on top of blockchain technology, machine learning and Generative Ai and some of then have been deployed as well. You can check them out on  Github." }]
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <div id='faq' className='md:min-h-screen pt-11 md:px-48 text-[#B7AB98] bg-[#090809]'>
            <div className='text-3xl tracking-widest font-bold   '>FAQs {"()"}</div>

            {faq.map((item, index) => (
                <Collapsible key={index} isOpen={openIndex === index} onClick={() => handleToggle(index)} className='my-6'>
                    <CollapsibleTrigger className='md:text-5xl  w-full mt-6 flex font-bold items-center gap-9'>
                        <div className={`${openIndex === index ? 'hidden' : ''}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill={openIndex === index ? 'none' : 'currentColor'}>
                                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"></path>
                            </svg>
                        </div>
                        <div className={`${openIndex === index ? '' : 'hidden'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill={openIndex === index ? '#4ADE80' : 'none'}>
                                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
                            </svg>
                        </div>

                        {item.question}
                    </CollapsibleTrigger>
                    {openIndex === index && (
                        <CollapsibleContent className='md:text-3xl my-6  ml-20'>
                            {item.answer}
                        </CollapsibleContent>
                    )}
                    <div className='w-full h-1 my-8 bg-[#B7AB98]' ></div>
                </Collapsible>
            ))
            }

        </div >
    )
}

export default Faq