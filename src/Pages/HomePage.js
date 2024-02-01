import React, { useState } from 'react'

const HomePage = () => {

  // States
  const [allData, setAllData] = useState([]);

  const getProducts = async () =>{
    try {
      
      const url = `https://fakestoreapi.com/products`;
      const res = await fetch(url);
      const data = await res.json();
      setAllData(data);

    } catch (error) {
      console.log(error)
    }
  }
  getProducts()

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation" >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent1">
            <a className="navbar-brand me-auto mb-2 mb-lg-0" href="https://mdbootstrap.com/" >
              <p className='pt-3'>SHOPLANE</p>
            </a>

            {/* Navigation bar links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item active me-2">
                <a className="nav-link " href="https://mdbootstrap.com/"> Home </a>
              </li>
              <li className="nav-item active ms-1 me-1">
                <a className="nav-link " href="https://mdbootstrap.com/"> Clothing </a>
              </li>
              <li className="nav-item active ms-2">
                <a className="nav-link " href="https://mdbootstrap.com/"> Accessories </a>
              </li>
            </ul>
          </div>

          {/* Navbar items */}
          <div className="d-flex align-items-center">
            <form className="w-auto py-1 me-3" style={{ maxWidth: "12rem" }}>
              <input
                type="search"
                className="form-control rounded-0"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
            <a className="nav-link me-3" href="#">
              <i className="fas fa-shopping-cart"></i>
              <span className="badge rounded-pill badge-notification bg-danger"> 1 </span>
            </a>
            <a className="nav-link me-3" href="#">
              <i className="fa-solid fa-user"></i>
            </a>
          </div>
        </div>
      </nav>

      {/* Main body */}
      <main>
        <div className="container">
          <section>
            <div className="text-center">
              <div className="row mt-4">

              {/* Card items */}
                  {
                    allData.map((obj) => {
                      return (
                        <>
                        <div className="col-lg-3 col-md-6 mb-4 mt-5">
                          <div className="card mt-5">
                            <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light" data-mdb-ripple-color="light" >
                              <img src={obj.image} className="w-100" height="280px"/>
                            </div>
                            <div className="card-body">
                              <a href="" className="text-reset" style={{textDecoration: "none"}}> <p className="card-title mb-2"><b>{obj.title}</b></p> </a>
                              <a href="" className="text-reset "  style={{textDecoration: "none"}}> <p>{obj.description.slice(0, 50)}...</p> </a>
                              <h6 className="mb-3 price">${obj.price}</h6>
                            </div>
                          </div>
                        </div>
                        </>
                      )
                    })
                  }

              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default HomePage
