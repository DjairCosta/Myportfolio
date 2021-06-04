
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
import Admin from './pages/Admin'

// Global Style
import GlobalStyle from './components/GlobalStyle'
import Nav from './components/Nav'

//Roteamento
import { Route, Switch, useLocation } from 'react-router-dom'


function App() {
  const location = useLocation()
  library.add(fab, fas)
  return (
    <div>
      <GlobalStyle />
      {location.pathname !== '/admin' && <Nav />}
      <Switch>
        <Route exact path="/" component={AboutUs} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={ContactMe} />
        <Route path="/admin" component={Admin} />

      </Switch>
    </div>
  );
}

export default App
