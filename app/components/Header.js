'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [open, setOpen] = useState(false)

  // Close on ESC (keyboard accessibility)
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      {/* HEADER */}
      <div className='flex items-center justify-between px-4 relative z-50 bg-white'>

        {/* Logo */}
        <Link href={'/'}>
        <svg width="280" height="80" viewBox="0 0 280 80" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="indiaGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF8C1A" />
              <stop offset="100%" stopColor="#1FAA59" />
            </linearGradient>
          </defs>

          <circle cx="36" cy="40" r="28" fill="url(#indiaGrad)" />
          <path d="M28 28c4-6 12-6 16 0" stroke="white" fill="none" />
          <circle cx="36" cy="42" r="5" fill="white" />

          <text x="75" y="46" fontSize="36" fontWeight="800" fill="#0f172a">
            Swadya
          </text>
          <text x="77" y="64" fontSize="13" fill="#475569">
            Taste at your doorstep
          </text>
        </svg>
        </Link>

        {/* DESKTOP NAV */}
        <div className='hidden lg:flex items-center gap-12'>
          <ul className='flex gap-3'>
            {[{ name: 'Home', path: '/' }, { name: 'Restaurants', path: '/restaurants' }, { name: 'Cart', path: '/Cart' }].map(item => (
              <Link
                key={item.name}
                href={`${item.path}`}>
                <li
                  className='p-2 px-9 hover:bg-[#FC8A06] rounded-full cursor-pointer'
                >
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>

          <button className='flex items-center gap-1 p-3.5 px-6.5 bg-black rounded-full text-white text-sm cursor-pointer'>
            <Image src='/assets/MaleUser.png' width={30} height={27} alt='user' />
            Login/Signup
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          aria-label="Open menu"
          className="lg:hidden p-2 z-50 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-7 bg-black transition ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-7 bg-black transition ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-7 bg-black transition ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* BACKDROP */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* MOBILE SLIDE MENU */}
      <div
        className={`lg:hidden
    fixed top-0 left-0 w-full bg-white z-40
    transform transition-transform duration-300
    ${open ? 'translate-y-0' : '-translate-y-full'}
  `}
      >
        <div className="pt-24 pb-10 px-6 flex flex-col gap-4 justify-center items-center">

          {[{ name: 'Home', path: '/' }, { name: 'Restaurants', path: '/restaurants' }, { name: 'Cart', path: '/Cart' }].map(item => (
            <Link key={item.name}
              href={item.path}>
              <button
                onClick={() => setOpen(false)}
                aria-current="page"
                className="w-full text-lg font-medium px-4 py-2 rounded-full cursor-pointer transition-all duration-150 hover:bg-gray-900 hover:text-whiteactive:scale-95 active:bg-gray-900 active:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FC8A06]  focus-visible:ring-offset-2 hover:text-white"
              >
                {item.name}
              </button>
            </Link>
          ))}

          <button
            className="mt-6 w-full bg-black text-white py-3 rounded-full font-semibold transition-all duration-150 hover:bg-gray-900 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FC8A06] focus-visible:ring-offset-2 cursor-pointer"
          >
            Login / Signup
          </button>

        </div>
      </div>

    </>
  )
}
