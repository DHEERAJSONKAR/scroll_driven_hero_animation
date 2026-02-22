import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const CustomCursor = () => {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out',
      })

      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: 'power2.out',
      })
    }

    const handleMouseEnter = () => {
      gsap.to([cursor, follower], {
        scale: 1.5,
        duration: 0.3,
      })
    }

    const handleMouseLeave = () => {
      gsap.to([cursor, follower], {
        scale: 1,
        duration: 0.3,
      })
    }

    window.addEventListener('mousemove', moveCursor)

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, .stat-card, .feature-card')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="custom-cursor fixed w-3 h-3 bg-accent-blue rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <div
        ref={followerRef}
        className="custom-cursor-follower fixed w-10 h-10 border-2 border-accent-purple rounded-full pointer-events-none z-[9998] mix-blend-difference"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </>
  )
}

export default CustomCursor
