'use client'

import React, { useState } from 'react'
import Image from 'next/image'
// import { useData } from '../useContext/ContextProvider'
import Link from 'next/link'
import { restaurants } from '../useContext/RestaurantsData'

export default function RestaurantGrid() {

    // const { restaurants } = useData()

    const [search, setSearch] = useState('')


    const filteredrestaurants = restaurants.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.location.toLowerCase().includes(search.toLowerCase()) ||
        item.speciality.toLowerCase().includes(search.toLowerCase())
    )


    return (
        <>

            <section className="relative px-4 md:px-8 py-8 ">

                {/* SEARCH BAR */}
                <div className="max-w-xl mx-auto mb-8 ">
                    <div className="flex items-center bg-gray-200 rounded-xl shadow-md border border-gray-300 overflow-hidden">
                        <input
                            type="text"
                            placeholder="Search restaurants, dish or location…"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="flex-1 px-5 py-3 outline-none text-sm md:text-base" />
                        <button className="px-6 text-[#FC8A06] font-semibold">
                            Search
                        </button>
                    </div>
                </div>

                {/* GRID */}
                <div
                    className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 "
                >
                    {filteredrestaurants.map((item) => (
                        <Link key={item.name} href={`/restaurants/${item.name.toLowerCase().trim().replace(/\s+/g, '-')}`}>
                            <div
                                key={item.id}
                                className="relative z-20   group p-3  bg-white  rounded-2xl  overflow-hidden  border border-gray-200  shadow-sm  transition-all duration-300  hover:shadow-xl  hover:-translate-y-1  "
                            >
                                {/* IMAGE */}
                                <div className="absolute inset-0 -z-10 h-[180px] overflow-hidden">
                                    <Image
                                        src="/assets/360_F_758266271_yksdY7RLYIIY6jofjJorjylEDOvgcuze.jpg"
                                        alt={item.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />

                                    {/* SHADOW + BLUR LAYER */}
                                    <div
                                        className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-black/10 backdrop-blur-[2px] "
                                    />

                                    {/* OFFER BADGE */}
                                    {item.offers && (
                                        <span
                                            className="absolute bottom-0 right-0 bg-[#FC8A06] text-white textfont-semibold  px-3 py-1 rounded-r-b-full  shadow-md  z-10 "
                                        >
                                            {item.offers}
                                        </span>
                                    )}
                                </div>


                                {/* CONTENT */}
                                <div className="p-4 space-y-2 relative z-20 text-white">

                                    {/* NAME + RATING */}
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="font-semibold text-lg leading-tight">
                                                {item.name}
                                            </h3>
                                        </div>
                                        <span className="text-sm font-semibold text-green-600">
                                            ⭐ {item.rating}
                                        </span>
                                    </div>

                                    {/* CUISINE */}
                                    <p className="text-sm text-gray-300 truncate">
                                        {item.cuisine.join(', ')},
                                        <span className='px-2'>{item.speciality}</span>
                                    </p>

                                    {/* META INFO */}
                                    <div className="flex items-center justify-between text-sm text-gray-300 mt-2">
                                        <span>{item.deliveryTime}</span>
                                        <span>{item.distance}</span>
                                        <span>Starting from ₹{(item.priceForTwo / 2) * 10}</span>
                                    </div>

                                    {/* FOOTER */}
                                    <div className="flex items-center justify-between mt-3 mb-3">
                                        <span
                                            className={`text-xs font-medium px-3 py-1 rounded-full ${item.isOpen
                                                ? 'bg-green-100 text-green-700'
                                                : 'bg-red-100 text-red-600'
                                                }`}
                                        >
                                            {item.isOpen ? 'Open Now' : 'Closed'}
                                        </span>

                                        {item.isVeg && (
                                            <span className="text-xs font-medium text-green-700">
                                                🟢 Veg
                                            </span>
                                        )}
                                    </div>

                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* EMPTY STATE */}
                {filteredrestaurants.length === 0 && (
                    <p className="text-center text-gray-500 mt-12">
                        No restaurants found 😔
                    </p>
                )}

            </section>
        </>
    )
}
