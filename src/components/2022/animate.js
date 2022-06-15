import React from "react"

const Animate = ({type, children}) => {
  return (
    <div data-animation={type}>
      {children}
    </div>
  )
}

export default Animate