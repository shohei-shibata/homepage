import * as React from "react"
import Seo from '../components/seo'
import ContactForm from "../components/contact-form"
import PageTitle from "../components/page-title"

const ContactPage = () => {
  return (
    <>
      <PageTitle pageTitle="Contact Me"/>
      <p>
        Please submit your message using the contact form below. 
        <br/>
        I'll get back to you as soon as I can.
      </p>
      <ContactForm/>
    </>
  )
}

export default ContactPage

export const Head = () => {
  return (
    <>
      <Seo pageTitle="Contact"></Seo>
    </>
  )
}
