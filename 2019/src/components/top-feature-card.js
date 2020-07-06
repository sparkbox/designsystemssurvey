import React from "react"

const TopFeatureCard = (props) => (
  <li className="cmp-percentage-highlight__item">
    <div className={`cmp-percentage-highlight__icon cmp-percentage-highlight__icon--${props.icon}`}></div>
    <p className="cmp-percentage-highlight__content">
      <span className="font-label cmp-percentage-highlight__label">
        <span className="cmp-percentage-highlight__first-word">{props.firstWord}</span> {props.secondWord}
      </span>
      <mark className="cmp-percentage-highlight__value">{props.percentage}<sup className="util-superscript">%</sup></mark>
    </p>
  </li>
)

export default TopFeatureCard
