import React from "react"
import PropTypes from "prop-types"

const HeaderBlock = ({ children }) => (
  <div className="obj-layout-header-max-width">
    {children}
  </div>
)

HeaderBlock.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HeaderBlock
