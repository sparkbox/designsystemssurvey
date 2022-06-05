import React from "react"
import PropTypes from "prop-types"
import Grid from "./grid"
import GridCell from "./grid-cell"

const RelatedReading = ({ image, title, description, href }) => {
  return (
    <aside className="cmp-related-reading">
      <h3 className="cmp-type-body-default util-margin-btm-lg">Related Reading</h3>
      <a className="cmp-related-reading__link" href={href}>
        <Grid gap="lg" gapColMD="1xl">
          <GridCell spanSM={1} spanMD={2}>
            <img src={image} alt="" className="cmp-related-reading__image" />
          </GridCell>
          <GridCell spanSM={3} startSM={2} spanMD={5} startMD={3} spanLG={5}>
            <h4 className="cmp-type-body-xlarge util-margin-all-none util-weight-regular">{title}</h4>
            <p className="cmp-type-body-default util-margin-all-none">{description}</p>
          </GridCell>
        </Grid>
      </a>
    </aside>
  )
}

RelatedReading.propTypes = {
  image: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
  href: PropTypes.node.isRequired,
}

export default RelatedReading
