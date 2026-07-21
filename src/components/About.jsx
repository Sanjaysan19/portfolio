import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import './About.css'

const highlights = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'Full-Stack Development',
    desc: 'End-to-end product development from database design to pixel-perfect UI',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
      </svg>
    ),
    title: 'AI Integration',
    desc: 'Embedding intelligent features into modern SaaS applications',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
    title: 'Scalable Architecture',
    desc: 'Building systems designed to grow with your business needs',
  },
]

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const scaleIn = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function About() {
  const headerRef = useRef(null)
  const textRef = useRef(null)
  const cardsRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })
  const textInView = useInView(textRef, { once: true, margin: '-80px' })
  const cardsInView = useInView(cardsRef, { once: true, margin: '-80px' })

  return (
    <section className="about section" id="about">
      <div className="about__glow" />
      <div className="container">
        <motion.div
          className="about__header"
          ref={headerRef}
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
          variants={stagger}
        >
          <motion.span className="section-label" variants={fadeUp}>About Me</motion.span>
          <motion.h2 className="section-title" variants={fadeUp}>
            Crafting Digital Experiences
            <br />
            <span className="gradient-text">With Precision & Purpose</span>
          </motion.h2>
        </motion.div>

        <div className="about__grid">
          <motion.div
            className="about__text"
            ref={textRef}
            initial="hidden"
            animate={textInView ? 'visible' : 'hidden'}
            variants={stagger}
          >
            <motion.p variants={fadeUp}>
              I'm <strong>Sanjay Kumar S</strong>, a full-stack web developer based in
              Chennai, Tamil Nadu. I specialize in building responsive, user-friendly web
              applications using the MERN stack, with a focus on creating intelligent,
              AI-driven SaaS products.
            </motion.p>
            <motion.p variants={fadeUp}>
              With a B.Tech in Information Technology (83%) and hands-on training from
              Code99 IT Academy, I bring both academic knowledge and practical expertise
              to every project. From e-commerce platforms to course-selling solutions,
              I build products that deliver real value.
            </motion.p>
            <motion.div className="about__info" variants={fadeUp}>
              {[
                { label: 'Location', value: 'Chennai, Tamil Nadu' },
                { label: 'Education', value: 'B.Tech IT — 83%' },
                { label: 'Specialization', value: 'MERN Stack & AI SaaS' },
              ].map((item, i) => (
                <motion.div
                  className="about__info-item"
                  key={i}
                  variants={scaleIn}
                  whileHover={{ x: 6, borderColor: 'var(--accent-primary)' }}
                >
                  <span className="about__info-label">{item.label}</span>
                  <span className="about__info-value">{item.value}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="about__highlights"
            ref={cardsRef}
            initial="hidden"
            animate={cardsInView ? 'visible' : 'hidden'}
            variants={stagger}
          >
            {highlights.map((item, i) => (
              <motion.div
                className="about__card"
                key={i}
                variants={scaleIn}
                whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(108, 99, 255, 0.1)' }}
              >
                <div className="about__card-icon">{item.icon}</div>
                <h3 className="about__card-title">{item.title}</h3>
                <p className="about__card-desc">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
