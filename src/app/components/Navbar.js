
import Link from 'next/link';
import React from 'react';

function Navbar() {
    return (
        <div className='fixed top-0 right-0 w-32 text-[#B7AB98] font-medium  text-2xl md:flex hidden flex-col justify-center items-center m-14 z-10'>
            <div className='flex flex-col p-6 items-center flex-start'>
                <ul>
                    <Link href="#about">
                        <li className='flex items-center hover:text-green-400'>

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg>
                            ABOUT


                        </li>
                    </Link>
                    <Link href="#works">
                        <li className='flex items-center hover:text-green-400'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg>
                            WORK
                        </li>
                    </Link>
                    <Link href="#faq">
                        <li className='flex items-center hover:text-green-400'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg>
                            FAQ
                        </li>
                    </Link>

                    <Link href="#contact">
                        <li className='flex items-center hover:text-green-400'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg>
                            CONTACT
                        </li>
                    </Link>


                </ul>

            </div>

        </div>
    );
}

export default Navbar;
