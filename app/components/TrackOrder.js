'use client'
import { useState } from 'react'

export default function TrackOrder() {
  const [instructions, setInstructions] = useState('')
  const [currentStep, setCurrentStep] = useState(3) // 1-4

  const steps = [
    { id: 1, label: 'Order Confirmed', sublabel: 'Order placed', icon: '✓' },
    { id: 2, label: 'Preparing', sublabel: 'Being cooked', icon: '👨‍🍳' },
    { id: 3, label: 'Out for Delivery', sublabel: 'Rider on the way', icon: '🚴' },
    { id: 4, label: 'Delivered', sublabel: 'At doorstep', icon: '🎉' }
  ]

  return (
    <div className="max-w-4xl mx-auto space-y-6 p-4">

      {/* ORDER STATUS */}
      <div className="bg-gradient-to-br from-white to-orange-50/30 p-6 md:p-8 
                    rounded-3xl shadow-xl border-2 border-orange-100">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 
                       bg-clip-text text-transparent">
            Order Status
          </h3>
          <div className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
            Live Tracking
          </div>
        </div>

        {/* TIMELINE - DESKTOP */}
        <div className="hidden md:flex items-center justify-between gap-4 relative">
          {/* Progress Bar Background */}
          <div className="absolute top-5 left-0 right-0 h-1 bg-gray-200 rounded-full" 
               style={{ zIndex: 0 }} />
          
          {/* Active Progress Bar */}
          <div className="absolute top-5 left-0 h-1 bg-gradient-to-r from-green-500 to-orange-500 
                        rounded-full transition-all duration-1000 ease-out" 
               style={{ 
                 width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
                 zIndex: 1 
               }} />

          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center gap-3 relative z-10 flex-1">
              {/* Icon Circle */}
              <div className={`
                w-12 h-12 rounded-full flex items-center justify-center
                text-xl transition-all duration-500 shadow-lg
                ${step.id < currentStep 
                  ? 'bg-gradient-to-br from-green-400 to-green-600 scale-100' 
                  : step.id === currentStep 
                    ? 'bg-gradient-to-br from-orange-400 to-orange-600 scale-110 animate-pulse' 
                    : 'bg-gray-200 scale-90'}
              `}>
                <span className={step.id <= currentStep ? 'text-white' : 'text-gray-400'}>
                  {step.icon}
                </span>
              </div>

              {/* Label */}
              <div className="text-center">
                <p className={`font-semibold text-sm transition-colors duration-300
                  ${step.id < currentStep 
                    ? 'text-green-700' 
                    : step.id === currentStep 
                      ? 'text-orange-600' 
                      : 'text-gray-400'}`}>
                  {step.label}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {step.sublabel}
                </p>
              </div>

              {/* Checkmark for completed */}
              {step.id < currentStep && (
                <div className="absolute -top-2 -right-2 w-5 h-5 bg-green-600 rounded-full 
                              flex items-center justify-center text-white text-xs animate-scaleIn">
                  ✓
                </div>
              )}
            </div>
          ))}
        </div>

        {/* TIMELINE - MOBILE */}
        <div className="md:hidden space-y-4">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-start gap-4">
              {/* Left Side - Icon & Line */}
              <div className="flex flex-col items-center">
                <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center
                  text-lg transition-all duration-500 shadow-md
                  ${step.id < currentStep 
                    ? 'bg-gradient-to-br from-green-400 to-green-600' 
                    : step.id === currentStep 
                      ? 'bg-gradient-to-br from-orange-400 to-orange-600 animate-pulse' 
                      : 'bg-gray-200'}
                `}>
                  <span className={step.id <= currentStep ? 'text-white' : 'text-gray-400'}>
                    {step.icon}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-0.5 h-12 mt-2 transition-colors duration-500
                    ${step.id < currentStep ? 'bg-green-500' : 'bg-gray-200'}`} />
                )}
              </div>

              {/* Right Side - Info */}
              <div className="flex-1 pt-2">
                <p className={`font-semibold transition-colors duration-300
                  ${step.id < currentStep 
                    ? 'text-green-700' 
                    : step.id === currentStep 
                      ? 'text-orange-600' 
                      : 'text-gray-400'}`}>
                  {step.label}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {step.sublabel}
                </p>
                {step.id < currentStep && (
                  <span className="inline-block mt-2 text-xs text-green-600 font-medium">
                    ✓ Completed
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ETA CARD - Moved up for prominence */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 
                    rounded-3xl p-6 text-center shadow-xl
                    transform hover:scale-105 transition-transform duration-300">
        <p className="text-orange-100 text-sm font-medium mb-2">
          Estimated delivery in
        </p>
        <p className="text-5xl font-black text-white mb-1">
          25
        </p>
        <p className="text-orange-100 text-lg font-semibold">
          minutes
        </p>
        <div className="mt-4 flex items-center justify-center gap-2">
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" 
               style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" 
               style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" 
               style={{ animationDelay: '300ms' }} />
        </div>
      </div>

      {/* DELIVERY PARTNER */}
      <div className="bg-white p-6 rounded-3xl shadow-lg border-2 border-gray-100 
                    hover:shadow-xl transition-shadow duration-300">
        <h4 className="font-bold text-gray-900 mb-5 text-lg">
          🚴 Delivery Partner
        </h4>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {/* Avatar */}
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 
                            flex items-center justify-center text-3xl shadow-lg">
                🚴
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 
                            rounded-full border-2 border-white animate-pulse" />
            </div>

            <div>
              <p className="font-bold text-gray-900 text-lg">
                Rahul Verma
              </p>
              <p className="text-sm text-gray-500">
                Delivery Executive
              </p>
              <div className="flex items-center gap-1 mt-1">
                <span className="text-yellow-500 text-sm">★★★★★</span>
                <span className="text-xs text-gray-500">(4.9)</span>
              </div>
            </div>
          </div>

          <div className="flex gap-3 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none px-5 py-2.5 rounded-full 
                             bg-gradient-to-r from-green-500 to-green-600 
                             text-white text-sm font-semibold 
                             hover:from-green-600 hover:to-green-700
                             shadow-md hover:shadow-lg
                             transition-all duration-300
                             active:scale-95">
              📞 Call
            </button>
            <button className="flex-1 sm:flex-none px-5 py-2.5 rounded-full 
                             bg-gradient-to-r from-blue-500 to-blue-600 
                             text-white text-sm font-semibold 
                             hover:from-blue-600 hover:to-blue-700
                             shadow-md hover:shadow-lg
                             transition-all duration-300
                             active:scale-95">
              💬 Chat
            </button>
          </div>
        </div>
      </div>

      {/* EXTRA INSTRUCTIONS */}
      <div className="bg-white p-6 rounded-3xl shadow-lg border-2 border-gray-100
                    hover:shadow-xl transition-shadow duration-300">
        <h4 className="font-bold text-gray-900 mb-4 text-lg">
          📝 Special Instructions
        </h4>

        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          placeholder="E.g. Less spicy, add extra chutney, no onion, ring the doorbell twice..."
          maxLength={200}
          className="w-full h-28 resize-none
                   border-2 border-gray-200 rounded-2xl
                   px-4 py-3 text-sm
                   outline-none
                   focus:border-orange-400 focus:ring-4 focus:ring-orange-100
                   transition-all duration-300
                   placeholder:text-gray-400"
        />

        <div className="flex items-center justify-between mt-3">
          <p className="text-xs text-gray-500">
            💡 Instructions will be sent to restaurant & delivery partner
          </p>
          <span className="text-xs text-gray-400">
            {instructions.length}/200
          </span>
        </div>

        {instructions && (
          <button className="mt-3 w-full sm:w-auto px-6 py-2.5 
                           bg-gradient-to-r from-orange-500 to-orange-600 
                           text-white font-semibold rounded-xl
                           hover:from-orange-600 hover:to-orange-700
                           shadow-md hover:shadow-lg
                           transition-all duration-300
                           active:scale-95">
            Send Instructions
          </button>
        )}
      </div>

      {/* RESTAURANT SUPPORT */}
      <div className="bg-white p-6 rounded-3xl shadow-lg border-2 border-gray-100
                    hover:shadow-xl transition-shadow duration-300">
        <h4 className="font-bold text-gray-900 mb-5 text-lg">
          🍽️ Restaurant Support
        </h4>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-400 to-red-600 
                          flex items-center justify-center text-2xl shadow-md">
              🍽️
            </div>
            <div>
              <p className="font-bold text-gray-900">
                Spice Villa
              </p>
              <p className="text-sm text-gray-500 mt-1">
                For food quality & preparation queries
              </p>
            </div>
          </div>

          <button className="w-full sm:w-auto px-6 py-2.5 rounded-full 
                           bg-gray-100 text-gray-700 text-sm font-semibold 
                           hover:bg-gray-200 border-2 border-gray-200
                           hover:border-gray-300
                           transition-all duration-300
                           active:scale-95">
            📞 Contact
          </button>
        </div>
      </div>

      {/* HELP & SUPPORT */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 
                    p-6 rounded-3xl border-2 border-blue-100">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-bold text-gray-900 mb-1">
              Need Help?
            </h4>
            <p className="text-sm text-gray-600">
              Contact customer support 24/7
            </p>
          </div>
          <button className="px-5 py-2.5 rounded-full 
                           bg-white text-blue-600 text-sm font-semibold 
                           hover:bg-blue-50 border-2 border-blue-200
                           shadow-sm hover:shadow-md
                           transition-all duration-300
                           active:scale-95">
            💬 Chat
          </button>
        </div>
      </div>

      {/* CANCEL ORDER */}
      <div className="bg-white p-6 rounded-3xl shadow-lg border-2 border-gray-100">
        <button
          disabled
          className="w-full py-3.5 rounded-2xl text-sm font-semibold
                   bg-gray-100 text-gray-400 cursor-not-allowed
                   border-2 border-gray-200 opacity-60">
          Cancel Order (Not available once out for delivery)
        </button>
        <p className="text-xs text-center text-gray-400 mt-3">
          You can cancel your order before it's out for delivery
        </p>
      </div>

    </div>
  )
}