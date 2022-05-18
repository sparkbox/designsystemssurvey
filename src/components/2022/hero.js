import React from "react"
import Logo from "./logo"

const Hero = () => {
  return (
    <header className="cmp-hero">
      <div className="cmp-hero__intro">
        <div className="cmp-hero__logo">
          <a href="https://sparkbox.com" title="Sparkbox Website">
            <Logo />
          </a>
        </div>
        <div className="cmp-hero__title" ariaHidden={true}>
          <div className="cmp-hero__title-line">Design</div> 
          <div className="cmp-hero__title-line">Systems</div> 
          <div className="cmp-hero__title-line">Survey</div> 
        </div>
        <div className="cmp-hero__year" ariaHidden={true}>2022</div>
        <div className="cmp-hero__edition" ariaHidden={true}>
          Fifth Edition
        </div>
      </div>
    </header>
  )
}

export default Hero