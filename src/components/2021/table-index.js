import React from 'react'
import Grid from './grid'
import GridCell from './grid-cell'
import TableItem from './table-of-contents'
import SlimHeading from './slim-heading'

const TableOfContents = (props) => {
  return (
    <div className="cmp-toc">
      <Grid>
        <GridCell>
          <SlimHeading size="full">Jump To</SlimHeading>
          <TableItem number="1">The Respondents</TableItem>
          <TableItem number="2">Characteristics &amp; Team</TableItem>
          <TableItem number="3">Priorities &amp; Challenges</TableItem>
        </GridCell>
        <GridCell startMD="5" startLG="7" align="end">
          <TableItem number="4">Metrics</TableItem>
          <TableItem number="5">Evolution</TableItem>
          <TableItem number="6">Conclusion</TableItem>
        </GridCell>
      </Grid>
    </div>
  )
}

export default TableOfContents
