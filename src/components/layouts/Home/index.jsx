import React from 'react';

const Home = () => {
  return(
<div className="App">
        <header className="App-header">
        
        </header>
        <p className="App-intro">
        <h1>
          Welcome to Fit Me Up!
        </h1>
        </p>
        <p>Your nutritional intake and exercise spotter to help you achieve your goals for losing, gaining, or maintaining weight. 
        <br/>
        Whichever you choose, we got you!
        </p>
        <div>
        {/* <img className="img-responsive" src="https://media.giphy.com/media/3o85xunRezGKPOkcG4/giphy.gif" alt="logo"/> */}
        </div>
        <div className="theButtons">
          <span>
            <button className="loginBtn">Login</button>
            <a href="disclaimer">
            <button className="RegisterBtn">Register</button>
            </a>
          </span>
        </div>
        <footer> 
        <a href="About">About</a>
        </footer>  

      </div>
  )
}

export default Home;