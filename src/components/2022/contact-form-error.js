import React from 'react'
import Grid from './grid'
import GridCell from './grid-cell'

const ContactFormError = (props) => {  
  return (
    <Grid gapMD="lg" gapLG="none">
      <GridCell spanMD={3} spanLG={4}>
        <div className="js-form-error cmp-form__error-message" aria-hidden="true">
          <h2 className="cmp-type-heading-3 util-margin-top-none" aria-label="Form Failed to Send">Error</h2>
          <p className="cmp-type-body-large">Something went wrong submitting the form. Please, refresh the page and try again.</p>
        </div>
      </GridCell>
    </Grid>
  )
}

export default ContactFormError
