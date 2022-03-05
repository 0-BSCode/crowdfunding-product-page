import React from 'react'

const Stat = ({figure, description}) => {
  return (
    <div className="progress__stat">
        <h2 className="progress__stat-head">
            {figure}
        </h2>
        <p className="progress__stat-subtitle">
            {description}
        </p>
    </div>
  )
}

export default Stat