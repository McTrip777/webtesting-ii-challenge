import React from 'react'

const Dashboard = (props) => {
  return (
    <div>
      <button onClick={props.onStrike}>Strike</button>
      <button onClick={props.onBall}>Ball</button>
      <button onClick={props.onFoul}>Foul</button>
      <button onClick={props.onHit}>Hit</button>
    </div>
  )
}

export default Dashboard
