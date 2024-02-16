import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseSignal } from '@fortawesome/free-solid-svg-icons';

import H4 from './H4'
import Image from 'next/image';
import H3 from './H3';
import Text from './Text';

function WhoWeAre() {
    return (
        <div className='flex lg:flex-row flex-col justify-center items-center md:h-screen md:mt-40 mt-16 md:space-x-10 space-y-20 md:py-0 py-10'>
            <div className='lg:w-2/5 w-4/5 space-y-10 md:h-auto '>
                <H4 text={'WHO WE ARE'} />

                <H3 text={' Assisting individuals in locating the appropriate real estate.'} />

                <Text text={`Through transparency, efficiency, and a dedication to excellence, we aim to exceed expectations and elevate the standard of property management in every community we serve."`} />

                <div className='flex flex-col justify-center items-center space-y-8'>
                    <div className='flex justify-between md:w-[70%] items-center rounded-3xl shadow-lg p-5  space-x-5'>
                        {/* <div >
                            <FontAwesomeIcon icon={faHouseSignal} className=' w-10 text-[#C3A67D]' />
                        </div> */}
                        <div className='space-y-2'>
                            <h5 text={''} color={''} className='text-[20px] text-[#C3A67D] font-semibold'>
                                Our Vision
                            </h5>
                            <p className='text-[14px] '>
                                Our vision at New Hiraise Realestate is to redefine property management through innovation, integrity, and personalized service. We aspire to create thriving communities, maximize property value, and provide a seamless experience for owners and tenants alike
                            </p>
                        </div>
                    </div>
                    <div className='flex justify-between md:w-[70%] items-center rounded-3xl shadow-lg p-5 space-x-5'>
                        {/* <div >
                            <FontAwesomeIcon icon={faHouseSignal} className=' w-10 text-[#C3A67D]' />
                        </div> */}
                        <div className='space-y-2'>
                            <h5 text={''} color={''} className='text-[20px] text-[#C3A67D] font-semibold'>
                                Our mission
                            </h5>
                            <p className='text-[14px]'>
                                At New Hiraise Realestate , our mission is to revolutionize property management by delivering exceptional service, fostering strong relationships, and embracing cutting-edge technology.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:w-2/5 w-4/5 space-y-10 lg:space-x-5 md:space-x-10 md:flex hidden justify-center'>
                <div className='h-full flex justify-center items-center'>
                    <Image src={'/home/whoweare1.png'} width={200} height={200} alt='img1' className='rounded-3xl md:h-[400px] md:w-[300px]  mt-10 shadow-xl' />
                </div>
                <div className='space-y-5 flex flex-col justify-center items-center'>
                    <Image src={'/home/whoweare2.png'} width={200} height={200} alt='img1' className='rounded-3xl shadow-xl md:w-[300px] ' />
                    <Image src={'/home/whoweare3.png'} width={200} height={200} alt='img1' className='rounded-3xl shadow-xl md:w-[300px] ' />
                    <div className='w-20 h-20 bg-gradient-to-tl from-white via-[#C3A67D] to-black opacity-30  rounded-full lg:block hidden' />
                </div>

            </div>
        </div>
    )
}

export default WhoWeAre