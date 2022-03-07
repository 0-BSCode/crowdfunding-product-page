import React from 'react'
import exit from '../../images/icon-close-modal.svg'
import Options from './Options'

const Support = ({rewardId, setRewardId, 
                  amount, setAmount, 
                  backers, setBackers,
                  stocks, setStocks, setShowThanks}) => {

  const unshowPopup = () => setRewardId(-1);

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
        <Options 
        rewardId={rewardId}
        setRewardId={setRewardId} 
        amount={amount}
        setAmount={setAmount}
        backers={backers}
        setBackers={setBackers}
        stocks={stocks}
        setStocks={setStocks}
        setShowThanks={setShowThanks} />
    </section>
  )
}

export default Support