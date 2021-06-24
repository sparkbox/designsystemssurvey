import React from "react"

const SlimHeading = (props) => {
  const Tag = props.tag
  let sizeClasses = []

  if (props.size != null) {
    sizeClasses.push(` cmp-slim-heading--${props.size}`);
  }
  if (props.sizeMD != null) {
    sizeClasses.push(` cmp-slim-heading--${props.sizeMD}@md`)
  }
  if (props.sizeLG != null) {
    sizeClasses.push(` cmp-slim-heading--${props.sizeLG}@lg`)
  }

  return (
    <Tag className={`cmp-slim-heading${sizeClasses.join(" ")}`}>
      <div className="cmp-slim-heading__content">
        {props.children}
      </div>
    </Tag>
  )
}

SlimHeading.defaultProps = {
  tag: 'div',
  size: 'half',
  sizeMD: null,
  sizeLG: null
}

export default SlimHeading
