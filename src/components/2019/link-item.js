import React from "react"
import PropTypes from "prop-types"
import SpecialLink from "./callout-link"

const LinkListBlock = ({title, href, author, authorUrl}) => (
  <li className="cmp-link-list__item">
    <div>
      <SpecialLink href={ href }>
          { title }
      </SpecialLink>
    </div>
    <div className="cmp-link-list__author">
      By <a className="cmp-link-list__author-link" href={ authorUrl }>
        { author }
      </a>
    </div>
  </li>
)

LinkListBlock.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  authorUrl: PropTypes.string.isRequired,
}

export default LinkListBlock
