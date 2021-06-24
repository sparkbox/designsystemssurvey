import React from "react"
import PropTypes from "prop-types"

const Quote = (props) => {
  return (
    <figure className={`cmp-quote cmp-quote--${props.style}`}>
      <blockquote className="cmp-quote__block">
        {props.children}
      </blockquote>
      <figcaption className="cmp-quote__footer">
        <div className="cmp-type-mono-micro cmp-quote__cite">{props.cite}</div>
      </figcaption>
    </figure>
  )
}

Quote.defaultProps = {
  style: 'small'
}

Quote.propTypes = {
  children: PropTypes.string.isRequired
}

export default Quote
