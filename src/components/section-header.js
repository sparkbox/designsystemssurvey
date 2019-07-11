import React from "react"
import PropTypes from "prop-types"

const SectionHeader = ({ sectionNumber, children }) => (
  <header className={"cmp-section-header cmp-section-header--" + sectionNumber}>
    <div className="cmp-section-header__number-box" aria-label={"Section " + sectionNumber}>
      <svg viewBox="0 0 800 900" className="cmp-section-header__svg">
        <text className="cmp-section-header__number" stroke="url(#pinkyellow)" fontSize="1140">
          <tspan x="400" y="850">{sectionNumber}</tspan>
        </text>
      </svg>
    </div>
    <h2 className="cmp-section-header__title">{children}</h2>
  </header>
)

SectionHeader.propTypes = {
  sectionNumber: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default SectionHeader
