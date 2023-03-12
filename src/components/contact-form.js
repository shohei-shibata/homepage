import * as React from "react"
import { contactForm } from "./contact-form.module.css"

const ContactForm = () => (
  <div className={contactForm}>
    <h3>Contact Form</h3>
    <form id="contact-form" method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact" data-netlify-recaptcha="true">
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <div id="contact-form-name-container">
        <label htmlFor="contact-form-name-field">Your Name</label>
        <br/>
        <input type="text" id="contact-form-name-field" name="name" required />
      </div>
      <div id="contact-form-email-container">
        <label htmlFor="contact-form-email-field">Your Email</label>
        <br/>
        <input type="email" id="contact-form-email-field" name="email" required />
      </div>
      <div id="contact-form-message-container">
        <label htmlFor="contact-form-message-field">Message</label>
        <br/>
        <textarea 
          type="textarea" 
          id="contact-form-message-field" 
          name="message" 
          rows="5"
          required />
      </div>
			<div data-netlify-recaptcha="true"></div>
      <input type="submit" id="contact-form-submit-btn" className="btn" value="Submit"/>
    </form>
  </div>
)

export default ContactForm