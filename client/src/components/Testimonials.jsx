import React from 'react'
import { testimonialsData } from '../assets/assets'

const Testimonials = () => {
  return (
    <div className='max-w-4xl mx-auto px-4 py-12'>
      {/* Title section structured to sit cleanly above the grid */}
      <div className="mb-10 text-center">
  <h1 className="py-2 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight bg-linear-to-r from-gray-900 via-gray-700 to-gray-400 text-transparent bg-clip-text leading-tight">
    Customer Testimonials
  </h1>
  <p className="text-gray-500 mt-2 text-sm md:text-base">What our clients say about their experiences.</p>
</div>

      
      {/* Testimonials Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {testimonialsData.map((item, index) => (
          <div 
            key={index} 
            className="flex flex-col justify-between p-6 bg-white border border-gray-100 rounded-2xl shadow-xs hover:shadow-md transition-shadow duration-300 relative group"
          >
            {/* Large background decorative quote mark */}
            <span className="absolute top-2 right-4 text-6xl text-gray-100 font-serif pointer-events-none select-none group-hover:text-gray-200 transition-colors">
              &ldquo;
            </span>

            {/* Testimonial Text */}
            <p className="text-gray-600 italic leading-relaxed text-sm md:text-base mb-6 z-10">
              "{item.text}"
            </p>

            {/* Author Profile Section */}
            <div className="flex items-center gap-4 border-t border-gray-50 pt-4 mt-auto">
              <img 
                src={item.image} 
                alt={item.author} 
                className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-100"
              />
              <div>
                <h4 className="font-semibold text-gray-900 text-sm md:text-base">
                  {item.author}
                </h4>
                <p className="text-xs md:text-sm text-gray-500 font-medium">
                  {item.jobTitle}
                </p>
              </div>
            </div>
          </div>
        ))}    
      </div>
    </div>
  )
}

export default Testimonials
