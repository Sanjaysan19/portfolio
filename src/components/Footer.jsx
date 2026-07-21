import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            <a href="#" className="footer__logo">
              <span className="footer__logo-text">Sanjay Kumar</span>
            </a>
            <p className="footer__tagline">
              Building intelligent web applications
              <br />
              with the MERN stack & AI.
            </p>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__links-title">Navigation</h4>
            <ul className="footer__links">
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__links-title">Connect</h4>
            <ul className="footer__links">
              <li>
                <a href="https://www.linkedin.com/in/sanjay-kumar-s-999ba824a" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/sanjaykumar" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href="mailto:s.sanjaykumar.dev@gmail.com">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span className="footer__copy">
            &copy; {year} Sanjay Kumar S. Crafted with care.
          </span>
          <span className="footer__built">
            Built with React.js
          </span>
        </div>
      </div>
    </footer>
  )
}
