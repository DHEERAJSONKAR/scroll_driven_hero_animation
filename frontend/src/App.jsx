import React, { useState } from 'react'
import HeroSection from './components/HeroSection'
import CustomCursor from './components/CustomCursor'
import LoadingScreen from './components/LoadingScreen'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="App">
      {isLoading && <LoadingScreen onLoadComplete={() => setIsLoading(false)} />}
      
      {!isLoading && (
        <>
          <CustomCursor />
          <HeroSection />
          
          {/* Extra content for scrolling */}
          <section className="min-h-screen bg-gradient-to-b from-[#16213e] to-[#0a0a0f] flex items-center justify-center">
            <div className="text-center px-4">
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Experience Innovation
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Scroll-driven animations create immersive experiences that engage users
                and bring your vision to life.
              </p>
            </div>
          </section>

          <section className="min-h-screen bg-gradient-to-b from-[#0a0a0f] to-[#1a0b2e] flex items-center justify-center">
            <div className="text-center px-4">
              <h2 className="text-5xl md:text-7xl font-bold text-gradient mb-6">
                Built with GSAP
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Professional-grade animations powered by the industry-leading
                animation library.
              </p>
            </div>
          </section>
        </>
      )}
    </div>
  )
}

export default App
