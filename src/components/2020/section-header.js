import React from "react"
import PropTypes from "prop-types"

const SectionHeader = ({title, name, children}) => (
  <header className={`cmp-section-header cmp-section-header--${name}`}>
    <div className="obj-max-width util-pad-vertical-lg util-pad-vertical-h1@md util-pad-vertical-h2@lg">
      <div className="obj-section-header">
        <div aria-hidden="true" className="cmp-fade-up js-watch" data-animate="cmp-fade-up--animate">
          <div className={`cmp-section-header__icon cmp-section-header__icon--${name}`}>
            <div className={`cmp-icon cmp-icon--${name} cmp-icon--header`} />
          </div>
        </div>
        <div className="cmp-section-header__content cmp-fade-left js-watch" data-animate="cmp-fade-left--animate">
          <h2 className="cmp-section-header__title">{title}</h2>
          {children}
        </div>
      </div>
    </div>
  </header> 
)

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}


export default SectionHeader
