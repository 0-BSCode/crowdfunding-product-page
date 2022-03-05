import './assets/styles/styles.css'
import Header from './assets/components/Header/Header'
import Main from './assets/components/Body/Main'
import Footer from './assets/components/Footer/Footer'
import Support from './assets/components/Popup/Support'
import Thanks from './assets/components/Popup/Thanks'
import {useState, useEffect} from 'react'

function App() {

  const [rewardBtnId, setRewardBtnId] = useState(-1);

  return (
    <div className="app">
      <Header 
      rewardId={rewardBtnId} 
      setRewardId={setRewardBtnId}/>
      <Main 
      rewardId={rewardBtnId} 
      setRewardId={setRewardBtnId} />
      <Footer />
      {/* <div className="overlay"></div> */}
      {/* <Support /> */}
      {/* <Thanks /> */}
    </div>
  );
}

export default App;

/*
Stuff I need to keep track of
1. If main's title card button was clicked
  - Show support popup w/ nothing selected by default
2. Progress stats
  - Show amount given, number of backers, and days left (optional)
  - Range slider reflects amount donated
3. If any reward button in above section is selected
  - Show support popup w/ option corresponding to button clicked selected
4. Number of each stand left
  - Block out options if it's out of stock
5. Amount donated
  - Initial value in input = minimum pledge amount
  - Have thanks popup once submit button = clicked
*/