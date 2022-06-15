import React from "react"
import PropTypes from "prop-types"
import Animate from "./animate"

const Gauge = ({ number, title, size }) => {
  let customProp = {}
  customProp['--gauge-value'] = number ? number : null;
  const percentClass = size ? 'cmp-gauge__percent cmp-gauge__percent--large' : 'cmp-gauge__percent';
  return (
    <Animate type="grow">
      <div className="cmp-gauge" aria-label={`${title} ${number} percent`}>
        <div className="cmp-gauge__value" style={customProp}>
          <div className={percentClass}>{number}%</div>
        </div>
        <div className="cmp-gauge__title">
          {title}
        </div>
      </div>
    </Animate>
  )
}

Gauge.propTypes = {
  number: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  size: PropTypes.node,
}

export default Gauge
