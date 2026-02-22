# 🚀 Scroll-Driven Hero Section Animation

A production-level, scroll-driven hero section built with React, Vite, GSAP, and Tailwind CSS. Features smooth scroll-based animations, premium UI design, and optimized performance.

![Hero Section Animation](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)
![GSAP](https://img.shields.io/badge/GSAP-3.12.5-88CE02?logo=greensock)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.3-38B2AC?logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-5.2.0-646CFF?logo=vite)

## ✨ Features

- **Premium Loading Screen**: Animated loading with progress bar (0-100%)
- **Interactive Particle Background**: Canvas-based particles that react to mouse movement
- **Custom Animated Cursor**: Smooth cursor with follower effect and hover interactions
- **Smooth Scroll Animations**: Scroll-triggered animations using GSAP ScrollTrigger
- **Premium UI Design**: Dark gradient background with glassmorphism effects
- **Letter-by-Letter Animation**: Staggered headline animations with 3D effects
- **Interactive Stats Cards**: Animated statistics with 3D rotation and icon animations on hover
- **Premium Sports Car**: Detailed SVG car animation with rotating wheels tied to scroll
- **Rotating Wheels**: Car wheels spin realistically as you scroll
- **Subtle Bounce Effect**: Car has natural suspension movement during scroll
- **Progress Indicator**: Visual scroll progress bar at the top
- **Enhanced Hover Effects**: Advanced microinteractions on all interactive elements
- **Gradient Underlines**: Animated underlines on stat cards
- **Fully Responsive**: Mobile-first design that works on all screen sizes
- **Performance Optimized**: Uses transform properties and proper GSAP cleanup

## 🎯 Animation Highlights

### On Page Load
- Headline letters animate with stagger effect (fade + translateY + rotateX)
- Stats cards appear one by one with scale and fade
- Smooth power3.out easing for professional feel

### On Scroll
- Hero section pins during scroll
- Car image moves horizontally with slight rotation
- Scroll progress indicator updates in real-time
- Background parallax effect
- All animations reverse smoothly when scrolling up

## 🔧 Tech Stack

- **React 18.2** - UI library with functional components
- **Vite 5.2** - Lightning-fast build tool
- **GSAP 3.12** - Professional animation library
- **ScrollTrigger** - Scroll-based animation plugin
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Inter Font** - Modern typography

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── LoadingScreen.jsx       # Animated loading screen
│   │   ├── HeroSection.jsx         # Main hero container with pinning
│   │   ├── AnimatedHeadline.jsx    # Staggered letter animations
│   │   ├── Stats.jsx               # Glassmorphism stat cards
│   │   ├── ScrollCar.jsx           # Scroll-driven car animation
│   │   ├── ParticleBackground.jsx  # Interactive particle system
│   │   └── CustomCursor.jsx        # Custom cursor with follower
│   ├── App.jsx                     # Root component
│   ├── main.jsx                    # Entry point
│   └── index.css                   # Global styles + Tailwind
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   The app will automatically open at `http://localhost:3000`

### Production Build

Build the project for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

The optimized build will be in the `dist/` folder.

## 🎨 Customization

### Changing Colors

Edit [tailwind.config.js](tailwind.config.js):

```js
colors: {
  'dark-bg': '#0a0a0f',
  'accent-purple': '#6a11cb',
  'accent-blue': '#2575fc',
}
```

### Adjusting Animation Timing

In [AnimatedHeadline.jsx](src/components/AnimatedHeadline.jsx):

```js
gsap.from(letters, {
  duration: 1,      // Animation duration
  stagger: 0.05,    // Delay between letters
  delay: 0.3,       // Initial delay
  ease: 'power3.out' // Easing function
})
```

In [ScrollCar.jsx](src/components/ScrollCar.jsx):

```js
scrollTrigger: {
  scrub: 1.5,  // Smoothness (higher = slower)
  start: 'top top',
  end: 'bottom top'
}
```

### Modifying Stats

Edit the `statsData` array in [Stats.jsx](src/components/Stats.jsx):

```js
const statsData = [
  { value: '10K+', label: 'Active Users', icon: '👥' },
  // Add more stats...
]
```

## 🎭 Component Breakdown
LoadingScreen.jsx
- Animated loading screen with brand text
- **Progress bar** from 0-100% with smooth animation
- Pulsing logo animation
- Fades out smoothly when loading complete
- Background animated circles

### HeroSection.jsx
- Main container component
- Handles section pinning with ScrollTrigger
- Contains scroll progress indicator
- Manages background parallax effect
- Integrates particle background
- Manages background parallax effect

### AnimatedHeadline.jsx
- **3D rotation effect** on hover
- **Icon rotation** (360°) on hover
- **Animated gradient underline** that expandual letters
- Animates each letter on mount
- Uses stagger for sequential effect
- Includes 3D rotation for depth

### Stats.jsx
- Displays glassmorphism stat cards
- Load animations with stagger
- Interactive hover effects
- Fully responsive grid layout
sports car illustration
- Scroll-driven horizontal movement with rotation
- **Rotating wheels** that spin based on scroll progress
- **Subtle bounce effect** for realistic suspension
- Uses GSAP scrub for smooth scrolling

### ParticleBackground.jsx
- Canvas-based particle system (100 particles)
- **Mouse interaction** - particles move away from cursor
- Gradient colors matching theme
- Optimized with requestAnimationFrame
- Subtle glow effects

### CustomCursor.jsx
- Custom cursor dot with smooth following circle
- **Interactive hover states** on buttons and cards
- Scale animation on hover
- Mix-blend-mode for premium effect
- GSAP-powered smooth movement
- Smooth rotation and scale effects
- Uses GSAP scrub for smooth scrolling

## ⚡ Performance Optimizations

- ✅ Uses `transform` properties only (no top/left)
- ✅ Proper GSAP context and cleanup with `ctx.revert()`
- ✅ `will-change: transform` for GPU acceleration
- ✅ Responsive design with mobile considerations
- ✅ ScrollTrigger scrubbing for smooth animations
- ✅ No unnecessary re-renders
- ✅ Optimized build with Vite

## 📱 Responsive Design

- Desktop (1024px+): Full animations and large text
- Tablet (768px-1023px): Adjusted animation distances
- Mobile (<768px): Reduced motion, optimized layout

## 🐛 Debugging

Uncomment `markers: true` in ScrollTrigger configs to visualize trigger points:

```js
scrollTrigger: {
  markers: true,  // Shows start/end markers
  // ...
}
```

## 📝 Key Concepts

### GSAP Context
All animations use GSAP context for proper cleanup:

```js
useEffect(() => {
  const ctx = gsap.context(() => {
    // Animations here
  }, ref)
  
  return () => ctx.revert() // Cleanup
}, [])
```

### ScrollTrigger Scrubbing
`scrub: true` links animation progress to scroll position:

```js
scrollTrigger: {
  scrub: 1.5,  // Smooth delay
  // scrub: true,  // Instant response
}
```

### Transform Performance
Always use transform properties for best performance:

```js
// ✅ Good (GPU accelerated)
gsap.to(el, { x: 100, scale: 1.2, rotate: 45 })

// ❌ Avoid (triggers layout)
gsap.to(el, { left: '100px', width: '200px' })
```

## 📄 License

This project is open source and available for educational purposes.

## 🤝 Contributing

Feel free to customize and extend this project for your own needs!

## 🎓 Learning Resources

- [GSAP Documentation](https://greensock.com/docs/)
- [ScrollTrigger Docs](https://greensock.com/docs/v3/Plugins/ScrollTrigger)
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/docs)

---

**Built with ❤️ using React, GSAP, and Tailwind CSS**
