import React, { useEffect, useState } from 'react'

const HomePage = () => {

  // States
  const [allData, setAllData] = useState([]);
  const [dataDisplayed, setDataDisplayed] = useState(allData);
  const [cartNo, setCartNo] = useState(0);
  const [search, setSearch] = useState("");

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

  // Handle Search
  const handleSearch = () => {
    const filteredData = allData.filter((obj) =>
      obj.title.toLowerCase().includes(search.toLowerCase())
    );
    setDataDisplayed(filteredData);
  }

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">SHOPLANE</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 pt-lg-3">
              <li class="nav-item">
                <p class="nav-link" onClick={handleClick}>Home</p>
              </li>
              <li class="nav-item">
                <p class="nav-link" onClick={handleClothingClick}>Clothing</p>
              </li>
              <li class="nav-item">
                <p class="nav-link" onClick={handleAccessoriesClick}>Accessories</p>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" onChange={(e) => setSearch(e.target.value)} value={search} aria-label="Search" />
              <button class="btn btn-outline-success" type="submit" onClick={handleSearch}>Search</button>
            </form>
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
                        <div className="col-lg-3 col-md-6 mb-4" key={obj.id}>
                          <div className="card">
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
