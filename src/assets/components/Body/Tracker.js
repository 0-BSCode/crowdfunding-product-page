import React from 'react'

const Tracker = ({amount}) => {
  return (
    <div className="progress__tracker">
        <input 
        type="range" 
        min="1" 
        max="100000" 
        value={amount} 
        className="progress__slider" />
    </div>
  )
}

export default Tracker

{/* <div className="progress__tracker">
<input type="range" min="1" max="100000" value="89914" className="progress__slider" />
</div> */}