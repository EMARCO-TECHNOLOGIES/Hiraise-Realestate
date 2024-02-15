"use client"

import userAxios from '@/axios/userAxios'
import React, { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Carousal from '../components/Carousal'
import LoadingComponent from '../components/LoadingComponent'

function page() {
    const searchParams = useSearchParams()
    const id = searchParams.get('id')
    const [property, setProperty] = useState(null)
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        userAxios.get('/propertyById', { params: { id: id } }).then((res) => {
            setProperty(res?.data?.fetchedData)
            setIsLoading(false)
        }).catch((err) => {
            console.log(err)
        })
    }, [])


    const customArrow = ({ type, onClick, isEdge }) => {
        return (
            <button onClick={onClick} disabled={isEdge} className={`absolute z-10 ${type === 'PREV' ? 'lg:left-16 lg:top-[360px] md:left-0 md:top-[300px] top-[350px] right-20' : 'lg:right-[710px] lg:top-[340px] md:right-5 md:top-[280px] top-[338px] right-10 rotate-180 '}`}>
                <img src="/home/carousal button.png" alt="" className='md:w-auto w-20 ' />
            </button>
        )
    }

    return (
        isLoading ? <LoadingComponent /> :

            <div className=' '>
                <div className='flex items-end justify-end lg:pt-10 pt-5 px-10'>

                    <button onClick={() => router.back()} className='px-6 py-2 bg-red-700 rounded-md text-white self-end'>Back</button>
                </div>
                < div className="lg:flex justify-center lg:py-12 2xl:px-20 md:px-6 px-4 items-center w-screen" >

                    <Carousal items={property.photos} itemsToShow={1} customArrow={customArrow} component={'propertyDetails'} />
                    <div className="xl:w-4/5 lg:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                        <div className="border-b border-gray-200 pb-6">
                            <p className="text-sm leading-none text-gray-600 dark:text-gray-300 ">Property Name:</p>
                            <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">{property?.name}</h1>
                        </div>
                        <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                            <p className="text-base leading-4 text-gray-800 dark:text-gray-300">Location:</p>
                            <div className="flex items-center justify-center">
                                <p className="text-sm leading-none text-gray-600 dark:text-gray-300">{property?.location}</p>

                            </div>
                        </div>
                        <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                            <p className="text-base leading-4 text-gray-800 dark:text-gray-300">Bed Space:</p>
                            <div className="flex items-center justify-center">
                                <p className="text-sm leading-none text-gray-600 dark:text-gray-300 mr-3">{property?.bed_space}</p>

                            </div>
                            <p className="text-base leading-4 text-gray-800 dark:text-gray-300">Toilet:</p>
                            <div className="flex items-center justify-center">
                                <p className="text-sm leading-none text-gray-600 dark:text-gray-300 mr-3">{property?.toilet}</p>

                            </div>
                        </div>
                        <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                            <p className="text-base leading-4 text-gray-800 dark:text-gray-300">Price:</p>
                            <div className="flex items-center justify-center">
                                <p className="text-sm leading-none text-gray-600 dark:text-gray-300">{property?.price}</p>

                            </div>
                        </div>

                    </div>
                </div >

            </div>

    )
}

export default page