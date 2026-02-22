import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const AnimatedHeadline = () => {
  const headlineRef = useRef(null)
  const line1Ref = useRef(null)
  const line2Ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split text into individual letters with spans
      const line1 = line1Ref.current
      const line2 = line2Ref.current

      // Animate first line letters
      const line1Letters = line1.querySelectorAll('.letter')
      gsap.from(line1Letters, {
        opacity: 0,
        y: 100,
        rotateX: -90,
        stagger: 0.05,
        duration: 1,
        ease: 'power3.out',
        delay: 0.3,
      })

      // Animate second line letters
      const line2Letters = line2.querySelectorAll('.letter')
      gsap.from(line2Letters, {
        opacity: 0,
        y: 100,
        rotateX: -90,
        stagger: 0.05,
        duration: 1,
        ease: 'power3.out',
        delay: 0.8,
      })
    }, headlineRef)

    return () => ctx.revert() // Cleanup
  }, [])

  const renderLetters = (text) => {
    return text.split('').map((char, index) => (
      <span
        key={index}
        className="letter inline-block will-change-transform"
        style={{ display: 'inline-block' }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))
  }

  return (
    <div ref={headlineRef} className="text-center mb-12 md:mb-16">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight">
        <div ref={line1Ref} className="mb-4 md:mb-6 text-white" style={{ letterSpacing: '0.2em' }}>
          {renderLetters('WELCOME')}
        </div>
        <div ref={line2Ref} className="text-gradient text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl" style={{ letterSpacing: '0.15em' }}>
          {renderLetters('TO THE FUTURE')}
        </div>
      </h1>
    </div>
  )
}

export default AnimatedHeadline
