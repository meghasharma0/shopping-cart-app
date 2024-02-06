import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ItemContext } from '../Context/Context';

const HomePage = () => {

  // States
  const [allData, setAllData] = useState([]);
  const [dataDisplayed, setDataDisplayed] = useState(allData);
  const [cartNo, setCartNo] = useState(0);
  const [search, setSearch] = useState("");
  const [cartMsg, setCartMsg] = useState("");
  const navigate = useNavigate();

  // Context
  const cntxt = useContext(ItemContext);

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
    const clothingData = allData.filter((obj) => obj.category.includes("clothing") && obj.title !== "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops");
    setDataDisplayed(clothingData);
  };

  // Handle Accessories Click
  const handleJeweleryClick = () => {
    const accessoriesData = allData.filter((obj) => obj.category.includes("jewelery"));
    setDataDisplayed(accessoriesData);
  }

  // Handle Electronic Click
  const handleElectronicsClick = () => {
    const electronicData = allData.filter((obj) => obj.category.includes("electronic"));
    setDataDisplayed(electronicData);
  }

  // Handle Search
  const handleSearch = () => {
    const filteredData = allData.filter((obj) =>{
      return obj.title.toLowerCase().includes(search.toLowerCase()) || obj.description.toLowerCase().includes(search.toLowerCase())
    });
    if (filteredData.length === 0){
      setCartMsg("No such item present!");
    }
    setDataDisplayed(filteredData);
  }

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">SHOPLANE</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 pt-lg-3">
              <li className="nav-item">
                <p className="nav-link" onClick={handleClick} style={{ cursor: "pointer" }}>Home</p>
              </li>
              <li className="nav-item">
                <p className="nav-link" onClick={handleClothingClick} style={{ cursor: "pointer" }}>Clothing</p>
              </li>
              <li className="nav-item">
                <p className="nav-link" onClick={handleJeweleryClick} style={{ cursor: "pointer" }}>Jewelery</p>
              </li>
              <li className="nav-item">
                <p className="nav-link" onClick={handleElectronicsClick} style={{ cursor: "pointer" }}>Electronics</p>
              </li>
            </ul>
            <a className="nav-link me-3" href="#">
              <i className="fas fa-shopping-cart"></i>
              <span className="badge rounded-pill badge-notification bg-danger" onClick={() => navigate("/home/cart")}> {cartNo} </span>
            </a>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" onChange={(e) => setSearch(e.target.value)} value={search} aria-label="Search" />
              <button className="btn btn-outline-success" onClick={handleSearch}>Search</button>
            </form>
          </div>
        </div>
      </nav>

      {/* Main body */}
      <main className='mt-5 pt-5'>
        <div className="container">
          <section>
            <div className="text-center">
              <div className="row mt-4">

              <h4>{cartMsg}</h4>
              {/* Card items */}
                  {
                    dataDisplayed.map((obj) => {
                      return (
                        <>
                        <div className="col-lg-3 col-md-6 mb-4" key={obj.id}>
                          <div className="card">
                            <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light" data-mdb-ripple-color="light" >
                              <img src={obj.image} className="w-100" height="300px"/>
                            </div>
                            <div className="card-body">
                              <a href="" className="text-reset" style={{textDecoration: "none"}}> <p className="card-title mb-2"><b>{obj.title.slice(0, 20)}...</b></p> </a>
                              <a href="" className="text-reset "  style={{textDecoration: "none"}}> <p>{obj.description.slice(0, 50)}...</p> </a>
                              <h6 className="mb-3 price">${obj.price}</h6>
                              <button className="btn btn-primary" onClick={() => {
                                cntxt.setItems([ 
                                  ...cntxt.items, 
                                  { id: obj.id, title: obj.title, image: obj.image, description: obj.description, price: obj.price }
                                 ]); 
                                 cntxt.setTotalAmt(cntxt.totalAmt + obj.price);
                                 setCartNo(cntxt.items.length + 1);
                              }}> Add to Cart </button>
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
