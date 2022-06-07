import React from "react"
import PropTypes from "prop-types"
import AnchorLink from "react-anchor-link-smooth-scroll"

const DownArrow = () => {
  return (
    <svg className="cmp-toc-link__arrow" width="24" height="22" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg"><path d="M14.768 19.42V1.656H0"/><path d="m22.57 12.213-7.802 7.8-7.8-7.8" /></svg>
  )
}

const TOCLink = ({ to, text }) => {
  // These variables split apart the link text,
  // removes the last unbroken character string,
  // then combines that last string with the 
  // down arrow in order to prevent the arrow
  // from being alone on a line below the text.
  const words = text.split(' ');
  const count = words.length;
  const last = words[count - 1];
  const content = text.replace(last, '');
  return (
    <AnchorLink className="cmp-toc-link" href={`#section-${to}`}>
      <span className="cmp-toc-link__number" ariaLabel={`Section ${to}`}>0{to}</span>
      <span className="cmp-toc-link__text">{content}</span>
      <span className="cmp-toc-link__last"><span className="cmp-toc-link__text">{last}</span><DownArrow /></span>
    </AnchorLink>
  )
}

TOCLink.propTypes = {
  to: PropTypes.node.isRequired,
  text: PropTypes.node.isRequired,
}

export default TOCLink
