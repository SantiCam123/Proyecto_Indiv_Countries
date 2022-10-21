import React from 'react';
import {Route} from 'react-router-dom';
import Home from './Components/Home.jsx';
import LandingPage from './Components/Landing_Page.jsx';
import Nav from './Components/Nav.jsx';
import Create from './Components/Create.jsx';
import Detail from './Components/Detail.jsx';


function App() {
  return (
    <div>
      <Route exact path={'/'} component={LandingPage}/>
      <Route path={['/activity', '/countries/:id']} component={Nav} />
      <Route path={'/activity'} component={Create} />
      <Route exact path={'/home'} component={Home}/>
      <Route exact path={'/countries/:id'} component={Detail} />
    </div>
  );
}

export default App;
