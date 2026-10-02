import React, { useState } from 'react'
import { assets } from '../assets/assets'

const BgSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50)

  const handleSliderChange = (e) => {
    setSliderPosition(Number(e.target.value))
  }

  return (
    <section className="mx-4 lg:mx-44 py-16 flex flex-col items-center justify-center">
      {/* Title */}
      <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight bg-linear-to-r from-gray-900 via-gray-700 to-gray-400 text-transparent bg-clip-text leading-tight mb-12 max-w-3xl">
        Remove Background With High <br /> Quality And Accuracy
      </h1>

      {/* Slider Container */}
      <div className="relative w-full max-w-2xl aspect-4/3 rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-50">
        
        {/* Background Image (Original/With Background) */}
        <img 
          src={assets.image_w_bg} 
          alt="With background" 
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        />

        {/* Foreground Image (Altered/Without Background) */}
        <img 
          src={assets.image_wo_bg || assets.image_w_bg} // Replace with your removed bg image asset
          alt="Without background" 
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none transition-all duration-75"
        />

        {/* Interactive Range Input Control Overlay */}
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={sliderPosition} 
          onChange={handleSliderChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
        />

        {/* Visual Custom Slider Bar Divider */}
        <div 
          style={{ left: `${sliderPosition}%` }} 
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none z-20 flex items-center justify-center"
        >
          {/* Slider Handle Buttons */}
          <div className="w-8 h-8 bg-white text-gray-600 rounded-full shadow-md flex items-center justify-center text-xs font-bold border border-gray-200 select-none">
            ↔
          </div>
        </div>

      </div>
    </section>
  )
}

export default BgSlider
