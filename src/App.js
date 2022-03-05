import './assets/styles/styles.css'
import Header from './assets/components/Header/Header'
import Main from './assets/components/Body/Main'
import Footer from './assets/components/Footer/Footer'
import Support from './assets/components/Popup/Support'
import Thanks from './assets/components/Popup/Thanks'

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
      {/* <div className="overlay"></div> */}
      {/* <Support /> */}
      <Thanks />
    </div>
  );
}

export default App;

/*
TO-DO
1. Design desktop layout (w/o pop-ups yet)
2. Figure out where to place the different states
3. Rename some of the classes (card__ gets too repetitive)
*/