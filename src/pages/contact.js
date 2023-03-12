import * as React from "react"
import Layout from "../components/layout"
import Seo from '../components/seo'
import ContactForm from "../components/contact-form"


const ContactPage = () => {
  return (
    <Layout pageTitle="Contact">
      <p>
        Please submit your message using the contact form below. 
        <br/>
        I'll get back to you as soon as I can.
      </p>
      <ContactForm/>
    </Layout>
  )
}

export default ContactPage

export const Head = () => {
  return (
    <>
      <Seo pageTitle="Home"></Seo>
    </>
  )
}
