import React from 'react';

const Login = ()=>{
return (
  <div className='oauth'>
  <p>sign in using</p>
    <button>Google</button>
    <button>Facbook</button>
    <button>Twitter</button>
  <p>
    or
  </p>
  <p>
    Login / Register
  </p>
   

  <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/>

   
  </div>
)

}

export default Login;