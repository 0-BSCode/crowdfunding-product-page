import React from 'react'
import Stat from './Stat'
import Tracker from './Tracker'

const Progress = ({amount, backers}) => {
  // Format function that adds comma to numerical input
  const formatNumber = (number) => {
    let num = number.toString()
    let result = ""
    let ctr = 0;

    for (let i=num.length - 1; i >= 0; i--) {
      if (ctr == 3) {
        result += `,${num[i]}`;
        ctr = 1;
      } else {
        result += num[i];
        ctr++;
      }
    }
    
    return result.split('').reverse().join('');
  }

  return (
    <section className="progress">
        <div className="progress__stats">
            <Stat 
            figure={"$"+formatNumber(amount)} 
            description={"of $100,000 backed"} />
            <div className="progress__vline" />
            <Stat 
            figure={formatNumber(backers)} 
            description={"total backers"} />
            <div className="progress__vline" />
            <Stat 
            figure={"56"} 
            description={"days left"} />
        </div>
        <Tracker amount={amount} />
    </section>
  )
}

export default Progress