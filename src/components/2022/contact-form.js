import React from 'react'
import ContactFormSent from './contact-form-sent'
import ContactFormError from './contact-form-error'
import Grid from './grid'
import GridCell from './grid-cell'

const ContactForm = (props) => {  
  return (
    <div className="cmp-form">
      <div className="js-form-aria util-visually-hidden" aria-live="polite" />

      <ContactFormSent />
      <ContactFormError />

      <form className="cmp-form__fieldset" method="post" data-netlify="true" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form">
        <input type="hidden" name="form-name" value="mc-embedded-subscribe-form" />

        <Grid gapMD="lg" gapLG="none">
          <GridCell spanMD={3} spanLG={4}>
            <h2 className="cmp-type-heading-3">Stay in the know</h2>
            <p>Sign up for a monthly roundup of Sparkbox’s latest articles, research, and upcoming events.</p>
          </GridCell>

          <GridCell spanMD={5} startMD={4} spanLG={6} startLG={6}>
          
            <div className="cmp-form__field">
              <div className="js-name-message cmp-form__message" aria-live="polite" />
              <label className="cmp-form__label" htmlFor="mce-NAME">Name*</label>
              <input className="cmp-form__input" type="text" name="NAME" id="mce-NAME" required />
            </div>
    
            <div className="cmp-form__field">
              <div className="js-email-message cmp-form__message" aria-live="polite" />
              <label className="cmp-form__label" htmlFor="mce-EMAIL">Business Email*</label>
              <input className="cmp-form__input" type="email" name="EMAIL" id="mce-EMAIL" required />
            </div>
    
            <button className="cmp-button util-margin-top-md" type="submit" name="subscribe" id="mc-embedded-subscribe" formNoValidate={true}>Submit</button>
          </GridCell>
        </Grid>
      </form>
    </div>
  )
}

export default ContactForm
