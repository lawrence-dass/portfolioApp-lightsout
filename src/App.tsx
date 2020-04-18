import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import AppContext from './AppContext'
import Dashboard from './Components/Dashboard';
import Board from './Components/Board'
import './App.scss';

function App() {
  const appHook = useState('red');
  return (
    <AppContext.Provider value={appHook}>
      <Router>
        <div className="App">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/board" component={Board} />
            </Switch>
        </div>
      </Router>
      </AppContext.Provider>
  );
}

export default App;
