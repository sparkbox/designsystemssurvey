import React from 'react'
import Grid from './grid'
import GridCell from './grid-cell'

const ContactFormSent = (props) => {  
  return (
    <Grid gapMD="lg" gapLG="none">
      <GridCell spanMD={3} spanLG={4}>
        <div className="js-form-success cmp-form__success-message" aria-hidden="true">
          <h2 className="cmp-type-heading-3 util-margin-all-none" aria-label="Form Successfully Sent">Thank you!</h2>
          <p className="cmp-type-body-large util-margin-top-sm util-margin-bottom-lg">We will be in touch.</p>
        </div>
      </GridCell>
    </Grid>
  )
}

export default ContactFormSent
