import React from 'react';
import RegisterButton from './RegisterButton';
import Login from './Login';
import "./index.css";
import logo from "./fitmeuplogo2.png";

class Home extends React.Component {
  state = {
    isClicked: false,

  }

  handleRegClick = () => {
    this.setState(prevState => {
      return { ...prevState, isClicked: !prevState.isClicked }
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <div className="App-intro">
          <h1>
            Welcome to
          </h1>
          <img className="mainLogo" src={logo} alt="logo" />
        </div>
        <p>
          Your nutritional intake spotter to help you achieve your goals for losing, gaining, or maintaining weight.
          </p>
        <p>
          Whichever you choose, we got you!
          </p>
        <hr />
        <p>Note: source material for Fit Me Up's calorie formulas is the e-book "Eating to Win"
          </p>
        <p>by Israel Thomas Narvaez. For more information and to buy the e-book, visit
          </p>
        <p><a href="http://www.powerliftingtowin.com/" target="_blank" rel="noopener noreferrer">PowerliftingToWin.com</a>. The e-book is an excellent companion to Fit Me Up.
          </p>
        <div>
          {
            !this.state.isClicked &&
            <RegisterButton
              handleClick={this.handleRegClick}
            />}
           {
            this.state.isClicked && <Login context={this.props.history}/>

          }
        </div>
           <footer className='disclaimerStyle'> <a href="#/disclaimer">Disclaimer</a></footer>     
      </div>
    )
  }
}


export default Home;