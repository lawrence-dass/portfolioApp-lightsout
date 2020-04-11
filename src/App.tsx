import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Dashboard from './Components/Dashboard';
import Board from './Components/Board'
import './App.scss';

function App() {
  return (
    <Router>
    <div className="App">

        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/board" component={Board} />
        </Switch>

    </div>
    </Router>
  );
}

export default App;
