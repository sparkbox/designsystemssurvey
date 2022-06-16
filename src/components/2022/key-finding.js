import React from "react"
import PropTypes from "prop-types"

import Grid from "./grid"
import GridCell from "./grid-cell"
import Animate from "./animate"

const KeyFinding = ({ children }) => {
  return (
    <Animate type="height">
      <div className="cmp-key-finding">
        <div className="cmp-key-finding__content">
          <Grid className="util-margin-hrz-md util-margin-hrz-lg@md util-margin-hrz-none@lg">
            <GridCell spanMD={8} spanLG={10} startLG={2}>
              <h3 className="cmp-key-finding__title">Key Finding</h3>
              <p className="cmp-key-finding__text">{ children }</p>
            </GridCell>
          </Grid>
        </div>
      </div>
    </Animate>
  )
}


KeyFinding.propTypes = {
  children: PropTypes.node.isRequired,
}

export default KeyFinding
