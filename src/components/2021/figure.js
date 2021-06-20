import React from "react"
import PropTypes from "prop-types"

const Figure = (props) => (
  <figure className="cmp-figure">
    {props.children}
    <figcaption className="cmp-figure__caption">
      <span className="cmp-figure__count">
        <abbr title="Figure">Fig</abbr> {props.count}
      </span>
      <span>{props.caption}</span>
    </figcaption>
  </figure>
)

Figure.propTypes = {
  children: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  caption: PropTypes.string
}

export default Figure