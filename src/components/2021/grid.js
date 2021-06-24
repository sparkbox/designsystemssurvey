import React from "react"
import PropTypes from "prop-types"

const Grid = (props) => {
  let customClasses = (props.className != null) ? ` ${props.className}` : ''
  let cssProperties = {}
  cssProperties['--row-gap'] = props.rowGap
  cssProperties['--row-gap-md'] = props.rowGapMD
  cssProperties['--row-gap-lg'] = props.rowGapLG

  

  return (
    <div className={`obj-grid${customClasses}`} style={cssProperties}>
      {props.children}
    </div>
  )
}

Grid.defaultProps = {
  className: null,
  rowGap: 0,
  rowGapMD: 'var(--row-gap)',
  rowGapLG: 'var(--row-gap-md)',
}

Grid.propTypes = {
  children: PropTypes.string.isRequired
}

export default Grid