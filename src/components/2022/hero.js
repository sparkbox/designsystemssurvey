import React from "react"
import SparkboxLogo from "./logo"

const Hero = () => {
  return (
    <header className="cmp-hero" id="top">
      <h1 className="util-visually-hidden">2022 Sparkbox Design Systems Survey</h1>
      <div className="cmp-hero__intro">
        <div className="cmp-hero__logo">
          <a className="cmp-hero__sparkbox-link" href="https://sparkbox.com" title="Sparkbox Website">
            <SparkboxLogo />
          </a>
        </div>
        <div className="cmp-hero__title" aria-hidden={true}>
          <div className="cmp-hero__title-line cmp-hero__title-line--1">Design</div> 
          <div className="cmp-hero__title-line cmp-hero__title-line--2">Systems</div> 
          <div className="cmp-hero__title-line  cmp-hero__title-line--3">Survey</div> 
        </div>
        <div className="cmp-hero__year" aria-hidden={true}>
          <span className="cmp-hero__year-number cmp-hero__year-number--1">2</span>
          <span className="cmp-hero__year-number cmp-hero__year-number--2">0</span>
          <span className="cmp-hero__year-number cmp-hero__year-number--3">2</span>
          <span className="cmp-hero__year-number cmp-hero__year-number--4">2</span>
        </div>
        <div className="cmp-hero__edition" aria-hidden={true}>
          Fifth Edition
        </div>
      </div>
    </header>
  )
}

export default Hero