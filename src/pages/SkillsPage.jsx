import { useEffect, useRef, useState } from 'react'
import './Page.css'

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

export default function SkillsPage() {
  return (
    <div className="page">
      <section className="page__hero">
        <div className="container">
          <span className="section-label">Technical Skills</span>
          <h1 className="section-title">
            My <span className="gradient-text">Tech Stack</span>
          </h1>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Technologies and tools I use to bring products to life
          </p>
        </div>
      </section>

      <section className="page__section">
        <div className="container">
          <div className="skills__grid">
            {skillCategories.map((cat, i) => (
              <div className="skills__category animate-on-scroll" key={i}>
                <div className="skills__category-header">
                  <div className="skills__category-icon">{cat.icon}</div>
                  <h3 className="skills__category-title">{cat.title}</h3>
                </div>
                <div className="skills__list">
                  {cat.skills.map((skill, j) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={(i * cat.skills.length + j) * 80} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="skills__additional animate-on-scroll">
            <h3 className="skills__additional-title">Also experienced with</h3>
            <div className="skills__tags">
              {additionalSkills.map((skill) => (
                <span className="skills__tag" key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
