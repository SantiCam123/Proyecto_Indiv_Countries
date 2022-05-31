import React from 'react';
import {Route} from 'react-router-dom';
import Home from './Components/Home.jsx';
import LandingPage from './Components/Landing_Page.jsx';

function App() {
  return (
    <div>
      <Route exact path={'/'} component={LandingPage}/>
      <Route exact path={'/home'} component={Home}/>
    </div>
  );
}

export default App;
