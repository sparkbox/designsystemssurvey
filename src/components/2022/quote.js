import React from "react"
import PropTypes from "prop-types"

import Grid from "./grid"
import GridCell from "./grid-cell"

const Quote = ({ children, source }) => {
  return (
    <blockquote className="cmp-quote">
      <Grid className="util-margin-hrz-md util-margin-hrz-lg@md util-margin-hrz-none@lg">
        <GridCell spanMD={8} spanLG={10} startLG={2}>
          <p className="cmp-quote__text">{ children }</p>
          <p className="cmp-quote__source">&ndash; { source}</p>
        </GridCell>
      </Grid>
    </blockquote>
  )
}


Quote.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Quote
