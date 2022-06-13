function sendFormData() {
  // Sends the Form Data
  function sendData(form) {
    let formContainer = form.parentElement;
    let ariaMessage = formContainer.querySelector('.js-form-aria')
    let errorMessage = formContainer.querySelector('.js-form-error')
    let successMessage = formContainer.querySelector('.js-form-success')

    let formRequest = new XMLHttpRequest()
    let formsData = new FormData(form)

    formRequest.addEventListener('load', function(event) {
      form.parentElement.classList.add('form-success')
      form.setAttribute('aria-hidden', true);
      successMessage.setAttribute('aria-hidden', false);
      ariaMessage.innerText = 'The form submitted successfully.'
    })
    formRequest.addEventListener('error', function(event) {
      form.parentElement.classList.add('form-error')
      form.setAttribute('aria-hidden', true);
      errorMessage.setAttribute('aria-hidden', false);
      ariaMessage.innerText = 'There was an error submitting the form. Please refresh the page and try again.'
    })
    formRequest.open('POST', '#')
    formRequest.send(formsData)
  }

  // Validates the Form Data
  function validateForm(form, name, email) {
    let nameMessage = form.querySelector('.js-name-message');
    let emailMessage = form.querySelector('.js-email-message');
    // The browser validation allows both x@y.z and x@y, because of 
    // the second format considered valid, we need our own check 
    // that a top level domain is present as MailChimp requires
    let emailRegex = new RegExp (/(.*@.*\..*)/);

    // Reset the error messages
    nameMessage.innerText = "";
    emailMessage.innerText = "";
    name.classList.remove('cmp-form-field__input--error');
    email.classList.remove('cmp-form-field__input--error');

    // Make sure the name value isn’t blank
    if (name.value === "") {
      name.classList.add('cmp-form-field__input--error');
      nameMessage.innerText = 'Your name is required.';
    }

    // Make sure the email value isn’t blank
    if (email.value === "") {
      email.classList.add('cmp-form-field__input--error');
      emailMessage.innerText = 'Your email is required.';
    }

    // Make sure the email address is formatted correctly
    if (!emailRegex.test(email.value)) {
      email.classList.add('cmp-form-field__input--error');
      emailMessage.innerText = 'Your email format is incorrect.';
    }

    // Double check everything is right before sending.
    if (name.value !== "" && email.value !== "" && emailRegex.test(email.value)) {
      sendData(form)
    }
  }

  const contactForm = document.getElementById('form-dss-2022');
  const contactName = document.getElementById('form-dss-2022-NAME');
  const contactEmail = document.getElementById('form-dss-2022-EMAIL');

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    validateForm(contactForm, contactName, contactEmail);
  });
  
  const newsletterForm = document.getElementById('newsletter-dss-2022');
  const newsletterName = document.getElementById('newsletter-dss-2022-NAME');
  const newsletterEmail = document.getElementById('newsletter-dss-2022-EMAIL');

  newsletterForm.addEventListener('submit', function (e) {
    e.preventDefault();
    validateForm(newsletterForm, newsletterName, newsletterEmail);
  });
}

export default sendFormData
