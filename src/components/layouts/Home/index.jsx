import React from 'react';

const Home = (props) => {
  return(
<div className="App">
        <header className="App-header">
        
        </header>
        <div className="App-intro">
        <h1>
          Welcome to Fit Me Up!
        </h1>
        </div>
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
            <button className="RegisterBtn" onClick={()=>props.history.push("/disclaimer")}>Register</button>
          </span>
        </div>
        <footer> 
        <p>under construction</p>
        </footer>  

      </div>
  )
}

export default Home;