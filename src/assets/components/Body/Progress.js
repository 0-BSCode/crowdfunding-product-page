import React from 'react'

const Progress = () => {
  return (
    <section className="progress">
        <div className="progress__stats">
            <div className="progress__stat">
                <h2 className="progress__stat-head">
                    $89,914
                </h2>
                <p className="progress__stat-subtitle">
                    of $100,000 backed
                </p>
            </div>
            <div className="progress__vline"></div>
            <div className="progress__stat">
                <h2 className="progress__stat-head">
                    5,007
                </h2>
                <p className="progress__stat-subtitle">
                    total backers
                </p>
            </div>
            <div className="progress__vline"></div>
            <div className="progress__stat">
                <h2 className="progress__stat-head">
                    56
                </h2>
                <p className="progress__stat-subtitle">
                    days left
                </p>
            </div>
        </div>
        <div className="progress__tracker">
            <input type="range" min="1" max="100000" value="89914" className="progress__slider" />
        </div>
    </section>
  )
}

export default Progress