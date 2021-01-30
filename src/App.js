import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Navbar from './components/navbar'
import Home from './pages/Home'
import Create from './pages/Create'
import SpiltNFT from './pages/splitNFT'
import NFT from './pages/NFT'



import 'bulma/css/bulma.css'
import './styles/checkbox.css'
import './styles/navbar.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/create">
            <Create />
        </Route>
        <Route path="/splitNFT">
          <SpiltNFT />
        </Route>
        <Route path="/nft/:index">
          <NFT />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
