import React from 'react';
import { MaskContainer } from './ui/svg-mask-effect';

function About() {
    return (
        <div id='about' className='md:min-h-screen bg-[#090809]'>
            <MaskContainer revealText={
                <div className=' ml-4 md:ml-0 md:text-[6vw] font-bold text-[#B7AB98] text-[5vh]'>
                    <div className='font-normal tracking-wider text-3xl mb-6 md:mb-0'>ABOUT ME {'()'}</div>
                    <div>I'm a self-taught<br /><span className='text-green-400'>{"{developer}"}</span> with a<br />strong interest in <br />technology{'.'}</div>
                </div>
            }>
                <div className='md:leading-[7vw] leading-[5vh] md:text-[6vw] font-[Times New Roman] font-bold mb-32 text-white text-[5vh]'>
                    <div className='mb-4 font-medium text-3xl md:text-left'>ABOUT ME {'()'}</div>
                    <ul className='flex flex-col items-center flex-start md:tracking-wider md:text-left'>
                        <li>I also enjoy listening to <span className="md:text-green-400">{"{music}"}</span> and reading books{'.'}</li>
                    </ul>
                </div>
            </MaskContainer>
        </div>
    );
}

export default About;
