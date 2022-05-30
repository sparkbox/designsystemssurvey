import React from "react"
import PropTypes from "prop-types"

const TOCLink = ({ to, text }) => {
  return (
    <a className="cmp-toc-link" href={`#section-${to}`}>
      <span className="cmp-toc-link__number" ariaLabel={`Section ${to}`}>0{to}</span>
      <span className="cmp-toc-link__text">{text}</span>
    </a>
  )
}

TOCLink.propTypes = {
  to: PropTypes.node.isRequired,
  text: PropTypes.node.isRequired,
}

export default TOCLink
