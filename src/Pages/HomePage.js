import React, { useEffect, useState } from 'react'

const HomePage = () => {

  // States
  const [allData, setAllData] = useState([]);
  const [dataDisplayed, setDataDisplayed] = useState(allData);
  const [cartNo, setCartNo] = useState(0);

  // UseEffect hook
  useEffect(() => {
    const getProducts = async () => {
      try {
        const url = `https://fakestoreapi.com/products`;
        const res = await fetch(url);
        const data = await res.json();
        setAllData(data);
        setDataDisplayed(data);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, []);

  // Handle Click
  const handleClick = () => {
    setDataDisplayed(allData);
  }

  // Handle Clothing Click
  const handleClothingClick = () => {
    const clothingData = allData.filter((obj) => obj.category.includes("clothing"));
    setDataDisplayed(clothingData);
  };

  // Handle Accessories Click
  const handleAccessoriesClick = () => {
    const accessoriesData = allData.filter((obj) => !obj.category.includes("clothing"));
    setDataDisplayed(accessoriesData);
  }

  // Handle Add to Cart
  const handleAddToCart = () => {
    setCartNo(cartNo + 1);
  }

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
                <p className="nav-link" onClick={handleClick}> Home </p>
              </li>
              <li className="nav-item active ms-1 me-1">
                <p className="nav-link" onClick={handleClothingClick}> Clothing </p>
              </li>
              <li className="nav-item active ms-2">
                <p className="nav-link" onClick={handleAccessoriesClick}> Accessories </p>
              </li>
            </ul>
          </div>

          {/* Navbar items */}
          <div className="d-flex align-items-center">
            <form className="w-auto py-1 me-3" style={{ maxWidth: "12rem" }}>
              <input type="search" className="form-control rounded-0" placeholder="Search" aria-label="Search" />
            </form>
            <a className="nav-link me-3" href="#">
              <i className="fas fa-shopping-cart"></i>
              <span className="badge rounded-pill badge-notification bg-danger"> {cartNo} </span>
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
                    dataDisplayed.map((obj) => {
                      return (
                        <>
                        <div className="col-lg-3 col-md-6 mb-4 mt-5" key={obj.id}>
                          <div className="card mt-5">
                            <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light" data-mdb-ripple-color="light" >
                              <img src={obj.image} className="w-100" height="300px"/>
                            </div>
                            <div className="card-body">
                              <a href="" className="text-reset" style={{textDecoration: "none"}}> <p className="card-title mb-2"><b>{obj.title}</b></p> </a>
                              <a href="" className="text-reset "  style={{textDecoration: "none"}}> <p>{obj.description}</p> </a>
                              <h6 className="mb-3 price">${obj.price}</h6>
                              <button className="btn btn-primary" onClick={handleAddToCart}> Add to Cart </button>
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
