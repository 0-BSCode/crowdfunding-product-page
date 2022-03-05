import React from 'react'
import Title from './Title'
import Progress from './Progress'
import About from './About'

const Main = ({amount, backers, setRewardId}) => {
  return (
    <main className="container">
        <Title setRewardId={setRewardId} />
        <Progress amount={amount} backers={backers}/>
        <About setRewardId={setRewardId} />
    </main>
  )
}

export default Main