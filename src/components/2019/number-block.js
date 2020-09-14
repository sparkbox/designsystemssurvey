import React from "react"
import PropTypes from "prop-types"

const NumberBlock = ({ pointNumber, children }) => (
  <div className="obj-layout-content-max-width">
    <div data-number={pointNumber}>
      {children}
    </div>
  </div>
)

NumberBlock.propTypes = {
  pointNumber: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default NumberBlock
