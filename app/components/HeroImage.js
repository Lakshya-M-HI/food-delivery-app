import React from 'react'
import Image from 'next/image'

export default function HeroImage() {
    return (
        <div className='relative h-[610px] lg:h-[550px] md:h-[420px] sm:h-[380px] max-sm:h-[320px] 
                        rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-gray-50 to-orange-50/20 
                        flex items-center overflow-hidden shadow-xl'>

            {/* Left Content Section */}
            <div className='relative z-30 flex flex-col justify-center w-full md:w-1/2 
                          p-6 sm:p-8 md:p-10 lg:p-12 gap-4 sm:gap-6 lg:gap-8'>
                
                {/* Badge */}
                <div className='inline-flex items-center gap-2 bg-white border-2 border-orange-200 
                              rounded-full px-4 py-2 w-fit shadow-md'>
                    <span className='w-2 h-2 bg-orange-500 rounded-full animate-pulse'></span>
                    <p className='text-xs sm:text-sm font-semibold text-gray-700'>
                        Order Restaurant food and takeaway 
                    </p>
                </div>

                {/* Main Heading */}
                <div className='flex flex-col gap-2 sm:gap-3'>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold 
                                 text-gray-900 leading-tight'>
                        Feast Your Senses,
                    </h1>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold 
                                 bg-gradient-to-r from-orange-500 to-orange-600 
                                 bg-clip-text text-transparent leading-tight'>
                        Fast and Fresh
                    </h1>
                </div>

                {/* Subtext */}
                <p className='text-sm sm:text-base text-gray-600 max-w-md hidden sm:block'>
                    Delicious meals delivered to your doorstep in minutes. Fresh, fast, and always flavorful.
                </p>

                {/* CTA Button */}
                <button className='group relative px-8 py-3 sm:px-10 sm:py-4 
                                 bg-gradient-to-r from-orange-500 to-orange-600 
                                 text-white font-bold rounded-full w-fit
                                 shadow-lg shadow-orange-300/50
                                 transition-all duration-300
                                 hover:shadow-xl hover:shadow-orange-400/60
                                 hover:scale-105
                                 active:scale-95
                                 text-sm sm:text-base'>
                    <span className='relative z-10'>Order Now</span>
                    <div className='absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 
                                  rounded-full opacity-0 group-hover:opacity-100 
                                  transition-opacity duration-300'></div>
                    <span className='ml-2'>→</span>
                </button>

                {/* Stats - Hidden on small screens */}
                <div className='hidden lg:flex gap-6 mt-4'>
                    <div className='flex flex-col'>
                        <span className='text-2xl font-bold text-gray-900'>500+</span>
                        <span className='text-sm text-gray-500'>Restaurants</span>
                    </div>
                    <div className='w-px bg-gray-300'></div>
                    <div className='flex flex-col'>
                        <span className='text-2xl font-bold text-gray-900'>10k+</span>
                        <span className='text-sm text-gray-500'>Deliveries</span>
                    </div>
                    <div className='w-px bg-gray-300'></div>
                    <div className='flex flex-col'>
                        <span className='text-2xl font-bold text-gray-900'>4.8★</span>
                        <span className='text-sm text-gray-500'>Rating</span>
                    </div>
                </div>
            </div>

            {/* Orange Background Section - Desktop Only */}
            <div className='absolute bottom-0 right-0 w-[627px] h-[93%] 
                          bg-gradient-to-br from-orange-500 to-orange-600 
                          rounded-tl-[282.5px] rounded-lg 
                          hidden xl:block shadow-2xl'>

                {/* Notification Cards */}
                <NotificationCard 
                    position="top-13 right-105 z-15"
                    number="1"
                    numberPosition="-top-14 left-73"
                    status="We've Received your order!"
                    message="Awaiting Restaurant acceptance"
                />

                <NotificationCard 
                    position="bottom-72 right-93 z-15"
                    number="2"
                    numberPosition="-top-16 left-71"
                    status="Order Confirmed!"
                    message="Your order is being prepared"
                />

                <NotificationCard 
                    position="bottom-23 right-70 z-15"
                    number="3"
                    numberPosition="-top-15 left-72"
                    status="Out for Delivery!"
                    message="Your order will arrive soon"
                />
            </div>

            {/* Main Food Image - Responsive positioning */}
            <div className='absolute z-30 bottom-0
                          left-1/2 -translate-x-1/2
                          sm:left-[55%] sm:-translate-x-1/2
                          md:left-[65%] md:-translate-x-1/2
                          lg:left-[60%] lg:-translate-x-1/2
                          xl:left-[19%] xl:translate-x-0'>
                <Image
                    src="/assets/Untitled-1.png"
                    width={805}
                    height={537}
                    alt="delicious food"
                    className='w-[250px]
                             sm:w-[350px]
                             md:w-[520px]
                             lg:w-[620px]
                             xl:w-[805px]
                             max-w-none
                             drop-shadow-2xl
                             animate-float'
                    priority
                />
            </div>

            {/* Side Food Image - Desktop Only */}
            <div className='absolute z-10 right-90 bottom-0 hidden 2xl:block'>
                <Image
                    src='/assets/Untitled-2.png'
                    width={377}
                    height={455}
                    alt='side dish'
                    className='drop-shadow-xl opacity-90'
                />
            </div>

            {/* Decorative Elements */}
            <div className='absolute top-10 right-10 w-20 h-20 bg-orange-300/20 
                          rounded-full blur-3xl hidden lg:block'></div>
            <div className='absolute bottom-20 left-10 w-32 h-32 bg-yellow-300/20 
                          rounded-full blur-3xl hidden lg:block'></div>

        </div>
    )
}

// Notification Card Component
function NotificationCard({ position, number, numberPosition, status, message }) {
    return (
        <div className={`absolute ${position} w-fit animate-slideIn`}>
            <div className='relative w-[310px] py-2 px-4 rounded-xl border-2 border-gray-200 
                          bg-white/95 backdrop-blur-sm z-20 shadow-xl
                          hover:scale-105 transition-transform duration-300'>
                <div className='flex justify-between items-center mb-1'>
                    <LogoSVG />
                    <p className='text-gray-400 text-[10px]'>now</p>
                </div>
                <p className='font-bold text-[10px] text-gray-900'>{status}</p>
                <p className='text-[9px] text-gray-600'>{message}</p>
            </div>
            
            <div className={`absolute z-10 ${numberPosition} text-white/30 text-[68px] 
                           font-black [-webkit-text-stroke:2px_white]`}>
                {number}
            </div>
        </div>
    )
}

// Logo SVG Component (reusable)
function LogoSVG() {
    return (
        <span className='-ml-1'>
            <svg width="90" height="45" viewBox="0 0 280 80" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="indiaGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#FF8C1A" />
                        <stop offset="100%" stopColor="#1FAA59" />
                    </linearGradient>
                </defs>

                {/* Icon */}
                <circle cx="36" cy="40" r="28" fill="url(#indiaGrad)" />
                <path d="M28 28c4-6 12-6 16 0" stroke="white" strokeWidth="3" fill="none" />
                <circle cx="36" cy="42" r="5" fill="white" />

                {/* Brand Name */}
                <text x="75" y="46"
                    fontSize="36"
                    fontWeight="800"
                    fontFamily="Poppins, Arial, sans-serif"
                    fill="#0f172a">
                    Swadya
                </text>

                {/* Tagline */}
                <text x="77" y="64"
                    fontSize="13"
                    fontWeight="500"
                    fill="#475569">
                    Taste at your doorstep
                </text>
            </svg>
        </span>
    )
}