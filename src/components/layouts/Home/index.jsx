import React from 'react';
import RegisterButton from './RegisterButton';
import Login from './Login';

class Home extends React.Component {
  state = {
    isClicked: false,

  }

  handleRegClick=()=>{
    this.setState(prevState=>{
      return {...prevState,isClicked:!prevState.isClicked}
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <div className="App-intro">
          <h1>
            Welcome to Fit Me Up!
          </h1>
        </div>
        <p>
          Your nutritional intake and exercise spotter to help you achieve your goals for losing, gaining, or maintaining weight.
          </p>
        <p>
          Whichever you choose, we got you!
          </p>

        <div>
          {
            !this.state.isClicked && 
              <RegisterButton 
                handleClick={this.handleRegClick}
                />}
           {
             this.state.isClicked && <Login/>

           }     
        </div>
        <footer>
          
        </footer>

      </div>
    )
  }
}


export default Home;