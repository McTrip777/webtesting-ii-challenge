import React from 'react'

const Display = (props) => {
  return (
    <div>
      <h2>Balls: {props.balls}</h2>
      <h2>Strikes: {props.strikes}</h2>
      <h2>Outs: {props.outs}</h2>
    </div>
  )
}

export default Display
