import React from "react"
import PropTypes from "prop-types"
import Animate from "./animate"

const RelatedReading = ({ children }) => {
  return (
    <Animate type="fade">
      <aside className="cmp-related-reading" aria-label="Related Reading">
        <h3 className="cmp-type-body-default util-margin-btm-lg">Related Reading</h3>
        { children }
      </aside>
    </Animate>
  )
}

RelatedReading.propTypes = {
  children: PropTypes.node.isRequired
}

export default RelatedReading
