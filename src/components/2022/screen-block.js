import React from "react"
import PropTypes from "prop-types"

const ScreenBlock = ({ children }) => {
  return (
    <div className="obj-screen-block">
      {children}
    </div>
  )
}

ScreenBlock.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ScreenBlock
