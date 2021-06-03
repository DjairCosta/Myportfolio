
import React from 'react'

// Icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'


//  About
import AboutUs from './pages/AboutUs'
import Portfolio from './pages/Portfolio'
import PortfolioDetail from './components/PortfolioDetail'
import ContactMe from './pages/ContactMe'

// Global Style
import GlobalStyle from './components/GlobalStyle'
import Nav from './components/Nav'

//Roteamento
import { Route, Switch } from 'react-router-dom'


function App() {
  library.add(fab, fas)
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route exact path="/">
          <AboutUs />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/contact">
          <ContactMe />
        </Route>
      </Switch>
    </div>
  );
}

export default App
