"use client"

import React, { useEffect, useState } from 'react'
import H4 from './H4'
import H3 from './H3'
import Image from 'next/image'
import H6 from './H6'
import H7 from './H7'
import userAxios from '@/axios/userAxios'
import { useRouter } from 'next/navigation'
import { faBed, faToilet } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function PropertyList() {

    const items = [
        { src: '/home/slider1.png', comment: 'Popular', price: '$ 5,970', title: 'Tranquil Haven in the Woods', desc: '103 Wright CourtBurien, WA 98168', },
        { src: '/home/slider2.png', comment: 'New Listing', price: '$ 1,970', title: 'Serene Retreat by the Lake', desc: '1964 Jehovah Drive, VA 22408', },
        { src: '/home/slider3.png', comment: 'Discounted Price', price: '$ 3,450', title: 'Charming Cottage in the Meadow', desc: '1508 Centennial Farm RoadHarlan, 51537' },
        { src: '/home/slider1.png', comment: 'Popular', price: '$ 5,970', title: 'Tranquil Haven in the Woods', desc: '103 Wright CourtBurien, WA 98168', },
        { src: '/home/slider1.png', comment: 'Popular', price: '$ 5,970', title: 'Tranquil Haven in the Woods', desc: '103 Wright CourtBurien, WA 98168', },
    ]

    const [fetchedData, setFetchedData] = useState(null)

    useEffect(() => {
        userAxios.get('/property').then((res) => {
            setFetchedData(res?.data?.fetchedData)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    const router = useRouter()

    return (
        <div className='md:h-screen p-10 lg:px-32 md:px-24 md:space-y-10 space-y-20 md:py-0 py-20  flex flex-col justify-center'>
            <div className='lg:w-1/3 md:w-2/3 space-y-5'>
                <H4 text={'CHECKOUT OUR NEW'} />
                <H3 text={'Latest Listed Properties'} />
                {/* <p className='text-[#808080]'>
                    Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus.
                </p> */}
            </div>
            <div className='max-w-screen  overflow-x-auto flex space-x-10 scrollbar-hide'>
                {fetchedData?.map((item, index) => (
                    <div key={index} className=' '>
                        <div className={`md:min-w-[350px] min-w-60 rounded-2xl relative flex flex-col justify-center overflow-hidden`}>

                            <div className='' onClick={() => router.push(`/propertyDetails?id=${item._id}`)}>

                                <Image width={400} height={400} src={item?.image} className='hover:scale-110 transition-transform md:w-[350px] md:h-[350px] w-60 h-60 ' alt='img' />
                            </div>
                            <div className={`${item.comment === 'Popular' ? 'bg-[#FFE1E1] text-[#FF1111] ' : item.comment === 'New Listing' ? 'bg-[#D7EEFF] text-[#119BFF]' : 'bg-[#F1FFF1] text-[#00CE3A]'}  absolute bottom-8 left-10 rounded-full px-4 py-1 max-w-44 `}>
                                <h3 className='md:text-sm text-xs  font-semibold '>{item?.sub_title}</h3>
                            </div>
                        </div>
                        <div className='bg-white mt-3 p-2 space-y-2'>
                            <H6 text={item?.name} />
                            <H7 text={`Rs. ${item?.price}`} />
                            <p className='text-[#808080]'>
                                {item?.location}
                            </p>

                            <div className='flex text-sm text-gray-400 space-x-10'>
                                <span><FontAwesomeIcon icon={faBed} className=' text-sm text-gray-400 mr-4' />{item.bed_space}</span>
                                <span><FontAwesomeIcon icon={faToilet} className=' text-sm text-gray-400 mr-4' />{item.toilet}</span>
                            </div>
                        </div>

                    </div>


                ))}
            </div>
        </div>
    )
}

export default PropertyList