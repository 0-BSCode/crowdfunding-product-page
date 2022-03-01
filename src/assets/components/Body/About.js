import React from 'react'

const About = () => {
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
            <div className="reward">
                <div className="reward__title">
                    <h4 className="reward__header">
                        Bamboo Stand
                    </h4>
                    <p className="reward__criteria">
                        Pledge $25 or more
                    </p>
                </div>
                <div className="reward__description">
                    You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
                    you’ll be added to a special Backer member list.
                </div>
                <div className="reward__footer">
                    <p className="reward__left">
                        101 <span>left</span>
                    </p>
                    <button className="reward__select">
                        Select Reward
                    </button>
                </div>
            </div>
            <div className="reward">
                <div className="reward__title">
                    <h4 className="reward__header">
                        Black Edition Stand
                    </h4>
                    <p className="reward__criteria">
                        Pledge $75 or more
                    </p>
                </div>
                <div className="reward__description">
                    You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
                    member list. Shipping is included.
                </div>
                <div className="reward__footer">
                    <p className="reward__left">
                        64 <span>left</span>
                    </p>
                    <button className="reward__select">
                        Select Reward
                    </button>
                </div>
            </div>
            <div className="reward">
                <div className="reward__title">
                    <h4 className="reward__header">
                        Mahogany Special Edition
                    </h4>
                    <p className="reward__criteria">
                        Pledge $200 or more
                    </p>
                </div>
                <div className="reward__description">
                    You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
                    to our Backer member list. Shipping is included.
                </div>
                <div className="reward__footer">
                    <p className="reward__left">
                        0 <span>left</span>
                    </p>
                    <button className="reward__select">
                        Out of Stock
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About