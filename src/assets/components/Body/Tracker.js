import React, { useEffect } from 'react'

const Tracker = ({amount}) => {
  const showProgress = () => {
    const slider = document.querySelector(".progress__slider");
    const bgColor = 'hsl(192, 29%, 97%)';
    const fillColor = 'hsl(176, 50%, 47%)';
    let val = Math.floor((slider.value - slider.min) / (slider.max - slider.min) * 100);
    slider.style.background = `linear-gradient(to right, 
                          ${fillColor} 0%, 
                          ${fillColor} ${val}%,
                          ${bgColor} ${val}%,
                          ${bgColor} 100%)`;
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    showProgress();
  })

  useEffect(() => showProgress);

  return (
    <div className="progress__tracker">
        <input
        type="range" 
        min={0}
        max={100000} 
        value={amount}
        className="progress__slider" />
    </div>
  )
}

export default Tracker