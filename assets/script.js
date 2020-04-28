// CONTACT FORM //

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

  if (submitStatus == "200") { 
    submitStatusNode.innerText = "Email sent. Thank you!";
  } else {
    submitStatusNode.innerText = "Email failed to send. Please try again later.";
  }
}

// DARK MODE //

const toggle = document.querySelector('input[name="theme-toggle"]');
const icon = document.getElementById("theme-toggle-icon");
const storedTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

toggle.addEventListener("click", function() {
  console.log("icon class", icon.classList);
  if (toggle.checked) {
     document.documentElement.setAttribute('data-theme', 'dark'); 
     localStorage.setItem('theme', 'dark');
  } else {
     document.documentElement.setAttribute('data-theme', 'light'); 
     localStorage.setItem('theme', 'light');
  }
});

if (storedTheme) {
    document.documentElement.setAttribute('data-theme', storedTheme);

    if (storedTheme === 'dark') {
        toggle.checked = true;
    } else {
    }
};

const switchThemeToggleIcon = function(newTheme) {
  if (newTheme === 'dark') {
    console.log('switch to sun');
    icon.classList.add('fa-moon');
    icon.classList.remove('fa-sun');
  } else {
    console.log('switch to moon');
    icon.classList.add('fa-sun');
    icon.classList.remove('fa-moon');
  }
}
