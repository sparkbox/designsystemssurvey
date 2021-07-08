import React from "react"

const ContactFormSent = (props) => {  
  return (
    <div class="js-form-success cmp-form__success-message" aria-hidden="true">
      <h2 class="cmp-type-h2 util-margin-all-none" aria-label="Form Successfully Sent">Sent</h2>
      <p class="cmp-type-body-default util-margin-top-sm util-margin-bottom-lg">We’re looking forward to learning more together.</p>
      <hr className="util-hr-solid util-margin-vertical-lg" />
      <h2 class="cmp-type-section util-margin-all-none">Want to keep exploring right now?</h2>
      <p class="cmp-type-body-large util-margin-vertical-lg">Answer a few questions to find out where you fall within the Design System Maturity Model and get insights and ideas about how you can take your system to the next level.</p>
      <a href="/" className="cmp-button cmp-button--inverse">Take the Assessment</a>
    </div>
  )
}

export default ContactFormSent
