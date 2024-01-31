import React from 'react'

const Login = () => {
  return (
    <div className='signup_container'>
      <form>
        <div className="mb-3">
            <input type="email" className="form-control" placeholder='Email' required />
        </div>
        <div className="mb-3">
            <input type="password" className="form-control" placeholder='Password' required />
        </div>
        <center><a href="/">Forgotten password</a></center>
        <center><button className='btn btn-primary mt-2 signup_btn'>Login</button></center>
      </form>
    </div>
  )
}

export default Login
