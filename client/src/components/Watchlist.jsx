import React from 'react'
import Overview from './Overview'
import '../styles/Watchlist.css';
import productImage from "../images/shoe.jpg"

function Watchlist() {
  return (
    <div>
    <Overview>
      <div className="col-md-8">
                  <div className="p-3">
                 
                  <div className="d-flex justify-content-between align-items-center mb-3">


                  <div className="d-flex justify-content-between align-items-center flex-wrap mt-4 w-100">
<h4 className="mb-0 fw-bold mb-3">Watchlist</h4>

<div className="d-flex align-items-center ms-auto mt-2 mt-md-0 mb-5" style={{ maxWidth: "500px", width: "100%" }}>
  <input
    type="text"
    className="form-control form-control-sm me-2 border-dark"
    placeholder="Search your Watchlist"
  />
  <button className="btn btn-sm btn-dark">Search</button>
</div>
</div>


</div>



                    <div className="del-items">
                    <div className="d-flex justify-content-between">
                      <div className="form-check ">
                        <div className="d-flex align-items-center">
                          <input  type="checkbox" />
                          <button className="ms-2 button delBtn">Delete</button>
                          <button className="ms-2 button custom-btn">Add to custom list</button>
                        </div>
                        
                      </div>
                
                      <div className="d-flex gap-3 align-items-center flex-wrap">
                        <div className="dropdown">
                          <button className="button dropdown-toggle" type="button" data-bs-toggle="dropdown">
                            Status: All (1)
                          </button>
                          <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">All</a></li>
                          </ul>
                        </div>
                        <div className="dropdown">
                          <button className="button dropdown-toggle" type="button" data-bs-toggle="dropdown">
                            Sort: Time left: ending soonest
                          </button>
                          <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Ending soonest</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                
                 
                    <div className="my-3 d-flex gap-2 flex-wrap mt-5">
                      <button className="button active">All Categories (1)</button>
                      <button className="button">Women (1)</button>
                    </div>
                    </div>
                
                 
                      <div className="d-flex  flex-grow-1 align-items-stretch cate-product mb-3">
                                 <div className="position-relative h-100">
                                   <img
                                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwxKo0Qln4rqj9ULMwht7W4VgT-acPypCdeg&s"
                                     alt="Product"
                                     className="product-image-2 img-fluid h-100"
                                   />
                                  
                                 </div>
                   
                                 <div className="d-flex flex-column p-0 m-0">
                                   <div>
                                     <a
                                       className="text-dark fw-normal text-decoration-none"
                                       href="#"
                                     >
                                       <span className="mb-1 prod-title fw-semibold ">
                                         Women 6.0US Adidas Consortium 
                                       </span>
                                     </a>
                                     <p className="mb-1 brnd-name fw-light">Brand New · LiDL</p>
                                     <span className="fw-bold mb-1">US $211.74</span>
                                     <p className="mb-1  brnd-name">or Best offer</p>
                                     <p className="mb-1  brnd-name">shipping price</p>
                                   </div>
                                 </div>
                               </div>
                    
                  </div>
                
                </div>
    </Overview>
  </div>
  )
}

export default Watchlist
