import React from "react";

export default function StatsBar() {
    return (
        <section className="mt-10">
            <div className="w-full mx-auto
                bg-[#FC8A06]
                rounded-2xl
                py-8 px-6
                grid grid-cols-2 md:grid-cols-4
                text-white
                divide-x divide-white/30
      ">
                {[
                    { value: "546+", label: "Registered Riders" },
                    { value: "789,900+", label: "Orders Delivered" },
                    { value: "690+", label: "Restaurants Partnered" },
                    { value: "17,457+", label: "Food items" },
                ].map((item, i) => (
                    <div key={i} className="text-center px-4">
                        <h3 className="text-4xl font-bold">{item.value}</h3>
                        <p className="mt-2 text-sm font-medium">{item.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
