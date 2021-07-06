function sendFormData() {
  function sendData() {
    let formRequest = new XMLHttpRequest()
    let formsData = new FormData(form)
    formRequest.addEventListener('load', function(event) {
      form.classList.add('inactive')
    })
    formRequest.addEventListener('error', function(event) {
      form.classList.add('error')
    })
    formRequest.open('POST', '#')
    formRequest.send(formsData)
  }

  let form = document.querySelector('form')
  form.addEventListener('submit', function (e) {
    e.preventDefault()
    sendData()
  })
}

export default sendFormData
