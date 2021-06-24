import React from "react"

const CallToAction = (props) => {
  let cutout = (props.mark != null) ? ` cmp-cta--mark-${props.mark}` : ''
  return (
    <div className={`cmp-cta${cutout}`}>
      {props.children}
    </div>
  )
}

CallToAction.defaultProps = {
  mark: null
}

export default CallToAction
