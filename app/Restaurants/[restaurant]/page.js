'use client'

import React, { useState } from 'react'
import { notFound, useParams } from 'next/navigation'
import { restaurants } from '@/app/useContext/RestaurantsData'


export default function specificRestaurant() {

    const params = useParams()

    // const { restaurant } = await params

    // const foundedRestaurant = restaurants.filter(
    //     (item) =>
    //         item.name.toLowerCase().replaceAll(' ', '-') === restaurant
    // )

    const foundedRestaurant = restaurants.filter(
        (item) =>
            item.name.toLowerCase().replaceAll(' ', '-') === params.restaurant
    )


    if (foundedRestaurant.length === 0) {
        // notFound() 
        return <div>not found</div>
    }

    const [activeTab, setActiveTab] = useState('order');
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Mock restaurant data
    const restaurant = {
        name: "Mario's Italian Kitchen",
        cuisine: "Italian, Pizza, Pasta",
        rating: 4.3,
        reviews: 2847,
        priceRange: "₹300 for two",
        deliveryTime: "30-35 mins",
        distance: "2.5 km",
        address: "123 Main Street, Sector 15, Mumbai, Maharashtra 400001",
        phone: "+91 98765 43210",
        hours: "11:00 AM - 11:00 PM",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=600&fit=crop",
        features: ["Free Delivery", "Accepts Cards", "Outdoor Seating"],
    };

    const menuCategories = ["All", "Pizzas", "Pasta", "Appetizers", "Beverages", "Desserts"];

    const menuItems = [
        { id: 1, name: "Margherita Pizza", category: "Pizzas", price: 299, description: "Fresh tomatoes, mozzarella, basil", veg: true, bestseller: true, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=200&h=200&fit=crop" },
        { id: 2, name: "Pepperoni Pizza", category: "Pizzas", price: 399, description: "Pepperoni, mozzarella, tomato sauce", veg: false, image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=200&h=200&fit=crop" },
        { id: 3, name: "Vegetarian Supreme", category: "Pizzas", price: 349, description: "Bell peppers, onions, olives, mushrooms", veg: true, image: "https://images.unsplash.com/photo-1511689660979-10d2b1aada49?w=200&h=200&fit=crop" },
        { id: 4, name: "Spaghetti Carbonara", category: "Pasta", price: 329, description: "Eggs, bacon, parmesan, black pepper", veg: false, bestseller: true, image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=200&h=200&fit=crop" },
        { id: 5, name: "Penne Arrabbiata", category: "Pasta", price: 279, description: "Spicy tomato sauce, garlic, chili", veg: true, image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=200&h=200&fit=crop" },
        { id: 6, name: "Fettuccine Alfredo", category: "Pasta", price: 319, description: "Creamy white sauce, parmesan", veg: true, image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=200&h=200&fit=crop" },
        { id: 7, name: "Garlic Bread", category: "Appetizers", price: 129, description: "Toasted bread with garlic butter", veg: true, image: "https://images.unsplash.com/photo-1573140401552-3fab0b24f9e6?w=200&h=200&fit=crop" },
        { id: 8, name: "Bruschetta", category: "Appetizers", price: 159, description: "Toasted bread, tomatoes, basil", veg: true, bestseller: true, image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=200&h=200&fit=crop" },
        { id: 9, name: "Caesar Salad", category: "Appetizers", price: 219, description: "Lettuce, croutons, parmesan, dressing", veg: true, image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=200&h=200&fit=crop" },
        { id: 10, name: "Coca Cola", category: "Beverages", price: 50, description: "330ml", veg: true, image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=200&h=200&fit=crop" },
        { id: 11, name: "Fresh Lime Soda", category: "Beverages", price: 70, description: "Sweet or salt", veg: true, image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=200&h=200&fit=crop" },
        { id: 12, name: "Tiramisu", category: "Desserts", price: 249, description: "Classic Italian dessert", veg: true, bestseller: true, image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=200&h=200&fit=crop" },
    ];

    const reviews = [
        { id: 1, name: "Rahul Sharma", rating: 5, date: "2 days ago", comment: "Amazing food! The Margherita pizza was authentic and delicious.", avatar: "https://ui-avatars.com/api/?name=Rahul+Sharma&background=e74c3c&color=fff" },
        { id: 2, name: "Priya Mehta", rating: 4, date: "1 week ago", comment: "Good ambiance and tasty pasta. Service could be faster.", avatar: "https://ui-avatars.com/api/?name=Priya+Mehta&background=3498db&color=fff" },
        { id: 3, name: "Amit Kumar", rating: 5, date: "2 weeks ago", comment: "Best Italian restaurant in the area. The carbonara is to die for!", avatar: "https://ui-avatars.com/api/?name=Amit+Kumar&background=2ecc71&color=fff" },
        { id: 4, name: "Sneha Patel", rating: 4, date: "3 weeks ago", comment: "Great food and reasonable prices. Will definitely visit again.", avatar: "https://ui-avatars.com/api/?name=Sneha+Patel&background=f39c12&color=fff" },
    ];

    const filteredMenu = selectedCategory === 'All'
        ? menuItems
        : menuItems.filter(item => item.category === selectedCategory);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Image */}
            <div className="relative w-full h-48 sm:h-56 md:h-64 bg-gray-300">
                <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-full object-cover"
                />
                {/* Back Button */}
                <button className="absolute top-3 left-3 bg-white text-gray-800 p-2 rounded">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                {/* Share Button */}
                <button className="absolute top-3 right-3 bg-white text-gray-800 p-2 rounded">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                </button>
            </div>

            {/* Restaurant Info */}
            <div className="bg-white px-4 py-4 border-b">
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900">{restaurant.name}</h1>
                <p className="text-sm text-gray-600 mt-1">{restaurant.cuisine}</p>
                <p className="text-xs text-gray-500 mt-1">{restaurant.address}</p>

                {/* Rating & Details */}
                <div className="flex flex-wrap items-center gap-3 mt-3 text-sm">
                    <div className="flex items-center gap-1">
                        <span className="bg-green-600 text-white px-2 py-0.5 rounded text-xs font-semibold">
                            ★ {restaurant.rating}
                        </span>
                        <span className="text-gray-600 text-xs">({restaurant.reviews} reviews)</span>
                    </div>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-700">{restaurant.priceRange}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-700">{restaurant.deliveryTime}</span>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mt-3">
                    {restaurant.features.map((feature, index) => (
                        <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                            {feature}
                        </span>
                    ))}
                </div>
            </div>

            {/* Tabs */}
            <div className="bg-white border-b sticky top-0 z-10">
                <div className="flex overflow-x-auto no-scrollbar">
                    <button
                        onClick={() => setActiveTab('order')}
                        className={`px-6 py-3 text-sm font-medium whitespace-nowrap ${activeTab === 'order'
                                ? 'text-red-600 border-b-2 border-red-600'
                                : 'text-gray-600'
                            }`}
                    >
                        Order Online
                    </button>
                    <button
                        onClick={() => setActiveTab('overview')}
                        className={`px-6 py-3 text-sm font-medium whitespace-nowrap ${activeTab === 'overview'
                                ? 'text-red-600 border-b-2 border-red-600'
                                : 'text-gray-600'
                            }`}
                    >
                        Overview
                    </button>
                    <button
                        onClick={() => setActiveTab('reviews')}
                        className={`px-6 py-3 text-sm font-medium whitespace-nowrap ${activeTab === 'reviews'
                                ? 'text-red-600 border-b-2 border-red-600'
                                : 'text-gray-600'
                            }`}
                    >
                        Reviews
                    </button>
                    <button
                        onClick={() => setActiveTab('photos')}
                        className={`px-6 py-3 text-sm font-medium whitespace-nowrap ${activeTab === 'photos'
                                ? 'text-red-600 border-b-2 border-red-600'
                                : 'text-gray-600'
                            }`}
                    >
                        Photos
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto">
                {/* Order Online Tab */}
                {activeTab === 'order' && (
                    <div>
                        {/* Category Filter */}
                        <div className="bg-white px-4 py-3 border-b sticky top-12 z-10">
                            <div className="flex gap-2 overflow-x-auto no-scrollbar">
                                {menuCategories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`px-4 py-2 text-sm font-medium rounded whitespace-nowrap ${selectedCategory === category
                                                ? 'bg-red-600 text-white'
                                                : 'bg-gray-100 text-gray-700'
                                            }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Menu Items */}
                        <div className="p-4 space-y-3">
                            {filteredMenu.map((item) => (
                                <div key={item.id} className="bg-white border rounded p-3 flex gap-3">
                                    <div className="flex-1">
                                        <div className="flex items-start gap-2 mb-1">
                                            {item.veg ? (
                                                <span className="w-4 h-4 border-2 border-green-600 flex items-center justify-center p-0.5">
                                                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                                                </span>
                                            ) : (
                                                <span className="w-4 h-4 border-2 border-red-600 flex items-center justify-center p-0.5">
                                                    <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                                                </span>
                                            )}
                                            {item.bestseller && (
                                                <span className="text-xs bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded">
                                                    ★ Bestseller
                                                </span>
                                            )}
                                        </div>
                                        <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{item.name}</h3>
                                        <p className="text-xs sm:text-sm text-gray-600 mt-1">{item.description}</p>
                                        <p className="font-semibold text-gray-900 mt-2">₹{item.price}</p>
                                    </div>
                                    <div className="flex flex-col items-center gap-2">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded"
                                        />
                                        <button className="bg-white border border-green-600 text-green-600 px-4 py-1 rounded text-xs font-semibold">
                                            ADD
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Overview Tab */}
                {activeTab === 'overview' && (
                    <div className="p-4 space-y-4">
                        {/* About */}
                        <div className="bg-white border rounded p-4">
                            <h2 className="font-semibold text-lg mb-3">About this place</h2>
                            <div className="space-y-3 text-sm">
                                <div className="flex gap-3">
                                    <svg className="w-5 h-5 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <div>
                                        <p className="font-medium text-gray-900">Address</p>
                                        <p className="text-gray-600 mt-1">{restaurant.address}</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <svg className="w-5 h-5 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <div>
                                        <p className="font-medium text-gray-900">Opening Hours</p>
                                        <p className="text-gray-600 mt-1">{restaurant.hours}</p>
                                        <p className="text-green-600 text-xs mt-1">Open now</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <svg className="w-5 h-5 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <div>
                                        <p className="font-medium text-gray-900">Phone Number</p>
                                        <p className="text-gray-600 mt-1">{restaurant.phone}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* More Info */}
                        <div className="bg-white border rounded p-4">
                            <h2 className="font-semibold text-lg mb-3">More Info</h2>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Cuisines</span>
                                    <span className="text-gray-900 font-medium">{restaurant.cuisine}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Average Cost</span>
                                    <span className="text-gray-900 font-medium">{restaurant.priceRange}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Delivery Time</span>
                                    <span className="text-gray-900 font-medium">{restaurant.deliveryTime}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Payment Methods</span>
                                    <span className="text-gray-900 font-medium">Cash, Cards, UPI</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Reviews Tab */}
                {activeTab === 'reviews' && (
                    <div className="p-4">
                        {/* Rating Summary */}
                        <div className="bg-white border rounded p-4 mb-4">
                            <div className="flex items-center gap-4">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-gray-900">{restaurant.rating}</div>
                                    <div className="text-yellow-500 text-lg">★★★★☆</div>
                                    <div className="text-xs text-gray-600 mt-1">{restaurant.reviews} reviews</div>
                                </div>
                                <div className="flex-1 space-y-1">
                                    {[5, 4, 3, 2, 1].map((star) => (
                                        <div key={star} className="flex items-center gap-2 text-xs">
                                            <span className="w-8 text-gray-700">{star}★</span>
                                            <div className="flex-1 h-2 bg-gray-200 rounded">
                                                <div
                                                    className="h-full bg-green-600 rounded"
                                                    style={{ width: `${star === 5 ? 60 : star === 4 ? 30 : star === 3 ? 8 : 2}%` }}
                                                />
                                            </div>
                                            <span className="w-8 text-gray-600">{star === 5 ? '60%' : star === 4 ? '30%' : star === 3 ? '8%' : '2%'}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Review List */}
                        <div className="space-y-3">
                            {reviews.map((review) => (
                                <div key={review.id} className="bg-white border rounded p-4">
                                    <div className="flex items-start gap-3">
                                        <img
                                            src={review.avatar}
                                            alt={review.name}
                                            className="w-10 h-10 rounded-full"
                                        />
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between">
                                                <h3 className="font-semibold text-sm text-gray-900">{review.name}</h3>
                                                <span className="text-xs text-gray-500">{review.date}</span>
                                            </div>
                                            <div className="flex items-center gap-2 mt-1">
                                                <div className="flex text-yellow-500 text-sm">
                                                    {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                                                </div>
                                                <span className="text-xs text-gray-600">{review.rating}.0</span>
                                            </div>
                                            <p className="text-sm text-gray-700 mt-2">{review.comment}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Write Review Button */}
                        <button className="w-full mt-4 bg-white border border-red-600 text-red-600 py-3 rounded font-medium text-sm">
                            Write a Review
                        </button>
                    </div>
                )}

                {/* Photos Tab */}
                {activeTab === 'photos' && (
                    <div className="p-4">
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                            {menuItems.map((item) => (
                                <div key={item.id} className="aspect-square">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover rounded"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Bottom Cart Bar (Sticky) */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-3 sm:p-4 z-20">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div>
                        <p className="text-xs text-gray-600">3 items added</p>
                        <p className="font-semibold text-gray-900">₹897</p>
                    </div>
                    <button className="bg-red-600 text-white px-6 py-2.5 rounded font-medium text-sm">
                        View Cart
                    </button>
                </div>
            </div>
        </div>
    );
}