import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, Options, Disclaimer, NotFound } from './components/layouts'
import { UserForm } from './components/UserForm'
import './App.css';
import { WeeklyCharts } from './components/WeeklyCharts';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/disclaimer" component={Disclaimer} />
          <Route path="/options" component={Options} />
          <Route component={NotFound} />
          <Route component={UserForm} />
          <Route component={WeeklyCharts} />
        </Switch>
      </BrowserRouter>


    );
  }
}

export default App;
