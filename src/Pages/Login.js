import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

  // States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Checking is email and password matches or not!
  const isValid = () => {

    const em = localStorage.getItem("Email");
    const ps = localStorage.getItem("Password");

    if (em !== email || ps !== password){
      alert("Invalid email or password");
      setEmail("");
      setPassword("");
    } else{
      navigate("/home");
    }

  }

  useEffect(() => {
  }, []);

  // Handle Submit
  const handleSubmit = (e) => {
    if (e){
      e.preventDefault();
    }
    isValid();
  }

  return (
    <div className='signup_container'>
      <section className="background-radial-gradient overflow-hidden">
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5" id='form-container'>
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: "10" }}>
              <h1 className="my-5 display-5 fw-bold ls-tight" style={{ color: "hsl(218, 81%, 95%)" }} >
                The best offer <br />
                <span style={{ color: "hsl(218, 81%, 75%)" }}>
                  for your business
                </span>
              </h1>
              <p className="mb-4 opacity-70" style={{ color: "hsl(218, 81%, 85%)" }} >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus, expedita iusto veniam atque, magni tempora mollitia
                dolorum consequatur nulla, neque debitis eos reprehenderit quasi
                ab ipsum nisi dolorem modi. Quos?
              </p>
            </div>

            <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
              <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

              <div className="card bg-glass">
                <div className="card-body px-4 py-5 px-md-5">
                  <form onSubmit={handleSubmit}>

                    {/* Email */}
                    <div className="form-outline mb-4">
                      <input type="email" className="form-control" placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email} required/>
                    </div>

                    {/* Password */}
                    <div className="form-outline mb-4">
                      <input type="text" className="form-control" placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={password}/>
                    </div>

                    {/* Forgotten Password */}
                    <div className="form-outline mb-4 ms-2">
                      <Link to="/resetPassword">Forgotten Password?</Link>
                    </div>

                    {/* Signup link */}
                    <div className="form-outline mb-4 ms-2">
                      <Link to="/">Do not have account ?</Link>
                    </div>

                    {/* Signup button */}
                    <button type="submit" className="btn btn-primary btn-block mb-4 ms-2" >Login</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login
