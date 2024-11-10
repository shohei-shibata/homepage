import * as React from "react"
import Seo from '../components/seo'

const ThanksPage = () => {
  return (
    <>
      <h1 className="page-title-heading">Thanks!</h1>
      <hr className="page-title-hr" />
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
