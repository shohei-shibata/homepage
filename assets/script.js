emailjs.init('user_pxYFdy40Fn6a2X7MFQ1Ln');

window.onload = function() {
  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();

      resetForm(contactForm);
      disableSubmit();

      // generate the contact number value
      this.contact_number.value = Math.random() * 100000 | 0;
      
      emailjs.sendForm('gmail_dev', 'freelance_contact_form', this)
        .then(function(res) {
          console.log('Email sent successfully', res.status, res.text);
          showSubmitResult(res.status);
        }, function(err) {
          console.log('Error. Email failed to send.', err); 
          showSubmitResult(err);
        });
    });
  };
}

const resetForm = function(form) {
  form.reset(); 
}

const disableSubmit = function() {
  // After form submission, disable button.
  const submitButton = document.getElementById("contact-form-submit");

  submitButton.disabled = true;
}

const showSubmitResult = function(submitStatus) {
  // Indicate to user whether or not the email was successfully sent.
  const submitStatusNode = document.getElementById("contact-form-submit-status");

  console.log("status", typeof submitStatus);

  if (submitStatus == "200") { 
    submitStatusNode.innerText = "Email sent. Thank you!";
  } else {
    submitStatusNode.innerText = "Email failed to send. Please try again later.";
  }
}
