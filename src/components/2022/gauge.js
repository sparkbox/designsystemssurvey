import React from "react"
import PropTypes from "prop-types"

const Gauge = ({ number, title }) => {
  let customProp = {}
  customProp['--gauge-value'] = number ? number : null;
  return (
    <div className="cmp-gauge">
      <div className="cmp-gauge__value" style={customProp}>
        <div className="cmp-gauge__percent">{number}%</div>
      </div>
      <div className="cmp-gauge__title">
        {title}
      </div>
    </div>
  )
}

Gauge.propTypes = {
  number: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
}

export default Gauge
