import React from "react"
import PropTypes from "prop-types"

const Grid = ({children}) => (
  <div className="obj-grid">
    {children}
  </div>
)

Grid.propTypes = {
  children: PropTypes.string.isRequired
}

export default Grid