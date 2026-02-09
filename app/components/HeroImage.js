import React from 'react'
import Image from 'next/image'

export default function HeroImage() {
    return (
        <div className='relative h-152.5 max-xl:max-h-120 max-lg:max-h-110 max-md:max-h-80 rounded-lg border border-gray-300 bg-[#FAFAFA] flex items-center p-3'>

            <div className='flex flex-col justify-center -mt-13 w-fit p-3 px-5 gap-6 '>
                <p className='max-md:text-sm'>Order Restaurant food, takeaway and groceries.</p>

                <div className='flex flex-col gap-2'>
                    <h1 className='md:text-5xl max-md:text-2xl font-semibold'>Feast Your Senses,</h1>
                    <h1 className='md:text-5xl max-md:text-2xl font-semibold text-[#FC8A06]'>Fast and Fresh</h1>
                </div>

                <button className='p-2 px-9 transition-all duration-150 ease-in-out bg-[#FC8A06] rounded-full cursor-pointer w-fit max-md:text-sm'>My first Order</button>
            </div>

            <div className='absolute bottom-0 right-0 w-156.5 h-[93%] bg-[#FC8A06] rounded-tl-[282.5px] rounded-lg hidden min-[1125px]:block'>

                <div className='absolute top-13 right-105 w-fit'>
                    <div className='absolute w-77.5 py-1 px-3 rounded-xl border border-gray-300 bg-[#FAFAFA] z-20'>
                        <div className='flex justify-between items-center'>
                            <span className='-ml-1 -mt-2'>
                                <svg width="100" height="50" viewBox="0 0 280 80" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="indiaGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#FF8C1A" />
                                            <stop offset="100%" stopColor="#1FAA59" />
                                        </linearGradient>
                                    </defs>

                                    {/* <!-- Icon --> */}
                                    <circle cx="36" cy="40" r="28" fill="url(#indiaGrad)" />
                                    <path d="M28 28c4-6 12-6 16 0" stroke="white" strokeWidth="3" fill="none" />
                                    <circle cx="36" cy="42" r="5" fill="white" />

                                    {/* <!-- Brand Name --> */}
                                    <text x="75" y="46"
                                        fontSize="36"
                                        fontWeight="800"
                                        fontFamily="Poppins, Arial, sans-serif"
                                        fill="#0f172a">
                                        Swadya
                                    </text>

                                    {/* <!-- Tagline --> */}
                                    <text x="77" y="64"
                                        fontSize="13"
                                        fontWeight="500"
                                        fill="#475569">
                                        Taste at your doorstep
                                    </text>
                                </svg>
                            </span>
                            <p className='text-gray-400 text-[8px] -mt-3'>now</p>
                        </div>
                        <p className='font-semibold text-[8px]'>We’ve Received your order!</p>
                        <p className='text-[7px]'>Awaiting Restaurant acceptance </p>
                    </div>

                    <div className='absolute z-10 -top-14 left-73  text-transparent text-[68px] [-webkit-text-stroke:0.3px_white]'>1</div>
                </div>

                <div className='absolute bottom-75 right-93 w-fit'>
                    <div className='absolute w-77.5 py-1 px-3 rounded-xl border border-gray-300 bg-[#FAFAFA] z-20'>
                        <div className='flex justify-between items-center'>
                            <span className='-ml-1 -mt-2'>
                                <svg width="100" height="50" viewBox="0 0 280 80" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="indiaGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#FF8C1A" />
                                            <stop offset="100%" stopColor="#1FAA59" />
                                        </linearGradient>
                                    </defs>

                                    {/* <!-- Icon --> */}
                                    <circle cx="36" cy="40" r="28" fill="url(#indiaGrad)" />
                                    <path d="M28 28c4-6 12-6 16 0" stroke="white" strokeWidth="3" fill="none" />
                                    <circle cx="36" cy="42" r="5" fill="white" />

                                    {/* <!-- Brand Name --> */}
                                    <text x="75" y="46"
                                        fontSize="36"
                                        fontWeight="800"
                                        fontFamily="Poppins, Arial, sans-serif"
                                        fill="#0f172a">
                                        Swadya
                                    </text>

                                    {/* <!-- Tagline --> */}
                                    <text x="77" y="64"
                                        fontSize="13"
                                        fontWeight="500"
                                        fill="#475569">
                                        Taste at your doorstep
                                    </text>
                                </svg>
                            </span>
                            <p className='text-gray-400 text-[8px] -mt-3'>now</p>
                        </div>
                        <p className='font-semibold text-[8px]'>We’ve Received your order!</p>
                        <p className='text-[7px]'>Awaiting Restaurant acceptance </p>
                    </div>

                    <div className='absolute z-10 -top-16 left-71  text-transparent text-[60px] [-webkit-text-stroke:0.3px_white]'>2</div>
                </div>

                <div className='absolute bottom-23 right-100 w-fit'>
                    <div className='absolute w-77.5 py-1 px-3 rounded-xl border border-gray-300 bg-[#FAFAFA] z-20'>
                        <div className='flex justify-between items-center'>
                            <span className='-ml-1 -mt-2'>
                                <svg width="100" height="50" viewBox="0 0 280 80" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="indiaGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#FF8C1A" />
                                            <stop offset="100%" stopColor="#1FAA59" />
                                        </linearGradient>
                                    </defs>

                                    {/* <!-- Icon --> */}
                                    <circle cx="36" cy="40" r="28" fill="url(#indiaGrad)" />
                                    <path d="M28 28c4-6 12-6 16 0" stroke="white" strokeWidth="3" fill="none" />
                                    <circle cx="36" cy="42" r="5" fill="white" />

                                    {/* <!-- Brand Name --> */}
                                    <text x="75" y="46"
                                        fontSize="36"
                                        fontWeight="800"
                                        fontFamily="Poppins, Arial, sans-serif"
                                        fill="#0f172a">
                                        Swadya
                                    </text>

                                    {/* <!-- Tagline --> */}
                                    <text x="77" y="64"
                                        fontSize="13"
                                        fontWeight="500"
                                        fill="#475569">
                                        Taste at your doorstep
                                    </text>
                                </svg>
                            </span>
                            <p className='text-gray-400 text-[8px] -mt-3'>now</p>
                        </div>
                        <p className='font-semibold text-[8px]'>We’ve Received your order!</p>
                        <p className='text-[7px]'>Awaiting Restaurant acceptance </p>
                    </div>

                    <div className='absolute z-10 -top-15 left-72  text-transparent text-[60px] [-webkit-text-stroke:0.3px_white]'>3</div>
                </div>
            </div>


            <div
                className="
    absolute z-20 bottom-0
    left-1/2 -translate-x-1/2
    xl:left-[19%] lg:left-[70%] md:left-[75%] max-[550px]:left-[60%]  xl:translate-x-0
  "
            >
                <Image
                    src="/assets/Untitled-1.png"
                    width={805}
                    height={537}
                    alt="advertisement"
                    className="w-[280px]
                                sm:w-[280px]
                                md:min-w-[620px]
                                lg:min-w-[680px]
                                xl:w-[805px]
                                max-w-full
                                "
                />
            </div>

            <div className='absolute z-10 right-90 bottom-0 hidden min-[1324px]:block'>
                <Image
                    src='/assets/Untitled-2.png'
                    width={377}
                    height={455}
                    alt='advertisement'
                />
            </div>

        </div>
    )
}
