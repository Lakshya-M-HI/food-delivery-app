import Image from "next/image";

export default function KnowMoreSection() {
    return (
        <section className="bg-[#FAFAFA] py-16 px-6 border border-gray-300 rounded-xl">
            <div className="max-w-325 mx-auto">

                {/* Header */}
                <div className="flex flex-wrap items-center justify-between mb-10 gap-6">
                    <h2 className="text-3xl font-bold">
                        Know more about us!
                    </h2>

                    {/* Tabs */}
                    <div className="flex gap-3 flex-wrap">
                        <button className="px-5 py-2 rounded-full border border-[#FC8A06] text-[#FC8A06] font-medium">
                            Frequent Questions
                        </button>
                        <button className="px-5 py-2 rounded-full text-gray-600 hover:bg-gray-100">
                            Who we are?
                        </button>
                        <button className="px-5 py-2 rounded-full text-gray-600 hover:bg-gray-100">
                            Partner Program
                        </button>
                        <button className="px-5 py-2 rounded-full text-gray-600 hover:bg-gray-100">
                            Help & Support
                        </button>
                    </div>
                </div>

                {/* Main Card */}
                <div className="bg-white rounded-3xl p-8 shadow-sm grid grid-cols-1 lg:grid-cols-3 gap-10">

                    {/* FAQ List */}
                    <div className="space-y-4">
                        <button className="w-full text-left bg-[#FC8A06] text-white px-6 py-3 rounded-full font-semibold">
                            How does Swadya work?
                        </button>

                        {[
                            "What payment methods are accepted?",
                            "Can I track my order in real-time?",
                            "Are there any special discounts or promotions available?",
                            "Is Swadya available in my area?",
                        ].map((q, i) => (
                            <p
                                key={i}
                                className="px-6 py-2 text-gray-700 cursor-pointer hover:text-black"
                            >
                                {q}
                            </p>
                        ))}
                    </div>

                    {/* Steps */}
                    <div className="lg:col-span-2">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

                            {/* Step Card */}
                            <div className="bg-gray-100 rounded-2xl p-6 text-center hover:shadow-md transition">
                                {/* SVG ICON PLACEHOLDER */}
                                <div className="h-20 flex items-center justify-center mb-4">
                                    {/* <PlaceOrderIcon /> */}
                                    <div className="rounded-full bg-gray-300" />
                                    <Image
                                        src='/assets/order-food.svg'
                                        height={100}
                                        width={100}
                                        alt="Food Icon"
                                        className="object-cover"
                                    />
                                </div>

                                <h3 className="font-semibold text-lg mb-2">
                                    Place an Order!
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Place order through our website or Mobile app
                                </p>
                            </div>

                            <div className="bg-gray-100 rounded-2xl p-6 text-center hover:shadow-md transition">
                                <div className="h-20 flex items-center justify-center mb-4">
                                    {/* <TrackOrderIcon /> */}
                                    <div className="rounded-full bg-gray-300" />
                                    <Image
                                        src='/assets/food.svg'
                                        height={100}
                                        width={100}
                                        alt="Food Icon"
                                        className="object-cover"
                                    />
                                </div>

                                <h3 className="font-semibold text-lg mb-2">
                                    Track Progress
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Track your order status with delivery time
                                </p>
                            </div>

                            <div className="bg-gray-100 rounded-2xl p-6 text-center hover:shadow-md transition">
                                <div className="h-20 flex items-center justify-center mb-4">
                                    {/* <GetOrderIcon /> */}
                                    <div className="rounded-full bg-gray-300" />
                                    <Image
                                        src='/assets/order.svg'
                                        height={100}
                                        width={100}
                                        alt="Food Icon"
                                        className="object-cover"
                                    />
                                </div>

                                <h3 className="font-semibold text-lg mb-2">
                                    Get your Order!
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Receive your order at lightning fast speed!
                                </p>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-center text-gray-600 max-w-2xl mx-auto">
                            Swadya simplifies the food ordering process. Browse through our diverse
                            menu, select your favorite dishes, and proceed to checkout.
                            Your delicious meal will be on its way to your doorstep in no time!
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
