"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Nav = () => {
    const pathname = usePathname();
    console.log(pathname)
    if (!pathname.includes('/Admin')) {
        return (
            <div className=' flex justify-center items-center  p-4'>
                <ul className='flex justify-between w-1/2'>
                    <Link href={'/'}> <li>Home</li></Link>
                    <Link href={'/Service'}><li>service</li></Link>

                    <li>Profile</li>
                </ul>
            </div>
        );

    }
    else {
        <></>
    }

};

export default Nav;