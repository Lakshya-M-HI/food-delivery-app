import React from 'react'
import Image from 'next/image'

export default function Banner() {
    return (
        <div className='h-17.5 bg-[#FAFAFA] text-[#000000] font-poppins flex justify-between pl-10 items-center rounded-b-xl border border-gray-300'>

            <div className='flex justify-center items-center gap-3'>
                <Image
                    src='/assets/star.png'
                    width='15'
                    height='15'
                    alt='star'
                />
                <p className='text-[15px]'>Get 5% Off your first order,<b className='text-[#FC8A06] underline'>Promo: ORDER5</b></p>
            </div>

            <div className='flex justify-center items-center gap-17'>

                <div className='flex justify-center items-center gap-2'>
                    <Image
                        src='/assets/Location.svg'
                        width='20'
                        height='20'
                        alt='star'
                    />
                    <p className='text-[15px]'>Regent Street, A4, A4201, London</p>
                    <p className='text-[#FC8A06] underline text-sm'>Change Location</p>
                </div>

                <div className='bg-[#028643] w-94.5 h-17.5 flex justify-between items-center p-5 gap-2 rounded-b-xl'>
                    <Image
                        src='/assets/FullShoppingBasket.svg'
                        height={43}
                        width={43}
                        alt='bucket'
                    />
                    <span className='h-17.5 border-l-[0.3px] border-gray-400 opacity-50'> </span>
                    <p className='text-[#FFFFFF] text-[16px] font-semibold'>23 Items</p>
                    <span className='h-17.5 border-l-[0.3px] border-gray-400 opacity-50'> </span>
                    <p className='text-[#FFFFFF] text-[16px] font-semibold' >GBP 79.89</p>
                    <span className='h-17.5 border-l-[0.3px] border-gray-400 opacity-50'> </span>

                    <Image
                        src='/assets/ForwardButton.svg'
                        height={43}
                        width={43}
                        alt='bucket'
                    />

                </div>

            </div>

        </div>
    )
}
