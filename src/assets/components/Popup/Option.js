import React, { useEffect } from 'react'

const Option = ({id, rewardId, setRewardId, 
                heading, pledge, left, description}) => {

  const handleClick= (e) => {
    setRewardId(e.target.id);
  }

  useEffect(() => {
    const containers = document.querySelectorAll(".option");
    containers.forEach((container) => {
        container.firstChild.id == rewardId?
        container.classList.add("option--clicked"):
        container.classList.remove("option--clicked");
    });
  });

  return (
    <label className={left == "0"? "option option--out": "option"} >
        <input 
        type="radio" 
        name="radio" 
        disabled={left=="0"} 
        id={id}
        onClick={handleClick}/>
        <span className="option__radio"></span>
        {
            pledge == "" ?
            <h4 className="option__header option__header--none">
                    {heading}
            </h4> : 
            <div 
            className={left == "0"?
            "option__header option__header--pledge option__header--out":
            "option__header option__header--pledge"
            }>
                <div className="option__header-container">
                    <h4 className="option__heading">
                        {heading} 
                    </h4>
                    <p className="option__pledge">
                        Pledge ${pledge} or more
                    </p>
                </div>
                <p className="option__left">
                    {left} <span>left</span>
                </p>
            </div>
        }
        <p className="option__description">
            {description}
        </p>
        {
            id == rewardId?
            <div className="payment">
                <div className="payment__hline"></div>
                <div className="payment__container">
                    <p className="payment__par">
                        Enter your pledge
                    </p>
                    <form className="payment__form">
                        <input type="text" className="payment__input" value={pledge}/>
                        <button type="submit" className="payment__submit">
                            Continue
                        </button>
                    </form>
                </div>
            </div>:
            ''
        }
    </label>
  )
}

Option.defaultProps = {
    pledge: "0",
    left: ""
}

export default Option


{/*         <label className="option">
                <input type="radio" name="radio"/>
                <span className="option__radio"></span>
                <h4 className="option__header option__header--none">
                    Pledge with no reward
                </h4>
                <p className="option__description">
                    Choose to support us without a reward if you simply believe in our project. As a backer, 
                    you will be signed up to receive product updates via email.
                </p>
                <div className="payment">
                    <div className="payment__hline"></div>
                    <div className="payment__container">
                        <p className="payment__par">
                            Enter your pledge
                        </p>
                        <form className="payment__form">
                            <input type="text" className="payment__input"/>
                            <button type="submit" className="payment__submit">
                                Continue
                            </button>
                        </form>
                    </div>
                    </div>
            </label>
            <label className="option">
                <input type="radio" name="radio" />
                <span className="option__radio"></span>
                <div className="option__header option__header--pledge">
                    <div className="option__header-container">
                        <h4 className="option__heading">
                            Bamboo Stand 
                        </h4>
                        <p className="option__pledge">
                            Pledge $25 or more
                        </p>
                    </div>
                    <p className="option__left">
                        101 <span>left</span>
                    </p>
                </div>
                <p className="option__description">
                    You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
                    you’ll be added to a special Backer member list.
                </p>
                <div className="payment">
                    <div className="payment__hline"></div>
                    <div className="payment__container">
                        <p className="payment__par">
                            Enter your pledge
                        </p>
                        <form className="payment__form">
                            <input type="text" className="payment__input" value="25"/>
                            <button type="submit" className="payment__submit">
                                Continue
                            </button>
                        </form>
                    </div>
                </div>
            </label> */}