import { useEffect, useRef } from 'react'
import './Avatar.css'

const orbitIcons = [
  { label: 'React', color: '#61dafb', angle: 0 },
  { label: 'Node', color: '#68a063', angle: 60 },
  { label: 'JS', color: '#f7df1e', angle: 120 },
  { label: 'HTML', color: '#e34c26', angle: 180 },
  { label: 'CSS', color: '#264de4', angle: 240 },
  { label: 'Git', color: '#f14e32', angle: 300 },
]

export default function Avatar() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let time = 0

    const size = 300
    canvas.width = size
    canvas.height = size

    const particles = Array.from({ length: 25 }, () => ({
      angle: Math.random() * Math.PI * 2,
      radius: 100 + Math.random() * 40,
      speed: (Math.random() - 0.5) * 0.008,
      r: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.6 + 0.2,
      drift: (Math.random() - 0.5) * 0.3,
    }))

    const animate = () => {
      ctx.clearRect(0, 0, size, size)
      time += 0.01

      particles.forEach((p) => {
        p.angle += p.speed
        p.radius += Math.sin(time * 2 + p.angle) * 0.15

        const cx = size / 2
        const cy = size / 2
        const x = cx + Math.cos(p.angle) * p.radius
        const y = cy + Math.sin(p.angle) * p.radius

        const pulse = Math.sin(time * 3 + p.angle * 2) * 0.3 + 0.7

        ctx.beginPath()
        ctx.arc(x, y, p.r * pulse, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(108, 99, 255, ${p.opacity * pulse})`
        ctx.fill()

        ctx.beginPath()
        ctx.arc(x, y, p.r * 3 * pulse, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(108, 99, 255, ${p.opacity * 0.15 * pulse})`
        ctx.fill()
      })

      animId = requestAnimationFrame(animate)
    }

    animate()
    return () => cancelAnimationFrame(animId)
  }, [])

  return (
    <div className="avatar">
      <canvas ref={canvasRef} className="avatar__particles" />

      <div className="avatar__glow" />

      <div className="avatar__ring">
        <div className="avatar__ring-segment avatar__ring-segment--1" />
        <div className="avatar__ring-segment avatar__ring-segment--2" />
      </div>

      <div className="avatar__core">
        <div className="avatar__image">
          <span className="avatar__initials">SK</span>
          <div className="avatar__scan-line" />
        </div>
        <div className="avatar__status">
          <span className="avatar__status-dot" />
          <span className="avatar__status-text">Active</span>
        </div>
      </div>

      <div className="avatar__orbit">
        {orbitIcons.map((icon, i) => (
          <div
            className="avatar__orbit-icon"
            key={icon.label}
            style={{
              '--angle': `${icon.angle}deg`,
              '--color': icon.color,
              '--delay': `${i * -5}s`,
            }}
          >
            <div className="avatar__orbit-dot" />
            <span className="avatar__orbit-label">{icon.label}</span>
          </div>
        ))}
      </div>

      <div className="avatar__data-stream">
        <div className="avatar__data-line" style={{ '--i': '0' }} />
        <div className="avatar__data-line" style={{ '--i': '1' }} />
        <div className="avatar__data-line" style={{ '--i': '2' }} />
        <div className="avatar__data-line" style={{ '--i': '3' }} />
        <div className="avatar__data-line" style={{ '--i': '4' }} />
      </div>
    </div>
  )
}
