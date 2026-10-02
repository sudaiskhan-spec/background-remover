import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './index.css'

const App = () => {
  return (
    <div className='min-h-screen bg-slate-50 text-slate-900 antialiased flex flex-col'>
      {/* Universal Navigation */}
      <Navbar />
      
      {/* Main Content Area */}
      <main className='grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full'>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* Redirect /home to canonical root route */}
          <Route path='/home' element={<Navigate to='/' replace />} />
          <Route path='/result' element={<Result />} />
          <Route path='/buy' element={<BuyCredit />} />
          {/* Optional: Fallback for unmatched routes */}
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </main>

      {/* Universal Footer */}
      <Footer />
    </div>
  )
}

export default App