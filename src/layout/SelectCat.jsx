import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import "../styles/layout/SelectCat.css";
import { MdOutlineNavigateNext } from "react-icons/md";




function SelectCat() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div>
      <ul className="list-unstyled shop-by-catogrey">
        <li className="ms-2 mt-2">
          <span
            className="d-flex align-items-center"
            style={{ cursor: "pointer", color: "grey" }}
            onClick={toggleDropdown}
          >
            Shop by <br />
            category
            <RiArrowDropDownLine className="fs-2 mt-1" />
          </span>
          {showDropdown && (
            <div
              style={{
                position: "absolute",
                overflow: "auto",
                marginTop: "10px",
                border: "1px solid #ccc",
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "8px",
                
                display: "flex",
                flexWrap: "wrap",
                width: "50%",
                justifyContent: "space-between",
                zIndex: 9999, // Ensures the dropdown is above other components
              }}
            >
              {/* First Column */}
              <div style={{ flex: "1 1 calc(33.33% - 20px)" }}>
                <h5 className="h-5">
                  {" "}
                  <a href="#">Collectibles & art</a>{" "}
                </h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Paintings</a>
                  </li>
                  <li>
                    <a href="#">Sculptures</a>
                  </li>
                  <li>
                    <a href="#">Rare Coins</a>
                  </li>
                  <li>
                    <a href="#">Antique Furniture</a>
                  </li>
                </ul>
              </div>

              {/* Second Column */}
              <div style={{ flex: "1 1 calc(33.33% - 20px)" }}>
                <h5 className="h-5">
                  {" "}
                  <a href="#">Home & Garden</a>{" "}
                </h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Furniture</a>
                  </li>
                  <li>
                    <a href="#">Gardening Tools</a>
                  </li>
                  <li>
                    <a href="#">Outdoor Decor</a>
                  </li>
                  <li>
                    <a href="#">Lighting</a>
                  </li>
                </ul>
              </div>
              {/* Third Column */}
              <div style={{ flex: "1 1 calc(33.33% - 20px)" }}>
                <h5 className="h-5">
                  {" "}
                  <a href="#">Sports & Goods</a>{" "}
                </h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Exercise Equipment</a>
                  </li>
                  <li>
                    <a href="#">Outdoor Recreation</a>
                  </li>
                  <li>
                    <a href="#">Team Sports</a>
                  </li>
                  <li>
                    <a href="#">Camping & Hiking</a>
                  </li>
                </ul>
              </div>

              <div style={{ flex: "1 1 calc(33.33% - 20px)" }}>
                <h5 className="h-5">
                  {" "}
                  <a href="#">Electronics</a>{" "}
                </h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Smartphones</a>
                  </li>
                  <li>
                    <a href="#">Laptops</a>
                  </li>
                  <li>
                    <a href="#">Headphones</a>
                  </li>
                  <li>
                    <a href="#">Televisions</a>
                  </li>
                </ul>
              </div>

              <div style={{ flex: "1 1 calc(33.33% - 20px)" }}>
                <h5 className="h-5">
                  {" "}
                  <a href="#">Autoparts & Accessories</a>{" "}
                </h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Car Tires</a>
                  </li>
                  <li>
                    <a href="#">Car Batteries</a>
                  </li>
                  <li>
                    <a href="#">Car Audio</a>
                  </li>
                  <li>
                    <a href="#">Seat Covers</a>
                  </li>
                </ul>
              </div>

              <div style={{ flex: "1 1 calc(33.33% - 20px)" }}>
                <h5 className="h-5">
                  {" "}
                  <a href="#">Toys and hobbies</a>{" "}
                </h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Action Figures</a>
                  </li>
                  <li>
                    <a href="#">Building Sets</a>
                  </li>
                  <li>
                    <a href="#">Board Games</a>
                  </li>
                  <li>
                    <a href="#">Dolls & Stuffed Animals</a>
                  </li>
                </ul>
              </div>

              <div style={{ flex: "1 1 calc(33.33% - 20px)" }}>
                <h5 className="h-5">
                  {" "}
                  <a href="#">Fashion</a>{" "}
                </h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Men's Clothing</a>
                  </li>
                  <li>
                    <a href="#">Women's Clothing</a>
                  </li>
                  <li>
                    <a href="#">Footwear</a>
                  </li>
                  <li>
                    <a href="#">Accessories</a>
                  </li>
                </ul>
              </div>

              <div style={{ flex: "1 1 calc(33.33% - 20px)" }}>
                <h5 className="h-5">
                  {" "}
                  <a href="#">Musical instruments</a>{" "}
                </h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Guitars</a>
                  </li>
                  <li>
                    <a href="#">Drums</a>
                  </li>
                  <li>
                    <a href="#">Keyboards</a>
                  </li>
                  <li>
                    <a href="#">Microphones</a>
                  </li>
                </ul>
              </div>

              <div style={{ flex: "1 1 calc(33.33% - 20px)" }}>
                <h5 className="h-5">
                  {" "}
                  <a href="#">Other Categories</a>{" "}
                </h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Books</a>
                  </li>
                  <li>
                    <a href="#">Health & Beauty</a>
                  </li>
                  <li>
                    <a href="#">Pet Supplies</a>
                  </li>
                  <li>
                    <a href="#">Home Appliances</a>
                  </li>
                </ul>
              </div>

              <div className="border-line bg-dark mt-3" style={{height:"1px",width:"100%"}}>

              </div>

              <h5 className="mt-3 fs-5"><a href="#">See all Categories</a><MdOutlineNavigateNext className="mb-1 ms-1" style={{cursor:"pointer"}}/>
              </h5>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
}

export default SelectCat;
