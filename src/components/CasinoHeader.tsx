import React from 'react'

const CasinoHeader = () => {
  return (
    <header className="sticky top-0 z-50 bg-casino-dark/95 backdrop-blur-sm border-b border-casino-gold/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-casino-gold rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-casino-dark">♠️</span>
            </div>
            <span className="text-2xl font-casino font-bold">
              Golden<span className="text-casino-gold">Casino</span>
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Games', 'Live Casino', 'Promotions', 'VIP', 'Sports'].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-casino-gold transition-colors font-semibold"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <button className="px-6 py-2 bg-casino-gold text-casino-dark font-bold rounded-full hover:bg-yellow-500 transition-colors">
              Login
            </button>
            <button className="px-6 py-2 bg-casino-red text-white font-bold rounded-full hover:bg-red-700 transition-colors">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default CasinoHeader