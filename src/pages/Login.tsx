import React from 'react'

const Login = () => {
  return (
    <div className='container'>
      <div className='icon'>icon</div>
      <div className='message-container'>
        <div className='message-title'><h1>Welcome To Notes</h1></div>
        <div className='message-dexcription'>Please login to continue</div>
      </div>
      <div className='form'>
        <form>
          <div className='input email'>
            <label>Email Address</label>
            <input type='email' placeholder='email@example.com'></input>
          </div>
          
          <div className='input-password'>
            <a>forgot</a>
            <label>Password</label>
            <input type="password" placeholder='email@example.com'></input>
          </div>
          <div>
            <button type='submit' className='submit-button'>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
