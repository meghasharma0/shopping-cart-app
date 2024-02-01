import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {

  // States
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [password, setPassword] = useState("");
  const [cPass, setCPass] = useState("");
  const [securityQues, setSecurityQues] = useState("");

  return (
    <div>
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
              <p className="mb-4 opacity-70"
                style={{ color: "hsl(218, 81%, 85%)" }} >
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
                  <form>
                  
                  {/* First name and last name */}
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input type="text" className="form-control" placeholder='First Name *' onChange={(e) => setFname(e.target.value)} required />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input type="text" className="form-control" placeholder='Last Name' onChange={(e) => setLname(e.target.value)} />
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="form-outline mb-4">
                      <input type="email" className="form-control" placeholder='Email *' onChange={(e) => setEmail(e.target.value)} required/>
                    </div>

                    {/* Country and City */}
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                        <select className="form-select" onChange={(e) => setCountry(e.target.value)}  required>
                            <option defaultValue={"Country"}>Country</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                        <select className="form-select" onChange={(e) => setState(e.target.value)} required>
                            <option defaultValue={"Country"}>State</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        </div>
                      </div>
                    </div>

                    {/* City and pincode */}
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                        <select className="form-select" onChange={(e) => setCity(e.target.value)} required>
                            <option defaultValue={"Country"}>City</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input type="text" className="form-control" placeholder='Pincode' onChange={(e) => setPincode(e.target.value)} />
                        </div>
                      </div>
                    </div>

                    {/* Password */}
                    <div className="form-outline mb-4">
                      <input type="text" className="form-control" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    {/* Confirm Password */}
                    <div className="form-outline mb-4">
                      <input type="text" className="form-control" placeholder='Confirm Password' onChange={(e) => setCPass(e.target.value)}/>
                    </div>

                    {/* Security Ques */}
                    <div className="form-outline mb-4">
                      <input type="text" className="form-control" placeholder='Childhood favourite song' onChange={(e) => setSecurityQues(e.target.value)}/>
                    </div>

                    {/* Login link */}
                    <div className="form-outline mb-4 ms-2">
                      <Link to="/login">Account already exists?</Link>
                    </div>

                    {/* Signup button */}
                    <button type="submit" className="btn btn-primary btn-block mb-4 ms-2" > Sign up </button>
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

export default Signup;
