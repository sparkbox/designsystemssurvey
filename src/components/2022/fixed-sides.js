import React from "react"

const DotLink = ({title, to}) => {
  return (
    <a aria-hidden={true} className="cmp-fixed-sides__dot" href={`#section-${to}`} data-indicator={`section-${to}`} aria-labelledby={`section-link-${to}`} data-label={title}>
      <span className="util-visually-hidden">{title}</span>
    </a>
  )
}

const FixedSides = () => {
  return (
    <div className="cmp-fixed-sides js-section-indicators">
      <a className="cmp-fixed-sides__top" href="#top" data-label="Back To Top" aria-label="Back To Top">
        <svg className="cmp-fixed-sides__arrow" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 18V2M1 8l7-7 7 7" stroke="currentColor" strokeWidth="1"/></svg>
      </a>
      <DotLink title="Respondents" to={1} />
      <DotLink title="What’s in a Design System" to={2} />
      <DotLink title="Subscribers’ Needs" to={3} />
      <DotLink title="Maintainers’ Challenges" to={4} />
      <DotLink title="Accepting Contributions" to={5} />
      <DotLink title="Looking Ahead" to={6} />
    </div>
  )
}

export default FixedSides
