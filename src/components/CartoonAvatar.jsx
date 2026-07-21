import { useRef, useState, useEffect } from 'react'
import './CartoonAvatar.css'

export default function CartoonAvatar({ size = 360 }) {
  const containerRef = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (e) => {
      const rect = containerRef.current?.getBoundingClientRect()
      if (!rect) return
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      setTilt({
        x: ((e.clientY - cy) / (rect.height / 2)) * -18,
        y: ((e.clientX - cx) / (rect.width / 2)) * 18,
      })
    }
    const handleLeave = () => setTilt({ x: 0, y: 0 })
    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseleave', handleLeave)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="avatar3d"
      style={{ width: size, height: size + 40, perspective: '900px' }}
    >
      <div className="avatar3d__glow" />

      {/* Floating ring */}
      <div
        className="avatar3d__ring"
        style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      />

      <div
        className="avatar3d__scene"
        style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      >
        {/* Floor shadow */}
        <div
          className="avatar3d__shadow"
          style={{ transform: `translateX(${tilt.y * 2}px) scaleX(${1 - Math.abs(tilt.y) * 0.012})` }}
        />

        <svg viewBox="0 0 400 480" className="avatar3d__svg" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="a3d-skin" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f5cc9a" />
              <stop offset="100%" stopColor="#e0a06a" />
            </linearGradient>
            <linearGradient id="a3d-hoodie" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#6c63ff" />
              <stop offset="100%" stopColor="#4338ca" />
            </linearGradient>
            <linearGradient id="a3d-hair" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e1e36" />
              <stop offset="100%" stopColor="#0c0c1e" />
            </linearGradient>
            <linearGradient id="a3d-screen" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#181830" />
              <stop offset="100%" stopColor="#0e0e22" />
            </linearGradient>
            <linearGradient id="a3d-pants" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2a2a44" />
              <stop offset="100%" stopColor="#1a1a30" />
            </linearGradient>
            <linearGradient id="a3d-shoe" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#444466" />
              <stop offset="100%" stopColor="#2a2a40" />
            </linearGradient>
            <filter id="a3d-glow">
              <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#6c63ff" floodOpacity="0.4"/>
            </filter>
            <filter id="a3d-shadow">
              <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#000" floodOpacity="0.2"/>
            </filter>
          </defs>

          {/* === BODY === */}
          <g filter="url(#a3d-shadow)">
            {/* Torso — hoodie */}
            <path d="M140 330 Q140 300 165 290 L185 284 Q200 280 215 284 L235 290 Q260 300 260 330 L262 420 L138 420 Z" fill="url(#a3d-hoodie)" />
            {/* Hoodie pocket */}
            <rect x="168" y="350" width="64" height="28" rx="8" fill="none" stroke="#5550cc" strokeWidth="1.5" opacity="0.5" />
            {/* Hoodie strings */}
            <line x1="192" y1="290" x2="192" y2="320" stroke="#8880ff" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="208" y1="290" x2="208" y2="320" stroke="#8880ff" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="192" cy="322" r="2.5" fill="#8880ff" />
            <circle cx="208" cy="322" r="2.5" fill="#8880ff" />
            {/* Hoodie V-neck */}
            <path d="M185 284 L200 300 L215 284" fill="none" stroke="#5550cc" strokeWidth="1.5" />
          </g>

          {/* === LEGS === */}
          <g>
            <rect x="155" y="415" width="38" height="50" rx="8" fill="url(#a3d-pants)" />
            <rect x="207" y="415" width="38" height="50" rx="8" fill="url(#a3d-pants)" />
            {/* Shoes */}
            <ellipse cx="170" cy="470" rx="24" ry="10" fill="url(#a3d-shoe)" />
            <ellipse cx="230" cy="470" rx="24" ry="10" fill="url(#a3d-shoe)" />
            <ellipse cx="170" cy="469" rx="20" ry="5" fill="#555577" opacity="0.4" />
            <ellipse cx="230" cy="469" rx="20" ry="5" fill="#555577" opacity="0.4" />
          </g>

          {/* === NECK === */}
          <rect x="187" y="268" width="26" height="22" rx="8" fill="url(#a3d-skin)" />

          {/* === HEAD === */}
          <g filter="url(#a3d-shadow)">
            <ellipse cx="200" cy="200" rx="68" ry="76" fill="url(#a3d-skin)" />
          </g>

          {/* === HAIR === */}
          <g>
            <path d="M132 180 Q132 118 200 108 Q268 118 268 180 L268 165 Q268 105 200 92 Q132 105 132 165 Z" fill="url(#a3d-hair)" />
            {/* Messy top spikes */}
            <path d="M160 112 Q152 85 168 96 Q160 74 180 90 Q175 68 198 86" fill="url(#a3d-hair)" />
            <path d="M240 112 Q248 85 232 96 Q240 74 220 90 Q225 68 202 86" fill="url(#a3d-hair)" />
            {/* Side hair */}
            <path d="M132 175 Q128 155 135 140" fill="none" stroke="#1e1e36" strokeWidth="6" strokeLinecap="round" />
            <path d="M268 175 Q272 155 265 140" fill="none" stroke="#1e1e36" strokeWidth="6" strokeLinecap="round" />
          </g>

          {/* === EARS === */}
          <ellipse cx="132" cy="205" rx="8" ry="12" fill="url(#a3d-skin)" />
          <ellipse cx="268" cy="205" rx="8" ry="12" fill="url(#a3d-skin)" />
          {/* Earring left */}
          <circle cx="132" cy="218" r="3" fill="#f7df1e" opacity="0.8" />

          {/* === EYES === */}
          <g className="avatar3d__eyes">
            {/* Left eye */}
            <ellipse cx="175" cy="205" rx="16" ry="17" fill="white" />
            <ellipse cx="177" cy="206" rx="10" ry="11" fill="#1a1a2e" />
            <circle cx="180" cy="202" r="4" fill="white" />
            <circle cx="174" cy="210" r="2" fill="white" opacity="0.5" />
            {/* Right eye */}
            <ellipse cx="225" cy="205" rx="16" ry="17" fill="white" />
            <ellipse cx="227" cy="206" rx="10" ry="11" fill="#1a1a2e" />
            <circle cx="230" cy="202" r="4" fill="white" />
            <circle cx="224" cy="210" r="2" fill="white" opacity="0.5" />
          </g>

          {/* === EYEBROWS === */}
          <g>
            <path d="M156 185 Q170 178 190 183" stroke="#1e1e36" strokeWidth="3.5" strokeLinecap="round" fill="none" />
            <path d="M210 183 Q230 178 244 185" stroke="#1e1e36" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          </g>

          {/* === NOSE === */}
          <path d="M196 218 Q200 228 204 218" stroke="#d4a06a" strokeWidth="2" strokeLinecap="round" fill="none" />

          {/* === MOUTH — smug grin === */}
          <path d="M178 238 Q190 248 200 248 Q210 248 222 238" stroke="#c47a4a" strokeWidth="2.5" strokeLinecap="round" fill="none" className="avatar3d__mouth" />
          {/* Teeth peek */}
          <line x1="194" y1="241" x2="194" y2="245" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
          <line x1="200" y1="241" x2="200" y2="246" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
          <line x1="206" y1="241" x2="206" y2="245" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

          {/* === BLUSH === */}
          <ellipse cx="155" cy="228" rx="12" ry="6" fill="#f0a0a0" opacity="0.25" />
          <ellipse cx="245" cy="228" rx="12" ry="6" fill="#f0a0a0" opacity="0.25" />

          {/* === GLASSES === */}
          <g className="avatar3d__glasses">
            <rect x="154" y="192" width="38" height="30" rx="10" fill="none" stroke="#6c63ff" strokeWidth="2.5" opacity="0.7" />
            <rect x="208" y="192" width="38" height="30" rx="10" fill="none" stroke="#6c63ff" strokeWidth="2.5" opacity="0.7" />
            <path d="M192 205 Q200 200 208 205" fill="none" stroke="#6c63ff" strokeWidth="2" opacity="0.7" />
            <line x1="154" y1="205" x2="136" y2="200" stroke="#6c63ff" strokeWidth="2" opacity="0.7" />
            <line x1="246" y1="205" x2="264" y2="200" stroke="#6c63ff" strokeWidth="2" opacity="0.7" />
          </g>

          {/* === ARMS — one holding phone === */}
          <g>
            {/* Left arm — resting */}
            <path d="M140 330 Q118 325 112 310 Q108 298 118 290 Q128 284 138 292" stroke="url(#a3d-skin)" strokeWidth="14" strokeLinecap="round" fill="none" />
            {/* Right arm — holding phone up */}
            <path d="M260 330 Q280 320 286 300 Q290 285 278 278 Q268 274 260 285" stroke="url(#a3d-skin)" strokeWidth="14" strokeLinecap="round" fill="none" />
          </g>

          {/* === PHONE in right hand === */}
          <g className="avatar3d__phone">
            <rect x="264" y="258" width="28" height="48" rx="6" fill="#222240" stroke="#444466" strokeWidth="1" />
            <rect x="267" y="263" width="22" height="36" rx="3" fill="url(#a3d-screen)" />
            {/* Phone screen content */}
            <rect x="270" y="268" width="12" height="2" rx="1" fill="#6c63ff" opacity="0.7" />
            <rect x="270" y="273" width="16" height="2" rx="1" fill="#00d4ff" opacity="0.5" />
            <rect x="270" y="278" width="8" height="2" rx="1" fill="#ff6b9d" opacity="0.5" />
            <rect x="270" y="283" width="14" height="2" rx="1" fill="#00e676" opacity="0.4" />
            <rect x="270" y="288" width="10" height="2" rx="1" fill="#f7df1e" opacity="0.4" />
            {/* Phone camera */}
            <circle cx="278" cy="261" r="1.5" fill="#333" />
          </g>

          {/* === FLOATING ELEMENTS === */}
          <g className="avatar3d__floaters">
            {/* Notification badge */}
            <g className="avatar3d__floater avatar3d__floater--1">
              <rect x="82" y="140" width="36" height="22" rx="11" fill="#ff6b9d" filter="url(#a3d-glow)" />
              <text x="100" y="155" fontSize="11" fill="white" fontFamily="monospace" fontWeight="bold" textAnchor="middle">3+</text>
            </g>
            {/* Code bracket */}
            <g className="avatar3d__floater avatar3d__floater--2">
              <text x="295" y="130" fontSize="20" fill="#6c63ff" fontFamily="monospace" fontWeight="bold" opacity="0.7">{'{ }'}</text>
            </g>
            {/* React atom */}
            <g className="avatar3d__floater avatar3d__floater--3">
              <circle cx="72" cy="280" r="14" fill="none" stroke="#61dafb" strokeWidth="1.5" opacity="0.5" />
              <circle cx="72" cy="280" r="3" fill="#61dafb" opacity="0.6" />
            </g>
            {/* JS badge */}
            <g className="avatar3d__floater avatar3d__floater--4">
              <rect x="305" y="260" width="30" height="20" rx="5" fill="#f7df1e" opacity="0.15" stroke="#f7df1e" strokeWidth="1" opacity="0.3" />
              <text x="320" y="274" fontSize="10" fill="#f7df1e" fontFamily="monospace" fontWeight="bold" textAnchor="middle" opacity="0.6">JS</text>
            </g>
            {/* Git branch */}
            <g className="avatar3d__floater avatar3d__floater--5">
              <circle cx="310" cy="190" r="6" fill="none" stroke="#f14e32" strokeWidth="1.5" opacity="0.4" />
              <circle cx="310" cy="204" r="6" fill="none" stroke="#f14e32" strokeWidth="1.5" opacity="0.4" />
              <line x1="310" y1="196" x2="310" y2="198" stroke="#f14e32" strokeWidth="1.5" opacity="0.4" />
            </g>
            {/* API text */}
            <g className="avatar3d__floater avatar3d__floater--6">
              <text x="60" y="350" fontSize="13" fill="#00e676" fontFamily="monospace" fontWeight="bold" opacity="0.45">API</text>
            </g>
          </g>
        </svg>
      </div>
    </div>
  )
}
