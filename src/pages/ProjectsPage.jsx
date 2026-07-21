import { useState } from 'react'
import './Page.css'

const categories = ['All', 'Full-Stack', 'E-commerce', 'Web Application', 'SaaS', 'API / Backend', 'Landing Page']

const projects = [
  {
    title: 'Mental Wellness Web App',
    description: 'Responsive and interactive mental wellness application. Users can track daily habits, practice mindfulness, and improve self-awareness through an intuitive interface.',
    tags: ['React.js', 'HTML5', 'CSS3', 'JavaScript'],
    category: 'Web Application',
    url: 'https://www.agrisa.co.in/',
    color: '#6c63ff',
  },
  {
    title: 'Fruits E-commerce Website',
    description: 'Responsive Fruit Bowl e-commerce website with product listings, dynamic shopping cart, checkout process, form validations, CSS animations, and responsive design.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Razorpay'],
    category: 'E-commerce',
    url: 'https://www.fruitbunch.in/',
    color: '#00d4ff',
  },
  {
    title: 'Course Selling Platform',
    description: 'Full-stack e-learning platform for selling CBSE, ICSE, JEE, and NEET courses. Includes Razorpay payment gateway and email notifications.',
    tags: ['React.js', 'Node.js', 'Razorpay', 'Nodemailer'],
    category: 'Full-Stack',
    url: 'https://www.genius-minds.co.in/',
    color: '#ff6b9d',
  },
  {
    title: 'AI Content Generator',
    description: 'SaaS platform leveraging AI APIs to generate blog posts, social media content, and marketing copy with customizable templates and tone settings.',
    tags: ['React.js', 'Node.js', 'OpenAI API', 'MongoDB'],
    category: 'SaaS',
    url: '#',
    color: '#a855f7',
  },
  {
    title: 'Real-Time Chat Application',
    description: 'Socket.io-powered real-time chat with private messaging, group rooms, typing indicators, and message history persistence.',
    tags: ['React.js', 'Socket.io', 'Node.js', 'MongoDB'],
    category: 'Full-Stack',
    url: '#',
    color: '#22d3ee',
  },
  {
    title: 'Task Management Dashboard',
    description: 'Kanban-style project management tool with drag-and-drop boards, team assignments, due dates, and progress tracking.',
    tags: ['React.js', 'DnD Kit', 'Node.js', 'REST API'],
    category: 'SaaS',
    url: '#',
    color: '#f97316',
  },
  {
    title: 'Portfolio CMS',
    description: 'Headless CMS for developers to manage and deploy portfolio projects with Markdown support and auto-generated pages.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Markdown'],
    category: 'Full-Stack',
    url: '#',
    color: '#10b981',
  },
  {
    title: 'E-Learning Marketplace',
    description: 'Multi-vendor marketplace for selling online courses with instructor dashboards, student progress tracking, and certificate generation.',
    tags: ['React.js', 'Node.js', 'Razorpay', 'Cloudinary'],
    category: 'SaaS',
    url: '#',
    color: '#eab308',
  },
  {
    title: 'RESTful Blog API',
    description: 'Well-documented RESTful API for a blog platform with JWT auth, CRUD operations, pagination, filtering, and rate limiting.',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'JWT'],
    category: 'API / Backend',
    url: '#',
    color: '#ec4899',
  },
  {
    title: 'Restaurant Landing Page',
    description: 'Elegant landing page for a restaurant with animated menu sections, reservation form, and Google Maps integration.',
    tags: ['React.js', 'CSS3', 'JavaScript', 'Formspree'],
    category: 'Landing Page',
    url: '#',
    color: '#ef4444',
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather dashboard using OpenWeather API with 7-day forecast, location search, and animated weather icons.',
    tags: ['React.js', 'REST API', 'CSS3', 'Chart.js'],
    category: 'Web Application',
    url: '#',
    color: '#3b82f6',
  },
  {
    title: 'Inventory Management System',
    description: 'Stock tracking system with barcode scanning, low-stock alerts, supplier management, and detailed analytics reports.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Chart.js'],
    category: 'SaaS',
    url: '#',
    color: '#8b5cf6',
  },
  {
    title: 'Payment Gateway Integration',
    description: 'Modular payment system supporting Razorpay and Stripe with webhook handling, refund management, and transaction logs.',
    tags: ['Node.js', 'Razorpay', 'Stripe', 'Express.js'],
    category: 'API / Backend',
    url: '#',
    color: '#14b8a6',
  },
  {
    title: 'Social Media Dashboard',
    description: 'Aggregated analytics dashboard pulling data from multiple social platforms with engagement metrics and scheduling features.',
    tags: ['React.js', 'Node.js', 'REST API', 'Recharts'],
    category: 'SaaS',
    url: '#',
    color: '#f43f5e',
  },
  {
    title: 'Fitness Tracker App',
    description: 'Mobile-responsive fitness app with workout logging, calorie counting, progress charts, and personalized recommendations.',
    tags: ['React.js', 'CSS3', 'localStorage', 'Chart.js'],
    category: 'Web Application',
    url: '#',
    color: '#22c55e',
  },
  {
    title: 'Job Board Platform',
    description: 'Full-stack job board with employer posting, applicant tracking, resume uploads, and email notification system.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Nodemailer'],
    category: 'Full-Stack',
    url: '#',
    color: '#6366f1',
  },
  {
    title: 'SaaS Landing Page Template',
    description: 'High-converting landing page template with hero section, feature grid, pricing table, testimonials, and CTA animations.',
    tags: ['React.js', 'CSS3', 'Framer Motion', 'Responsive'],
    category: 'Landing Page',
    url: '#',
    color: '#0ea5e9',
  },
]

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter)

  return (
    <div className="page">
      <section className="page__hero">
        <div className="container">
          <span className="section-label">Portfolio</span>
          <h1 className="section-title">
            Projects That <span className="gradient-text">Deliver Results</span>
          </h1>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            {projects.length}+ projects across full-stack, SaaS, e-commerce, and more
          </p>
        </div>
      </section>

      <section className="page__section">
        <div className="container">
          <div className="projects__filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`projects__filter-btn ${activeFilter === cat ? 'projects__filter-btn--active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
                {cat !== 'All' && (
                  <span className="projects__filter-count">
                    {projects.filter((p) => p.category === cat).length}
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="projects__grid projects__grid--full">
            {filtered.map((project, i) => (
              <div
                className="projects__card animate-on-scroll"
                key={project.title}
                style={{ '--card-accent': project.color }}
              >
                <div className="projects__card-top">
                  <span className="projects__card-category">{project.category}</span>
                  <div className="projects__card-dots">
                    <span /><span /><span />
                  </div>
                </div>

                <div className="projects__card-mockup">
                  <div className="projects__card-browser">
                    <div className="projects__card-url-bar">
                      <span className="projects__card-url">{project.url.replace('https://', '').replace('#', 'project-url')}</span>
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
                </div>

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
                  {project.url !== '#' ? (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="projects__card-link">
                      Live Demo
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                    </a>
                  ) : (
                    <span className="projects__card-link projects__card-link--muted">
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
