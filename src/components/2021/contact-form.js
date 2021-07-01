import React from "react"

const ContactForm = (props) => (
  <div className="util-margin-top-3xl">
    {/* The form attribute will need updated to work as *
       expected and provide the necessary data to MailChimp */}
    <form action="https://sparkbox.com/php/mailchimp_cta.php" method="post" id="mc-embedded-subscribe-htmlForm" name="mc-embedded-subscribe-form" novalidate>

      {/* These need updated to include any necessary data */}
      <input type="hidden" value="{current_url}" name="ARTICLE" class="" id="mce-ARTICLE" />
      <input type="hidden" value="ADD OFFERING HERE" name="OFFERING" class="" id="mce-OFFERING" />
      <input type="hidden" value="ADD INTEREST HERE" name="INTEREST" class="" id="mce-INTEREST" />
      <input type="hidden" value="ADD AUDIENCE HERE" name="AUDIENCE" id="mce-AUDIENCE" />

      <div className="util-visually-hidden" aria-hidden="true">
        <input type="text" name="b_c2fcafb7ccc2db34e99075bb1_705050dbb9" tabindex="-1" value=""/>
      </div>

      <h3 className="cmp-type-body cmp-type-bold util-margin-bottom-md">Can we continue to include you?</h3>

      <div className="cmp-checkbox">
        <input className="cmp-checkbox__input" name="CHECK1" id="mce-CHECK1" type="checkbox" />
        <label className="cmp-checkbox__label" htmlFor="mce-CHECK1">Yes! I’d like to share more about my system. Let’s set up a time to chat.</label>
      </div>

      <div className="cmp-checkbox">
        <input className="cmp-checkbox__input" name="CHECK2" id="mce-CHECK2" type="checkbox" />
        <label className="cmp-checkbox__label" htmlFor="mce-CHECK2">Sure, I’m always curious! Please send me more design system insights when you can.</label>
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

export default ContactForm
