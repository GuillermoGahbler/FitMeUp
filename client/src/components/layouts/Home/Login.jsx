import React from 'react';
import axios from 'axios';
import "./Login.css";


class Login extends React.Component {

  state = {
    email: '',
    password: '',

  }

  handleInputChange = (event) => {
    const name = event.currentTarget.getAttribute('name')
    const value = event.currentTarget.value
    this.setState(prevState => {
      return { ...prevState, [name]: value }
    })
  }

  handleSubmit = (event)=>{
    event.preventDefault();
    axios.post("/accts",this.state)
      .then(res=>this.props.context.push(`/accts/${res.data.id}`))
      .catch(err=>console.log(err))
  }

  render() {
    return (
      <div className='oauth'>
        <p>
          sign in using
    </p>
        <a href="/auth/google">
          <button className='social'>
            <img id="googleImg" src='https://cdn3.iconfinder.com/data/icons/social-media-2068/64/_Google-128.png' alt='google' />
          </button>
        </a>
        <p>
          or
    </p>

        <form className='signInForm'>
          <h2>Sign up or Log In</h2>
          <div className='form-group'>
            <label htmlFor='email'>Email address: </label>
            <input

              className='form-control'
              name='email'
              onChange={this.handleInputChange}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password: </label>
            <input

              className='form-control'
              name='password'
              onChange={this.handleInputChange}
            />
          </div>
          <button
            className='btn btn-success'
            onClick={this.handleSubmit}
          >
            Sign up/Login
      </button>
        </form>
      </div>
    )

  }
}

export default Login;