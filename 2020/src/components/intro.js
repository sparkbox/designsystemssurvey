import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="cmp-intro" role="banner">
    <h1>2020 Design Systems Survey</h1>
    <p>Imagine a cool header design here</p>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
