function sendFormData() {
  // Sends the Form Data
  function sendData() {
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
  function validateForm() {
    let check1 = document.getElementById('checkbox-1');
    let check2 = document.getElementById('checkbox-2');
    let name = document.getElementById('mce-NAME');
    let email = document.getElementById('mce-EMAIL');

    let checkMessage = document.querySelector('.js-check-message');
    let nameMessage = document.querySelector('.js-name-message');
    let emailMessage = document.querySelector('.js-email-message');
    // The browser validation allows both x@y.z and x@y, because of 
    // the second format considered valid, we need our own check 
    // that a top level domain is present as MailChimp requires
    let emailRegex = new RegExp (/(.*\@.*\..*)/);

    // Reset the error messages
    checkMessage.innerText = "";
    nameMessage.innerText = "";
    emailMessage.innerText = "";
    name.classList.remove('cmp-form-field__input--error');
    email.classList.remove('cmp-form-field__input--error');

    // Make sure one of the checkboxes is selected
    if (!check1.checked && !check2.checked) {
      checkMessage.innerText = 'One of the contact options must be selected to send the form.';
    }

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
    if ((check1.checked || check2.checked) && name.value !== "" && email.value !== "" && emailRegex.test(email.value)) {
      sendData()
    }
  }

  let form = document.querySelector('form')
  let ariaMessage = document.querySelector('.js-form-aria')
  let errorMessage = document.querySelector('.js-form-error')
  let successMessage = document.querySelector('.js-form-success')
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    validateForm();
  })
}

export default sendFormData
