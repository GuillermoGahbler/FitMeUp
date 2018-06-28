import React from 'react';

const Login = ()=>{
return (
  <div className='oauth'>
  <p>sign in using</p>
    <button className='social'><img src='https://cdn3.iconfinder.com/data/icons/social-media-2068/64/_Google-128.png' alt='google'/></button>
     
  <p>
    or
  </p>
   
       <form className='signInForm'>
       <h2>Sign up or Log In</h2>
       <div className='form-group'>
         <label htmlFor='email'>Email address</label>
         <input type='email' className='form-control'
           name='email' />
       </div>
       <div className='form-group'>
         <label htmlFor='password'>Password</label>
         <input type='password' className='form-control'
           name='password' />
       </div>
       <button type='submit' className='btn btn-primary'>
          Sign up/Login
       </button>
     </form>
   </div>
)

}

export default Login;