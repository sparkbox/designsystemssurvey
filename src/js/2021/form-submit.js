function sendFormData() {
  function sendData() {
    let formRequest = new XMLHttpRequest()
    let formsData = new FormData(form)
    formRequest.addEventListener('load', function(event) {
      form.parentElement.classList.add('form-success')
      form.setAttribute('aria-hidden', true);
      successMessage.setAttribute('aria-hidden', false);
    })
    formRequest.addEventListener('error', function(event) {
      form.parentElement.classList.add('form-error')
      form.setAttribute('aria-hidden', true);
      errorMessage.setAttribute('aria-hidden', false);
    })
    formRequest.open('POST', '#')
    formRequest.send(formsData)
  }

  let form = document.querySelector('form')
  let errorMessage = document.querySelector('.js-form-error')
  let successMessage = document.querySelector('.js-form-success')
  form.addEventListener('submit', function (e) {
    e.preventDefault()
    sendData()
  })
}

export default sendFormData
