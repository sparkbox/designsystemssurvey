import React from "react"
import PropTypes from "prop-types"

const ContentBlock = ({ children }) => (
  <div className="obj-layout-content-max-width">
    {children}
  </div>
)

ContentBlock.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ContentBlock
