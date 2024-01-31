import React, { useState } from 'react'
import Signup from './Signup'
import Login from './Login';

const LoginSignup = () => {

    const styleObj = {
        background: "black", color: "#fff", border: "none"
    }
    const [state, changeState] = useState(<Signup />); 
    const [loginBtnStyle, setLoginBtnStyle] = useState({});
    const [signupBtnStyle, setSignupBtnStyle] = useState(styleObj);

    const handleLoginClick = () => {
        changeState(<Login />)
        setLoginBtnStyle(styleObj);
        setSignupBtnStyle({});
    }
    const handleSignupClick = () => {
        changeState(<Signup />)
        setSignupBtnStyle(styleObj);
        setLoginBtnStyle({});
    }

  return (
    <div className='ls_container'>
        <center>
            <button className='btn btn-primary ls_btn' onClick={handleSignupClick} style={signupBtnStyle}>Signup</button>
            <button className='btn btn-primary ls_btn' onClick={handleLoginClick} style={loginBtnStyle}>Login</button>
        </center>
        <div>{state}</div>
    </div>
  )
}

export default LoginSignup
