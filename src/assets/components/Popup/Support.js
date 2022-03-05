import React from 'react'
import exit from '../../images/icon-close-modal.svg'
import Option from './Option'

const Support = ({resetRewardId}) => {

  const unshowPopup = () => resetRewardId(-1);

  return (
    <section className="support">
        <button className="support__exit" onClick={unshowPopup}>
            <img className="support__exit-img" alt="Exit" src={exit} />
        </button>
        <h3 className="support__header">
            Back this project
        </h3>
        <p className="support__description">
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
        </p>
        <div className="support__options">
            <Option
            heading="Pledge with no reward"
            description="Choose to support us without a reward if 
            you simply believe in our project. As a backer, you 
            will be signed up to receive product updates via email." />
            <Option
            heading="Bamboo Stand"
            pledge="25"
            left="101"
            description="You get an ergonomic stand made of natural 
            bamboo. You've helped us launch our promotional campaign, 
            and you’ll be added to a special Backer member list." />
            <Option
            heading="Black Edition Stand"
            pledge="75"
            left="64"
            description="You get a Black Special Edition computer 
            stand and a personal thank you. You’ll be added to our 
            Backer member list. Shipping is included." />
            <Option
            heading="Mahogany Special Stand"
            pledge="200"
            left="0"
            description="You get two Special Edition Mahogany stands, 
            a Backer T-Shirt, and a personal thank you. You’ll be added
            to our Backer member list. Shipping is included." />
        </div>
    </section>
  )
}

export default Support