import React from "react"
import PropTypes from "prop-types"
import Grid from "./grid"
import GridCell from "./grid-cell"

const RelatedArticle = ({ image, title, description, href }) => {
  return (
    <a className="cmp-related-reading__link" href={href}>
      <Grid gap="lg" gapColMD="1xl">
        <GridCell spanSM={2} spanMD={2}>
          <img src={image} alt="" className="cmp-related-reading__image" />
        </GridCell>
        <GridCell spanSM={4} startSM={3} spanMD={5} startMD={3} spanLG={6}>
          <h4 className="cmp-related-reading__title">{title}<svg className="cmp-related-reading__arrow" aria-hidden={true} width="14" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.703 6.36H1.058v9.16" stroke="currentColor" strokeWidth="1.5"/><path d="m7.383 1.52 4.675 4.838-4.675 4.84" stroke="currentColor" strokeWidth="1.5"/></svg></h4>
          <p className="cmp-type-body-default util-margin-all-none">{description}</p>
        </GridCell>
      </Grid>
    </a>
  )
}

RelatedArticle.propTypes = {
  image: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
  href: PropTypes.node.isRequired,
}

export default RelatedArticle
