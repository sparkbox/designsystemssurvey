import React from "react"
import PropTypes from "prop-types"

const Grid = (props) => {
  let customClasses = (props.className != null) ? `obj-grid ${props.className}` : 'obj-grid'
  let cssProperties = {}
  cssProperties['--gap'] = (props.gap) ? `var(--space-${props.gap})` : null
   cssProperties['--gap-row'] = (props.gapRow) ? `var(--space-${props.gapRow})`:  null
  cssProperties['--gap-col'] = (props.gapCol) ? `var(--space-${props.gapCol})`:  null
  cssProperties['--gap-md'] = (props.gapMD) ? `var(--space-${props.gapMD})`: null
  cssProperties['--gap-row-md'] = (props.gapRowMD) ? `var(--space-${props.gapRowMD})`: null
  cssProperties['--gap-col-md'] = (props.gapColMD) ? `var(--space-${props.gapColMD})`: null
  cssProperties['--gap-lg'] = (props.gapLG) ? `var(--space-${props.gapLG})`: null
  cssProperties['--gap-row-lg'] = (props.gapRowLG) ? `var(--space-${props.gapRowLG})`: null
  cssProperties['--gap-col-lg'] = (props.gapColLG) ? `var(--space-${props.gapColLG})`: null

  return (
    <div className={customClasses} style={cssProperties}>
      {props.children}
    </div>
  )
}

Grid.defaultProps = {
  className: null,
}

Grid.propTypes = {
  children: PropTypes.node.isRequired
}

export default Grid