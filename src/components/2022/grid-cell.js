import React from "react"
import {PropTypes} from "prop-types"

const GridCell = (props) => {
  let customClasses = (props.className != null) ? ` ${props.className}` : ''
  let cssProperties = {}
  cssProperties['--start'] = props.start ?? null
  cssProperties['--span'] = props.span ?? null
  cssProperties['--align'] = props.align ?? null
  cssProperties['--row-span'] = props.rowSpan ?? null
  cssProperties['--row-start'] = props.rowStart ?? null
  cssProperties['--order'] = props.order ?? null
  cssProperties['--position'] = props.position ?? null
  cssProperties['--top'] = props.top ?? null
  
  cssProperties['--start-sm'] = props.startSM ?? null
  cssProperties['--span-sm'] = props.spanSM ?? null
  cssProperties['--align-sm'] = props.alignSM ?? null
  cssProperties['--row-span-sm'] = props.rowSpanSM ?? null
  cssProperties['--row-start-sm'] = props.rowStartSM ?? null
  cssProperties['--order-sm'] = props.orderSM ?? null
  cssProperties['--position-sm'] = props.positionSM ?? null
  cssProperties['--top-sm'] = props.topSM ?? null

  cssProperties['--start-md'] = props.startMD ?? null
  cssProperties['--span-md'] = props.spanMD ?? null
  cssProperties['--align-md'] = props.alignMD ?? null
  cssProperties['--row-span-md'] = props.rowSpanMD ?? null
  cssProperties['--row-start-md'] = props.rowStartMD ?? null
  cssProperties['--order-md'] = props.orderMD ?? null
  cssProperties['--position-md'] = props.positionMD ?? null
  cssProperties['--top-md'] = props.topMD ?? null

  cssProperties['--start-lg'] = props.startLG ?? null
  cssProperties['--span-lg'] = props.spanLG ?? null
  cssProperties['--align-lg'] = props.alignLG ?? null
  cssProperties['--row-span-lg'] = props.rowSpanLG ?? null
  cssProperties['--row-start-lg'] = props.rowStartLG ?? null
  cssProperties['--order-lg'] = props.orderLG ?? null
  cssProperties['--position-lg'] = props.positionLG ?? null
  cssProperties['--top-lg'] = props.topLG ?? null
  
  return (
    <div className={`obj-grid__col${customClasses}`} style={cssProperties}>
      {props.children}
    </div>
  )
}

GridCell.propTypes = {
  children: PropTypes.node.isRequired
}

export default GridCell
