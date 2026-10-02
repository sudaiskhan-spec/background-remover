import React from 'react'
import { assets, plans } from '../assets/assets' // Assumed location of your assets and plans array

const BuyCredit = () => {
  return (
    <div className='min-h-[80vh] text-center pt-14 pb-16 px-4 select-none'>
      
      {/* Section Subheading Badge */}
      <button className='px-6 py-2 text-xs font-semibold uppercase tracking-wider text-violet-600 bg-violet-50 rounded-full border border-violet-200 pointer-events-none mb-4 shadow-xs'>
        Our Plans
      </button>
      
      {/* Primary Section Header */}
      <h1 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl mb-12 max-w-xl mx-auto leading-tight bg-linear-to-r from-gray-900 to-gray-600 bg-clip-text'>
        Choose the plan that's right for you
      </h1>
      
      {/* Pricing Cards Grid */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-2'>
        {plans.map((item, index) => (
          <div 
            key={item.id || index}
            className='flex flex-col items-center justify-between p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl hover:scale-103 transition-all duration-300 relative group overflow-hidden'
          >
            {/* Soft decorative background highlight on hover */}
            <div className='absolute inset-0 bg-linear-to-b from-violet-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none' />

            <div className='flex flex-col items-center w-full z-10'>
              {/* Plan Icon wrapper */}
              <div className='w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center border border-gray-100 mb-5 group-hover:bg-violet-50 group-hover:border-violet-100 transition-colors shadow-xs'>
                <img className='w-7 h-7 object-contain' src={assets.logo_icon} alt="Plan tier icon" />
              </div>
              
              {/* Plan ID Name */}
              <h3 className='text-xl font-bold text-gray-800 capitalize mb-2'>
                {item.id}
              </h3>
              
              {/* Description */}
              <p className='text-sm text-gray-500 line-clamp-2 min-h-40px mb-6 px-2'>
                {item.desc}
              </p>
              
              {/* Price Tier */}
              <p className='text-gray-900 font-medium mb-6'>
                <span className='text-4xl font-extrabold tracking-tight'>${item.price}</span>
                <span className='text-gray-400 text-sm ml-1'>/ credits pack</span>
              </p>
            </div>

            {/* Action Purchase Button */}
            <button className='w-full py-3.5 px-6 font-medium text-sm text-white bg-gray-900 rounded-xl group-hover:bg-linear-to-r group-hover:from-violet-600 group-hover:to-fuchsia-500 shadow-xs hover:shadow-md active:scale-98 transition-all duration-200 z-10'>
              Get Started
            </button>
          </div>
        ))}
      </div>

    </div>
  )
}

export default BuyCredit
