import React from 'react'
import Title from './Title'
import Progress from './Progress'
import About from './About'

const Main = ({setRewardId}) => {
  return (
    <main className="container">
        <Title setRewardId={setRewardId} />
        <Progress />
        <About setRewardId={setRewardId} />
    </main>
  )
}

export default Main