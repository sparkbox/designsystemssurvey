import React from "react"

const Quote = (props) => {
  let quoteType = (props.style === 'small') ?  'cmp-type-body-large' : 'cmp-type-h2';

  return (
    <figure className={`cmp-quote cmp-quote--${props.style}`}>
      <blockquote className="cmp-quote__block">
        <p className={`${quoteType} cmp-quote__text`}>
          {props.quote}<span aria-hidden="true">&rdquo;</span>
        </p>
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

export default Quote
