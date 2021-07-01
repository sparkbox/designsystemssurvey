import React from 'react'
import Grid from './grid'
import GridCell from './grid-cell'
import TableItem from './table-of-contents'
import SlimHeading from './slim-heading'
import ArtElement from "../../components/2021/art-element"

const TableOfContents = (props) => {
  return (
    <nav>
      <div className="cmp-toc util-margin-bottom-20vh" id="table-of-contents">
        <Grid>
          <GridCell className="util-margin-right-lg@md util-margin-right-none@lg">
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
          <GridCell startMD="7" rowSpanMD="2" startLG="12" className="util-margin-top-3xl util-display-none util-display-block@lg">
            <ArtElement type="bars" />
          </GridCell>
        </Grid>
      </div>
    </nav>
  )
}

export default TableOfContents
