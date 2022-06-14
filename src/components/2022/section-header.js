import React from "react"
import PropTypes from "prop-types"
import Grid from "../../components/2022/grid"
import GridCell from "../../components/2022/grid-cell"

const SectionHeader = ({ title, number, children }) => {
  let content = (children) ? <GridCell spanMD={7} spanLG={9}>{children}</GridCell> : null
  return (
    <header className={`cmp-section-header cmp-section-header--item-${number}`}>
      <Grid>
        <GridCell spanMD={7}>
          <h2 className="cmp-section-header__title" data-number={number}>{title}</h2>
        </GridCell>
        {content}
      </Grid>
    </header>
  )
}

SectionHeader.propTypes = {
  title: PropTypes.node.isRequired,
  number: PropTypes.node.isRequired,
  children: PropTypes.node
}

export default SectionHeader
