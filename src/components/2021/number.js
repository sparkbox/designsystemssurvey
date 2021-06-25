import React from "react"
import FitText from "@kennethormandy/react-fittext"

const Number = (props) => {
  const largeText = (text) => {
    return (
      <FitText compressor={1} minFontSize={96} maxFontSize={120} parent="cmp-scorecard__item">
        {text}
      </FitText>
    )
  }
  let large = (!props.large) ? '' : ' cmp-num--large'
  let bold = (!props.bold) ? '' : ' cmp-num--bold'
  let highlight = (!props.highlight) ? '' : ' cmp-num--highlight'
  let text = (!props.large) ? props.children : largeText(props.children)

  return (
    <div className={`cmp-num${large}${bold}${highlight}`}>
      {text}
    </div>
  )
}

export default Number
