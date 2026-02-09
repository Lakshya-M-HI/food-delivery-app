'use client'

import { useState } from 'react'
import CartItems from '../components/CartItems'
import TrackOrder from '../components/TrackOrder'

export default function CartPage() {
    const [active, setActive] = useState('cart')

    return (
        <section className="max-w-3xl mx-auto px-4 py-8">

            {/* Header */}
            <div className="flex gap-4 border-b border-gray-200 mb-6">
                {['cart', 'track'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActive(tab)}
                        className={`
                        px-6 py-3 text-sm font-semibold
                        border-b-2 transition
                        ${active === tab
                                ? 'border-[#FC8A06] text-[#FC8A06]'
                                : 'border-transparent text-gray-500 hover:text-black'
                            }`}
                    >
                        {tab === 'cart' ? 'My Cart' : 'Track Order'}
                    </button>
                ))}
            </div>

            <div className='p-5'>
                {/* Content */}
                {active === 'cart' ? <CartItems /> : <TrackOrder />}
            </div>
        </section>
    )
}
