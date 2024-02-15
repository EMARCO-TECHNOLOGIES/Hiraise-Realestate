"use client"

import userAxios from '@/axios/userAxios'
import React, { useEffect, useState } from 'react'

function page() {

    const [fetchedData, setFetchedData] = useState(null)
    const [seeMore, setSeeMore] = useState(null)

    useEffect(() => {
        userAxios.get('/blog').then((res) => {
            setFetchedData(res?.data?.fetchedData)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">

                <a rel="noopener noreferrer" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
                    <img src={'/blog.jpg'} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500 opacity-55" />
                    <div className="p-6 space-y-2 lg:col-span-5 self-center">
                        <h3 className="text-2xl font-semibold sm:text-4xl ">Latest news and updates</h3>

                    </div>
                </a>

                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {fetchedData?.map((item, index) => (

                        <a rel="noopener noreferrer" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
                            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={item.image} />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
                                <span className="text-xs dark:text-gray-400">{new Date(item.date).toLocaleString}</span>
                                <p>
                                    {item.content.length > 100 ? (
                                        seeMore === item._id ? <>
                                            {item.content}
                                            <p onClick={() => setSeeMore(null)} className='text-yellow-600 cursor-pointer '>{'...see less'}</p>

                                        </> :
                                            <>
                                                {`${item.content.slice(0, 100)} `}
                                                <p onClick={() => setSeeMore(item._id)} className='text-blue-600 cursor-pointer'>{'...see more'}</p>
                                            </>
                                    ) : (
                                        item.content
                                    )}
                                </p>
                            </div>
                        </a>
                    ))}


                </div>

            </div>
        </section>
    )
}

export default page