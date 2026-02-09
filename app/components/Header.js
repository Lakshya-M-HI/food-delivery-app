import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <div className='flex items-center justify-between px-4'>
      <svg width="280" height="80" viewBox="0 0 280 80" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="indiaGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF8C1A" />
            <stop offset="100%" stopColor="#1FAA59" />
          </linearGradient>
        </defs>

        {/* <!-- Icon --> */}
        <circle cx="36" cy="40" r="28" fill="url(#indiaGrad)" />
        <path d="M28 28c4-6 12-6 16 0" stroke="white" fill="none" />
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


      <div className='flex items-center gap-12'>
        <ul className='flex items-center justify-between gap-3'>
          <li className='p-2 px-9 transition-all duration-150 ease-in-out hover:bg-[#FC8A06] rounded-full cursor-pointer'><button className='cursor-pointer'>Home</button></li>
          <li className='p-2 px-9 transition-all duration-150 ease-in-out hover:bg-[#FC8A06] rounded-full'><button>Browser Menu</button></li>
          <li className='p-2 px-9 transition-all duration-150 ease-in-out hover:bg-[#FC8A06] rounded-full cursor-pointer'><button className='cursor-pointer'>Special Offers</button></li>
          <li className='p-2 px-9 transition-all duration-150 ease-in-out hover:bg-[#FC8A06] rounded-full cursor-pointer'><button className='cursor-pointer'>Restaurants</button></li>
          <li className='p-2 px-9 transition-all duration-150 ease-in-out hover:bg-[#FC8A06] rounded-full cursor-pointer'><button className='cursor-pointer'>Track Order</button></li>
        </ul>

        <button className='flex items-center gap-1 p-3.5 px-6.5 bg-black rounded-full text-white text-sm cursor-pointer'>
          <span className='w-6'>
            <Image
              src='/assets/MaleUser.png'
              width={30.97}
              height={27}
              alt='logo'
            />
          </span>
          <span>Login/Signup</span>
        </button>
      </div>

    </div>
  )
}
