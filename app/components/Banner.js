import React from "react";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="hidden lg:block w-full bg-[#FAFAFA] border-b border-gray-300">
      <div
        className="
          max-w-7xl mx-auto
          flex flex-col md:flex-row
          items-center
          justify-between
          gap-3
          px-4 md:px-6 lg:px-10
          py-2
        "
      >
        {/* Promo */}
        <div className="flex items-center gap-2 text-sm text-center md:text-left">
          <Image src="/assets/star.png" width={14} height={14} alt="star" />
          <p className="whitespace-nowrap">
            Get 5% Off your first order,
            <span className="text-[#FC8A06] font-semibold underline ml-1">
              Promo: ORDER5
            </span>
          </p>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-sm">
          <Image src="/assets/Location.svg" width={16} height={16} alt="location" />
          <p className="hidden sm:block truncate max-w-[240px]">
            Regent Street, A4, A4201, London
          </p>
          <button className="text-[#FC8A06] underline text-xs sm:text-sm">
            Change
          </button>
        </div>

        {/* Cart */}
        <div className="flex items-center gap-2 bg-[#028643] text-white px-3 py-2 rounded-xl">
          <Image
            src="/assets/FullShoppingBasket.svg"
            width={26}
            height={26}
            alt="cart"
          />

          <span className="hidden sm:block h-5 border-l border-white/40" />
          <p className="text-xs sm:text-sm font-semibold">23 Items</p>

          <span className="hidden sm:block h-5 border-l border-white/40" />
          <p className="text-xs sm:text-sm font-semibold whitespace-nowrap">
            GBP 79.89
          </p>

          <span className="hidden sm:block h-5 border-l border-white/40" />

          <Image
            src="/assets/ForwardButton.svg"
            width={26}
            height={26}
            alt="go"
          />
        </div>
      </div>
    </div>
  );
}
