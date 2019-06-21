import React from "react"

 const TopFeatures = () => (
  <section className="obj-layout-max-width">
    <ol className="cmp-percentage-highlight">
      <li className="cmp-percentage-highlight__item">
        <div className="cmp-percentage-highlight__icon cmp-percentage-highlight__icon--palette"></div>
        <p className="cmp-percentage-highlight__content">
          <span className="font-label cmp-percentage-highlight__label">
            <span className="cmp-percentage-highlight__first-word">Color</span> System
          </span>
          <mark className="cmp-percentage-highlight__value">92<sup className="util-superscript">%</sup></mark>
        </p>
      </li>
      <li className="cmp-percentage-highlight__item">
        <div className="cmp-percentage-highlight__icon cmp-percentage-highlight__icon--typography"></div>
        <p className="cmp-percentage-highlight__content">
          <span className="font-label cmp-percentage-highlight__label">
            <span className="cmp-percentage-highlight__first-word">Typography</span> System
          </span>
          <mark className="cmp-percentage-highlight__value">89<sup className="util-superscript">%</sup></mark>
        </p>
      </li>
      <li className="cmp-percentage-highlight__item">
        <div className="cmp-percentage-highlight__icon cmp-percentage-highlight__icon--form"></div>
        <p className="cmp-percentage-highlight__content">
          <span className="font-label cmp-percentage-highlight__label">
            <span className="cmp-percentage-highlight__first-word">Form</span> Components
          </span>
          <mark className="cmp-percentage-highlight__value">88<sup className="util-superscript">%</sup></mark>
        </p>
      </li>
    </ol>
    <ol className="cmp-percentage-list">
      <li className="cmp-percentage-list__item"><span>Navigation components&nbsp;<mark className="util-bold">79%</mark></span></li>
      <li className="cmp-percentage-list__item"><span>CSS code&nbsp;<mark className="util-bold">70%</mark></span></li>
      <li className="cmp-percentage-list__item"><span>HTML code&nbsp;<mark className="util-bold">69%</mark></span></li>
      <li className="cmp-percentage-list__item"><span>Usage guidelines&nbsp;<mark className="util-bold">69%</mark></span></li>
      <li className="cmp-percentage-list__item"><span>Grid system&nbsp;<mark className="util-bold">68%</mark></span></li>
      <li className="cmp-percentage-list__item"><span>Spacing system&nbsp;<mark className="util-bold">66%</mark></span></li>
      <li className="cmp-percentage-list__item"><span>Layout system&nbsp;<mark className="util-bold">66%</mark></span></li>
      <li className="cmp-percentage-list__item"><span>Content blocks&nbsp;<mark className="util-bold">63%</mark></span></li>
      <li className="cmp-percentage-list__item"><span>Brand guidelines&nbsp;<mark className="util-bold">62%</mark></span></li>
      <li className="cmp-percentage-list__item"><span>Design files&nbsp;<mark className="util-bold">59%</mark></span></li>
      <li className="cmp-percentage-list__item"><span>JavaScript code&nbsp;<mark className="util-bold">56%</mark></span></li>
      <li className="cmp-percentage-list__item"><span>Accessibility guidelines&nbsp;<mark className="util-bold">55%</mark></span></li>
      <li className="cmp-percentage-list__item"><span>Framework-specific components&nbsp;<mark className="util-bold">53%</mark></span></li>
    </ol>
  </section>
)

 export default TopFeatures
