import React from 'react'
import { assets } from '../assets/assets'

const Steps = () => {
  // Array data to keep the JSX clean, organized, and easily scalable
  const stepsData = [
    {
      icon: assets.upload_icon,
      title: "Upload image",
      description: "Upload your image format like PNG, JPG, or JPEG to get started instantly."
    },
    {
      icon: assets.remove_bg_icon || assets.upload_icon, // Fallback icon if needed
      title: "Remove background",
      description: "Our advanced AI automatically detects and removes the background in one click."
    },
    {
      icon: assets.download_icon || assets.upload_icon, // Fallback icon if needed
      title: "Download image",
      description: "Download your new transparent background image in high resolution quality."
    }
  ];

  return (
    <section className="mx-4 lg:mx-44 py-20 xl:py-40 flex flex-col items-center justify-center">
      {/* Heading Container */}
      <div className="text-center max-w-2xl mb-12 lg:mb-20">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight
         bg-linear-to-r from-gray-900 via-gray-700 to-gray-400
         text-transparent bg-clip-text leading-tight">
          Steps to remove background <br className="hidden sm:block" /> images in seconds
        </h1>
        <p className="text-gray-500 mt-4 text-sm sm:text-base">
          Transform your images effortlessly with our simple three-step processing pipeline.
        </p>
      </div>

      {/* Steps Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {stepsData.map((step, index) => (
          <div 
            key={index} 
            className="flex flex-col items-start gap-4 bg-white border border-gray-100 shadow-md hover:shadow-xl p-8 rounded-2xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer"
          >
            {/* Icon Wrapper with subtle background highlight on hover */}
            <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-blue-50 transition-colors duration-300">
              <img className="w-10 h-10 object-contain" src={step.icon} alt={step.title} />
            </div>
            
            {/* Text Content */}
            <div className="flex flex-col gap-1.5">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Steps
