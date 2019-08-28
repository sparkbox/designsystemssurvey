import React from "react"
import PropTypes from "prop-types"

const CallOutLink = ({children, href}) => (
  <a className="font-link" href={ href }>
    <span className="font-link-text">
      { children }
    </span>
  </a>
)

CallOutLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
}

export default CallOutLink
