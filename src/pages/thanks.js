import * as React from "react"
import Layout from "../components/layout"
import Seo from '../components/seo'

const ThanksPage = () => {
  return (
    <Layout pageTitle="Thanks!">
      <p>The form submission was successful. I will get back to you as soon as I can.</p>
    </Layout>
  )
}

export default ThanksPage

export const Head = () => {
  return (
    <>
      <Seo pageTitle="Thanks!"></Seo>
    </>
  )
}
