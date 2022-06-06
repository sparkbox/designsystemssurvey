import React from "react"
import PropTypes from "prop-types"

import Grid from "./grid"
import GridCell from "./grid-cell"

const KeyFinding = ({ children }) => {
  return (
    <div className="cmp-key-finding">
      <div className="cmp-key-finding__content">
        <Grid>
          <GridCell spanLG={10} startLG={2}>
            <h4 className="cmp-key-finding__title">Key Finding</h4>
            <p className="cmp-key-finding__text">{ children }</p>
          </GridCell>
        </Grid>
      </div>
    </div>
  )
}


KeyFinding.propTypes = {
  children: PropTypes.node.isRequired,
}

export default KeyFinding
