import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Home, Options, Disclaimer, NotFound } from './components/layouts'

import './App.css';

 

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/disclaimer" component={Disclaimer} />
          <Route path="/accts/:id" component={Options} />
          <Route component={NotFound} />
        </Switch>
      </HashRouter>


    );
  }
}

export default App;
