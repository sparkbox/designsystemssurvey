import React from "react"
import {PropTypes} from "prop-types"

const GridCell = (props) => {
  let cssProperties = {}
  cssProperties['--start'] = props.start
  cssProperties['--span'] = props.span
  cssProperties['--align'] = props.align
  cssProperties['--row-span'] = props.rowSpan
  cssProperties['--start-md'] = props.startMD
  cssProperties['--span-md'] = props.spanMD
  cssProperties['--align-md'] = props.alignMD
  cssProperties['--row-span-md'] = props.rowSpanMD
  cssProperties['--start-lg'] = props.startLG
  cssProperties['--span-lg'] = props.spanLG
  cssProperties['--align-lg'] = props.alignLG
  cssProperties['--row-span-lg'] = props.rowSpanLG

  return (
    <div className="obj-grid__col" style={cssProperties}>
      {props.children}
    </div>
  )
}

GridCell.defaultProps = {
  start: 1,
  span: 4,
  align: 'top',
  rowSpan: 1,
  startMD: 'var(--start)',
  spanMD: 'var(--span)',
  alignMD: 'var(--align)',
  rowSpanMD: 'var(--row-span)',
  startLG: 'var(--start-md)',
  spanLG: 'var(--span-md)',
  alignLG: 'var(--align-md)',
  rowSpanLG: 'var(--row-span-md)'
}

GridCell.propTypes = {
  children: PropTypes.string.isRequired
}

export default GridCell