import React from "react"
import PropTypes from "prop-types"

const LinkListBlock = ({ children }) => (
  <div className="cmp-link-list">
    {children}
  </div>
)

LinkListBlock.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LinkListBlock
