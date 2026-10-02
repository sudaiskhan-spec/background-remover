import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 border-t border-gray-200 bg-white">
      {/* Brand Logo */}
      <img src={assets.logo} alt="Company Logo" className="w-32 object-contain" />
      
      {/* Copyright Text */}
      <p className="text-sm text-gray-500 order-3 sm:order-2">
        © Copyright @greatweb | All rights reserved
      </p>
      
      {/* Social Media Links */}
      <div className="flex items-center gap-3 order-2 sm:order-3">
        <img className="w-8 h-8 cursor-pointer hover:opacity-80 transition-opacity" src={assets.facebook_icon} alt="Facebook" />
        <img className="w-8 h-8 cursor-pointer hover:opacity-80 transition-opacity" src={assets.twitter_icon} alt="Twitter" />
        <img className="w-8 h-8 cursor-pointer hover:opacity-80 transition-opacity" src={assets.google_plus_icon} alt="Google Plus" />
      </div>
    </footer>
  )
}

export default Footer
