import React from 'react'
import Title from './Title'
import Progress from './Progress'
import About from './About'

const Main = ({amount, backers, setRewardId,
              stocks}) => {
  return (
    <main className="container">
        <Title setRewardId={setRewardId} />
        <Progress amount={amount} backers={backers}/>
        <About setRewardId={setRewardId} stocks={stocks} />
    </main>
  )
}

export default Main