import React from "react"

const UsefulFeatureList = () => (
  <section className="obj-layout-max-width cmp-feature-list__flex">
    <div className="cmp-feature-list__container">
      <h4 className="cmp-feature-list__title">Designer or User Experience</h4>
      <ol className="cmp-feature-list">
        <li className="cmp-feature-list__item"><span>Color System</span></li>
        <li className="cmp-feature-list__item"><span>Typography System</span></li>
        <li className="cmp-feature-list__item"><span>Layout System&nbsp;<mark className="util-italic">tie</mark></span></li>
        <li className="cmp-feature-list__item"><span>Form Components&nbsp;<mark className="util-italic">tie</mark></span></li>
        <li className="cmp-feature-list__item"><span>Design Files&nbsp;<mark className="util-italic">tie</mark></span></li>
      </ol>
    </div>

    <div className="cmp-feature-list__container">
      <h4 className="cmp-feature-list__title">Developer</h4>
      <ol className="cmp-feature-list">
        <li className="cmp-feature-list__item"><span>Color System</span></li>
        <li className="cmp-feature-list__item"><span>Spacing System&nbsp;<mark className="util-italic">tie</mark></span></li>
        <li className="cmp-feature-list__item"><span>Framework-Specific Components&nbsp;<mark className="util-italic">tie</mark></span></li>
        <li className="cmp-feature-list__item"><span>Typography System</span></li>
        <li className="cmp-feature-list__item"><span>Usage Guidelines</span></li>
      </ol>
    </div>
  </section>
)

export default UsefulFeatureList
