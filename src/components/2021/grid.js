import React from "react"
import PropTypes from "prop-types"

const Grid = (props) => (
  <div className="obj-grid" style={props.style}>
    {props.children}
  </div>
)

Grid.propTypes = {
  children: PropTypes.string.isRequired
}

export default Grid