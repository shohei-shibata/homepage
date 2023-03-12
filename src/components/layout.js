import * as React from 'react'
import { Link } from 'gatsby'
import Footer from './footer'
import Box from './box'
import { globalHistory } from "@reach/router"
import { container, nav, logo, main, pageTitleHeading, pageTitleHr } from './layout.module.css'
import './btn.css'

const Layout = ({ pageTitle, children }) => {
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
      <main className={main}>
        { path !== "/" ? 
        <Box>
          <h1 className={pageTitleHeading}>{pageTitle}</h1>
          <hr className={pageTitleHr} />
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
