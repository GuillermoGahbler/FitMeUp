import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Home, Options, Disclaimer, NotFound} from './components/layouts'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path = "/" component ={Home}/>
          <Route path = "/disclaimer" component ={Disclaimer}/>
          <Route path = "/options" component ={Options}/>
          <Route component ={NotFound}/>
        </Switch>  
      </BrowserRouter>
      

    );
  }
}

export default App;
