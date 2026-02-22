import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AnimatedHeadline from './AnimatedHeadline'
import Stats from './Stats'
import ScrollCar from './ScrollCar'
import ParticleBackground from './ParticleBackground'

gsap.registerPlugin(ScrollTrigger)

const HeroSection = () => {
  const heroRef = useRef(null)
  const progressBarRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the hero section during scroll
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: 'top top',
        end: '+=100%', // Pin for 100% of viewport height
        pin: true,
        pinSpacing: true,
        // markers: true, // Uncomment for debugging
      })

      // Scroll progress indicator
      gsap.to(progressBarRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
        },
        scaleX: 1,
        transformOrigin: 'left center',
        ease: 'none',
      })

      // Parallax effect on background
      gsap.to(heroRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
        backgroundPosition: '50% 100%',
        ease: 'none',
      })
    }, heroRef)

    return () => ctx.revert() // Cleanup on unmount
  }, [])

  return (
    <>
      {/* Particle Background */}
      <ParticleBackground />

      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-white/10 z-50">
        <div
          ref={progressBarRef}
          className="h-full bg-gradient-to-r from-accent-blue to-accent-purple"
          style={{
            transformOrigin: 'left center',
            scaleX: 0,
          }}
        />
      </div>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0a0a0f 0%, #1a0b2e 50%, #16213e 100%)',
          backgroundSize: '100% 200%',
          backgroundPosition: '50% 0%',
        }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent-purple/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          {/* Animated Headline */}
          <AnimatedHeadline />

          {/* Scroll Car Animation */}
          <ScrollCar />

          {/* Stats Cards */}
          <Stats />
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-white/60">
            <span className="text-sm font-medium tracking-wider">SCROLL</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5L12 19M12 19L19 12M12 19L5 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection
