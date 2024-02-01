import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {

    // States
    const [securityAns, setSecurityAns] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const navigate = useNavigate(); 

    // Checking the security ans correct or not!
    const isValid = () => {

        const sq = localStorage.getItem("SecurityQues");
    
        if (sq !== securityAns){
          alert("Invalid security ans");
          setSecurityAns("");
        } else{
          localStorage.setItem("Password", newPassword);
          navigate("/login");
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

                    {/* Ask Security Question */}
                    <div className="form-outline mb-4">
                      <input type="text" className="form-control" placeholder='Enter you childhood fav song' onChange={(e) => setSecurityAns(e.target.value)} value={securityAns} required/>
                    </div>

                    {/* New password */}
                    <div className="form-outline mb-4">
                      <input type="text" className="form-control" placeholder='New password' onChange={(e) => setNewPassword(e.target.value)} value={newPassword} required/>
                    </div>

                    {/* Signup button */}
                    <button type="submit" className="btn btn-primary btn-block mb-4 ms-2" >Go back to login</button>
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

export default ResetPassword
