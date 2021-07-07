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
    
    if (!check1.checked && !check2.checked) {
      checkMessage.innerText = 'One of the contact options must be selected to send the form';
    }
    if (name.value === "") {
      name.classList.add('cmp-form-field__input--error');
      nameMessage.innerText = 'Your name is required to send the form';
    }
    if (email.value === "") {
      email.classList.add('cmp-form-field__input--error');
      emailMessage.innerText = 'Your email is required to send the form';
    }
    if ((check1.checked || check2.checked) && name.value !== "" && email.value !== "") {
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
