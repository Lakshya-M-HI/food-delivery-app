export default function TrackOrder() {
  return (
    <div className="max-w-xl mx-auto space-y-6">

      {/* ORDER STATUS */}
      <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-8">
          Order Status
        </h3>

        {/* TIMELINE */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* STEP 1 */}
          <div className="flex items-center gap-3 group">
            <div className="w-4 h-4 rounded-full bg-green-600" />
            <div>
              <p className="font-medium text-green-700">
                Order Confirmed
              </p>
              <p className="text-xs text-gray-500">
                Order placed
              </p>
            </div>
          </div>

          {/* ARROW */}
          <span className="text-gray-400 text-xl md:block animate-pulse">➜</span>

          {/* STEP 2 */}
          <div className="flex items-center gap-3 group">
            <div className="w-4 h-4 rounded-full bg-green-600" />
            <div>
              <p className="font-medium text-green-700">
                Preparing
              </p>
              <p className="text-xs text-gray-500">
                Being cooked
              </p>
            </div>
          </div>

          {/* ARROW */}
          <span className="text-gray-400 text-xl md:block animate-pulse">➜</span>

          {/* STEP 3 – CURRENT */}
          <div className="flex flex-col justify-center items-center p-3 px-4 rounded-xl bg-gray-300 border border-gray-300 text-center">
            <div className="w-4 h-4 rounded-full bg-[#FC8A06]" />
            <div>
              <p className="font-medium text-[#FC8A06]">
                Out for Delivery
              </p>
              <p className="text-xs text-gray-600">
                Rider on the way
              </p>
            </div>
          </div>

          {/* ARROW */}
          <span className="text-gray-400 text-xl md:block animate-pulse">➜</span>

          {/* STEP 4 – UPCOMING */}
          <div className="flex items-center gap-3 opacity-70">
            <div className="w-4 h-4 rounded-full bg-gray-300" />
            <div>
              <p className="font-medium text-gray-500">
                Delivered
              </p>
              <p className="text-xs text-gray-400">
                At doorstep
              </p>
            </div>
          </div>

        </div>
      </div>


      {/* DELIVERY PARTNER */}
      <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-200">
        <h4 className="font-semibold text-gray-900 mb-4">
          Delivery Partner
        </h4>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
              🚴
            </div>

            <div>
              <p className="font-medium text-gray-900">
                Rahul Verma
              </p>
              <p className="text-sm text-gray-500">
                Delivery Executive
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <button className="px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium hover:bg-green-200">
              Call
            </button>
            <button className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium hover:bg-blue-200">
              Message
            </button>
          </div>
        </div>
      </div>

      {/* MESSAGE / EXTRA INSTRUCTIONS */}
      <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-200">
        <h4 className="font-semibold text-gray-900 mb-3">
          Extra Instructions
        </h4>

        <textarea
          placeholder="E.g. Less spicy, add extra chutney, no onion…"
          className="
            w-full
            h-24
            resize-none
            border border-gray-300
            rounded-xl
            px-4 py-3
            text-sm
            outline-none
            focus:border-[#FC8A06]
          "
        />

        <p className="text-xs text-gray-500 mt-2">
          Instructions will be sent to restaurant & delivery partner
        </p>
      </div>

      {/* RESTAURANT / MANAGER CONTACT */}
      <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-200">
        <h4 className="font-semibold text-gray-900 mb-4">
          Restaurant Support
        </h4>

        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-gray-900">
              Spice Villa – Manager
            </p>
            <p className="text-sm text-gray-500">
              For food quality & preparation queries
            </p>
          </div>

          <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200">
            Contact
          </button>
        </div>
      </div>

      {/* ETA */}
      <div className="bg-gray-100 rounded-2xl p-5 text-center">
        <p className="text-sm text-gray-600">
          Estimated delivery in
        </p>
        <p className="text-xl font-semibold text-gray-900">
          25 minutes
        </p>
      </div>

      {/* CANCEL ORDER */}
      <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-200">
        <button
          disabled
          className="
            w-full
            py-3
            rounded-xl
            text-sm
            font-semibold
            bg-gray-200
            text-gray-400
            cursor-not-allowed
          "
        >
          Cancel Order (Not available once out for delivery)
        </button>
      </div>

    </div>
  )
}
