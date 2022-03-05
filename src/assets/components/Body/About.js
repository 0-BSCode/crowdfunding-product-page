import React from 'react'
import Reward from './Reward'

const About = ({setRewardId}) => {
  return (
    <section className="about">
        <h3 className="about__heading">
            About this project
        </h3>
        <p className="about__description">
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
        to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
        your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
        <br/><br/>
        Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
        to allow notepads, pens, and USB sticks to be stored under the stand.
        </p>
        <div className="about__rewards">
            <Reward 
            id="1"
            header="Bamboo Stand" 
            criteria="25"
            description="You get an ergonomic stand made of natural bamboo. You've 
            helped us launch our promotional campaign, and you’ll be added to a special 
            Backer member list."
            left="101"
            setRewardId={setRewardId} />
            <Reward 
            id="2"
            header="Black Edition Stand" 
            criteria="75"
            description="You get a Black Special Edition computer stand and a personal 
            thank you. You’ll be added to our Backer member list. Shipping is included."
            left="64" 
            setRewardId={setRewardId} />
            <Reward 
            id="3"
            header="Mahogany Special Edition" 
            criteria="200"
            description="You get two Special Edition Mahogany stands, a Backer T-Shirt, 
            and a personal thank you. You’ll be added to our Backer member list. Shipping 
            is included."
            left="0" 
            setRewardId={setRewardId} />
        </div>
    </section>
  )
}

export default About