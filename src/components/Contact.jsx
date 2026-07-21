import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import './Contact.css'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const channelSlide = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Contact() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  const infoRef = useRef(null)
  const formRef = useRef(null)
  const infoInView = useInView(infoRef, { once: true, margin: '-60px' })
  const formInView = useInView(formRef, { once: true, margin: '-60px' })

  return (
    <section className="contact section" id="contact" ref={sectionRef}>
      <motion.div className="contact__glow contact__glow--1" style={{ y: bgY }} />
      <motion.div className="contact__glow contact__glow--2" style={{ y: bgY }} />
      <div className="container">
        <div className="contact__wrapper">
          <motion.div
            className="contact__info"
            ref={infoRef}
            initial="hidden"
            animate={infoInView ? 'visible' : 'hidden'}
            variants={stagger}
          >
            <motion.span className="section-label" variants={fadeUp}>Get In Touch</motion.span>
            <motion.h2 className="section-title" variants={fadeUp}>
              Let's Build Something
              <br />
              <span className="gradient-text">Amazing Together</span>
            </motion.h2>
            <motion.p className="contact__desc" variants={fadeUp}>
              Have a project in mind or looking for a developer to bring your
              ideas to life? I'm always open to discussing new opportunities
              and creative collaborations.
            </motion.p>

            <motion.div className="contact__channels" variants={stagger}>
              {[
                { href: 'mailto:s.sanjaykumar.dev@gmail.com', label: 'Email', value: 's.sanjaykumar.dev@gmail.com', icon: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></> },
                { href: 'https://www.linkedin.com/in/sanjay-kumar-s-999ba824a', label: 'LinkedIn', value: 'Sanjay Kumar S', icon: <><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></> },
                { href: 'https://github.com/sanjaykumar', label: 'GitHub', value: 'sanjaykumar', icon: <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/> },
              ].map((ch, i) => (
                <motion.a
                  key={i}
                  href={ch.href}
                  target={ch.href.startsWith('http') ? '_blank' : undefined}
                  rel={ch.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="contact__channel"
                  variants={channelSlide}
                  whileHover={{ x: 8, borderColor: 'var(--accent-primary)' }}
                >
                  <div className="contact__channel-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {ch.icon}
                    </svg>
                  </div>
                  <div>
                    <span className="contact__channel-label">{ch.label}</span>
                    <span className="contact__channel-value">{ch.value}</span>
                  </div>
                </motion.a>
              ))}

              <motion.div className="contact__channel" variants={channelSlide} whileHover={{ x: 8 }}>
                <div className="contact__channel-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <span className="contact__channel-label">Location</span>
                  <span className="contact__channel-value">Chennai (Velachery), Tamil Nadu</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="contact__form-wrapper"
            ref={formRef}
            initial={{ opacity: 0, y: 50, rotateY: -5 }}
            animate={formInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
          >
            <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
              {[
                { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                { id: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com' },
              ].map((field, i) => (
                <motion.div
                  className="contact__form-group"
                  key={field.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={formInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                >
                  <label className="contact__form-label" htmlFor={field.id}>{field.label}</label>
                  <motion.input
                    className="contact__form-input"
                    type={field.type}
                    id={field.id}
                    placeholder={field.placeholder}
                    whileFocus={{ borderColor: 'var(--accent-primary)', boxShadow: '0 0 0 3px var(--glow-primary)' }}
                  />
                </motion.div>
              ))}
              <motion.div
                className="contact__form-group"
                initial={{ opacity: 0, y: 20 }}
                animate={formInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <label className="contact__form-label" htmlFor="message">Message</label>
                <motion.textarea
                  className="contact__form-input contact__form-textarea"
                  id="message"
                  rows="5"
                  placeholder="Tell me about your project..."
                  whileFocus={{ borderColor: 'var(--accent-primary)', boxShadow: '0 0 0 3px var(--glow-primary)' }}
                />
              </motion.div>
              <motion.button
                className="contact__form-submit"
                type="submit"
                initial={{ opacity: 0, y: 20 }}
                animate={formInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 }}
                whileHover={{ y: -3, boxShadow: '0 8px 30px var(--glow-primary)' }}
                whileTap={{ scale: 0.97 }}
              >
                Send Message
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
