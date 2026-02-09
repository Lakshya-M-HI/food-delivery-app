import React from "react";

export default function Footer() {
    return (
        <footer className="bg-[#F1F1F1] mt-16">
            <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* Brand */}
                <div className="">

                    <div className="my-3">
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
                    </div>



                    {/* App buttons */}
                    {/* <div className="flex gap-3 mb-4">
            <img src="/assets/appstore.png" alt="App Store" className="h-10" />
            <img src="/assets/googleplay.png" alt="Google Play" className="h-10" />
          </div> */}

                    <p className="text-sm text-gray-600">
                        Company # 490039-445, Registered with House of companies.
                    </p>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="font-semibold mb-4">
                        Get Exclusive Deals in your Inbox
                    </h3>

                    <div className="flex bg-white rounded-full  mb-2">
                        <input
                            type="email"
                            placeholder="youremail@gmail.com"
                            className="flex-1 px-5 py-3 outline-none"
                        />
                        <button className="bg-[#FC8A06] text-white px-4 font-semibold rounded-r-full">
                            Subscribe
                        </button>
                    </div>

                    <p className="text-xs text-gray-500 mb-4">
                        we won’t spam, read our <span className="underline">email policy</span>
                    </p>

                    {/* Social icons (placeholders) */}
                    <div className="flex gap-4 text-xl">
                        <span>🌐</span>
                        <span>📸</span>
                        <span>🎵</span>
                        <span>👻</span>
                    </div>
                </div>

                {/* Links */}
                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <h4 className="font-semibold mb-3">Legal Pages</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li>Terms and conditions</li>
                            <li>Privacy</li>
                            <li>Cookies</li>
                            <li>Modern Slavery Statement</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-3">Important Links</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li>Get help</li>
                            <li>Add your restaurant</li>
                            <li>Sign up to deliver</li>
                            <li>Create a business account</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="bg-[#020617] text-gray-300 text-sm">
                <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between gap-4">
                    <p>Order.uk Copyright 2024, All Rights Reserved.</p>

                    <div className="flex gap-6">
                        <span>Privacy Policy</span>
                        <span>Terms</span>
                        <span>Pricing</span>
                        <span>Do not sell or share my personal information</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
