import React, { useRef,useState } from "react";
import Overview from "./Overview";
import "../styles/Purchases.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

function Purchases() {
 
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 200;

    if (container) {
      container.scrollLeft +=
        direction === "right" ? scrollAmount : -scrollAmount;
    }
  };


  
  return (
    <div>
      <Overview>
        <div className="col-md-8 ">
         
        <div className="d-flex justify-content-between align-items-center mb-3">
 
 
 <div className="d-flex justify-content-between  flex-wrap mt-4 w-100">
<h4 className="mb-0 fw-bold mb-3 mt-3">Purchases</h4>

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

          <div className="d-flex align-items-center mb-4 purchases-wrapper">
            <button className="scroll-btn-left" onClick={() => scroll("left")}>
              <FaChevronLeft />
            </button>

            <div
              className="purchases d-flex flex-nowrap overflow-auto"
              ref={scrollRef}
            >
              <div className="button mx-2">All Purchases</div>
              <div className="button mx-2">Processing</div>
              <div className="button mx-2">Unpaid items</div>
              <div className="button mx-2">Returns & Canceled</div>
              <div className="button mx-2">Show hidden</div>
              <div className="button mx-2">Ready for feedback</div>
              <div className="button mx-2">Shipped</div>
              <div className="button mx-2">Payment Failed</div>
            </div>

            <button
              className="scroll-btn-right"
              onClick={() => scroll("right")}
            >
              <FaChevronRight />
            </button>
          </div>

          <div className="d-flex ">
            <h5 className="fw-bold">Orders</h5>
            <div className="d-flex ms-auto alighn-items-center ">

              <select name="choice" className="dropdown border-0">
  <option value="first">Select Orders:  All</option>
  <option value="second" >Last 30 days</option>
  <option value="third">2025</option>
  <option value="third">2024</option>
  <option value="third">2023</option>
  <option value="third">2022</option>
</select>
            </div>
          </div>
        </div>
      </Overview>
    </div>
  );
}

export default Purchases;
