import React from "react"
import PropTypes from "prop-types"

const NumberBlock = ({ number, title, size }) => {
  const sizeSet = size ? size : 'small';
  const cmpMod = sizeSet ? ` cmp-number--${sizeSet}` : '';
  const valueMod = sizeSet ? ` cmp-number__value--${sizeSet}` : '';
  const titleMod = sizeSet ? ` cmp-number__title--${sizeSet}` : '';
  return (
    <div data-animation="fade" className={`cmp-number${cmpMod}`} aria-label={`${title} ${number}`}>
      <div className={`cmp-number__value${valueMod}`}>
        {number}
      </div>
      <div className={`cmp-number__title${titleMod}`} dangerouslySetInnerHTML={{__html:title}} />
    </div>
  )
}

NumberBlock.propTypes = {
  number: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  size: PropTypes.node
}

export default NumberBlock
