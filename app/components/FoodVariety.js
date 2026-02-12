
import React from 'react'
import Image from 'next/image'

export default function FoodVariety() {

  const data = [
    { name: 'Rajasthani Thali', desc: 'Authentic North Indian', price: 130 },
    { name: 'Paneer Butter Masala', desc: 'Rich creamy tomato gravy', price: 180 },
    { name: 'Dal Baati Churma', desc: 'Traditional Rajasthani combo', price: 160 },
    { name: 'Veg Biryani', desc: 'Aromatic basmati rice with veggies', price: 150 },
    { name: 'Masala Dosa', desc: 'Crispy dosa with spiced potato filling', price: 120 },
    { name: 'Chole Bhature', desc: 'Spicy chickpeas with fried bread', price: 140 },
    { name: 'Veg Hakka Noodles', desc: 'Indo-Chinese stir-fried noodles', price: 130 },
    { name: 'Paneer Tikka', desc: 'Char-grilled cottage cheese cubes', price: 190 },
    { name: 'Rajma Chawal', desc: 'Red kidney beans with steamed rice', price: 135 },
    { name: 'Gulab Jamun', desc: 'Soft milk dumplings in sugar syrup', price: 90 }
  ]


  return (
    <div className='min-h-92 rounded-lg flex flex-col gap-2 md:gap-8 justify-center'>
       <div className='flex justify-between'>
                <h2 className=' text-[16px] sm:text-3xl font-bold sm:ml-5'>Top search</h2>

                <span><button className='border bg-gray-100 border-gray-400 p-1 px-2 sm:p-2 rounded-full sm:px-4 transition-all duration-150 hover:bg-blue-100 text-[8px]'>View all</button></span>
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

      <section className="bg-[#FAFAFA] rounded-2xl shadow-sm border border-gray-200 p-3">
        <div
          className="
    min-h-[60vh]
    grid
    grid-cols-2
    sm:grid-cols-2
    md:grid-cols-3
    lg:grid-cols-5
    gap-4 sm:gap-6 lg:gap-10
    justify-items-center
    p-4 sm:p-6
  "
        >
          {data.map((item) => (
            <div
              key={item.name}
              className="
        group
        bg-white
        w-full max-w-[220px]
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
            w-full
            h-32 sm:h-36 md:h-40
            object-cover
            transition-transform duration-500
            group-hover:scale-110
          "
                />

                {/* Badge */}
                <span
                  className="
            absolute top-2 left-2
            bg-black/70 text-white
            text-[10px] sm:text-xs
            px-2 sm:px-3 py-0.5 sm:py-1
            rounded-full
            backdrop-blur
          "
                >
                  Bestseller
                </span>
              </div>

              {/* Content */}
              <div className="px-3 sm:px-4 py-3 ">

                {/* Title */}
                <div className="overflow-hidden">
                  <h3
                    className="
                          text-[10px] sm:text-base
                          font-semibold text-gray-900
                          leading-snug
                          truncate
                          whitespace-nowrap
                        "
                  >
                    {item.name}
                  </h3>
                </div>


                {/* Subtitle */}
                {/* <p
          className="
            text-[11px] sm:text-xs
            text-gray-500
            mt-0.5
            line-clamp-1
          "
        >
          {item.desc}
        </p> */}

                {/* Price + Quantity */}
                <div className="flex items-center justify-between mt-3">
                  <p className="text-sm sm:text-lg font-bold text-gray-900">
                    ₹{item.price}
                  </p>

                  <div
                    className="
              flex items-center
              bg-gray-100
              rounded-full
              px-2 py-1
              gap-2
            "
                  >
                    <button className="px-2 rounded-full bg-white shadow text-gray-600 hover:text-black">
                      −
                    </button>

                    <span className="text-xs sm:text-sm font-medium w-4 text-center">
                      0
                    </span>

                    <button className="px-2 rounded-full bg-white shadow text-gray-600 hover:text-black">
                      +
                    </button>
                  </div>
                </div>

                {/* Add to cart */}
                <button
                  className="
            mt-2 sm:mt-4
            w-full
            bg-[#FC8A06]
            text-white
            text-sm sm:text-base
            font-semibold
            py-1 sm:py-2.5
            rounded-lg 
            transition
            hover:bg-[#e07b05]
            active:scale-95
          "
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>

      </section>


    </div>
  )
}
