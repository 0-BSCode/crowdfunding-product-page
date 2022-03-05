import React from 'react'
import Option from './Option'

const Options = ({rewardId, setRewardId}) => {

  return (
    <div className="support__options">
        <Option
        id="0"
        rewardId={rewardId}
        setRewardId={setRewardId}
        heading="Pledge with no reward"
        description="Choose to support us without a reward if 
        you simply believe in our project. As a backer, you 
        will be signed up to receive product updates via email." />
        <Option
        id="1"
        rewardId={rewardId}
        setRewardId={setRewardId}
        heading="Bamboo Stand"
        pledge="25"
        left="101"
        description="You get an ergonomic stand made of natural 
        bamboo. You've helped us launch our promotional campaign, 
        and you’ll be added to a special Backer member list." />
        <Option
        id="2"
        rewardId={rewardId}
        setRewardId={setRewardId}
        heading="Black Edition Stand"
        pledge="75"
        left="64"
        description="You get a Black Special Edition computer 
        stand and a personal thank you. You’ll be added to our 
        Backer member list. Shipping is included." />
        <Option
        id="3"
        rewardId={rewardId}
        setRewardId={setRewardId}
        heading="Mahogany Special Stand"
        pledge="200"
        left="0"
        description="You get two Special Edition Mahogany stands, 
        a Backer T-Shirt, and a personal thank you. You’ll be added
        to our Backer member list. Shipping is included." />
    </div>
  )
}

export default Options