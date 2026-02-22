import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const statsData = [
  { value: '10K+', label: 'Active Users', icon: '👥' },
  { value: '99.9%', label: 'Uptime', icon: '⚡' },
  { value: '50+', label: 'Countries', icon: '🌍' },
  { value: '#1', label: 'Innovation', icon: '🚀' },
]

const Stats = () => {
  const statsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = statsRef.current.querySelectorAll('.stat-card')
      
      // Initial animation on load
      gsap.from(cards, {
        opacity: 0,
        y: 60,
        scale: 0.8,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
        delay: 1.5,
      })

      // Hover animation setup with rotation
      cards.forEach((card) => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -15,
            scale: 1.08,
            rotateY: 5,
            duration: 0.4,
            ease: 'back.out(1.7)',
          })
          
          // Animate icon
          const icon = card.querySelector('.stat-icon')
          gsap.to(icon, {
            scale: 1.2,
            rotate: 360,
            duration: 0.6,
            ease: 'back.out(2)',
          })
        })

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            rotateY: 0,
            duration: 0.4,
            ease: 'power2.out',
          })
          
          const icon = card.querySelector('.stat-icon')
          gsap.to(icon, {
            scale: 1,
            rotate: 0,
            duration: 0.4,
            ease: 'power2.out',
          })
        })
      })
    }, statsRef)

    return () => ctx.revert() // Cleanup
  }, [])

  return (
    <div
      ref={statsRef}
      className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto px-4"
    >
      {statsData.map((stat, index) => (
        <div
          key={index}
          className="stat-card glass-card rounded-2xl p-6 md:p-8 text-center will-change-transform cursor-pointer group"
        >
          <div className="stat-icon text-4xl md:text-5xl mb-3 transition-transform">
            {stat.icon}
          </div>
          <div className="text-2xl md:text-4xl font-bold text-white mb-2 group-hover:text-gradient transition-all">
            {stat.value}
          </div>
          <div className="text-sm md:text-base text-gray-300 font-medium">
            {stat.label}
          </div>
          <div className="mt-4 h-1 w-0 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full group-hover:w-full transition-all duration-500" />
        </div>
      ))}
    </div>
  )
}

export default Stats
