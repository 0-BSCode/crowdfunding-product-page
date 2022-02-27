import React from 'react'

const Support = () => {
  return (
    <section className="card__support">
        <h3 className="card__support-header">
            Back this project
        </h3>
        <p className="card__support-description">
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
        </p>
        <div className="card__options">
            <label className="card__option card__pledge-none">
                <input type="radio" name="radio"/>
                <span className="card__custom-radio"></span>
                <h4 className="card__option-header">
                    Pledge with no reward
                </h4>
                <p className="card__option-description">
                    Choose to support us without a reward if you simply believe in our project. As a backer, 
                    you will be signed up to receive product updates via email.
                </p>
                <div className="card__hline"></div>
                <div className="card__payment">
                    <p className="card__payment-par">
                        Enter your pledge
                    </p>
                    <input type="text" className="card__payment-input"/>
                    <button className="card__payment-submit">
                        Continue
                    </button>
                </div>
            </label>
            <label className="card__option card__pledge-normal">
                <input type="radio" name="radio" />
                <span className="card__custom-radio"></span>
                <div className="card__option-header">
                    <h4 className="card__option-heading">
                        Bamboo Stand
                    </h4>
                    <p className="card__option-pledge">
                        Pledge $25 or more
                    </p>
                    <p className="card__option-left">
                        101 <span>left</span>
                    </p>
                </div>
                <p className="card__option-description">
                    You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
                    you’ll be added to a special Backer member list.
                </p>
                <div className="card__hline"></div>
                <div className="card__payment">
                    <p className="card__payment-par">
                        Enter your pledge
                    </p>
                    <input type="text" className="card__payment-input"/>
                    <button className="card__payment-submit">
                        Continue
                    </button>
                </div>
            </label>
            <label className="card__option card__pledge-premium">
                <input type="radio" name="radio" />
                <span className="card__custom-radio"></span>
                <div className="card__option-header">
                    <h4 className="card__option-heading">
                        Black Edition Stand
                    </h4>
                    <p className="card__option-pledge">
                        Pledge $75 or more
                    </p>
                    <p className="card__option-left">
                        64 <span>left</span>
                    </p>
                </div>
                <p className="card__option-description">
                    You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
                    member list. Shipping is included.
                </p>
                <div className="card__hline"></div>
                <div className="card__payment">
                    <p className="card__payment-par">
                        Enter your pledge
                    </p>
                    <input type="text" className="card__payment-input"/>
                    <button className="card__payment-submit">
                        Continue
                    </button>
                </div>
            </label>
            <label className="card__option card__pledge-deluxe">
                <input type="radio" name="radio" />
                <span className="card__custom-radio"></span>
                <div className="card__option-header">
                    <h4 className="card__option-heading">
                        Mahogany Special Stand
                    </h4>
                    <p className="card__option-pledge">
                        Pledge $200 or more
                    </p>
                    <p className="card__option-left">
                        0 <span>left</span>
                    </p>
                </div>
                <p className="card__option-description">
                    You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
                    to our Backer member list. Shipping is included.
                </p>
                <div className="card__hline"></div>
                <div className="card__payment">
                    <p className="card__payment-par">
                        Enter your pledge
                    </p>
                    <input type="text" className="card__payment-input"/>
                    <button className="card__payment-submit">
                        Continue
                    </button>
                </div>
            </label>
        </div>
    </section>
  )
}

export default Support