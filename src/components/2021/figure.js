import React from "react"
import {PropTypes} from "prop-types"

const Figure = (props) => {
  let customClasses = (props.className != null) ? ` ${props.className}` : ''
  let directionClass = ` cmp-figure__caption--${props.direction}`

  return (
    <figure className={`cmp-figure${customClasses}`}>
      {props.children}
      <figcaption className={`cmp-figure__caption${directionClass}`}>
        <span className="cmp-figure__count">
          <abbr title="Figure">Fig</abbr>&nbsp;{props.count}
        </span>
        <span>{props.caption}</span>
      </figcaption>
    </figure>
  )
}

Figure.propTypes = {
  children: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  caption: PropTypes.string
}

Figure.defaultProps = {
  direction: "right"
}

export default Figure
