import React from 'react'

import './CounterControl.css'

const CounterControl = (props) => (
  <div className="counter-control" onClick={props.clicked}>
    {props.label}
  </div>
)

export default CounterControl
