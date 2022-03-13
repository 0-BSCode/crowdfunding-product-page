import React from 'react'
import Option from './Option'
import OptionMobile from './OptionMobile'

const Options = ({rewardId, setRewardId, 
                  amount, setAmount, 
                  backers, setBackers, 
                  stocks, setStocks, setShowThanks}) => {

  return (
    <>
      <div className="support__options support__options--desktop">
        <Option
        id="0"
        rewardId={rewardId}
        setRewardId={setRewardId}
        heading="Pledge with no reward"
        pledge="0"
        description="Choose to support us without a reward if 
        you simply believe in our project. As a backer, you 
        will be signed up to receive product updates via email." 
        amount={amount}
        setAmount={setAmount} 
        backers={backers}
        setBackers={setBackers} 
        stocks={stocks}
        setStocks={setStocks}
        setShowThanks={setShowThanks} />
        <Option
        id="1"
        rewardId={rewardId}
        setRewardId={setRewardId}
        heading="Bamboo Stand"
        pledge="25"
        left={stocks["Bamboo"]}
        description="You get an ergonomic stand made of natural 
        bamboo. You've helped us launch our promotional campaign, 
        and you’ll be added to a special Backer member list." 
        amount={amount}
        setAmount={setAmount} 
        backers={backers}
        setBackers={setBackers}
        stocks={stocks}
        setStocks={setStocks}
        setShowThanks={setShowThanks} />
        <Option
        id="2"
        rewardId={rewardId}
        setRewardId={setRewardId}
        heading="Black Edition Stand"
        pledge="75"
        left={stocks["Black"]}
        description="You get a Black Special Edition computer 
        stand and a personal thank you. You’ll be added to our 
        Backer member list. Shipping is included." 
        amount={amount}
        setAmount={setAmount} 
        backers={backers}
        setBackers={setBackers}
        stocks={stocks}
        setStocks={setStocks}
        setShowThanks={setShowThanks} />
        <Option
        id="3"
        rewardId={rewardId}
        setRewardId={setRewardId}
        heading="Mahogany Special Stand"
        pledge="200"
        left={stocks["Mahogany"]}
        description="You get two Special Edition Mahogany stands, 
        a Backer T-Shirt, and a personal thank you. You’ll be added
        to our Backer member list. Shipping is included." 
        amount={amount}
        setAmount={setAmount} 
        backers={backers}
        setBackers={setBackers}
        stocks={stocks}
        setStocks={setStocks}
        setShowThanks={setShowThanks} />
      </div>
      <div className="support__options support__options--mobile">
        <OptionMobile
        id="4"
        rewardId={rewardId}
        setRewardId={setRewardId}
        heading="Pledge with no reward"
        pledge="0"
        description="Choose to support us without a reward if 
        you simply believe in our project. As a backer, you 
        will be signed up to receive product updates via email." 
        amount={amount}
        setAmount={setAmount} 
        backers={backers}
        setBackers={setBackers} 
        stocks={stocks}
        setStocks={setStocks}
        setShowThanks={setShowThanks} />
        <OptionMobile
        id="5"
        rewardId={rewardId}
        setRewardId={setRewardId}
        heading="Bamboo Stand"
        pledge="25"
        left={stocks["Bamboo"]}
        description="You get an ergonomic stand made of natural 
        bamboo. You've helped us launch our promotional campaign, 
        and you’ll be added to a special Backer member list." 
        amount={amount}
        setAmount={setAmount} 
        backers={backers}
        setBackers={setBackers}
        stocks={stocks}
        setStocks={setStocks}
        setShowThanks={setShowThanks} />
        <OptionMobile
        id="6"
        rewardId={rewardId}
        setRewardId={setRewardId}
        heading="Black Edition Stand"
        pledge="75"
        left={stocks["Black"]}
        description="You get a Black Special Edition computer 
        stand and a personal thank you. You’ll be added to our 
        Backer member list. Shipping is included." 
        amount={amount}
        setAmount={setAmount} 
        backers={backers}
        setBackers={setBackers}
        stocks={stocks}
        setStocks={setStocks}
        setShowThanks={setShowThanks} />
        <OptionMobile
        id="7"
        rewardId={rewardId}
        setRewardId={setRewardId}
        heading="Mahogany Special Stand"
        pledge="200"
        left={stocks["Mahogany"]}
        description="You get two Special Edition Mahogany stands, 
        a Backer T-Shirt, and a personal thank you. You’ll be added
        to our Backer member list. Shipping is included." 
        amount={amount}
        setAmount={setAmount} 
        backers={backers}
        setBackers={setBackers}
        stocks={stocks}
        setStocks={setStocks}
        setShowThanks={setShowThanks} />
      </div>
    </>
  )
}

export default Options