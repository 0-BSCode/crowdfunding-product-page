import React from 'react'

const Progress = () => {
  return (
    <section className="card__progress">
        <div className="card__stats">
            <div className="card__stats-container">
                <h2 className="card__stats-head">
                    $89,914
                </h2>
                <p className="card__stats-subtitle">
                    of $100,000 backed
                </p>
            </div>
            <div className="card__vline"></div>
            <div className="card__stats-container">
                <h2 className="card__stats-head">
                    5,007
                </h2>
                <p className="card__stats-subtitle">
                    total backers
                </p>
            </div>
            <div className="card__vline"></div>
            <div className="card__stats-container">
                <h2 className="card__stats-head">
                    56
                </h2>
                <p className="card__stats-subtitle">
                    days left
                </p>
            </div>
        </div>
        <div className="card__tracker">
            <input type="range" min="1" max="100000" value="89914" className="card__slider" />
        </div>
    </section>
  )
}

export default Progress