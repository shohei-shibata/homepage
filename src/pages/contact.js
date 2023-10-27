import * as React from "react"
import Seo from '../components/seo'
import ContactForm from "../components/contact-form"


const ContactPage = () => {
  return (
    <>
      <h1 className="page-title-heading">Contact</h1>
      <hr className="page-title-hr" />
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
