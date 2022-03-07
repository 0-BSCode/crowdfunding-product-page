import React, { useEffect } from 'react'

const Option = ({id, rewardId, setRewardId, heading, 
                 pledge, left, description, amount,
                setAmount, backers, setBackers, 
                stocks, setStocks, setShowThanks}) => {

  const handleClick= (e) => {
    setRewardId(e.target.id);
  }
  
  const handleSubmission = (e) => {
    e.preventDefault();

    // Only selects one element
    const input = document.querySelector(".payment__input");

    // Do a check to see if amount is at least minimum pledge
    if (input.value >= pledge) {
        setAmount(amount+Number(input.value));
        setBackers(backers+1);
        setRewardId(-1);
        setShowThanks(true);
        
        // Decrease stock
        let key = Object.keys(stocks)[id-1];
        setStocks({...stocks, [key]: stocks[key]-1});
    } else {
        input.style.borderColor = "salmon";
    }
  }

  useEffect(() => {

    // Make radio button clicked when corresponding reward 
    // button is clicked
    const buttons = document.querySelectorAll(".option__radio");
    buttons.forEach(button => {
        if (button.id == rewardId) {
            button.checked = true;
        }
    })

    // Update container border when clicked
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
        className="option__radio"
        type="radio" 
        name="radio" 
        disabled={left=="0"} 
        id={id}
        onClick={handleClick}/>
        <span className="option__radio"></span>
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
                    <form 
                    className="payment__form"
                    onSubmit={handleSubmission}>
                        <input 
                        type="text" 
                        className="payment__input" 
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

Option.defaultProps = {
    left: ""
}

export default Option