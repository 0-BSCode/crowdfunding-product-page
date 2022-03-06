import './assets/styles/styles.css'
import Header from './assets/components/Header/Header'
import Main from './assets/components/Body/Main'
import Footer from './assets/components/Footer/Footer'
import Support from './assets/components/Popup/Support'
import Thanks from './assets/components/Popup/Thanks'
import {useState, useEffect} from 'react'

function App() {

  const [rewardBtnId, setRewardBtnId] = useState(-1);
  const [amount, setAmount] = useState(89914);
  const [backers, setBackers] = useState(5007);
  const [showThanks, setShowThanks] = useState(false);

  useEffect(() => { 
    console.log(rewardBtnId);
  })

  return (
    <div className="app">
      <Header />
      <Main
      amount={amount}
      backers={backers}
      setRewardId={setRewardBtnId} />
      <Footer />
      {
        rewardBtnId != -1 ?
        <>
          <div className="overlay" />
          <Support 
          rewardId={rewardBtnId}
          setRewardId={setRewardBtnId}
          amount={amount}
          setAmount={setAmount}
          backers={backers}
          setBackers={setBackers}
          setShowThanks={setShowThanks} />
        </>:''
      }
      {showThanks?
       <>
        <div className="overlay" />
        <Thanks 
        setShowThanks={setShowThanks} />
       </>: ''
      }
    </div>
  );
}

export default App;

/*
Stuff I need to keep track of
1. Number of each stand left
  - Block out options if it's out of stock
2. 
*/