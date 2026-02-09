export default function CartItems() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">

      {/* Cart Items */}
      {[1, 2].map((_, i) => (
        <div
          key={i}
          className="
            flex items-center justify-between
            bg-white
            p-5
            rounded-2xl
            border border-gray-200
            shadow-md
          "
        >
          {/* Item Info */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gray-200 rounded-xl" />

            <div>
              <h3 className="font-semibold text-lg">
                Paneer Butter Masala
              </h3>
              <p className="text-sm text-gray-500">
                ₹240
              </p>
            </div>
          </div>

          {/* Quantity */}
          <div className="flex items-center gap-3">
            <button
              className="
                w-8 h-8
                flex items-center justify-center
                bg-gray-100
                rounded-full
                text-lg
                hover:bg-gray-200
                active:scale-95 px-2
              "
            >
              −
            </button>

            <span className="font-medium">
              1
            </span>

            <button
              className="
                w-8 h-8
                flex items-center justify-center
                bg-gray-100
                rounded-full
                text-lg
                hover:bg-gray-200
                active:scale-95 px-2
              "
            >
              +
            </button>
          </div>
        </div>
      ))}

      {/* Summary */}
      <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm space-y-4">
        <div className="flex justify-between text-base font-semibold">
          <span>Total</span>
          <span>₹480</span>
        </div>

        <button
          className="  w-full   bg-[#FC8A06]  text-white py-3 rounded-xl font-semibold text-base transition hover:bg-[#e07b05] active:scale-95
          "
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  )
}
