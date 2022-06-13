import React from 'react'
import ContactFormSent from './contact-form-sent'
import ContactFormError from './contact-form-error'
import Grid from './grid'
import GridCell from './grid-cell'

const ContactFormBen = (props) => {  
  return (
    <div className="cmp-form">
      <div className="js-form-aria util-visually-hidden" aria-live="polite" />

      <ContactFormSent />
      <ContactFormError />

      <form className="cmp-form__fieldset" method="post" data-netlify="true" id="form-dss-2022" name="form-dss-2022">
        <input type="hidden" name="form-name" value="form-dss-2022" />

        <Grid gapMD="lg" gapLG="none">
          <GridCell spanMD={3} spanLG={4}>
            <h2 className="cmp-type-heading-3">Share your experience</h2>
            <p>Chat with <a href="https://www.linkedin.com/in/bencallahan">Ben Callahan</a>, the president of Sparkbox, about your design system experiences and contribute to our growing body of research.</p>
          </GridCell>

          <GridCell spanMD={5} startMD={4} spanLG={6} startLG={6}>
            <div className="cmp-form__field">
              <div className="js-name-message cmp-form__message" aria-live="polite" />
              <label className="cmp-form__label" htmlFor="form-dss-2022-NAME">Name*</label>
              <input className="cmp-form__input" type="text" name="form-dss-2022-NAME" id="form-dss-2022-NAME" required />
            </div>
    
            <div className="cmp-form__field">
              <div className="js-email-message cmp-form__message" aria-live="polite" />
              <label className="cmp-form__label" htmlFor="form-dss-2022-EMAIL">Business Email*</label>
              <input className="cmp-form__input" type="email" name="form-dss-2022-EMAIL" id="form-dss-2022-EMAIL" required />
            </div>
    
            <button className="cmp-button util-margin-top-md" type="submit" name="form-dss-2022-SUBMIT" id="form-dss-2022-SUBMIT" formNoValidate={true}>Submit</button>
          </GridCell>
        </Grid>
      </form>
    </div>
  )
}

export default ContactFormBen
