import React from 'react'
import {assets} from '../assets/assets'

export const Header = () => {
  return (
    <div className='flex items-center justify-between max-sm:flex-col-reverse gap-4 mt-1 mx-4 py-3 lg:mx-44'>
      {/* ------left side------ */}
      <div>
        <h1 className='text-4xl xl:text-5xl 2xl:text-6xl text-neutral-700 leading-tight font-bold'>
          Remove the <br className='max-md:hidden'/>
          <span className='bg-linear-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent'>
            background
          </span> from <br className='max-md:hidden'/> images for free.
        </h1>
        <p className='my-6 text-[15px] text-gray-500'>
          Lorem is a web app for removing backgrounds from images for free.<br className='max-sm:hidden' />
          For a better experience and quality, buy a subscription <br/>
          and enjoy our best quality.
        </p>
        <div>
          <input type="file" name="" id="upload1" hidden />
          <label className='inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-linear-to-r from-violet-600 to-fuchsia-500 m-auto hover:scale-105 transition-transform' htmlFor="upload1">
            <img width={20} src={assets.upload_btn_icon} alt="Upload" />
            <p className='text-white text-sm'>Upload your Image</p>         
          </label>
        </div>
      </div>
      
      {/* ------right side------ */}
      <div className="w-full max-w-md">
          <img src={assets.header_img} alt='header preview' />
      </div>
    </div>
  )
}
