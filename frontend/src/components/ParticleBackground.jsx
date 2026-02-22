import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const ParticleBackground = () => {
  const canvasRef = useRef(null)
  const particlesRef = useRef([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    
    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)

    // Particle class
    class Particle {
      constructor() {
        this.reset()
        this.y = Math.random() * canvas.height
        this.opacity = Math.random() * 0.5 + 0.2
      }

      reset() {
        this.x = Math.random() * canvas.width
        this.y = -10
        this.speed = Math.random() * 0.5 + 0.2
        this.size = Math.random() * 2 + 1
        this.opacity = Math.random() * 0.5 + 0.2
      }

      update() {
        this.y += this.speed
        
        // Mouse interaction
        const dx = mouseRef.current.x - this.x
        const dy = mouseRef.current.y - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 100) {
          const force = (100 - distance) / 100
          this.x -= (dx / distance) * force * 2
          this.y -= (dy / distance) * force * 2
        }

        if (this.y > canvas.height) {
          this.reset()
        }
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(106, 17, 203, ${this.opacity})`
        ctx.fill()
        
        // Glow effect
        ctx.shadowBlur = 10
        ctx.shadowColor = 'rgba(37, 117, 252, 0.5)'
      }
    }

    // Create particles
    const particleCount = 100
    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push(new Particle())
    }

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 15, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach(particle => {
        particle.update()
        particle.draw()
      })

      rafRef.current = requestAnimationFrame(animate)
    }
    animate()

    // Mouse move handler
    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('resize', setCanvasSize)
      window.removeEventListener('mousemove', handleMouseMove)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  )
}

export default ParticleBackground
