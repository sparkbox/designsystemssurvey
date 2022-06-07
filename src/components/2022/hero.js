import React from "react"
import SparkboxLogo from "./logo"

const Hero = () => {
  return (
    <header className="cmp-hero">
      <h1 className="util-visually-hidden">2022 Sparkbox Design Systems Survey</h1>
      <div className="cmp-hero__intro">
        <div className="cmp-hero__logo">
          <a href="https://sparkbox.com" title="Sparkbox Website">
            <SparkboxLogo />
          </a>
        </div>
        <div className="cmp-hero__title" aria-hidden={true}>
          <div className="cmp-hero__title-line">Design</div> 
          <div className="cmp-hero__title-line">Systems</div> 
          <div className="cmp-hero__title-line">Survey</div> 
        </div>
        <div className="cmp-hero__year" aria-hidden={true}>2022</div>
        <div className="cmp-hero__edition" aria-hidden={true}>
          Fifth Edition
        </div>
      </div>
    </header>
  )
}

export default Hero