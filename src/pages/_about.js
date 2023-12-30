import * as React from "react"
import { Link } from "gatsby"
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <>
      <h1 className="page-title-heading">About</h1>
      <hr className="page-title-hr" />
      <h3>Hi👋</h3>
      <p>Welcome to my homepage.</p>
      <p>I am a web developer based in Dayton, Ohio USA. I basically use this website as a sandbox for me to create whatever I felt like making. Hope you'll find something interesting!</p>
      <p>If you'd like to get in touch, the best way is to <Link to="/contact">use the Contact Form</Link></p>
      <p>Also, I run the event listing website, <Link to="https://livejazzdayton.com">Live Jazz Dayton</Link>. If you're a music fan from the Dayton area, definitely check it out!</p>
      <br/>
      <p>-Shohei</p>
    </>
  )
}

export default AboutPage

export const Head = () => {
  return (
    <>
      <Seo pageTitle="About"></Seo>
    </>
  )
}
