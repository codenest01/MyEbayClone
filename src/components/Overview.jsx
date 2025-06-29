import React from 'react'
import '../styles/Overview.css';
import productImage from "../images/shoe.jpg"
import { FaRegHeart } from "react-icons/fa6"; 
export default function Overview({children}) {
  const isOverviewPage = !children;
  return (
   <div>
     
      <div className="container-1"style={{ marginBottom: 0, paddingBottom: 0 }} >
       <h3 className="mb-0">My eBay</h3>

    <div className="row">
      <div className="d-flex  anchors">
       <a className="me-3 activity" href="">Activity</a>
       <a className="me-3" href="/messages">Messages</a>
       <a className="me-3" href="/account">Account</a>
      </div>
     <div className="border" style={{ margin: 0, padding  : 0 }}>

     </div>
    </div>
  </div>
  

  <div className="row " style={{ marginTop: 0, paddingTop: 0 }}>
   
    <div className="col-md-2 ">
      <div className="select-cate">
        <ul className="list-unstyled">
          <li><a href="/summary">Summary</a></li>
          <li><a href="/recent-view">Recently viewed</a></li>
          <li><a href="#">Bids & offers</a></li>
          <li><a href="/watchlist">Watchlist</a></li>
          <li><a href="/purchases">Purchases</a></li>
          <li><a href="/saved">Saved feed</a></li>
          <li><a href="#">Saved searches</a></li>
          <li><a href="#">Saved sellers</a></li>
         
        </ul>
      </div>
     
    </div>
  

    {isOverviewPage && (
    <div className="col-md-8 ms-5 ">
             <div className="">
            
               <div className="d-flex  flex-wrap">
                 <h4 className="fw-bold">Watchlist</h4>
                 <div></div>
               </div>
           
              <div className="del-items">
              <div className="d-flex justify-content-between ">
                 <div className="form-check mt-3">
                   <div className="d-flex align-items-center">
                     <input  type="checkbox" />
                     <button className="ms-2 button">Delete</button>
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
           
            
               <div className="my-3 d-flex gap-2 flex-wrap mt-4 cate-item">
                 <button className="button active">All Categories (1)</button>
                 <button className="button">Women (1)</button>
               </div>
              </div>
           
            
               <div className="container-for-pc p-3 d-flex gap-3 align-items-stretch">
                 <input className="" type="checkbox" />
           
                 <div className="d-flex gap-3 flex-grow-1 align-items-stretch">
                 <img src={productImage} alt="Product" className="product-image" />

           
                   <div className="d-flex flex-column justify-content-between" >
                     <div>
                       <p className="fw-bold mb-1">US $211.74</p>
                       <p className="mb-1 fw-semibold">Women 6.0US Adidas Consortium F34324 Black Rainbow P.O.D Social Status</p>
                       <p className="text-muted mb-1 small">(376233039913)</p>
                       <p className="mb-1">
                         <a href="#" className="text-decoration-none text-primary">asap-japan2</a> |
                         <span className="text-muted">499</span> |
                         <span className="text-muted">97.80%</span>
                         <i className="bi bi-trophy text-warning"></i>
                       </p>
                       <p className="text-success fw-bold mb-1">Condition: Pre-owned</p>
                       <a href="#" className="text-danger small">Delete item</a>
                       
                     </div>
                   </div>
                 </div>
           
                 <div className="text-end d-flex flex-column ">
                   <div>
                     
                    
                   </div>
                   <div>
                   <button className="button mb-3 fw-bold border-0" style={{background:"#3665F3",color:"white"}}>Buy it Now</button>
                     <br />
                     <button className="button mb-2 btn-outline-primary fw-bold" style={{color:"#3665F3" , border:"1px solid #3665F3",background:"none"}}>View Sellers's other items</button>
                     <div className="dropdown d-inline">
                       <button className="button fw-bold dropdown-toggle fw-bold" style={{color:"#3665F3" , border:"1px solid #3665F3",background:"none"}} type="button" data-bs-toggle="dropdown">More actions</button>
                       <ul className="dropdown-menu">
                         <li><a className="dropdown-item" href="#">Report</a></li>
                       </ul>
                     </div>
                     <div className="mt-2">
                       <a href="#" className="text-decoration-underline small me-4">Add note</a>
                     </div>
                   </div>
                 </div>
         
                 
               </div>
               
                 
             </div>
           
           </div>
                 )}

   {children}
  
  
  </div>
      </div>
  

  )
}
