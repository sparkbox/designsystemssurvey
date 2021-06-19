import React from "react"
import PropTypes from "prop-types"

const SectionHeader = ({title, number, total}) => {
  let progress = `0${number}/0${total}`;
  let markers = [];
  let pos1 = 1;
  let pos2 = 23;

  for (let i = 0; i < total; i++) {
    pos1 = (i * 16) + 1;
    pos2 = (i * 16) + 23;

    markers.push(
      <path d={`M${pos1} 23 L${pos2} 1 V23 H${pos1} Z`} className={`cmp-section-header__mark cmp-section-header__mark--${i+1}-${number}`} />
    );
  }

  return (
    <header className="cmp-section-header" data-number={number}>
      <h2 className="cmp-section-header__title">{title}</h2>
      <div className="cmp-section-header__marker" aria-hidden="true">
        <svg width="104" height="24" viewBox="0 0 104 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          { markers }
        </svg>
        <div class="cmp-section-header__progress">{progress}</div>
      </div>
    </header>
  )
}

SectionHeader.defaultProps = {
  title: "The Respondents",
  number: 1,
  total: 6
}
  
SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
}
  
  
  export default SectionHeader