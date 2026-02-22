import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const LoadingScreen = ({ onLoadComplete }) => {
  const loaderRef = useRef(null)
  const progressRef = useRef(null)
  const textRef = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate progress bar
      gsap.to(progressRef.current, {
        scaleX: 1,
        duration: 2.5,
        ease: 'power2.inOut',
        onUpdate: function() {
          setProgress(Math.round(this.progress() * 100))
        },
        onComplete: () => {
          // Fade out loader
          gsap.to(loaderRef.current, {
            opacity: 0,
            duration: 0.5,
            ease: 'power2.inOut',
            onComplete: () => {
              onLoadComplete()
            }
          })
        }
      })

      // Pulse text
      gsap.to(textRef.current, {
        scale: 1.05,
        opacity: 0.8,
        duration: 0.8,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut'
      })
    }, loaderRef)

    return () => ctx.revert()
  }, [onLoadComplete])

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[#0a0a0f] via-[#1a0b2e] to-[#0a0a0f]"
    >
      <div className="text-center">
        {/* Logo/Title */}
        <h1 ref={textRef} className="text-6xl md:text-8xl font-black text-gradient mb-12">
          FUTURE
        </h1>

        {/* Progress Bar Container */}
        <div className="w-64 md:w-96 h-2 bg-white/10 rounded-full overflow-hidden mb-4">
          <div
            ref={progressRef}
            className="h-full bg-gradient-to-r from-accent-blue to-accent-purple"
            style={{ transformOrigin: 'left', scaleX: 0 }}
          />
        </div>

        {/* Progress Percentage */}
        <div className="text-white text-xl font-semibold">
          {progress}%
        </div>
      </div>

      {/* Animated circles in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-purple/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
    </div>
  )
}

export default LoadingScreen
