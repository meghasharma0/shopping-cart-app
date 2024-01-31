import React from 'react'

const Signup = () => {

  return (
    <div className='signup_container'>
    <form>
        <div className="mb-3">
            <input type="text" className="form-control" placeholder='First Name' required/>
            <input type="text" className="form-control" placeholder='Last Name'/>
        </div>
        <div className="mb-3">
            <input type="email" className="form-control" placeholder='Email' required />
        </div>
        <div className="mb-3">
            <input type="text" className="form-control" placeholder='Address' required />
        </div>
        <div className="mb-3">
            <select className="form-select" required>
                <option defaultValue={"Country"}>Country</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            <select className="form-select" required>
                <option defaultValue={"Country"}>State</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            <select className="form-select" required>
                <option defaultValue={"Country"}>City</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>
        <div className="mb-3">
            <input type="text" className="form-control" placeholder='Pincode' required/>
        </div>
        <div className="mb-3">
            <input type="text" className="form-control" placeholder='Phone' required/>
        </div>
        <div className="mb-3">
            <input type="password" className="form-control" placeholder='Password'/>
        </div>
        <div className="mb-3">
            <input type="password" className="form-control" placeholder='Confirm Password'/>
        </div>
        <center><button className='btn btn-primary signup_btn'>Sign up</button></center>
    </form>
    </div>
  )
}

export default Signup
