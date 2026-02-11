import React from 'react'
import Image from 'next/image'

export default function FoodVariety() {

  const categories = [
    { 
      name: 'Rajasthani Special', 
      restaurants: '50+',
      image: '/assets/foodImg.jpg',
      color: 'from-orange-500 to-red-600'
    },
    { 
      name: 'Street Chaat', 
      restaurants: '75+',
      image: '/assets/chaat.jpg',
      color: 'from-yellow-500 to-orange-600'
    },
    { 
      name: 'Paneer Delights', 
      restaurants: '60+',
      image: '/assets/paneer.jpg',
      color: 'from-green-500 to-teal-600'
    },
    { 
      name: 'South Indian', 
      restaurants: '45+',
      image: '/assets/dosa.jpg',
      color: 'from-blue-500 to-purple-600'
    },
    { 
      name: 'Biryani & Rice', 
      restaurants: '55+',
      image: '/assets/biryani.jpg',
      color: 'from-pink-500 to-rose-600'
    },
    { 
      name: 'Desserts', 
      restaurants: '40+',
      image: '/assets/dessert.jpg',
      color: 'from-purple-500 to-pink-600'
    }
  ]

  const foodItems = [
    { 
      name: 'Pani Puri', 
      desc: 'Crispy hollow puri with spicy tangy water', 
      price: 40,
      tag: 'Street Food',
      rating: 4.5
    },
    { 
      name: 'Paneer Butter Masala', 
      desc: 'Rich creamy tomato gravy with soft paneer', 
      price: 180,
      tag: 'Bestseller',
      rating: 4.8
    },
    { 
      name: 'Dal Baati Churma', 
      desc: 'Traditional Rajasthani combo meal', 
      price: 160,
      tag: 'Traditional',
      rating: 4.7
    },
    { 
      name: 'Masala Dosa', 
      desc: 'Crispy dosa with spiced potato filling', 
      price: 120,
      tag: 'South Indian',
      rating: 4.6
    },
    { 
      name: 'Veg Biryani', 
      desc: 'Aromatic basmati rice with mixed veggies', 
      price: 150,
      tag: 'Bestseller',
      rating: 4.4
    },
    { 
      name: 'Chole Bhature', 
      desc: 'Spicy chickpeas with fluffy fried bread', 
      price: 140,
      tag: 'Popular',
      rating: 4.5
    },
    { 
      name: 'Raj Kachori', 
      desc: 'Large crispy kachori with yogurt & chutney', 
      price: 80,
      tag: 'Street Food',
      rating: 4.6
    },
    { 
      name: 'Paneer Tikka', 
      desc: 'Char-grilled cottage cheese with spices', 
      price: 190,
      tag: 'Bestseller',
      rating: 4.7
    },
    { 
      name: 'Samosa Chaat', 
      desc: 'Crushed samosa with chickpeas & chutneys', 
      price: 60,
      tag: 'Street Food',
      rating: 4.3
    },
    { 
      name: 'Gulab Jamun', 
      desc: 'Soft milk dumplings in rose sugar syrup', 
      price: 90,
      tag: 'Dessert',
      rating: 4.8
    }
  ]

  return (
    <div className='min-h-92 rounded-lg flex flex-col gap-6 md:gap-10 justify-center py-6'>
      
      {/* Header */}
      <div className='flex justify-between items-center px-2 sm:px-4'>
        <h2 className='text-xl sm:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent'>
          Top Categories
        </h2>
        <button className='border-2 border-orange-400 bg-gradient-to-r from-orange-50 to-orange-100 
                         p-1.5 px-3 sm:p-2 sm:px-6 rounded-full transition-all duration-300 
                         hover:from-orange-500 hover:to-orange-600 hover:text-white hover:border-orange-600
                         text-xs sm:text-sm font-semibold text-orange-600 hover:shadow-lg 
                         active:scale-95'>
          View All →
        </button>
      </div>

      {/* Categories Scroll - with soft gradient edges */}
      <div className='relative'>
        {/* Left Gradient Fade */}
        <div className="pointer-events-none absolute top-0 left-0 h-full w-16 sm:w-32 z-10"
             style={{
               background: 'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 40%, transparent 100%)',
               filter: 'blur(2px)'
             }} />

        {/* Right Gradient Fade */}
        <div className="pointer-events-none absolute top-0 right-0 h-full w-16 sm:w-32 z-10"
             style={{
               background: 'linear-gradient(to left, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 40%, transparent 100%)',
               filter: 'blur(2px)'
             }} />

        {/* Scrollable Container */}
        <div className='flex gap-4 overflow-x-auto scrollbar-hide px-2 sm:px-4 py-4 scroll-smooth'
             style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          
          {categories.map((category, index) => (
            <div 
              key={index}
              className='flex-shrink-0 group cursor-pointer'>
              <div className='relative bg-white w-[200px] sm:w-[240px] rounded-2xl 
                            border-2 border-gray-100 overflow-hidden
                            transition-all duration-300
                            hover:-translate-y-2
                            hover:shadow-2xl
                            hover:border-orange-300'>
                
                {/* Image with Gradient Overlay */}
                <div className='relative h-[140px] sm:h-[160px] overflow-hidden'>
                  <Image
                    src={category.image}
                    height={203}
                    width={238}
                    alt={category.name}
                    className='w-full h-full object-cover transition-transform duration-500 
                             group-hover:scale-110'
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-20 
                                 group-hover:opacity-30 transition-opacity duration-300`} />
                </div>

                {/* Content */}
                <div className='px-4 py-3 bg-gradient-to-b from-white to-gray-50'>
                  <h3 className='text-base sm:text-lg font-bold text-gray-900 
                               group-hover:text-orange-600 transition-colors duration-300'>
                    {category.name}
                  </h3>
                  <p className='text-orange-500 font-semibold text-sm mt-1'>
                    {category.restaurants} Restaurants
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Food Items Grid */}
      <section className="bg-gradient-to-br from-gray-50 to-orange-50/30 rounded-3xl 
                        shadow-lg border-2 border-gray-100 p-4 sm:p-8">
        <h2 className='text-xl sm:text-2xl font-bold mb-6 text-gray-900'>
          Popular Dishes
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 
                      gap-4 sm:gap-6 lg:gap-8 justify-items-center">
          {foodItems.map((item, index) => (
            <div
              key={index}
              className="group bg-white w-full max-w-[220px] rounded-2xl 
                       border-2 border-gray-100 overflow-hidden
                       transition-all duration-300
                       hover:-translate-y-2
                       hover:shadow-2xl
                       hover:border-orange-300">
              
              {/* Image */}
              <div className="relative overflow-hidden h-32 sm:h-40">
                <Image
                  src="/assets/Dal-Batti-Churma-Combo-min-scaled.jpg"
                  width={238}
                  height={303}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500
                           group-hover:scale-110"
                />

                {/* Badge */}
                <span className="absolute top-2 left-2 bg-gradient-to-r from-orange-500 to-red-500 
                               text-white text-[10px] sm:text-xs px-2.5 sm:px-3 py-1 
                               rounded-full font-semibold shadow-lg">
                  {item.tag}
                </span>

                {/* Rating */}
                <span className="absolute top-2 right-2 bg-white/95 backdrop-blur 
                               text-gray-900 text-[10px] sm:text-xs px-2 py-1 
                               rounded-full font-bold shadow-md flex items-center gap-1">
                  ⭐ {item.rating}
                </span>
              </div>

              {/* Content */}
              <div className="px-3 sm:px-4 py-3">
                {/* Title */}
                <h3 className="text-xs sm:text-base font-bold text-gray-900 
                             truncate group-hover:text-orange-600 transition-colors">
                  {item.name}
                </h3>

                {/* Description - hidden on mobile */}
                <p className="hidden sm:block text-[11px] text-gray-500 mt-1 line-clamp-2">
                  {item.desc}
                </p>

                {/* Price + Quantity */}
                <div className="flex items-center justify-between mt-3">
                  <p className="text-base sm:text-xl font-bold bg-gradient-to-r 
                              from-orange-600 to-red-600 bg-clip-text text-transparent">
                    ₹{item.price}
                  </p>

                  <div className="flex items-center bg-gray-100 rounded-full 
                                px-2 py-1 gap-1.5 sm:gap-2 border border-gray-200">
                    <button className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white shadow 
                                     text-gray-600 hover:text-orange-600 hover:bg-orange-50
                                     transition-all duration-200 active:scale-90 
                                     flex items-center justify-center text-sm font-bold">
                      −
                    </button>

                    <span className="text-xs sm:text-sm font-semibold w-4 text-center">
                      0
                    </span>

                    <button className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white shadow 
                                     text-gray-600 hover:text-orange-600 hover:bg-orange-50
                                     transition-all duration-200 active:scale-90
                                     flex items-center justify-center text-sm font-bold">
                      +
                    </button>
                  </div>
                </div>

                {/* Add to cart */}
                <button className="mt-3 sm:mt-4 w-full bg-gradient-to-r from-orange-500 to-orange-600
                                 text-white text-xs sm:text-sm font-bold
                                 py-2 sm:py-2.5 rounded-xl 
                                 transition-all duration-300
                                 hover:from-orange-600 hover:to-red-600
                                 hover:shadow-lg hover:shadow-orange-300/50
                                 active:scale-95">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}