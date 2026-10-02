import React from 'react'
import { assets } from '../assets/assets'

const Result = () => {
  return (
    <div className='mx-4 my-6 lg:mx-24 xl:mx-44 min-h-[75vh] flex flex-col justify-center items-center gap-10'>
      
      {/* Images Grid Container */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl'>
        
        {/* Left Side - Original Image */}
        <div className='flex flex-col gap-2'>
          <p className='text-sm font-semibold text-gray-600 tracking-wide uppercase'>
            Original
          </p>
          <div className='overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 aspect-square flex items-center justify-center shadow-sm'>
            <img 
              src={assets.image_w_bg} 
              alt="Original visual with background" 
              className='w-full h-full object-cover hover:scale-102 transition-transform duration-300'
            />
          </div>
        </div>
        
        {/* Right Side - Background Removed */}
        <div className='flex flex-col gap-2'>
          <p className='text-sm font-semibold text-violet-600 tracking-wide uppercase'>
            Background Removed
          </p>
          
          {/* Subtle checkered pattern container with clean automatic centering flexboxes */}
          <div className='overflow-hidden rounded-2xl border border-dashed border-violet-300 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [bg-size:16px_16px] bg-slate-50 aspect-square flex items-center justify-center shadow-sm'>
            
            {/* The spinner automatically snaps to the center due to the flex wrapper above */}
            <div className='border-4 border-violet-600 rounded-full h-12 w-12 border-t-transparent animate-spin'></div>

            {/* <img 
              src={assets.image_wo_bg} 
              alt="Visual with background removed" 
              className='w-full h-full object-cover hover:scale-102 transition-transform duration-300'
            /> */}
            
          </div>
        </div>

      </div>

      {/* Action Buttons Row */}
      <div className='flex flex-wrap items-center justify-center gap-4 w-full mt-4'>
        <button className='px-6 py-3 text-sm font-medium text-violet-600 bg-violet-50 rounded-full hover:bg-violet-100 transition-colors border border-violet-200 active:scale-98'>
          Try another image
        </button>
        <button className='px-8 py-3 text-sm font-medium text-white bg-linear-to-r from-violet-600 to-fuchsia-500 rounded-full shadow-md shadow-violet-500/20 hover:shadow-lg hover:shadow-fuchsia-500/30 hover:scale-102 active:scale-98 transition-all duration-200'>
          Download Image
        </button>
      </div>

    </div>
  )
}

export default Result
