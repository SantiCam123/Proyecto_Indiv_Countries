import React from 'react';
import {Route} from 'react-router-dom';
import Home from './Components/Home.jsx';
import LandingPage from './Components/Landing_Page.jsx';
import Nav from './Components/Nav.jsx';
import Create from './Components/Create.jsx'

function App() {
  return (
    <div>
      <Route exact path={'/'} component={LandingPage}/>
      <Route path={['/home', '/activity']} component={Nav} />
      <Route path={'/activity'} component={Create} />
      <Route exact path={'/home'} component={Home}/>
    </div>
  );
}

export default App;
