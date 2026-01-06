import React from 'react'
import CasinoHeader from './CasinoHeader'
import GameLobby from './GameLobby'
import LiveCasino from './LiveCasino'
import Promotions from './Promotions'
import CasinoFooter from './CasinoFooter'

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-casino-dark via-gray-900 to-black text-white">
      <CasinoHeader />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <h1 className="text-5xl font-casino font-bold mb-4">
            Welcome to <span className="text-casino-gold">Golden</span> Casino
          </h1>
          <p className="text-xl text-gray-300">
            Experience premium gaming with exclusive bonuses!
          </p>
        </section>

        {/* Promotions Banner */}
        <div className="bg-gradient-to-r from-casino-red to-casino-purple p-4 rounded-xl mb-8 text-center glow-effect">
          <h2 className="text-2xl font-bold">
            🎰 100% Welcome Bonus up to $1000! 🎰
          </h2>
        </div>

        {/* Game Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <GameLobby />
          <LiveCasino />
          <Promotions />
        </div>
      </main>

      <CasinoFooter />
    </div>
  )
}

export default App