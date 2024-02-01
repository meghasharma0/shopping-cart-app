import React, { useEffect, useState } from 'react'
import { Link, redirect, useNavigate } from 'react-router-dom'; 

const Signup = () => {

  // States
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const [authToken, setAuthToken] = useState('');

  const [pincode, setPincode] = useState("");
  const [password, setPassword] = useState("");
  const [cPass, setCPass] = useState("");
  const [securityQues, setSecurityQues] = useState("");

  const navigate = useNavigate();

  // FETCHING COUNTRIES
  const handleCountry = async () => {

    try {
      // Get access token
      const authUrl = "https://www.universal-tutorial.com/api/getaccesstoken";
      const authResponse = await fetch(authUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "api-token": "EbcZBaFvSV1LDK64_YeqltL8EMsDz_izBHoB0_vQLwab7bxvl7piumpeh8nR_JRs3C0",
          "user-email": "meghas9910@gmail.com"
        }
      });
      if (!authResponse.ok) {
        throw new Error('Failed to get access token');
      }
      const authData = await authResponse.json();
      const newAuthToken = authData.auth_token;
      setAuthToken(newAuthToken);

      // Getting countries
      const countriesUrl = "https://www.universal-tutorial.com/api/countries";
      const response = await fetch(countriesUrl, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${newAuthToken}`,
          "Accept": "application/json"
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch countries');
      }
      const data = await response.json();
      setCountries(data);

    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  // FETCHING STATES
  const handleState = async () => {
    try {
      
      const stateUrl = `https://www.universal-tutorial.com/api/states/${selectedCountry}`
      const stateRes = await fetch(stateUrl, {
        method: "GET", 
        headers: {
          "Authorization": `Bearer ${authToken}`,
          "Accept": "application/json"
        }
      })
      
      if (!stateRes.ok){
        throw new Error('Failed to fetch states');
      }
      const statesData = await stateRes.json();

      setStates(statesData);

    } catch (error) {
      console.error("Error fetching states: ", error);
    }
  }

  // FETCHING CITIES
  const handleCity = async () => {
    try {
      
      const cityUrl = `https://www.universal-tutorial.com/api/cities/${selectedState}`;
      const cityRes = await fetch(cityUrl, {
        method: "GET", 
        headers: {
          "Authorization": `Bearer ${authToken}`,
          "Accept": "application/json"
        }
      });

      if (!cityRes.ok){
        throw new Error("Error fetching cities");
      }
      
      const citiesData = await cityRes.json();

      setCities(citiesData)

    } catch (error) {
      console.error("Error fetching cities: ", error);
    }
  }

  // Handle Country Select
  const handleCountrySelect = async (event) => {
    const selectedValue = event.target.value;
    setSelectedCountry(selectedValue);
  };

  // Handle State Select
  const handleStateSelect = async (event) => {
    const selectedValue = event.target.value;
    setSelectedState(selectedValue);
  };

  // Handle City Select
  const handleCitySelect = async (event) => {
    const selectedValue = event.target.value;
    setSelectedCity(selectedValue);
  };
  
  useEffect(() => {
    handleCountry();
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      handleState();
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedState) {
      handleCity();
    }
  }, [selectedState]);

  // VALIDATIONS
  const isWeakPassword = password.length < 8;
  const passwordsMatch = password === cPass;

  // ON SUBMISSION
  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }
    localStorage.clear();
    localStorage.setItem("Name", fname);
    localStorage.setItem("Email", email);
    localStorage.setItem("Password", password);
    localStorage.setItem("Country", selectedCountry);
    localStorage.setItem("State", selectedState);
    localStorage.setItem("City", selectedCity);
    localStorage.setItem("Pincode", pincode);
    localStorage.setItem("SecurityQues", securityQues);

    // Navigate to login page
    navigate('/login');
  }

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
                  <form onSubmit={handleSubmit}>
                  
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
                        <select className="form-select" onChange={handleCountrySelect} value={selectedCountry} required>
                            <option defaultValue={"Country"}>Country</option>
                            {countries.map(country => (
                              <option key={country.country_name} value={country.country_name}>
                                {country.country_name}
                              </option>
                            ))}
                        </select>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                        <select className="form-select" onChange={handleStateSelect} required>
                            <option defaultValue={"Country"}>State</option>
                            {
                              states.map(state => (
                                <option key={state.state_name} value={state.state_name}>
                                  {state.state_name}
                                </option>
                              ))
                            }
                        </select>
                        </div>
                      </div>
                    </div>

                    {/* City and pincode */}
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                        <select className="form-select" onChange={handleCitySelect} value={selectedCity} required>
                            <option defaultValue={"City"}>City</option>
                            {
                              cities.map(city => (
                                <option key={city.city_name} value={city.city_name}>
                                  {city.city_name}
                                </option>
                              ))
                            }
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
                      <input type="text" className="form-control" placeholder='Password *' onChange={(e) => setPassword(e.target.value)} required />
                      {isWeakPassword && (
                        <div className="weak-password-message">
                          Password is too weak!
                        </div>
                      )}
                    </div>

                    {/* Confirm Password */}
                    <div className="form-outline mb-4">
                      <input type="text" className="form-control" placeholder='Confirm Password *' onChange={(e) => setCPass(e.target.value)} />
                      {!passwordsMatch && (
                        <div className="password-mismatch-message">
                          Passwords do not match!
                        </div>
                      )}
                    </div>

                    {/* Security Ques */}
                    <div className="form-outline mb-4">
                      <input type="text" className="form-control" placeholder='Childhood favourite song *' onChange={(e) => setSecurityQues(e.target.value)} required />
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
