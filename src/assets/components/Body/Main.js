import React from 'react'
import Title from './Title'
import Progress from './Progress'
import About from './About'

const Main = ({rewardId, setRewardId}) => {
  return (
    <main className="container">
        <Title />
        <Progress />
        <About 
        rewardId={rewardId}
        setRewardId={setRewardId} />
    </main>
  )
}

export default Main