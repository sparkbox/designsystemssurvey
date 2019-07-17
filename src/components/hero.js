import React from "react"

const Hero = () => (
  <div className="cmp-hero">
    <h1 className="cmp-hero__heading">
      <a className="cmp-hero__logo" href="https://seesparkbox.com">
        <img src="/images/logo.svg" alt="Sparkbox" />
      </a>
      <span className="cmp-hero__title">Design Systems</span>
      <span className="cmp-hero__survey">Survey</span>
      <span className="cmp-hero__year">2019 Edition</span>
    </h1>

    <div className="cmp-hero__image" role="img" aria-label="A futuristic landscape with four mysterious and shining shapes floating above the scene.">
      <div className="cmp-hero__flood"></div>
      <div className="cmp-hero__noise"></div>
      <div className="cmp-hero__mountains"></div>
      <div className="cmp-hero__sky"></div>

      <div className="cmp-hero__lightning"></div>
        <div className="cmp-hero__shape-group">
        <div className="cmp-hero__shape cmp-hero__shape--dodecahedron"></div>
        <div className="cmp-hero__shape cmp-hero__shape--pyramid"></div>
        <div className="cmp-hero__shape cmp-hero__shape--diamond"></div>
        <div className="cmp-hero__shape cmp-hero__shape--cube"></div>
      </div>

      <div className="cmp-hero__people"></div>
      <div className="cmp-hero__ground-shadow"></div>
      <div className="cmp-hero__ground-glow"></div>

      <div className="cmp-hero__ground">
        <div className="cmp-hero__ground-tilt">
        <div className="cmp-hero__ground-lines"></div>
      </div>
      </div>
    </div>
  </div>
)

export default Hero
