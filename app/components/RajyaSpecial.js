import React from 'react'
import Image from 'next/image';

export default function RajyaSpecial() {

    const rajya = [
        { state: "Gujarat", speciality: "Dhokla, Thepla, MohanThal", restaurants: 160, img: '/assets/rajsthanifood.jpg' },
        { state: "Rajasthan", speciality: "Dal Baati Churma", restaurants: 150, img: '/assets/rajsthanifood.jpg' },
        { state: "Maharashtra", speciality: "Vada Pav, Misal Pav", restaurants: 260, img: '/assets/rajsthanifood.jpg' },
        { state: "Punjab", speciality: "Makki di Roti", restaurants: 180, img: '/assets/rajsthanifood.jpg' },
        { state: "West Bengal", speciality: "Rosogolla", restaurants: 190, img: '/assets/rajsthanifood.jpg' },
        { state: "Tamil Nadu", speciality: "Dosa, Idli, Sambar", restaurants: 220, img: '/assets/rajsthanifood.jpg' },
        { state: "Karnataka", speciality: "Bisi Bele Bath, Mysore Dosa", restaurants: 200, img: '/assets/rajsthanifood.jpg' },
        { state: "Kerala", speciality: "Appam", restaurants: 170, img: '/assets/rajsthanifood.jpg' },
        { state: "Bihar", speciality: "Litti Chokha", restaurants: 120, img: '/assets/rajsthanifood.jpg' },
    ];



    return (
        <div className='relative min-h-92 rounded-lg flex flex-col gap-1 justify-center my-6'>
           
            <div className='flex justify-between'>
                <h2 className=' text-[16px] sm:text-3xl font-bold sm:ml-5'>Rajya Special - Flat 50% OFF</h2>

                <span><button className='border bg-gray-100 border-gray-400 p-1 px-2 sm:p-2 rounded-full sm:px-4 transition-all duration-150 hover:bg-blue-100 text-[8px]'>View all</button></span>
            </div>


            <div className="relative">

                {/* LEFT FADE */}
                <div className="pointer-events-none absolute top-3 rounded-xl left-0 h-[91%] w-20 bg-linear-to-r from-black/40 to-transparent z-20" />


                <div className="flex gap-6 overflow-x-auto p-3 px-0 no-scrollbar">
                    {rajya.map((item) => (
                        <div
                            key={item.state}
                            className="group relative min-w-105 h-65 rounded-lg overflow-hidden"
                        >
                            {/* Image */}
                            <Image
                                src={item.img}
                                fill
                                alt={`${item.state}_food`}
                                className="object-cover transition-transform duration-700 
              group-hover:scale-110"
                            />

                            {/* Dark Inner Shadow Overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

                            {/* Offer Badge */}
                            <div className="absolute top-0 right-5 h-10 flex justify-center items-center bg-black text-white text-sm px-4 py-1 rounded-lg">
                                -50%
                            </div>

                            {/* Text Content */}
                            <div className="absolute bottom-5 left-5 z-10">
                                <p className="text-[#FC8A06] text-sm font-semibold">
                                    Restaurant
                                </p>
                                <h2 className="text-white text-2xl font-bold leading-tight">
                                    {item.state}
                                </h2>
                                <p className="text-white/90 text-sm mt-1">
                                    {item.speciality}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>


                {/* RIGHT FADE */}
                <div className="pointer-events-none absolute top-3 right-0 h-[91%] rounded-xl w-20 bg-linear-to-l from-black/40 to-transparent z-20" />

            </div>


            <div className='absolute top-1/2 bg-black/70 p-3 rounded-full text-white -translate-y-1/2 left-0 text-2xl hidden lg:block'>&lt;</div>
            <div className='absolute top-1/2 bg-black/60 p-3 rounded-full text-white -translate-y-1/2 right-0 text-2xl hidden lg:block'>&gt;</div>

        </div>

    )
}
