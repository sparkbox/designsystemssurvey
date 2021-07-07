import React from "react"
import ContactFormSent from './contact-form-sent'
import ContactFormError from './contact-form-error'

const ContactForm = (props) => {  
  return (
    <div className="cmp-form">
      <ContactFormSent />
      <ContactFormError />
      {/* The form attribute will need updated to work as *
         expected and provide the necessary data to MailChimp */}
      <form className="cmp-form__fieldset" method="post" data-netlify="true" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" novalidate>
        <input type="hidden" name="form-name" value="mc-embedded-subscribe-form" />
  
        <h3 className="cmp-type-body cmp-type-bold util-margin-bottom-md">Can we continue to include you?</h3>
  
        <div className="cmp-checkbox">
          <input className="cmp-checkbox__input" type="checkbox" name="checkbox-1" id="checkbox-1" />
          <div className="cmp-checkbox__label-container">
            <label className="cmp-checkbox__label" htmlFor="checkbox-1">
              <span className="cmp-checkbox__label-hidden">262144</span>
            </label>
            <span className="cmp-checkbox__faux-label">Yes! I’d like to share more about my system. Let’s set up a time to chat.</span>
          </div>
        </div>
  
        <div className="cmp-checkbox">
          <input className="cmp-checkbox__input" type="checkbox" name="checkbox-2" id="checkbox-2" />
          <div className="cmp-checkbox__label-container">
            <label className="cmp-checkbox__label" htmlFor="checkbox-2">
              <span className="cmp-checkbox__label-hidden">65536</span>
            </label>
            <span className="cmp-checkbox__faux-label">Sure, I’m always curious! Please send me more design system insights when you can.</span>
          </div>
        </div>
  
        <div className="cmp-form-field">
          <label className="cmp-type-body-large util-weight-bold" htmlFor="mce-NAME">Name</label>
          <input className="cmp-form-field__input util-margin-top-sm util-margin-bottom-md" type="text" name="NAME" id="mce-NAME" />
  
          <label className="cmp-type-body-large util-weight-bold" htmlFor="mce-EMAIL">Business Email Address</label>
          <input className="cmp-form-field__input util-margin-top-sm util-margin-bottom-md" type="email" name="EMAIL" id="mce-EMAIL" />
  
          <button className="cmp-form-field__button util-margin-top-md" type="submit" name="subscribe" id="mc-embedded-subscribe">Submit</button>
        </div>
     
      </form>
    </div>
  )
}

export default ContactForm
