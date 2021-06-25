import React from "react"
import {PropTypes} from "prop-types"

const GridCell = (props) => {
  let customClasses = (props.className != null) ? ` ${props.className}` : ''
  let cssProperties = {}
  cssProperties['--start'] = props.start
  cssProperties['--span'] = props.span
  cssProperties['--align'] = props.align
  cssProperties['--row-span'] = props.rowSpan
  cssProperties['--row-start'] = props.rowStart
  cssProperties['--start-md'] = props.startMD
  cssProperties['--span-md'] = props.spanMD
  cssProperties['--align-md'] = props.alignMD
  cssProperties['--row-span-md'] = props.rowSpanMD
  cssProperties['--row-start-md'] = props.rowStartMD
  cssProperties['--start-lg'] = props.startLG
  cssProperties['--span-lg'] = props.spanLG
  cssProperties['--align-lg'] = props.alignLG
  cssProperties['--row-span-lg'] = props.rowSpanLG
  cssProperties['--row-start-lg'] = props.rowStartLG

  return (
    <div className={`obj-grid__col${customClasses}`} style={cssProperties}>
      {props.children}
    </div>
  )
}

GridCell.defaultProps = {
  start: 1,
  span: 4,
  align: 'top',
  rowSpan: 1,
  rowStart: 'auto',
  startMD: 'var(--start)',
  spanMD: 'var(--span)',
  alignMD: 'var(--align)',
  rowSpanMD: 'var(--row-span)',
  rowStartMD: 'var(--row-start)',
  startLG: 'var(--start-md)',
  spanLG: 'var(--span-md)',
  alignLG: 'var(--align-md)',
  rowSpanLG: 'var(--row-span-md)',
  rowStartLG: 'var(--row-start-md)'
}

GridCell.propTypes = {
  children: PropTypes.string.isRequired
}

export default GridCell