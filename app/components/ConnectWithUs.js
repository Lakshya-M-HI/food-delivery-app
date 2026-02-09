import Image from "next/image";

export default function ConnectSection() {
    return (
        <section className="py-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* Partner with us */}
                <div className="relative h-100 rounded-2xl overflow-hidden group">
                    <Image
                        src="/assets/connectBussiness.jpg"
                        alt="Partner with us"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Gradient overlay – dark at bottom, transparent at top */}
                    <div className="absolute inset-0 bg-linear-to-t
  from-black/80 via-black/40 to-transparent" />

                    {/* Top label */}
                    <div className="absolute top-0 left-0 bg-white text-black px-6 py-3 rounded-br-3xl font-semibold">
                        Earn more with lower fees
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-10 left-10 text-white max-w-sm">
                        <p className="text-[#FC8A06] mb-1">Signup as a business</p>
                        <h2 className="text-4xl font-bold leading-tight mb-5">
                            Partner with us
                        </h2>

                        <button className="bg-[#FC8A06] px-8 py-3 rounded-full font-semibold hover:bg-[#e07b05] transition">
                            Get Started
                        </button>
                    </div>
                </div>

                {/* Ride with us */}
                <div className="relative h-100 rounded-2xl overflow-hidden group">
                    <Image
                        src="/assets/connect_deliveryBoy.jpg"
                        alt="Ride with us"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                     {/* Gradient overlay – dark at bottom, transparent at top */}
                    <div className="absolute inset-0 bg-linear-to-t
  from-black/80 via-black/40 to-transparent" />

                    {/* Top label */}
                    <div className="absolute top-0 left-0 bg-white text-black px-6 py-3 rounded-br-3xl font-semibold">
                        Avail exclusive perks
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-10 left-10 text-white max-w-sm">
                        <p className="text-[#FC8A06] mb-1">Signup as a rider</p>
                        <h2 className="text-4xl font-bold leading-tight mb-5">
                            Ride with us
                        </h2>

                        <button className="bg-[#FC8A06] px-8 py-3 rounded-full font-semibold hover:bg-[#e07b05] transition">
                            Get Started
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}
