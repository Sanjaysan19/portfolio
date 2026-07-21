import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Projects.css'

const projects = [
  {
    title: 'Mental Wellness Web App',
    description:
      'Responsive and interactive mental wellness application. Users can track daily habits, practice mindfulness, and improve self-awareness through an intuitive interface.',
    tags: ['React.js', 'HTML5', 'CSS3', 'JavaScript'],
    category: 'Web Application',
    url: 'https://www.agrisa.co.in/',
    color: '#6c63ff',
  },
  {
    title: 'Fruits E-commerce Website',
    description:
      'Responsive Fruit Bowl e-commerce website with product listings, dynamic shopping cart, checkout process, form validations, CSS animations, and responsive design.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Razorpay'],
    category: 'E-commerce',
    url: 'https://www.fruitbunch.in/',
    color: '#00d4ff',
  },
  {
    title: 'Course Selling Platform',
    description:
      'Full-stack e-learning platform for selling CBSE, ICSE, JEE, and NEET courses. Includes Razorpay payment gateway and email notifications for order confirmation.',
    tags: ['React.js', 'Node.js', 'Razorpay', 'Nodemailer'],
    category: 'Full-Stack',
    url: 'https://www.genius-minds.co.in/',
    color: '#ff6b9d',
  },
]

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const cardReveal = {
  hidden: { opacity: 0, y: 60, scale: 0.9, rotateX: 8 },
  visible: {
    opacity: 1, y: 0, scale: 1, rotateX: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export default function Projects() {
  const headerRef = useRef(null)
  const gridRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })
  const gridInView = useInView(gridRef, { once: true, margin: '-60px' })

  return (
    <section className="projects section" id="projects">
      <div className="projects__glow" />
      <div className="container">
        <motion.div
          className="projects__header"
          ref={headerRef}
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
          variants={stagger}
        >
          <motion.span className="section-label" variants={fadeUp}>Featured Work</motion.span>
          <motion.h2 className="section-title" variants={fadeUp}>
            Projects That <span className="gradient-text">Deliver Results</span>
          </motion.h2>
          <motion.p className="section-subtitle" variants={fadeUp}>
            A selection of projects showcasing my expertise in full-stack development
          </motion.p>
        </motion.div>

        <motion.div
          className="projects__grid"
          ref={gridRef}
          initial="hidden"
          animate={gridInView ? 'visible' : 'hidden'}
          variants={stagger}
          style={{ perspective: '1000px' }}
        >
          {projects.map((project, i) => (
            <motion.div
              className="projects__card"
              key={i}
              style={{ '--card-accent': project.color }}
              variants={cardReveal}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: `0 30px 80px rgba(0, 0, 0, 0.3), 0 0 40px ${project.color}15`,
                transition: { duration: 0.3 },
              }}
            >
              <div className="projects__card-top">
                <span className="projects__card-category">{project.category}</span>
                <div className="projects__card-dots">
                  <span /><span /><span />
                </div>
              </div>

              <motion.div
                className="projects__card-mockup"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <div className="projects__card-browser">
                  <div className="projects__card-url-bar">
                    <span className="projects__card-url">{project.url.replace('https://', '')}</span>
                  </div>
                  <div className="projects__card-screen">
                    <div className="projects__card-placeholder">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                        <line x1="8" y1="21" x2="16" y2="21"/>
                        <line x1="12" y1="17" x2="12" y2="21"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="projects__card-content">
                <h3 className="projects__card-title">{project.title}</h3>
                <p className="projects__card-desc">{project.description}</p>
                <div className="projects__card-tags">
                  {project.tags.map((tag) => (
                    <span className="projects__card-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>

              <div className="projects__card-footer">
                <motion.a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projects__card-link"
                  whileHover={{ x: 4 }}
                >
                  Live Demo
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
