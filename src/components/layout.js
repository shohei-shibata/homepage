import * as React from 'react'
import { Link } from 'gatsby'
import Footer from './footer'
import Box from './box'
import { globalHistory } from "@reach/router"
import { container, nav, logo, main } from './layout.module.css'
import "../styles/global.css"
import './btn.css'

const Layout = ({ children }) => {
  const path = globalHistory.location.pathname
  return (
    <div className={container}>
      <nav className={nav}>
        <h1 className={logo}><Link to="/">Shohei Shibata</Link></h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
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
