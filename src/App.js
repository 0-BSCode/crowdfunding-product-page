import './assets/styles/styles.css'
import Header from './assets/components/Header/Header'
import Main from './assets/components/Body/Main'
import Footer from './assets/components/Footer/Footer'
import Support from './assets/components/Popup/Support'
import Thanks from './assets/components/Popup/Thanks'
import Link from './assets/components/Header/Link'
import Menu from './assets/components/Header/Menu'
import {useState} from 'react'

function App() {

  const [showMenu, setShowMenu] = useState(false);
  const [rewardBtnId, setRewardBtnId] = useState(-1);
  const [amount, setAmount] = useState(89914);
  const [backers, setBackers] = useState(5007);
  const [showThanks, setShowThanks] = useState(false);
  const [stocks, setStocks] = useState({Bamboo: 101, Black: 64, Mahogany: 0})

  return (
    <div className="app">
      <Header 
      showMenu={showMenu}
      setShowMenu={setShowMenu} />
      <Main
      amount={amount}
      backers={backers}
      stocks={stocks}
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
          stocks={stocks}
          setStocks={setStocks}
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
      {showMenu?
        <>
          <div className="overlay" />
          <Menu />
        </>: ''
      }
    </div>
  );
}

export default App;