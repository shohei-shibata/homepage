import * as React from 'react'
import { Link } from 'gatsby'
import { globalHistory } from "@reach/router"
import { footer, socialIcons, footerLinks, credits, activeLink } from './footer.module.css'

const navLinks = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "Work With Me",
    to: "/work-with-me",
  },
  {
    name: "Contact",
    to: "/contact",
  }
]

const Footer = () => {
  const path = globalHistory.location.pathname
  return (
    <footer className={footer}>        
      <nav className={footerLinks}>
        <ul>
            {navLinks.map(link => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={footerLinks}
                  activeClassName={activeLink}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
      </nav>
      <div className={credits}>
        <div>© Shohei Shibata 2023</div>
        <div className={socialIcons}>
          <a aria-label="github" href="https://github.com/shohei-shibata" className="footer-social-logo">
            <i className="fa-brands fa-github"></i>
          </a>
          <a aria-label="linkedin" href="https://www.linkedin.com/in/shohei-shibata-53867a41/" className="footer-social-logo">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a aria-label="buymeacoffee" href="https://www.buymeacoffee.com/shohei_shibata" className="footer-social-logo">
            <i className="fa-solid fa-mug-hot"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer