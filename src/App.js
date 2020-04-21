import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AppProvider } from './AppContext';

import Dashboard from './components/Dashboard';
import Board from './components/Board';
import './App.scss';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/board" component={Board} />
          </Switch>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
