import * as React from "react"
import Seo from '../components/seo'
import PageTitle from "../components/page-title"

const ThanksPage = () => {
  return (
    <>
      <PageTitle pageTitle="Thanks!"/>
      <p>The form submission was successful. I will get back to you as soon as I can.</p>
    </>
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
