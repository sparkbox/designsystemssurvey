import React from "react"

const ContactForm = (props) => {  
  return (
    <div className="util-margin-top-3xl">
      {/* The form attribute will need updated to work as *
         expected and provide the necessary data to MailChimp */}
      <form method="post" data-netlify="true" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" novalidate>
        <input type="hidden" name="form-name" value="mc-embedded-subscribe-form" />
  
        <div className="util-visually-hidden" aria-hidden="true">
          <input type="text" name="b_c2fcafb7ccc2db34e99075bb1_705050dbb9" tabindex="-1" value=""/>
        </div>
  
        <h3 className="cmp-type-body cmp-type-bold util-margin-bottom-md">Can we continue to include you?</h3>
  
        <div className="cmp-checkbox">
          <input className="cmp-checkbox__input" type="checkbox" value="262144" name="group[379610][262144]" id="mce-group[379610]-379610-9" />
          <label className="cmp-checkbox__label" htmlFor="mce-group[379610]-379610-9">Yes! I’d like to share more about my system. Let’s set up a time to chat.</label>
        </div>
  
        <div className="cmp-checkbox">
          <input className="cmp-checkbox__input" type="checkbox" value="65536" name="group[379610][65536]" id="mce-group[379610]-379610-7" />
          <label className="cmp-checkbox__label" htmlFor="mce-group[379610]-379610-7">Sure, I’m always curious! Please send me more design system insights when you can.</label>
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
