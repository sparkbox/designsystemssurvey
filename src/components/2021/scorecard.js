import React from "react"

const ScoreRow = (props) => {
  return (
    <div className="cmp-scorecard">
      {props.children}
    </div>
  )
}

const ScoreCard = (props) => {
  let border = (!props.border) ? '' : ' cmp-scorecard__item--border'
  return (
    <div className={`cmp-scorecard__item${border}`}>
      {props.children}
    </div>
  )
}

const ScoreCardLarge = (props) => {
  let border = (!props.border) ? '' : ' cmp-scorecard__item--border'
  return (
    <div className={`cmp-scorecard__item cmp-scorecard__item--large${border}`}>
      {props.children}
    </div>
  )
}

ScoreCard.defaultProps = {
  border: true
}

ScoreCardLarge.defaultProps = {
  border: true
}

export {ScoreCard, ScoreRow, ScoreCardLarge}
