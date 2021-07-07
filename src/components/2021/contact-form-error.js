import React from "react"

const ContactFormError = (props) => {  
  return (
    <div class="js-form-error cmp-form__error-message" aria-hidden="true">
      <h2 class="cmp-type-h2 util-margin-top-none" aria-label="Form Successfully Sent">Error</h2>
      <p class="cmp-type-body-large">Something went wrong submitting the form. Please, refresh the page and try again.</p>
    </div>
  )
}

export default ContactFormError
