import * as React from 'react'
import { Link } from 'gatsby'
import Footer from './footer'
import Box from './box'
import { globalHistory } from "@reach/router"
import { container, nav, logo } from './layout.module.css'
import './btn.css'

const Layout = ({ children }) => {
  const path = globalHistory.location.pathname
  return (
    <div className={container}>
      <nav className={nav}>
        <h1 className={logo}><Link to="/">Shohei Shibata</Link></h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <main>
        { path !== "/" ? 
        <Box>
          {children}
        </Box>
        : 
        <>
          {children}
        </> }
      </main>
      <Footer/>
    </div>
  )
}

export default Layout
