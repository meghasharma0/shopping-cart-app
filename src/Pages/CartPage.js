import React, { useContext, useState } from 'react'
import { ItemContext } from '../Context/Context';

const CartPage = () => {

    const cntxt = useContext(ItemContext);
    const [quantity, setQuantity] = useState(1);
    const [msg, setMsg] = useState("No items found!");

    const handleDeleteItem = (index) => {
        // Create a copy of the items array
        const updatedItems = [...cntxt.items];
      
        // Remove the item at the specified index
        updatedItems.splice(index, 1);
      
        // Update the context with the new items array
        cntxt.setItems(updatedItems);

        if (cntxt.items.length === 0){
            setMsg("No items found!");
        }
      };

  return (
    <div>
      <section className="h-100" style={{backgroundColor: "#eee;"}}>
        <div className="container h-100 py-5">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-10">

                <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
                <div>
                    <p className="mb-0"><span className="text-muted">Sort by:</span> <a href="#!" className="text-body">price <i
                        className="fas fa-angle-down mt-1"></i></a></p>
                </div>
                </div>

                {/* Product Display Container */}
                <h1>{msg}</h1>
                <div className="card rounded-3 mb-4">
                {
                    cntxt.items.map((obj, index, arr) => {
                        return (
                            <>
                            <div className="card-body p-4">
                                <div className="row d-flex justify-content-between align-items-center">
                                    <div className="col-md-2 col-lg-2 col-xl-2">
                                        <img
                                        src={obj.image}
                                        className="img-fluid rounded-3" alt="Cotton T-shirt" />
                                    </div>
                                    <div className="col-md-3 col-lg-3 col-xl-3">
                                        <p className="lead fw-normal mb-2">{obj.title}</p>
                                        {/* <p><span className="text-muted">Size: </span>M <span className="text-muted">Color: </span>Grey</p> */}
                                    </div>
                                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">

                                    {/* Decrement and Increment products */}
                                        <button className="btn btn-link px-2" onClick={() => quantity > 0 ? setQuantity(quantity - 1) : setQuantity(0)} >
                                        <i className="fas fa-minus"></i>
                                        </button>

                                        <input className="form-control form-control-sm" onChange={(e) => setQuantity(e.target.value)} value={quantity} />

                                        <button className="btn btn-link px-2" onClick={() => setQuantity(quantity + 1)} >
                                        <i className="fas fa-plus"></i>
                                        </button>
                                    </div>
                                <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                    <h5 className="mb-0">{obj.price}</h5>
                                </div>

                                {/* Delete item */}
                                <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                    <a href="#!" className="text-danger" onClick={() => {
                                        handleDeleteItem(index);
                                        cntxt.setTotalAmt(cntxt.totalAmt - obj.price);
                                    }}><i className="fas fa-trash fa-lg"></i></a>
                                </div>
                                </div>
                            </div>
                            </>
                        )
                    })
                }
                </div>

                <div className="card">
                <div className="card-body">
                    <h5>Total amount : ${cntxt.totalAmt}</h5>
                    <button type="button" className="btn btn-warning btn-block btn-lg mt-3">Proceed to Pay</button> <br />
                </div>
                </div>

            </div>
            </div>
        </div>
        </section>
    </div>
  )
}

export default CartPage
