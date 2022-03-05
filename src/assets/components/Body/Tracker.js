import React from 'react'

const Tracker = ({amount}) => {

  const handleInput = (e) => {
    console.log("Max: " + e.target.max);
    console.log("Min: " + e.target.min);
    console.log("Val: " + e.target.value);
    const bgColor = 'hsl(0%, 0%, 98%)';
    const fillColor = 'hsl(176, 50%, 47%)';
    let val = Math.floor((e.target.value - e.target.min) / (e.target.max - e.target.min) * 100);
    console.log("Value: " + val)
    e.target.style.backgroundColor = `linear-gradient(to right, 
                          ${fillColor} 0%, 
                          ${fillColor} ${50}%,
                          ${bgColor} ${50}%,
                          ${bgColor} 100%)`
  }

  return (
    <div className="progress__tracker">
        <input 
        type="range" 
        min={0}
        max={100000} 
        value={amount}
        className="progress__slider" 
        onInput={handleInput} />
    </div>
  )
}

export default Tracker