import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/home" component={ Home } />  
          <Route exact path="/wallet" component={ Wallet } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
