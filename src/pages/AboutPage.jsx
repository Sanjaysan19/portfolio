import CartoonAvatar from '../components/CartoonAvatar'
import './Page.css'

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
      </svg>
    ),
    title: 'Scalable Architecture',
    desc: 'Building systems designed to grow with your business needs',
  },
]

const timeline = [
  { year: '2021 - 2025', title: 'B.Tech in Information Technology', org: 'Mailam Engineering College', detail: '83% aggregate' },
  { year: '2025', title: 'MERN Stack Development', org: 'Code99 IT Academy', detail: 'Full-stack certification' },
]

export default function AboutPage() {
  return (
    <div className="page">
      <section className="page__hero">
        <div className="container">
          <span className="section-label">About Me</span>
          <h1 className="section-title">
            The Developer <span className="gradient-text">Behind the Code</span>
          </h1>
        </div>
      </section>

      <section className="page__section">
        <div className="container">
          <div className="page__about-grid">
            <div className="page__about-left animate-on-scroll">
              <div className="page__avatar-area">
                <CartoonAvatar size={280} />
              </div>
            </div>

            <div className="page__about-right animate-on-scroll">
              <p className="page__bio">
                I'm <strong>Sanjay Kumar S</strong>, a full-stack web developer based in
                Chennai, Tamil Nadu. I specialize in building responsive, user-friendly web
                applications using the MERN stack, with a focus on creating intelligent,
                AI-driven SaaS products.
              </p>
              <p className="page__bio">
                With a B.Tech in Information Technology (83%) and hands-on training from
                Code99 IT Academy, I bring both academic knowledge and practical expertise
                to every project. From e-commerce platforms to course-selling solutions,
                I build products that deliver real value.
              </p>

              <div className="page__info-grid">
                <div className="page__info-card">
                  <span className="page__info-label">Location</span>
                  <span className="page__info-value">Chennai, Tamil Nadu</span>
                </div>
                <div className="page__info-card">
                  <span className="page__info-label">Education</span>
                  <span className="page__info-value">B.Tech IT — 83%</span>
                </div>
                <div className="page__info-card">
                  <span className="page__info-label">Specialization</span>
                  <span className="page__info-value">MERN Stack & AI SaaS</span>
                </div>
                <div className="page__info-card">
                  <span className="page__info-label">Email</span>
                  <span className="page__info-value">s.sanjaykumar.dev@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page__section page__section--alt">
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 48 }}>
            Why <span className="gradient-text">Work With Me</span>
          </h2>
          <div className="page__highlights">
            {highlights.map((item, i) => (
              <div className="page__highlight-card animate-on-scroll" key={i}>
                <div className="page__highlight-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page__section">
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 48 }}>
            Education <span className="gradient-text">Timeline</span>
          </h2>
          <div className="page__timeline">
            {timeline.map((t, i) => (
              <div className="page__timeline-item animate-on-scroll" key={i}>
                <div className="page__timeline-dot" />
                <div className="page__timeline-content">
                  <span className="page__timeline-year">{t.year}</span>
                  <h3>{t.title}</h3>
                  <p>{t.org}</p>
                  <span className="page__timeline-detail">{t.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
