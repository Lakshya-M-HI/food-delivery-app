'use client';

import React, { useRef } from 'react';
import Image from 'next/image';

export default function RajyaSpecial() {
    const scrollRef = useRef(null);

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

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 800;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className='relative min-h-92 rounded-lg flex flex-col gap-4 justify-center my-8 px-2 sm:px-4 pl-0'>
            {/* Header Section */}
            <div className='flex justify-between items-center mb-2 px-2'>
                <div>
                    <h2 className='text-xl sm:text-3xl font-bold text-gray-900 mb-1'>
                        Rajya Special
                    </h2>
                    <p className='text-sm sm:text-base text-gray-600 flex items-center gap-2'>
                        <span className='inline-flex items-center px-2 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold'>
                            🎉 FLAT 50% OFF
                        </span>
                        <span className='hidden sm:inline'>Explore authentic regional cuisines</span>
                    </p>
                </div>
                <button className='border-2 border-orange-500 bg-white text-orange-600 hover:bg-orange-500 hover:text-white p-2 px-4 sm:px-6 rounded-full transition-all duration-300 text-xs sm:text-sm font-semibold shadow-sm hover:shadow-md'>
                    View All
                </button>
            </div>

            {/* Cards Container */}
            <div className="relative group max-md:-mr-5">
                {/* Left Gradient Fade - Soft Blur */}
                {/* <div className="pointer-events-none absolute top-4 left-0 h-[100%] w-24 sm:w-40 z-10">
                    <div className="h-full w-full bg-gradient-to-r from-black/90 via-black/40 via-black/15 to-transparent blur-[2px]" />
                </div> */}

                {/* Scrollable Container */}
                <div
                    ref={scrollRef}
                    className="flex gap-4 sm:gap-6 overflow-x-auto p-4 px-2 pl-0 no-scrollbar scroll-smooth"
                >
                    {rajya.map((item, index) => (
                        <div
                            key={item.state}
                            className="group/card relative min-w-[280px] sm:min-w-[420px] h-[280px] sm:h-[320px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Image with Zoom Effect */}
                            <Image
                                src={item.img}
                                fill
                                alt={`${item.state}_food`}
                                className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 group-hover/card:from-black/95" />

                            {/* Offer Badge - Animated */}
                            <div className="absolute top-4 right-4 z-20">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-orange-500 blur-lg opacity-50 group-hover/card:opacity-70 transition-opacity" />
                                    <div className="relative bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-bold px-4 py-2 rounded-xl shadow-lg transform group-hover/card:scale-110 transition-transform">
                                        <span className="text-lg">50%</span>
                                        <span className="ml-1 text-xs">OFF</span>
                                    </div>
                                </div>
                            </div>

                            {/* Restaurant Count Badge */}
                            <div className="absolute top-4 left-4 z-20 bg-white/20 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/30 flex items-center gap-1.5">
                                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clipRule="evenodd" />
                                </svg>
                                {item.restaurants}+ restaurants
                            </div>

                            {/* Content Section */}
                            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10 transform transition-transform duration-500 group-hover/card:translate-y-0">
                                {/* Category Label */}
                                <div className="inline-flex items-center gap-1 mb-2 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
                                    <p className="text-orange-400 text-xs font-semibold uppercase tracking-wider">
                                        Regional Cuisine
                                    </p>
                                </div>

                                {/* State Name */}
                                <h2 className="text-white text-2xl sm:text-3xl font-bold leading-tight mb-2 transform transition-transform duration-300 group-hover/card:scale-105">
                                    {item.state}
                                </h2>

                                {/* Speciality */}
                                <p className="text-white/90 text-sm sm:text-base mb-3 line-clamp-2">
                                    {item.speciality}
                                </p>

                                {/* Action Button - Slides up on hover */}
                                <div className="transform translate-y-8 opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-300">
                                    <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors shadow-lg">
                                        <span>Order Now</span>
                                        <svg className="w-4 h-4 transform group-hover/card:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Decorative Corner Pattern */}
                            <div className="absolute bottom-0 right-0 w-24 h-24 opacity-10">
                                <svg viewBox="0 0 100 100" className="w-full h-full">
                                    <path d="M0,100 Q50,50 100,100 L100,100 L0,100 Z" fill="white" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Gradient Fade - Soft Blur */}
                {/* <div className="pointer-events-none absolute top-0 right-0 h-full w-24 sm:w-40 z-10">
                    <div className="h-full w-full bg-gradient-to-l from-black/90 via-white/40 via-white/15 to-transparent blur-[2px]" />
                </div> */}

                
                {/* Navigation Buttons - Larger and more visible */}
                <button
                    onClick={() => scroll('left')}
                    className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 z-20 bg-white hover:bg-orange-500 text-gray-800 hover:text-white p-3 sm:p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 opacity-0 group-hover:opacity-100 transform hover:scale-110 border-2 border-gray-200 hover:border-orange-500"
                    aria-label="Scroll left"
                >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    onClick={() => scroll('right')}
                    className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 z-20 bg-white hover:bg-orange-500 text-gray-800 hover:text-white p-3 sm:p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 opacity-0 group-hover:opacity-100 transform hover:scale-110 border-2 border-gray-200 hover:border-orange-500"
                    aria-label="Scroll right"
                >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

        </div>
    );
}