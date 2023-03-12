import * as React from "react"
import Layout from "../components/layout"
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <h1>Under Construction</h1>
      <p>My new website is still a work in progress... Please check back soon for more content!</p>
    </Layout>
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
