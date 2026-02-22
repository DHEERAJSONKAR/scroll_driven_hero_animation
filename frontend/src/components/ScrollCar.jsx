import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ScrollCar = () => {
  const carContainerRef = useRef(null)
  const carRef = useRef(null)
  const wheel1Ref = useRef(null)
  const wheel2Ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const car = carRef.current
      const wheel1 = wheel1Ref.current
      const wheel2 = wheel2Ref.current

      // Initial position and animation
      gsap.set(car, {
        x: '-50%',
        rotate: -5,
        scale: 0.8,
      })

      // Scroll-triggered car animation
      gsap.to(car, {
        scrollTrigger: {
          trigger: carContainerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
          // markers: true, // Uncomment for debugging
        },
        x: '0%',
        rotate: 0,
        scale: 1,
        ease: 'none',
      })

      // Rotating wheels based on scroll
      gsap.to([wheel1, wheel2], {
        scrollTrigger: {
          trigger: carContainerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
        },
        rotation: 720, // Two full rotations
        transformOrigin: 'center center',
        ease: 'none',
      })

      // Subtle bounce effect
      gsap.to(car, {
        scrollTrigger: {
          trigger: carContainerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 2,
        },
        y: '+=20',
        yoyo: true,
        repeat: 1,
        ease: 'sine.inOut',
      })
    }, carContainerRef)

    return () => ctx.revert() // Cleanup
  }, [])

  return (
    <div ref={carContainerRef} className="w-full overflow-hidden py-12 md:py-16">
      <div
        ref={carRef}
        className="car-image will-change-transform mx-auto"
        style={{
          maxWidth: '900px',
          width: '90%',
        }}
      >
        {/* Premium SVG Sports Car Illustration */}
        <svg
          viewBox="0 0 900 450"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto drop-shadow-2xl"
        >
          {/* Motion Lines (Speed Effect) */}
          <g className="motion-lines" opacity="0.3">
            <line x1="50" y1="200" x2="120" y2="200" stroke="url(#speedGradient)" strokeWidth="3" strokeLinecap="round" />
            <line x1="30" y1="230" x2="110" y2="230" stroke="url(#speedGradient)" strokeWidth="2" strokeLinecap="round" />
            <line x1="60" y1="260" x2="130" y2="260" stroke="url(#speedGradient)" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="40" y1="290" x2="100" y2="290" stroke="url(#speedGradient)" strokeWidth="2" strokeLinecap="round" />
          </g>

          {/* Ground Shadow */}
          <ellipse cx="450" cy="380" rx="320" ry="25" fill="black" opacity="0.3" filter="url(#shadowBlur)" />

          {/* Car Body Base */}
          <g className="car-body" filter="url(#carShadow)">
            {/* Lower Body - Sporty Base */}
            <path
              d="M 180 280 L 200 270 L 240 265 L 660 265 L 710 275 L 720 285 L 180 285 Z"
              fill="url(#bodyGradient)"
              stroke="url(#strokeGradient)"
              strokeWidth="2"
            />
            
            {/* Main Body - Sleek Profile */}
            <path
              d="M 200 270 L 280 220 L 320 200 L 380 190 L 520 190 L 590 205 L 650 235 L 710 270 L 200 270 Z"
              fill="url(#bodyGradient)"
              stroke="url(#strokeGradient)"
              strokeWidth="2.5"
            />

            {/* Roof Line - Aerodynamic */}
            <path
              d="M 330 200 L 360 185 L 500 185 L 540 195 L 580 210 L 330 210 Z"
              fill="url(#roofGradient)"
              stroke="#1a1a2e"
              strokeWidth="1.5"
            />

            {/* Front Windshield */}
            <path
              d="M 320 200 L 360 185 L 360 210 L 325 210 Z"
              fill="url(#glassGradient)"
              stroke="#2a9df4"
              strokeWidth="2"
              opacity="0.6"
            />

            {/* Side Windows */}
            <path
              d="M 370 190 L 385 185 L 480 185 L 495 190 L 370 205 Z"
              fill="url(#glassGradient)"
              stroke="#2a9df4"
              strokeWidth="1.5"
              opacity="0.6"
            />

            {/* Rear Windshield */}
            <path
              d="M 500 185 L 540 195 L 580 210 L 505 205 Z"
              fill="url(#glassGradient)"
              stroke="#2a9df4"
              strokeWidth="2"
              opacity="0.5"
            />

            {/* Side Body Details */}
            <path
              d="M 280 230 L 650 230"
              stroke="url(#accentLineGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.7"
            />
            
            <path
              d="M 290 245 L 640 245"
              stroke="url(#accentLineGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.5"
            />

            {/* Door Lines */}
            <line x1="430" y1="210" x2="430" y2="265" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
            <line x1="550" y1="210" x2="550" y2="265" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />

            {/* Air Intake (Front) */}
            <path
              d="M 190 275 L 200 272 L 210 275 Z"
              fill="#1a1a2e"
              stroke="#2a9df4"
              strokeWidth="1"
            />

            {/* Spoiler */}
            <path
              d="M 650 235 L 660 230 L 690 232 L 695 237 L 650 235 Z"
              fill="url(#spoilerGradient)"
              stroke="#6a11cb"
              strokeWidth="2"
            />
          </g>

          {/* Headlights & Taillights */}
          <g className="lights">
            {/* Front Headlight - LED Style */}
            <ellipse cx="195" cy="268" rx="12" ry="8" fill="url(#headlightGradient)" filter="url(#glow)" />
            <ellipse cx="195" cy="268" rx="8" ry="5" fill="#ffffff" opacity="0.9" />
            <circle cx="195" cy="268" r="3" fill="#ffffff" />

            {/* Tail Light */}
            <rect x="705" y="268" width="12" height="8" rx="2" fill="url(#tailLightGradient)" filter="url(#glow)" />
            <rect x="707" y="270" width="8" height="4" rx="1" fill="#ff0040" opacity="0.8" />
          </g>

          {/* Wheels - Premium Design with Rotation */}
          <g className="wheels">
            {/* Front Wheel */}
            <g ref={wheel1Ref} style={{ transformOrigin: '260px 285px' }}>
              {/* Tire */}
              <circle cx="260" cy="285" r="45" fill="#1a1a2e" stroke="#000" strokeWidth="3" />
              <circle cx="260" cy="285" r="42" fill="url(#tireGradient)" />
              
              {/* Rim - Sport Design */}
              <circle cx="260" cy="285" r="32" fill="url(#rimGradient)" stroke="#6a11cb" strokeWidth="2" />
              
              {/* Spokes */}
              <line x1="260" y1="253" x2="260" y2="317" stroke="#2a9df4" strokeWidth="3" opacity="0.8" />
              <line x1="228" y1="285" x2="292" y2="285" stroke="#2a9df4" strokeWidth="3" opacity="0.8" />
              <line x1="237" y1="263" x2="283" y2="307" stroke="#2a9df4" strokeWidth="2.5" opacity="0.7" />
              <line x1="283" y1="263" x2="237" y2="307" stroke="#2a9df4" strokeWidth="2.5" opacity="0.7" />
              
              {/* Center Cap */}
              <circle cx="260" cy="285" r="12" fill="url(#centerCapGradient)" stroke="#6a11cb" strokeWidth="2" />
              <circle cx="260" cy="285" r="6" fill="#2a9df4" opacity="0.8" />
              
              {/* Brake Disc */}
              <circle cx="260" cy="285" r="25" fill="none" stroke="#ff6b00" strokeWidth="2" opacity="0.4" />
            </g>

            {/* Rear Wheel */}
            <g ref={wheel2Ref} style={{ transformOrigin: '650px 285px' }}>
              {/* Tire */}
              <circle cx="650" cy="285" r="45" fill="#1a1a2e" stroke="#000" strokeWidth="3" />
              <circle cx="650" cy="285" r="42" fill="url(#tireGradient)" />
              
              {/* Rim - Sport Design */}
              <circle cx="650" cy="285" r="32" fill="url(#rimGradient)" stroke="#6a11cb" strokeWidth="2" />
              
              {/* Spokes */}
              <line x1="650" y1="253" x2="650" y2="317" stroke="#2a9df4" strokeWidth="3" opacity="0.8" />
              <line x1="618" y1="285" x2="682" y2="285" stroke="#2a9df4" strokeWidth="3" opacity="0.8" />
              <line x1="627" y1="263" x2="673" y2="307" stroke="#2a9df4" strokeWidth="2.5" opacity="0.7" />
              <line x1="673" y1="263" x2="627" y2="307" stroke="#2a9df4" strokeWidth="2.5" opacity="0.7" />
              
              {/* Center Cap */}
              <circle cx="650" cy="285" r="12" fill="url(#centerCapGradient)" stroke="#6a11cb" strokeWidth="2" />
              <circle cx="650" cy="285" r="6" fill="#2a9df4" opacity="0.8" />
              
              {/* Brake Disc */}
              <circle cx="650" cy="285" r="25" fill="none" stroke="#ff6b00" strokeWidth="2" opacity="0.4" />
            </g>
          </g>

          {/* Reflections & Details */}
          <g className="reflections" opacity="0.3">
            <ellipse cx="350" cy="210" rx="40" ry="8" fill="white" opacity="0.4" />
            <ellipse cx="480" cy="205" rx="50" ry="10" fill="white" opacity="0.3" />
            <path d="M 300 240 Q 400 235, 500 240" stroke="white" strokeWidth="2" opacity="0.5" fill="none" />
          </g>

          {/* Underglow Effect */}
          <g className="underglow" opacity="0.6">
            <ellipse cx="260" cy="285" rx="55" ry="12" fill="#2a9df4" filter="url(#glow)" opacity="0.5" />
            <ellipse cx="650" cy="285" rx="55" ry="12" fill="#2a9df4" filter="url(#glow)" opacity="0.5" />
            <rect x="300" y="280" width="300" height="8" rx="4" fill="url(#underglowGradient)" filter="url(#glow)" opacity="0.4" />
          </g>

          {/* Definitions - Gradients & Filters */}
          <defs>
            {/* Body Gradients */}
            <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6a11cb" />
              <stop offset="50%" stopColor="#8e44ad" />
              <stop offset="100%" stopColor="#2575fc" />
            </linearGradient>

            <linearGradient id="strokeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2a9df4" />
              <stop offset="100%" stopColor="#6a11cb" />
            </linearGradient>

            <linearGradient id="roofGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4a148c" />
              <stop offset="100%" stopColor="#1a0b2e" />
            </linearGradient>

            <linearGradient id="glassGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(42, 157, 244, 0.4)" />
              <stop offset="100%" stopColor="rgba(42, 157, 244, 0.1)" />
            </linearGradient>

            <linearGradient id="spoilerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6a11cb" />
              <stop offset="100%" stopColor="#2a9df4" />
            </linearGradient>

            {/* Wheel Gradients */}
            <radialGradient id="tireGradient">
              <stop offset="0%" stopColor="#2a2a3e" />
              <stop offset="100%" stopColor="#0a0a0f" />
            </radialGradient>

            <radialGradient id="rimGradient">
              <stop offset="0%" stopColor="#4a4a6e" />
              <stop offset="50%" stopColor="#2a2a4e" />
              <stop offset="100%" stopColor="#1a1a2e" />
            </radialGradient>

            <radialGradient id="centerCapGradient">
              <stop offset="0%" stopColor="#6a11cb" />
              <stop offset="100%" stopColor="#2575fc" />
            </radialGradient>

            {/* Light Gradients */}
            <radialGradient id="headlightGradient">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#e0f7ff" />
              <stop offset="100%" stopColor="#2a9df4" />
            </radialGradient>

            <linearGradient id="tailLightGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff0040" />
              <stop offset="100%" stopColor="#ff4081" />
            </linearGradient>

            {/* Other Gradients */}
            <linearGradient id="accentLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(42, 157, 244, 0.2)" />
              <stop offset="50%" stopColor="rgba(106, 17, 203, 0.8)" />
              <stop offset="100%" stopColor="rgba(42, 157, 244, 0.2)" />
            </linearGradient>

            <linearGradient id="underglowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2a9df4" opacity="0.3" />
              <stop offset="50%" stopColor="#6a11cb" opacity="0.8" />
              <stop offset="100%" stopColor="#2a9df4" opacity="0.3" />
            </linearGradient>

            <linearGradient id="speedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="100%" stopColor="#2a9df4" />
            </linearGradient>

            {/* Filters */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>

            <filter id="carShadow">
              <feDropShadow dx="0" dy="8" stdDeviation="8" floodOpacity="0.5"/>
            </filter>

            <filter id="shadowBlur">
              <feGaussianBlur in="SourceGraphic" stdDeviation="8"/>
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  )
}

export default ScrollCar
