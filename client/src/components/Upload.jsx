import React from 'react'
import { assets } from '../assets/assets'

const Upload = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-[50vh] px-4 pb-16 text-center select-none'>
      
      {/* Header Section */}
      <div className="max-w-2xl mx-auto mb-10">
        <h1 className="py-2 text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl bg-linear-to-r from-gray-900 via-gray-700 to-gray-400 text-transparent bg-clip-text leading-tight">
          See the magic. Try Now
        </h1>
        <p className="mt-2 text-sm text-gray-500 md:text-base">
          Upload any photo to instantly transform your images.
        </p>
      </div>

      {/* Upload Button Trigger */}
      <div className='flex justify-center mb-16'>
        <input type="file" name="image-upload" id="upload2" hidden accept="image/*" />
        
        <label 
          htmlFor="upload2" 
          className='inline-flex items-center gap-3 px-8 py-4 rounded-full cursor-pointer bg-linear-to-r from-violet-600 to-fuchsia-500 shadow-lg shadow-violet-500/20 hover:shadow-xl hover:shadow-fuchsia-500/30 hover:scale-105 active:scale-95 transition-all duration-300'
        >
          <img className="w-5 h-5 brightness-0 invert" src={assets.upload_btn_icon} alt="Upload Icon" />
          <p className='text-sm font-medium text-white tracking-wide'>Upload your Image</p>         
        </label>
      </div>

    </div>
  )
}

export default Upload
