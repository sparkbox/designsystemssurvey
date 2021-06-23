import React from "react"

const ObservationHeading = (props) => {
  let sizeClasses = []

  if (props.size != null) {
    sizeClasses.push(` cmp-observation--${props.size}`);
  }
  if (props.sizeMD != null) {
    sizeClasses.push(` cmp-observation--${props.sizeMD}@md`)
  }
  if (props.sizeLG != null) {
    sizeClasses.push(` cmp-observation--${props.sizeLG}@lg`)
  }

  return (
    <div className={`cmp-observation${sizeClasses.join(" ")}`}>
      <div className="cmp-observation__content">
        Observation
      </div>
    </div>
  )
}

ObservationHeading.defaultProps = {
  size: 'half',
  sizeMD: null,
  sizeLG: null
}

export default ObservationHeading
