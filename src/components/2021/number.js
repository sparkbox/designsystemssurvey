import React from "react"
import FitText from "@kennethormandy/react-fittext"

const Number = (props) => {
const textResizer = (text, compressor, min, max) => {
  return (
    <FitText compressor={compressor} minFontSize={min} maxFontSize={max} parent="cmp-scorecard__item">
      {text}
    </FitText>
  )
}

  let large = (!props.large) ? '' : ' cmp-num--large'
  let bold = (!props.bold) ? '' : ' cmp-num--bold'
  let highlight = (!props.highlight) ? '' : ' cmp-num--highlight'
  let text = (!props.large) ? textResizer(props.children, 1, 32, 48) : textResizer(props.children, 1, 96, 120)

  return (
    <div className={`cmp-num${large}${bold}${highlight}`}>
      {text}
    </div>
  )
}

export default Number
