import React from "react"
import {PropTypes} from "prop-types"

const GridCell = (props) => {
  let customClasses = (props.className != null) ? ` ${props.className}` : ''
  let cssProperties = {}
  cssProperties['--start'] = (props.start) ? props.start : null
  cssProperties['--span'] = (props.span) ? props.span : null
  cssProperties['--align'] = (props.align) ? props.align : null
  cssProperties['--row-span'] = (props.rowSpan) ? props.rowSpan : null
  cssProperties['--row-start'] = (props.rowStart) ? props.rowStart : null
  cssProperties['--order'] = (props.order) ? props.order : null
  cssProperties['--position'] = (props.position) ? props.position : null
  cssProperties['--top'] = (props.top) ? props.top : null
  
  cssProperties['--start-sm'] = (props.startSM) ? props.startSM : null
  cssProperties['--span-sm'] = (props.spanSM) ? props.spanSM : null
  cssProperties['--align-sm'] = (props.alignSM) ? props.alignSM : null
  cssProperties['--row-span-sm'] = (props.rowSpanSM) ? props.rowSpanSM : null
  cssProperties['--row-start-sm'] = (props.rowStartSM) ? props.rowStartSM : null
  cssProperties['--order-sm'] = (props.orderSM) ? props.orderSM : null
  cssProperties['--position-sm'] = (props.positionSM) ? props.positionSM : null
  cssProperties['--top-sm'] = (props.topSM) ? props.topSM : null

  cssProperties['--start-md'] = (props.startMD) ? props.startMD : null
  cssProperties['--span-md'] = (props.spanMD) ? props.spanMD : null
  cssProperties['--align-md'] = (props.alignMD) ? props.alignMD : null
  cssProperties['--row-span-md'] = (props.rowSpanMD) ? props.rowSpanMD : null
  cssProperties['--row-start-md'] = (props.rowStartMD) ? props.rowStartMD : null
  cssProperties['--order-md'] = (props.orderMD) ? props.orderMD : null
  cssProperties['--position-md'] = (props.positionMD) ? props.positionMD : null
  cssProperties['--top-md'] = (props.topMD) ? props.topMD : null

  cssProperties['--start-lg'] = (props.startLG) ? props.startLG : null
  cssProperties['--span-lg'] = (props.spanLG) ? props.spanLG : null
  cssProperties['--align-lg'] = (props.alignLG) ? props.alignLG : null
  cssProperties['--row-span-lg'] = (props.rowSpanLG) ? props.rowSpanLG : null
  cssProperties['--row-start-lg'] = (props.rowStartLG) ? props.rowStartLG : null
  cssProperties['--order-lg'] = (props.orderLG) ? props.orderLG : null
  cssProperties['--position-lg'] = (props.positionLG) ? props.positionLG : null
  cssProperties['--top-lg'] = (props.topLG) ? props.topLG : null
  
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
