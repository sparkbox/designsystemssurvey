import React from "react"
import PropTypes from "prop-types"

// <path d="M1 23 L23 1 V23 H1 Z" className="cmp-section-header__mark" />

// <path d="M1 23 L23 1 V23 H1 Z" fill="#211F19" stroke="#211F19"/>
// <path d="M17 23 L39 1 V23 H17 Z" fill="#FFFEFA" stroke="#211F19"/>
// <path d="M33 23 L55 1 V23 H33 Z" fill="#FFFEFA" stroke="#211F19"/>
// <path d="M49 23 L71 1 V23 H49 Z" fill="#FFFEFA" stroke="#211F19"/>
// <path d="M65 23 L87 1 V23 H65 Z" fill="#FFFEFA" stroke="#211F19"/>
// <path d="M81 23 L103 1 V23 H81 Z" fill="#FFFEFA" stroke="#211F19"/>

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