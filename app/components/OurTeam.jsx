import React from 'react'
import H6 from './H6'
import H4 from './H4'
import Image from 'next/image'

function OurTeam() {

    const members = [
        { name: 'Brendon M', img: '/home/members1.jpg', designation: 'CEO & Founder' },
        { name: 'Jodi J.Appleby', img: '/home/members2.jpg', designation: 'Realestate developer' },
        { name: 'Justin S.Meza', img: '/home/members1.jpg', designation: 'Listing Agent' },
        { name: 'Susant T. Smith', img: '/home/members2.jpg', designation: 'Buyers Agent' },
    ]


    return (
        // <div className='lg:h-screen flex flex-col justify-center items-center space-y-10 p-10'>
        //     <div className='w-[80%] flex flex-col justify-center items-center space-y-5'>
        //         <H6 text={'INTRODUCE YOURSELF TO'} color={'text-[#C3A67D]'} />
        //         <H4 text={'Our Team of Experts'} />
        //     </div>
        //     <div className='grid lg:grid-cols-4 grid-cols-2 gap-10  '>
        //         {members.map((item, index) => (
        //             <div key={index} className='text-center'>
        //                 <Image src={item.img} width={400} height={400} alt={index} className='md:w-[200px] md:h-[300px] w-[200px] h-[200px] object-cover rounded-tl-[100px] rounded-tr-[50px] rounded-b-[50px]' />
        //                 <H4 text={item.name} />
        //                 <span className='text-blue-600 text-sm '>{item.designation}</span>
        //             </div>
        //         ))}

        //     </div>
        // </div>



        // <div>
        <div className='lg:h-screen flex flex-col justify-center items-center space-y-10 md:p-10 p-5'>

            <div class="min-h-screen grid place-items-center font-mono bg-white">

                <div class="bg-gray-800 rounded-md shadow-lg md:p-10">
                    <div class="flex md:flex-row flex-col px-4 leading-none max-w-6xl justify-center items-center">
                        <div class="flex-none ">
                            <img
                                src="/photo1.jpg"
                                alt="pic"
                                class="h-72 w-56 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300 mt-5 "
                            />
                        </div>

                        <div class="flex-col text-gray-300 font-sans">

                            <p class="pt-4 text-2xl font-bold pl-4">Riyas Nalukudi Parambu</p>
                            <hr class="hr-text" data-content="" />
                            <div class="text-md flex justify-between px-4 my-2">
                                <span class="font-bold">MANAGING DIRECTOR</span>
                                <span class="font-bold"></span>
                            </div>
                            <p class=" md:block px-4 my-4 text-sm text-left font-sans">Mr.Riyas Nalukudi Parambu is one of the passionate and enthusiastic entrepreneur in Real Estate Business in UAE.With years of experience with locals,they have understood the needs of the people and started a Real estate business which can lent out properties to locals with minimum pay with best facilities.Mr.Riyas started up as a single entrepreneur and later expanded as one of the leading entrepreneur in Real Estate Business.New Hiraise Real estate proud to have a wide
                                range of top-quality properties in our real
                                estate listings from UAE.We understand that
                                every buyer has unique tastes and requirements, and our carefully selected portfolio reflects this diversity. Our listings include a wide range of real estate options, from elegant homes and modern apartments to strategic commercial spaces and industrial properties.They mainly focuses on Staff Accommodations,villas,Commercial properties,Residential villas,shops,etc.By showcasing the best properties
                                across a variety of categories, we ensure buyers have access to carefully selected
                                properties that meet their specific needs,allowing them to consider from a wide range
                                of high quality, desirable and carefully vetted options for you to choose from the best.
                                We deliver our customer’s quality services and treat them like our brothers with utmost care and respect.
                                We deliver our customer’s quality services and treat them like our brothers with utmost care and respect and also provide all the maintenance services in the properties
                                We supply utilities for the villas and staff accommodation, if needed. </p>




                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default OurTeam