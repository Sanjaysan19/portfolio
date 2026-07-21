import './Page.css'

export default function ContactPage() {
  return (
    <div className="page">
      <section className="page__hero">
        <div className="container">
          <span className="section-label">Get In Touch</span>
          <h1 className="section-title">
            Let's Build Something <span className="gradient-text">Amazing Together</span>
          </h1>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Have a project in mind or looking for a developer? I'm always open to new opportunities.
          </p>
        </div>
      </section>

      <section className="page__section">
        <div className="container">
          <div className="page__contact-grid">
            <div className="page__contact-channels animate-on-scroll">
              <h2 className="page__contact-subtitle">Contact Info</h2>

              <a href="mailto:s.sanjaykumar.dev@gmail.com" className="contact__channel">
                <div className="contact__channel-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <span className="contact__channel-label">Email</span>
                  <span className="contact__channel-value">s.sanjaykumar.dev@gmail.com</span>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/sanjay-kumar-s-999ba824a" target="_blank" rel="noopener noreferrer" className="contact__channel">
                <div className="contact__channel-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
                    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                  </svg>
                </div>
                <div>
                  <span className="contact__channel-label">LinkedIn</span>
                  <span className="contact__channel-value">Sanjay Kumar S</span>
                </div>
              </a>

              <a href="https://github.com/sanjaykumar" target="_blank" rel="noopener noreferrer" className="contact__channel">
                <div className="contact__channel-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
                  </svg>
                </div>
                <div>
                  <span className="contact__channel-label">GitHub</span>
                  <span className="contact__channel-value">sanjaykumar</span>
                </div>
              </a>

              <div className="contact__channel">
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
              </div>
            </div>

            <div className="page__contact-form-area animate-on-scroll">
              <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
                <div className="contact__form-group">
                  <label className="contact__form-label" htmlFor="name">Name</label>
                  <input className="contact__form-input" type="text" id="name" placeholder="Your name" />
                </div>
                <div className="contact__form-group">
                  <label className="contact__form-label" htmlFor="email">Email</label>
                  <input className="contact__form-input" type="email" id="email" placeholder="you@example.com" />
                </div>
                <div className="contact__form-group">
                  <label className="contact__form-label" htmlFor="subject">Subject</label>
                  <input className="contact__form-input" type="text" id="subject" placeholder="Project inquiry" />
                </div>
                <div className="contact__form-group">
                  <label className="contact__form-label" htmlFor="message">Message</label>
                  <textarea className="contact__form-input contact__form-textarea" id="message" rows="6" placeholder="Tell me about your project..." />
                </div>
                <button className="contact__form-submit" type="submit">
                  Send Message
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
