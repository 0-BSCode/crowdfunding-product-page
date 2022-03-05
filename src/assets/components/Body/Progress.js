import React from 'react'
import Stat from './Stat'
import Tracker from './Tracker'

const Progress = () => {
  // Format amount function that adds comma in amount donated

  return (
    <section className="progress">
        <div className="progress__stats">
            <Stat figure={"$"+"89,914"} description={"of $100,000 backed"} />
            <div className="progress__vline" />
            <Stat figure={"5007"} description={"total backers"} />
            <div className="progress__vline" />
            <Stat figure={"56"} description={"days left"} />
        </div>
        <Tracker amount={89914} />
    </section>
  )
}

export default Progress