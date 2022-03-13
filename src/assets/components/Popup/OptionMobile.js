import React from 'react'
import {useEffect} from 'react'

const OptionMobile = ({id, rewardId, setRewardId, heading, 
                 pledge, left, description, amount,
                setAmount, backers, setBackers, 
                stocks, setStocks, setShowThanks}) => {

    // Ensure that ID's being checked are from 0 to 3
    // since buttons in main card set them from 0 to 3
    // but some buttons in support popup are from 4 to 7
    const handleClick= (e) => {
        setRewardId(e.target.id % 4);
    }
  
    const handleSubmission = (e) => {
        e.preventDefault();

    // Only selects one element
    const input = document.querySelector(".payment__input--mobile");

    // Do a check to see if amount is at least minimum pledge
    if (Number(input.value) >= pledge) {
        setAmount(amount+Number(input.value));
        setBackers(backers+1);
        setRewardId(-1);
        setShowThanks(true);
        
        // Decrease stock
        let key = Object.keys(stocks)[(id % 4)-1];
        setStocks({...stocks, [key]: stocks[key]-1});
    } else {
        input.style.borderColor = "salmon";
    }
  }

  useEffect(() => {

    // Make radio button clicked when corresponding reward 
    // button is clicked
    const buttons = document.querySelectorAll(".option__rinput--mobile");
    buttons.forEach(button => {
        if (button.id % 4 == rewardId) {
            button.checked = true;
        }
    })

    // Update container border when clicked
    const containers = document.querySelectorAll(".option");
    containers.forEach((container) => {
        container.firstChild.id % 4 == rewardId?
        container.classList.add("option--clicked"):
        container.classList.remove("option--clicked");
    });
  });

  return (
    <label className={left == "0"? "option option--out": "option"} >
        <input 
        className="option__rinput--mobile"
        type="radio" 
        name="radio" 
        disabled={left=="0"} 
        id={id}
        onClick={handleClick} />
        <span 
        className={left == "0"? "option__radio option__radio--out": "option__radio"} />
        {
            pledge == "0" ?
            <h4 className="option__header option__header--none">
                    {heading}
            </h4> : 
            <div 
            className={left == "0"?
            "option__header option__header--pledge option__header--out":
            "option__header option__header--pledge"
            }>
                <div className="option__header-container option__header-container--mobile">
                    <h4 className="option__heading">
                        {heading} 
                    </h4>
                    <p className="option__pledge">
                        Pledge ${pledge} or more
                    </p>
                </div>
            </div>
        }
        <p className="option__description">
            {description}
        </p>
        {
            pledge != 0?
            <p className="option__left">
                {left} <span>left</span>
            </p>:''
        }
        {
            id % 4 == rewardId?
            <div className="payment">
                <div className="payment__hline"></div>
                <div className="payment__container">
                    <p className="payment__par">
                        Enter your pledge
                    </p>
                    <form 
                    className="payment__form"
                    onSubmit={handleSubmission}>
                        <input 
                        type="text" 
                        className="payment__input payment__input--mobile" 
                        placeholder={pledge}/>
                        <button 
                        type="submit" 
                        className="payment__submit">
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

OptionMobile.defaultProps = {
    left: ""
}

export default OptionMobile