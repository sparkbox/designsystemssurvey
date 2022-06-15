import React from "react"
import PropTypes from "prop-types"

const RelatedReading = ({ children }) => {
  return (
    <aside className="cmp-related-reading" aria-label="Related Reading">
      <h3 className="cmp-type-body-default util-margin-btm-lg">Related Reading</h3>
      { children }
    </aside>
  )
}

RelatedReading.propTypes = {
  children: PropTypes.node.isRequired
}

export default RelatedReading
