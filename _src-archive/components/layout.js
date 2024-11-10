import * as React from 'react'
import { Link } from 'gatsby'
import Footer from './footer'
import Box from './box'
import { globalHistory } from "@reach/router"
import { container, navDesktop, activeLink, logo, main } from './layout.module.css'
import "../styles/global.css"
import "../styles/variables.css"
import './btn.css'

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

const Layout = ({ children }) => {
  const path = globalHistory.location.pathname
  return (
    <div className={container}>
      <nav className={navDesktop}>
        <h1 className={logo}><Link to="/">Shohei Shibata</Link></h1>
        <ul>
          {navLinks.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                activeClassName={activeLink}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <main className={main}>
        <Box>
          {children}
        </Box>
      </main>
      <Footer/>
    </div>
  )
}

export default Layout
