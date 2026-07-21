import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import './Skills.css'

const skillCategories = [
  {
    title: 'Frontend',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    skills: [
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 85 },
      { name: 'JavaScript', level: 88 },
      { name: 'React.js', level: 85 },
      { name: 'Bootstrap', level: 80 },
    ],
  },
  {
    title: 'Backend & Database',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
      </svg>
    ),
    skills: [
      { name: 'Node.js', level: 75 },
      { name: 'MongoDB', level: 70 },
      { name: 'Express.js', level: 72 },
      { name: 'REST APIs', level: 78 },
    ],
  },
  {
    title: 'Tools & DevOps',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'GitHub Actions', level: 65 },
      { name: 'Razorpay', level: 70 },
      { name: 'Nodemailer', level: 68 },
    ],
  },
]

const additionalSkills = [
  'jQuery', 'Java', 'Responsive Design', 'CSS Animations',
  'Form Validation', 'Razorpay Integration', 'Nodemailer', 'RESTful APIs',
]

const tickerSkills = [
  'React.js', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript', 'HTML5',
  'CSS3', 'Git', 'REST APIs', 'Razorpay', 'Nodemailer', 'Bootstrap',
]

function SkillBar({ name, level, delay }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="skill-bar" ref={ref}>
      <div className="skill-bar__header">
        <span className="skill-bar__name">{name}</span>
        <span className="skill-bar__level">{level}%</span>
      </div>
      <div className="skill-bar__track">
        <div
          className="skill-bar__fill"
          style={{ width: visible ? `${level}%` : '0%', transitionDelay: `${delay}ms` }}
        />
      </div>
    </div>
  )
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const scaleCard = {
  hidden: { opacity: 0, y: 50, scale: 0.92 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Skills() {
  const headerRef = useRef(null)
  const gridRef = useRef(null)
  const tickerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })
  const gridInView = useInView(gridRef, { once: true, margin: '-80px' })
  const tickerInView = useInView(tickerRef, { once: true, margin: '-40px' })

  return (
    <section className="skills section" id="skills">
      <div className="skills__glow" />
      <div className="container">
        <motion.div
          className="skills__header"
          ref={headerRef}
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
          variants={stagger}
        >
          <motion.span className="section-label" variants={fadeUp}>Technical Skills</motion.span>
          <motion.h2 className="section-title" variants={fadeUp}>
            My <span className="gradient-text">Tech Stack</span>
          </motion.h2>
          <motion.p className="section-subtitle" variants={fadeUp}>
            Technologies and tools I use to bring products to life
          </motion.p>
        </motion.div>

        {/* Ticker Marquee */}
        <motion.div
          className="skills__ticker"
          ref={tickerRef}
          initial={{ opacity: 0 }}
          animate={tickerInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="skills__ticker-track">
            {[...tickerSkills, ...tickerSkills].map((skill, i) => (
              <span className="skills__ticker-item" key={i}>
                <span className="skills__ticker-dot" />
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="skills__grid"
          ref={gridRef}
          initial="hidden"
          animate={gridInView ? 'visible' : 'hidden'}
          variants={stagger}
        >
          {skillCategories.map((cat, i) => (
            <motion.div className="skills__category" key={i} variants={scaleCard}>
              <div className="skills__category-header">
                <div className="skills__category-icon">{cat.icon}</div>
                <h3 className="skills__category-title">{cat.title}</h3>
              </div>
              <div className="skills__list">
                {cat.skills.map((skill, j) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={(i * cat.skills.length + j) * 80} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="skills__additional"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="skills__additional-title">Also experienced with</h3>
          <div className="skills__tags">
            {additionalSkills.map((skill, i) => (
              <motion.span
                className="skills__tag"
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                whileHover={{ scale: 1.08, y: -2 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
