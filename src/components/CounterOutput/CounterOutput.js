import React from 'react'

import './CounterOutput.css'

const CounterOutput = (props) => (
  <div className="counter-output">شمارنده: {props.value}</div>
)

export default CounterOutput
