import React from "react"
import PropTypes from "prop-types"

const Quote = (props) => {
  return (
    <figure className={`cmp-quote cmp-quote--${props.sizeFormat} cmp-quote--deco-${props.decoStyle}`}>
      <blockquote className="cmp-quote__block">
        {props.children}
      </blockquote>
      <figcaption className="cmp-quote__footer">
        <div className="cmp-type-mono-micro cmp-quote__cite">&ndash; {props.cite}</div>
      </figcaption>
    </figure>
  )
}

Quote.defaultProps = {
  sizeFormat: 'small',
  decoStyle: 'rust'
}

Quote.propTypes = {
  children: PropTypes.node.isRequired
}

export default Quote
