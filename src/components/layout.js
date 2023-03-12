import * as React from 'react'
import { Link } from 'gatsby'
import Footer from './footer'
import Seo from './seo'
import { globalHistory } from "@reach/router"
import { container, nav, logo, main} from './layout.module.css'
import './btn.css'

const Layout = ({ pageTitle, children }) => {
  const path = globalHistory.location.pathname
  return (
    <div className={container}>
      <Seo pageTitle={pageTitle}></Seo>
      <nav className={nav}>
        <h1 className={logo}><Link to="/">Shohei Shibata</Link></h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <main className={main}>
        { path !== "/" ? <h1>{pageTitle}</h1> : null }
        {children}
      </main>
      <Footer/>
    </div>
  )
}

export default Layout
