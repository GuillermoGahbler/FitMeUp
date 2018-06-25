import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <a href="#" className="login" id="login">Login</a>
                         </header>
        <p className="App-intro">
        <h1>
          Welcome to Fit Me Up!
        </h1>
        </p>
        <p> Whether you want to lose weight, gain weight, or just maintain current weight we got you!
        </p>
        <div>
        <img className="img-responsive" src="https://media.giphy.com/media/3o85xunRezGKPOkcG4/giphy.gif" alt="logo"/>
        </div>
        <div className="theButtons">
          <span>
            <button className="loginBtn">Login</button>
            <button className="RegisterBtn">Register</button>
          </span>
        </div>
      </div>
      

    );
  }
}

export default App;
