import React from "react"
import PropTypes from "prop-types"

const ContentBlock = ({ isFlexbox, children }) => (
  <div className={"obj-layout-content-max-width " + (isFlexbox ? 'obj-layout-flexbox-center-vrt': '')}>
    {children}
  </div>
)

ContentBlock.propTypes = {
  isFlexbox: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default ContentBlock
