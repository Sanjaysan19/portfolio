import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import CartoonAvatar from './CartoonAvatar'
import './Hero.css'

const wordReveal = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.3 },
  },
}

const wordChild = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: {
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

const lineReveal = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.6 } },
}

const lineChild = {
  hidden: { opacity: 0, y: 30, clipPath: 'inset(100% 0 0 0)' },
  visible: {
    opacity: 1, y: 0, clipPath: 'inset(0% 0 0 0)',
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

const titleLines = ['Building AI-Driven', 'SaaS Products That', 'Scale']

export default function Hero() {
  const canvasRef = useRef(null)
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -150])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.92])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.1,
    }))

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(108, 99, 255, ${p.opacity})`
        ctx.fill()
      })
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dx = a.x - b.x, dy = a.y - b.y, dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 150) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(108, 99, 255, ${0.06 * (1 - dist / 150)})`
            ctx.lineWidth = 0.5; ctx.stroke()
          }
        })
      })
      animId = requestAnimationFrame(animate)
    }
    animate()
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <canvas ref={canvasRef} className="hero__canvas" />
      <div className="hero__glow hero__glow--1" />
      <div className="hero__glow hero__glow--2" />

      <motion.div className="hero__layout container" style={{ y: parallaxY, opacity, scale }}>
        <div className="hero__content">
          <motion.div
            className="hero__badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="hero__badge-dot" />
            Available for freelance work
          </motion.div>

          <motion.h1
            className="hero__title"
            variants={wordReveal}
            initial="hidden"
            animate="visible"
          >
            {titleLines.map((line, i) => (
              <motion.span key={i} className="hero__title-line" variants={lineChild}>
                {i === 0 ? (
                  <>Building <span className="gradient-text">AI-Driven</span></>
                ) : i === 2 ? (
                  <span className="gradient-text">{line}</span>
                ) : (
                  line
                )}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="hero__subtitle"
            variants={wordReveal}
            initial="hidden"
            animate="visible"
          >
            {'Full-stack developer crafting intelligent web applications with React.js, Node.js, and the MERN stack — turning complex problems into elegant, scalable solutions.'.split(' ').map((word, i) => (
              <motion.span key={i} className="hero__word" variants={wordChild}>
                {word}{' '}
              </motion.span>
            ))}
          </motion.p>

          <motion.div
            className="hero__actions"
            variants={lineReveal}
            initial="hidden"
            animate="visible"
          >
            <motion.a href="/projects" className="hero__btn hero__btn--primary" variants={lineChild}>
              View Projects
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>
            <motion.a href="/contact" className="hero__btn hero__btn--secondary" variants={lineChild}>
              Get In Touch
            </motion.a>
          </motion.div>

          <motion.div
            className="hero__stats"
            variants={lineReveal}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="hero__stat" variants={lineChild}>
              <span className="hero__stat-value gradient-text">15+</span>
              <span className="hero__stat-label">Projects Delivered</span>
            </motion.div>
            <div className="hero__stat-divider" />
            <motion.div className="hero__stat" variants={lineChild}>
              <span className="hero__stat-value gradient-text">MERN</span>
              <span className="hero__stat-label">Stack Expertise</span>
            </motion.div>
            <div className="hero__stat-divider" />
            <motion.div className="hero__stat" variants={lineChild}>
              <span className="hero__stat-value gradient-text">83%</span>
              <span className="hero__stat-label">Academic Score</span>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="hero__avatar-wrapper"
          initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <CartoonAvatar size={360} />
        </motion.div>
      </motion.div>

      <motion.div
        className="hero__scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel" />
        </div>
        <span>Scroll down</span>
      </motion.div>
    </section>
  )
}
