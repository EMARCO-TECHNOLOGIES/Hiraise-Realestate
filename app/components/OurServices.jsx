import React from 'react'
import H4 from './H4'
import H3 from './H3'

function OurServices() {



    const items = [
        { img: '/home/SERVICES-1.jpg', title: 'PROPERTY MANAGEMENT', desc: 'Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. ' },
        { img: '/home/SERVICES-2.jpg', title: 'LEASE MANAGEMENT', desc: 'Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. ' },
        { img: '/home/SERVICES-3.jpg', title: 'FINDING A TENANT', desc: 'Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. ' },
        { img: '/home/SERVICES-4.jpg', title: 'TENANT SCREENING', desc: 'Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. ' },
        { img: '/home/SERVICES-5.jpg', title: 'PROPERTY HANDOVER', desc: 'Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. ' },
        { img: '/home/SERVICES-6.jpg', title: 'PROPERTY MAINTENANCE', desc: 'Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. ' },
        { img: '/home/SERVICES-7.jpg', title: 'RENTAL DISPUTE', desc: 'Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. ' },
        { img: '/home/SERVICES-8.jpg', title: 'TENANT EVICTION', desc: 'Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. ' },

    ]

    return (
        <div className='lg:h-screen  flex flex-col justify-center items-center lg:py-10 py-10'>
            <div className=' lg:w-5/5 lg:p-0 md:p-5 space-y-10 flex flex-col justify-center items-center '>
                <div className='md:px-2 px-8 space-y-5 text-center'>

                    <H4 text={'OUR SERVICES'} />
                    {/* <H3 text={'Donec porttitor euismod dignissim'} /> */}
                </div>

                <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-10 gap-6 overflow-hidden  '>
                    {items.map((item, index) => (
                        <div key={index} className={`relative   border rounded-lg hover:scale-105 transition-transform`} >
                            <img src={item.img} alt="" className='md:w-[200px] md:h-[200px] w-[150px] ' />
                            <div class="absolute inset-0 bg-opacity-40 bg-black md:w-[200px] md:h-[200px] w-[150px]"></div>
                            <p className='absolute md:inset-12 inset-6 text-white font-semibold text-center'>
                                {item.title}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default OurServices