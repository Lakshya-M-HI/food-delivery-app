import React from 'react'
import Image from 'next/image'

export default function FoodVariety() {
    return (
        <div className='min-h-92 rounded-lg flex flex-col gap-8 justify-center'>
            <div className='flex justify-between -mb-5'>
                <h2 className='text-3xl font-bold ml-5'>Varieties</h2>

                <span><button className='border bg-gray-100 border-gray-400 p-2 rounded-full px-4 transition-all duration-150 hover:bg-blue-100'>View all</button></span>
            </div>

            <div className='flex gap-2.5 overflow-hidden p-3 px-0'>

                <div className='flex flex-col justify-between p- items-center bg-[#FAFAFA] w-fit rounded-2xl border border-gray-200 transition-all duration-300
                hover:-translate-y-2
                hover:shadow-xl'>
                    <div className="rajasthan w-59.5 h-66.5">
                        <div>
                            <Image
                                src='/assets/foodImg.jpg'
                                height={203}
                                width={238}
                                alt='rajasthani_food'
                                className='rounded-lg'
                            />
                        </div>

                        <div className='px-3 pt-2'>
                            <h3 className='text-lg font-semibold'>Rajasthan Special</h3>
                            <p className='text-[#FC8A06]'>50+ Restaurants</p>
                        </div>

                    </div>
                </div>

                <div className='flex flex-col justify-between p- items-center bg-[#FAFAFA] w-fit rounded-2xl border border-gray-200 transition-all duration-300
                hover:-translate-y-2
                hover:shadow-xl'>
                    <div className="rajasthan w-59.5 h-66.5">
                        <div>
                            <Image
                                src='/assets/foodImg.jpg'
                                height={203}
                                width={238}
                                alt='rajasthani_food'
                                className='rounded-lg'
                            />
                        </div>

                        <div className='px-3 pt-2'>
                            <h3 className='text-lg font-semibold'>Rajasthan Special</h3>
                            <p className='text-[#FC8A06]'>50+ Restaurants</p>
                        </div>

                    </div>
                </div>


                <div className='flex flex-col justify-between p- items-center bg-[#FAFAFA] w-fit rounded-2xl border border-gray-200 transition-all duration-300
                hover:-translate-y-2
                hover:shadow-xl'>
                    <div className="rajasthan w-59.5 h-66.5">
                        <div>
                            <Image
                                src='/assets/foodImg.jpg'
                                height={203}
                                width={238}
                                alt='rajasthani_food'
                                className='rounded-lg'
                            />
                        </div>

                        <div className='px-3 pt-2'>
                            <h3 className='text-lg font-semibold'>Rajasthan Special</h3>
                            <p className='text-[#FC8A06]'>50+ Restaurants</p>
                        </div>

                    </div>
                </div>

                <div className='flex flex-col justify-between p- items-center bg-[#FAFAFA] w-fit rounded-2xl border border-gray-200 transition-all duration-300
                hover:-translate-y-2
                hover:shadow-xl'>
                    <div className="rajasthan w-59.5 h-66.5">
                        <div>
                            <Image
                                src='/assets/foodImg.jpg'
                                height={203}
                                width={238}
                                alt='rajasthani_food'
                                className='rounded-lg'
                            />
                        </div>

                        <div className='px-3 pt-2'>
                            <h3 className='text-lg font-semibold'>Rajasthan Special</h3>
                            <p className='text-[#FC8A06]'>50+ Restaurants</p>
                        </div>

                    </div>
                </div>


                <div className='flex flex-col justify-between p- items-center bg-[#FAFAFA] w-fit rounded-2xl border border-gray-200 transition-all duration-300
                hover:-translate-y-2
                hover:shadow-xl'>
                    <div className="rajasthan w-59.5 h-66.5">
                        <div>
                            <Image
                                src='/assets/foodImg.jpg'
                                height={203}
                                width={238}
                                alt='rajasthani_food'
                                className='rounded-lg'
                            />
                        </div>

                        <div className='px-3 pt-2'>
                            <h3 className='text-lg font-semibold'>Rajasthan Special</h3>
                            <p className='text-[#FC8A06]'>50+ Restaurants</p>
                        </div>

                    </div>
                </div>

                <div className='flex flex-col justify-between p- items-center bg-[#FAFAFA] w-fit rounded-2xl border border-gray-200 transition-all duration-300
                hover:-translate-y-2
                hover:shadow-xl'>
                    <div className="rajasthan w-59.5 h-66.5">
                        <div>
                            <Image
                                src='/assets/foodImg.jpg'
                                height={203}
                                width={238}
                                alt='rajasthani_food'
                                className='rounded-lg'
                            />
                        </div>

                        <div className='px-3 pt-2'>
                            <h3 className='text-lg font-semibold'>Rajasthan Special</h3>
                            <p className='text-[#FC8A06]'>50+ Restaurants</p>
                        </div>

                    </div>
                </div>


            </div>

            <section className="bg-[#FAFAFA] rounded-2xl shadow-sm border border-gray-200">
                <div
                    className="
                            min-h-60
                            grid
                            grid-cols-1
                            sm:grid-cols-2
                            lg:grid-cols-5
                            gap-20
                            justify-items-center
                            p-6
                            "
                >
                    <div
                        className="
                            group
                            bg-white
                            w-[220px]
                            rounded-2xl
                            border border-gray-200
                            overflow-hidden
                            transition-all duration-300
                            hover:-translate-y-2
                            hover:shadow-2xl
                        "
                    >
                        {/* Image */}
                        <div className="relative overflow-hidden">
                            <Image
                                src="/assets/Dal-Batti-Churma-Combo-min-scaled.jpg"
                                width={238}
                                height={303}
                                alt="food_item"
                                className="
                                w-full h-40 object-cover
                                transition-transform duration-500
                                group-hover:scale-110
                            "
                            />

                            {/* Optional badge */}
                            <span className="
                            absolute top-3 left-3
                            bg-black/70 text-white text-xs
                            px-3 py-1 rounded-full
                            backdrop-blur
                            ">
                                Bestseller
                            </span>
                        </div>

                        {/* Content */}
                        <div className="px-4 py-3">

                            {/* Title */}
                            <h3 className="text-base font-semibold text-gray-900 leading-snug">
                                Rajasthani Thali
                            </h3>

                            {/* Subtitle */}
                            <p className="text-xs text-gray-500 mt-0.5">
                                Authentic North Indian
                            </p>

                            {/* Price + Quantity */}
                            <div className="flex items-center justify-between mt-3">
                                <p className="text-lg font-bold text-gray-900">
                                    ₹130
                                </p>

                                <div className="
                                        flex items-center
                                        bg-gray-100
                                        rounded-full
                                        px-2.5 py-1
                                        gap-2
                                    ">
                                    <button className="w-6 h-6 rounded-full bg-white shadow text-gray-600 hover:text-black">
                                        −
                                    </button>

                                    <span className="text-sm font-medium w-4 text-center">
                                        0
                                    </span>

                                    <button className="w-6 h-6 rounded-full bg-white shadow text-gray-600 hover:text-black">
                                        +
                                    </button>
                                </div>
                            </div>

                            {/* Add to cart */}
                            <button
                                className="
                                        mt-4
                                        w-full
                                        bg-[#FC8A06]
                                        text-white
                                        font-semibold
                                        py-2.5
                                        rounded-xl
                                        transition
                                        hover:bg-[#e07b05]
                                        active:scale-95
                                    "
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>

                    <div
                        className="
                            group
                            bg-white
                            w-[220px]
                            rounded-2xl
                            border border-gray-200
                            overflow-hidden
                            transition-all duration-300
                            hover:-translate-y-2
                            hover:shadow-2xl
                        "
                    >
                        {/* Image */}
                        <div className="relative overflow-hidden">
                            <Image
                                src="/assets/Dal-Batti-Churma-Combo-min-scaled.jpg"
                                width={238}
                                height={303}
                                alt="food_item"
                                className="
                                w-full h-40 object-cover
                                transition-transform duration-500
                                group-hover:scale-110
                            "
                            />

                            {/* Optional badge */}
                            <span className="
                            absolute top-3 left-3
                            bg-black/70 text-white text-xs
                            px-3 py-1 rounded-full
                            backdrop-blur
                            ">
                                Bestseller
                            </span>
                        </div>

                        {/* Content */}
                        <div className="px-4 py-3">

                            {/* Title */}
                            <h3 className="text-base font-semibold text-gray-900 leading-snug">
                                Rajasthani Thali
                            </h3>

                            {/* Subtitle */}
                            <p className="text-xs text-gray-500 mt-0.5">
                                Authentic North Indian
                            </p>

                            {/* Price + Quantity */}
                            <div className="flex items-center justify-between mt-3">
                                <p className="text-lg font-bold text-gray-900">
                                    ₹130
                                </p>

                                <div className="
                                        flex items-center
                                        bg-gray-100
                                        rounded-full
                                        px-2.5 py-1
                                        gap-2
                                    ">
                                    <button className="w-6 h-6 rounded-full bg-white shadow text-gray-600 hover:text-black">
                                        −
                                    </button>

                                    <span className="text-sm font-medium w-4 text-center">
                                        0
                                    </span>

                                    <button className="w-6 h-6 rounded-full bg-white shadow text-gray-600 hover:text-black">
                                        +
                                    </button>
                                </div>
                            </div>

                            {/* Add to cart */}
                            <button
                                className="
                                        mt-4
                                        w-full
                                        bg-[#FC8A06]
                                        text-white
                                        font-semibold
                                        py-2.5
                                        rounded-xl
                                        transition
                                        hover:bg-[#e07b05]
                                        active:scale-95
                                    "
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>

                    <div
                        className="
                            group
                            bg-white
                            w-[220px]
                            rounded-2xl
                            border border-gray-200
                            overflow-hidden
                            transition-all duration-300
                            hover:-translate-y-2
                            hover:shadow-2xl
                        "
                    >
                        {/* Image */}
                        <div className="relative overflow-hidden">
                            <Image
                                src="/assets/Dal-Batti-Churma-Combo-min-scaled.jpg"
                                width={238}
                                height={303}
                                alt="food_item"
                                className="
                                w-full h-40 object-cover
                                transition-transform duration-500
                                group-hover:scale-110
                            "
                            />

                            {/* Optional badge */}
                            <span className="
                            absolute top-3 left-3
                            bg-black/70 text-white text-xs
                            px-3 py-1 rounded-full
                            backdrop-blur
                            ">
                                Bestseller
                            </span>
                        </div>

                        {/* Content */}
                        <div className="px-4 py-3">

                            {/* Title */}
                            <h3 className="text-base font-semibold text-gray-900 leading-snug">
                                Rajasthani Thali
                            </h3>

                            {/* Subtitle */}
                            <p className="text-xs text-gray-500 mt-0.5">
                                Authentic North Indian
                            </p>

                            {/* Price + Quantity */}
                            <div className="flex items-center justify-between mt-3">
                                <p className="text-lg font-bold text-gray-900">
                                    ₹130
                                </p>

                                <div className="
                                        flex items-center
                                        bg-gray-100
                                        rounded-full
                                        px-2.5 py-1
                                        gap-2
                                    ">
                                    <button className="w-6 h-6 rounded-full bg-white shadow text-gray-600 hover:text-black">
                                        −
                                    </button>

                                    <span className="text-sm font-medium w-4 text-center">
                                        0
                                    </span>

                                    <button className="w-6 h-6 rounded-full bg-white shadow text-gray-600 hover:text-black">
                                        +
                                    </button>
                                </div>
                            </div>

                            {/* Add to cart */}
                            <button
                                className="
                                        mt-4
                                        w-full
                                        bg-[#FC8A06]
                                        text-white
                                        font-semibold
                                        py-2.5
                                        rounded-xl
                                        transition
                                        hover:bg-[#e07b05]
                                        active:scale-95
                                    "
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>

                    <div
                        className="
                            group
                            bg-white
                            w-[220px]
                            rounded-2xl
                            border border-gray-200
                            overflow-hidden
                            transition-all duration-300
                            hover:-translate-y-2
                            hover:shadow-2xl
                        "
                    >
                        {/* Image */}
                        <div className="relative overflow-hidden">
                            <Image
                                src="/assets/Dal-Batti-Churma-Combo-min-scaled.jpg"
                                width={238}
                                height={303}
                                alt="food_item"
                                className="
                                w-full h-40 object-cover
                                transition-transform duration-500
                                group-hover:scale-110
                            "
                            />

                            {/* Optional badge */}
                            <span className="
                            absolute top-3 left-3
                            bg-black/70 text-white text-xs
                            px-3 py-1 rounded-full
                            backdrop-blur
                            ">
                                Bestseller
                            </span>
                        </div>

                        {/* Content */}
                        <div className="px-4 py-3">

                            {/* Title */}
                            <h3 className="text-base font-semibold text-gray-900 leading-snug">
                                Rajasthani Thali
                            </h3>

                            {/* Subtitle */}
                            <p className="text-xs text-gray-500 mt-0.5">
                                Authentic North Indian
                            </p>

                            {/* Price + Quantity */}
                            <div className="flex items-center justify-between mt-3">
                                <p className="text-lg font-bold text-gray-900">
                                    ₹130
                                </p>

                                <div className="
                                        flex items-center
                                        bg-gray-100
                                        rounded-full
                                        px-2.5 py-1
                                        gap-2
                                    ">
                                    <button className="w-6 h-6 rounded-full bg-white shadow text-gray-600 hover:text-black">
                                        −
                                    </button>

                                    <span className="text-sm font-medium w-4 text-center">
                                        0
                                    </span>

                                    <button className="w-6 h-6 rounded-full bg-white shadow text-gray-600 hover:text-black">
                                        +
                                    </button>
                                </div>
                            </div>

                            {/* Add to cart */}
                            <button
                                className="
                                        mt-4
                                        w-full
                                        bg-[#FC8A06]
                                        text-white
                                        font-semibold
                                        py-2.5
                                        rounded-xl
                                        transition
                                        hover:bg-[#e07b05]
                                        active:scale-95
                                    "
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>

                    <div
                        className="
                            group
                            bg-white
                            w-[220px]
                            rounded-2xl
                            border border-gray-200
                            overflow-hidden
                            transition-all duration-300
                            hover:-translate-y-2
                            hover:shadow-2xl
                        "
                    >
                        {/* Image */}
                        <div className="relative overflow-hidden">
                            <Image
                                src="/assets/Dal-Batti-Churma-Combo-min-scaled.jpg"
                                width={238}
                                height={303}
                                alt="food_item"
                                className="
                                w-full h-40 object-cover
                                transition-transform duration-500
                                group-hover:scale-110
                            "
                            />

                            {/* Optional badge */}
                            <span className="
                            absolute top-3 left-3
                            bg-black/70 text-white text-xs
                            px-3 py-1 rounded-full
                            backdrop-blur
                            ">
                                Bestseller
                            </span>
                        </div>

                        {/* Content */}
                        <div className="px-4 py-3">

                            {/* Title */}
                            <h3 className="text-base font-semibold text-gray-900 leading-snug">
                                Rajasthani Thali
                            </h3>

                            {/* Subtitle */}
                            <p className="text-xs text-gray-500 mt-0.5">
                                Authentic North Indian
                            </p>

                            {/* Price + Quantity */}
                            <div className="flex items-center justify-between mt-3">
                                <p className="text-lg font-bold text-gray-900">
                                    ₹130
                                </p>

                                <div className="
                                        flex items-center
                                        bg-gray-100
                                        rounded-full
                                        px-2.5 py-1
                                        gap-2
                                    ">
                                    <button className="w-6 h-6 rounded-full bg-white shadow text-gray-600 hover:text-black">
                                        −
                                    </button>

                                    <span className="text-sm font-medium w-4 text-center">
                                        0
                                    </span>

                                    <button className="w-6 h-6 rounded-full bg-white shadow text-gray-600 hover:text-black">
                                        +
                                    </button>
                                </div>
                            </div>

                            {/* Add to cart */}
                            <button
                                className="
                                        mt-4
                                        w-full
                                        bg-[#FC8A06]
                                        text-white
                                        font-semibold
                                        py-2.5
                                        rounded-xl
                                        transition
                                        hover:bg-[#e07b05]
                                        active:scale-95
                                    "
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>

                    <div
                        className="
                            group
                            bg-white
                            w-[220px]
                            rounded-2xl
                            border border-gray-200
                            overflow-hidden
                            transition-all duration-300
                            hover:-translate-y-2
                            hover:shadow-2xl
                        "
                    >
                        {/* Image */}
                        <div className="relative overflow-hidden">
                            <Image
                                src="/assets/Dal-Batti-Churma-Combo-min-scaled.jpg"
                                width={238}
                                height={303}
                                alt="food_item"
                                className="
                                w-full h-40 object-cover
                                transition-transform duration-500
                                group-hover:scale-110
                            "
                            />

                            {/* Optional badge */}
                            <span className="
                            absolute top-3 left-3
                            bg-black/70 text-white text-xs
                            px-3 py-1 rounded-full
                            backdrop-blur
                            ">
                                Bestseller
                            </span>
                        </div>

                        {/* Content */}
                        <div className="px-4 py-3">

                            {/* Title */}
                            <h3 className="text-base font-semibold text-gray-900 leading-snug">
                                Rajasthani Thali
                            </h3>

                            {/* Subtitle */}
                            <p className="text-xs text-gray-500 mt-0.5">
                                Authentic North Indian
                            </p>

                            {/* Price + Quantity */}
                            <div className="flex items-center justify-between mt-3">
                                <p className="text-lg font-bold text-gray-900">
                                    ₹130
                                </p>

                                <div className="
                                        flex items-center
                                        bg-gray-100
                                        rounded-full
                                        px-2.5 py-1
                                        gap-2
                                    ">
                                    <button className="w-6 h-6 rounded-full bg-white shadow text-gray-600 hover:text-black">
                                        −
                                    </button>

                                    <span className="text-sm font-medium w-4 text-center">
                                        0
                                    </span>

                                    <button className="w-6 h-6 rounded-full bg-white shadow text-gray-600 hover:text-black">
                                        +
                                    </button>
                                </div>
                            </div>

                            {/* Add to cart */}
                            <button
                                className="
                                        mt-4
                                        w-full
                                        bg-[#FC8A06]
                                        text-white
                                        font-semibold
                                        py-2.5
                                        rounded-xl
                                        transition
                                        hover:bg-[#e07b05]
                                        active:scale-95
                                    "
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>
          
                    <div
                        className="
                            group
                            bg-white
                            w-[220px]
                            rounded-2xl
                            border border-gray-200
                            overflow-hidden
                            transition-all duration-300
                            hover:-translate-y-2
                            hover:shadow-2xl
                        "
                    >
                        {/* Image */}
                        <div className="relative overflow-hidden">
                            <Image
                                src="/assets/Dal-Batti-Churma-Combo-min-scaled.jpg"
                                width={238}
                                height={303}
                                alt="food_item"
                                className="
                                w-full h-40 object-cover
                                transition-transform duration-500
                                group-hover:scale-110
                            "
                            />

                            {/* Optional badge */}
                            <span className="
                            absolute top-3 left-3
                            bg-black/70 text-white text-xs
                            px-3 py-1 rounded-full
                            backdrop-blur
                            ">
                                Bestseller
                            </span>
                        </div>

                        {/* Content */}
                        <div className="px-4 py-3">

                            {/* Title */}
                            <h3 className="text-base font-semibold text-gray-900 leading-snug">
                                Rajasthani Thali
                            </h3>

                            {/* Subtitle */}
                            <p className="text-xs text-gray-500 mt-0.5">
                                Authentic North Indian
                            </p>

                            {/* Price + Quantity */}
                            <div className="flex items-center justify-between mt-3">
                                <p className="text-lg font-bold text-gray-900">
                                    ₹130
                                </p>

                                <div className="
                                        flex items-center
                                        bg-gray-100
                                        rounded-full
                                        px-2.5 py-1
                                        gap-2
                                    ">
                                    <button className="w-6 h-6 rounded-full bg-white shadow text-gray-600 hover:text-black">
                                        −
                                    </button>

                                    <span className="text-sm font-medium w-4 text-center">
                                        0
                                    </span>

                                    <button className="w-6 h-6 rounded-full bg-white shadow text-gray-600 hover:text-black">
                                        +
                                    </button>
                                </div>
                            </div>

                            {/* Add to cart */}
                            <button
                                className="
                                        mt-4
                                        w-full
                                        bg-[#FC8A06]
                                        text-white
                                        font-semibold
                                        py-2.5
                                        rounded-xl
                                        transition
                                        hover:bg-[#e07b05]
                                        active:scale-95
                                    "
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>

                    <div
                        className="
                            group
                            bg-white
                            w-[220px]
                            rounded-2xl
                            border border-gray-200
                            overflow-hidden
                            transition-all duration-300
                            hover:-translate-y-2
                            hover:shadow-2xl
                        "
                    >
                        {/* Image */}
                        <div className="relative overflow-hidden">
                            <Image
                                src="/assets/Dal-Batti-Churma-Combo-min-scaled.jpg"
                                width={238}
                                height={303}
                                alt="food_item"
                                className="
                                w-full h-40 object-cover
                                transition-transform duration-500
                                group-hover:scale-110
                            "
                            />

                            {/* Optional badge */}
                            <span className="
                            absolute top-3 left-3
                            bg-black/70 text-white text-xs
                            px-3 py-1 rounded-full
                            backdrop-blur
                            ">
                                Bestseller
                            </span>
                        </div>

                        {/* Content */}
                        <div className="px-4 py-3">

                            {/* Title */}
                            <h3 className="text-base font-semibold text-gray-900 leading-snug">
                                Rajasthani Thali
                            </h3>

                            {/* Subtitle */}
                            <p className="text-xs text-gray-500 mt-0.5">
                                Authentic North Indian
                            </p>

                            {/* Price + Quantity */}
                            <div className="flex items-center justify-between mt-3">
                                <p className="text-lg font-bold text-gray-900">
                                    ₹130
                                </p>

                                <div className="
                                        flex items-center
                                        bg-gray-100
                                        rounded-full
                                        px-2.5 py-1
                                        gap-2
                                    ">
                                    <button className="w-6 h-6 rounded-full bg-white shadow text-gray-600 hover:text-black">
                                        −
                                    </button>

                                    <span className="text-sm font-medium w-4 text-center">
                                        0
                                    </span>

                                    <button className="w-6 h-6 rounded-full bg-white shadow text-gray-600 hover:text-black">
                                        +
                                    </button>
                                </div>
                            </div>

                            {/* Add to cart */}
                            <button
                                className="
                                        mt-4
                                        w-full
                                        bg-[#FC8A06]
                                        text-white
                                        font-semibold
                                        py-2.5
                                        rounded-xl
                                        transition
                                        hover:bg-[#e07b05]
                                        active:scale-95
                                    "
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>

                    <div
                        className="
                            group
                            bg-white
                            w-[220px]
                            rounded-2xl
                            border border-gray-200
                            overflow-hidden
                            transition-all duration-300
                            hover:-translate-y-2
                            hover:shadow-2xl
                        "
                    >
                        {/* Image */}
                        <div className="relative overflow-hidden">
                            <Image
                                src="/assets/Dal-Batti-Churma-Combo-min-scaled.jpg"
                                width={238}
                                height={303}
                                alt="food_item"
                                className="
                                w-full h-40 object-cover
                                transition-transform duration-500
                                group-hover:scale-110
                            "
                            />

                            {/* Optional badge */}
                            <span className="
                            absolute top-3 left-3
                            bg-black/70 text-white text-xs
                            px-3 py-1 rounded-full
                            backdrop-blur
                            ">
                                Bestseller
                            </span>
                        </div>

                        {/* Content */}
                        <div className="px-4 py-3">

                            {/* Title */}
                            <h3 className="text-base font-semibold text-gray-900 leading-snug">
                                Rajasthani Thali
                            </h3>

                            {/* Subtitle */}
                            <p className="text-xs text-gray-500 mt-0.5">
                                Authentic North Indian
                            </p>

                            {/* Price + Quantity */}
                            <div className="flex items-center justify-between mt-3">
                                <p className="text-lg font-bold text-gray-900">
                                    ₹130
                                </p>

                                <div className="
                                        flex items-center
                                        bg-gray-100
                                        rounded-full
                                        px-2.5 py-1
                                        gap-2
                                    ">
                                    <button className="w-6 h-6 rounded-full bg-white shadow text-gray-600 hover:text-black">
                                        −
                                    </button>

                                    <span className="text-sm font-medium w-4 text-center">
                                        0
                                    </span>

                                    <button className="w-6 h-6 rounded-full bg-white shadow text-gray-600 hover:text-black">
                                        +
                                    </button>
                                </div>
                            </div>

                            {/* Add to cart */}
                            <button
                                className="
                                        mt-4
                                        w-full
                                        bg-[#FC8A06]
                                        text-white
                                        font-semibold
                                        py-2.5
                                        rounded-xl
                                        transition
                                        hover:bg-[#e07b05]
                                        active:scale-95
                                    "
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>

                    <div
                        className="
                            group
                            bg-white
                            w-[220px]
                            rounded-2xl
                            border border-gray-200
                            overflow-hidden
                            transition-all duration-300
                            hover:-translate-y-2
                            hover:shadow-2xl
                        "
                    >
                        {/* Image */}
                        <div className="relative overflow-hidden">
                            <Image
                                src="/assets/Dal-Batti-Churma-Combo-min-scaled.jpg"
                                width={238}
                                height={303}
                                alt="food_item"
                                className="
                                w-full h-40 object-cover
                                transition-transform duration-500
                                group-hover:scale-110
                            "
                            />

                            {/* Optional badge */}
                            <span className="
                            absolute top-3 left-3
                            bg-black/70 text-white text-xs
                            px-3 py-1 rounded-full
                            backdrop-blur
                            ">
                                Bestseller
                            </span>
                        </div>

                        {/* Content */}
                        <div className="px-4 py-3">

                            {/* Title */}
                            <h3 className="text-base font-semibold text-gray-900 leading-snug">
                                Rajasthani Thali
                            </h3>

                            {/* Subtitle */}
                            <p className="text-xs text-gray-500 mt-0.5">
                                Authentic North Indian
                            </p>

                            {/* Price + Quantity */}
                            <div className="flex items-center justify-between mt-3">
                                <p className="text-lg font-bold text-gray-900">
                                    ₹130
                                </p>

                                <div className="
                                        flex items-center
                                        bg-gray-100
                                        rounded-full
                                        px-2.5 py-1
                                        gap-2
                                    ">
                                    <button className="w-6 h-6 rounded-full bg-white shadow text-gray-600 hover:text-black">
                                        −
                                    </button>

                                    <span className="text-sm font-medium w-4 text-center">
                                        0
                                    </span>

                                    <button className="w-6 h-6 rounded-full bg-white shadow text-gray-600 hover:text-black">
                                        +
                                    </button>
                                </div>
                            </div>

                            {/* Add to cart */}
                            <button
                                className="
                                        mt-4
                                        w-full
                                        bg-[#FC8A06]
                                        text-white
                                        font-semibold
                                        py-2.5
                                        rounded-xl
                                        transition
                                        hover:bg-[#e07b05]
                                        active:scale-95
                                    "
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>

                </div>
            </section>


        </div>
    )
}
