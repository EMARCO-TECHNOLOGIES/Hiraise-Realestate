"use client"

import React, { useEffect, useState } from 'react'
import H4 from './H4'
import H3 from './H3'
import Carousal from './Carousal'
import userAxios from '@/axios/userAxios'

function Trendings() {

    const [fetchedData, setFetchedData] = useState(null)

    useEffect(() => {
        userAxios.get('/blog').then((res) => {
            setFetchedData(res?.data?.fetchedData)
        }).catch((err) => {
            console.log(err)
        })
    }, [])


    const customArrow = ({ type, onClick, isEdge }) => {
        return (
            <button onClick={onClick} disabled={isEdge} className={`absolute z-10 ${type === 'PREV' ? 'lg:-left-20 lg:top-20 md:right-28 md:top-28 top-24 -left-3' : 'lg:-right-16 lg:top-[60px] md:-right-5 md:top-[90px] top-[80px] -right-3 rotate-180'}`}>
                <img src="/home/carousal button.png" alt="" className='md:w-auto w-20' />
            </button>
        )
    }

    return (
        <div className='bg-[#C3A67D] lg:h-screen md:h-[800px] h-[500px] flex flex-col justify-center items-center'>
            <div className='w-[80%] text-center space-y-10'>
                <div className='space-y-5'>
                    <H4 text={"WHAT'S TRENDING"} color={'text-white'} />
                    <H3 text={"Latest Blogs & Posts"} color={'text-white'} />
                </div>
                <div className='w-full relative'>
                    <Carousal items={fetchedData} itemsToShow={3} customArrow={customArrow} component={'trending'} />
                </div>
            </div>
        </div>
    )
}

export default Trendings