# Shopping Cart app using React app

## Following setup with signup, login and the combined LoginSignup pages

Login page 
![login page](images/login.png)

Signup page
![signup page](images/signup.png)

These two embedded in LoginSignup page;
`
    <div className='ls_container'>
        <center>
            <button className='btn btn-primary ls_btn' onClick={handleSignupClick} style={signupBtnStyle}>Signup</button>
            <button className='btn btn-primary ls_btn' onClick={handleLoginClick} style={loginBtnStyle}>Login</button>
        </center>
        <div>{state}</div>
    </div>
`
