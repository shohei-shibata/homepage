import * as React from "react"
import { navigate } from 'gatsby-link'
import { contactForm } from "./contact-form.module.css"

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const ContactForm = () => {
  const [state, setState] = React.useState({})
  const [btnText, setBtnText] = React.useState("Send")

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const submitButton = document.getElementById("form-submit-button")
    submitButton.setAttribute("disabled", "")
    setBtnText("Sending...")
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }
  
  return (
    <div className={contactForm}>
      <form
          name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" onChange={handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your name:
              <br />
              <input type="text" name="name" onChange={handleChange} required />
            </label>
          </p>
          <p>
            <label>
              Your email:
              <br />
              <input type="email" name="email" onChange={handleChange} required />
            </label>
          </p>
          <p>
            <label>
              Message:
              <br />
              <textarea 
                name="message" 
                onChange={handleChange} 
                rows="5"
                required
              />
            </label>
          </p>
          <p>
            <button 
              type="submit" 
              className="btn"
              id="form-submit-button"
            >
              {btnText}
            </button>
          </p>
        </form>
    </div>
  )
}

export default ContactForm