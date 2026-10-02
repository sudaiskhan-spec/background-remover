import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
// Import useClerk, useUser, and UserButton from Clerk
import { useClerk, useUser, UserButton } from '@clerk/react'

const Navbar = () => {
  const { openSignIn } = useClerk()
  // Corrected the spacing typo here
  const { isSignedIn, user } = useUser()

  return (
    <div className='flex items-center justify-between mx-4 py-3 lg:mx-44'>
      {/* Logo */}
      <Link to='/'>
        <img src={assets.logo} alt="Logo" className='w-32 sm:w-40' />
      </Link>

      {/* Conditional Rendering */}
      {isSignedIn ? (
        <div className='flex items-center gap-4'>
          {/* Optional: Greets the user by name if they are signed in */}
          <p className='text-sm text-zinc-600 max-sm:hidden'>Hi, {user?.firstName}</p>
          <UserButton />
        </div>
      ) : (
        <button 
          onClick={() => openSignIn({})} 
          className='flex items-center gap-2 bg-zinc-800 text-white px-4 py-2 sm:px-6 sm:py-2.5 text-sm rounded-full active:scale-95 transition-all duration-300'
        >
          Get started
          <img src={assets.arrow_icon} alt="Arrow" className='w-3' />
        </button>
      )}
    </div>
  )
}

export default Navbar
