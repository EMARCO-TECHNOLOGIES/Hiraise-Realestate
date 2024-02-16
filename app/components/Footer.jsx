"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

function Footer() {
    const router = useRouter()
    return (
        <div className='md:h-96 p-10 bg-[#121C37] flex flex-row  justify-center items-center'>
            <div className='w-1/5 md:block hidden'>
                <Image src={'/logo.png'} width={300} height={300} alt='logo' className='w-52' />

            </div>
            <div className='md:w-3/5 w-1/2 text-white md:text-sm text-xs md:text-left flex md:flex-row flex-col justify-around md:space-y-0 space-y-5'>
                <ul className='space-y-5'>
                    <li>Privacy policy</li>
                    <li>Terms and conditions</li>
                    <li>Desclaimer</li>
                </ul>
                <ul className='space-y-5'>
                    <li onClick={() => router.push('/')} className='cursor-pointer'>Home</li>
                    <li onClick={() => router.push('/properties')} className='cursor-pointer'>Properties</li>
                    <li onClick={() => router.push('/blog')} className='cursor-pointer'>Blog</li>
                </ul>
                <ul className='space-y-5 md:block hidden'>
                    <li>Phone: 9876543210</li>
                    <li>Mail us here: newhiraise@gmail.com</li>
                    <li className=''>
                        <ul className='space-x-5 flex'>
                            <a href='' className='cursor-pointer'><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href='' className='cursor-pointer'><FontAwesomeIcon icon={faFacebook} /></a>
                            <a href='' className='cursor-pointer'><FontAwesomeIcon icon={faYoutube} /></a>
                        </ul>
                    </li>
                </ul>


            </div>

            <div className='w-1/2 md:hidden block space-y-10 py-10 px-5'>
                <ul className='space-y-5 md:hidden text-white text-xs'>
                    <li>Phone: 9876543210</li>
                    <li>Mail us here: newhiraise@gmail.com</li>
                    <li className=''>
                        <ul className='space-x-5 flex'>
                            <a href='' className='cursor-pointer'><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href='' className='cursor-pointer'><FontAwesomeIcon icon={faFacebook} /></a>
                            <a href='' className='cursor-pointer'><FontAwesomeIcon icon={faYoutube} /></a>
                        </ul>
                    </li>
                </ul>
                <Image src={'/logo.png'} width={300} height={300} alt='logo' />

            </div>


        </div>
    )
}

export default Footer