import * as React from "react"
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <section>
      <h1>Under Construction</h1>
      <p>My new website is still a work in progress... Please check back soon for more content!</p>
    </section>
  )
}

export default IndexPage

export const Head = () => {
  return (
    <>
      <Seo pageTitle="Home"></Seo>
    </>
  )
}
