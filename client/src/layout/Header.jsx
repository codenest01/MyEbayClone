import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import { LuBell } from "react-icons/lu";
import { RiShoppingCartLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { BiSolidMap } from "react-icons/bi";
import "../styles/layout/Header.css";
import SubNav from "./SubNav";
import SelectCat from "../layout/SelectCat";

function Header() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation(); // Get the current location

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
 
    <div>
      
   
      <div className="main-header">
        <div className="d-flex flex-wrap align-items-center mt-2 ms-3">
          <div className="container-fluid sub-header-1">
            <div className="row">
              <div className="col-auto">
                <span>
                  Hi!{" "}
                  <a href="/login" className="ms-1">
                    sign in
                  </a>
                </span>
                <span>
                  {" or"}{" "}
                  <a href="/register" className="ms-1">
                    register
                  </a>
                </span>
              </div>

              <div className="col-auto">
                <a
                  href="/daily-deals"
                  className="text-dark text-decoration-none"
                  style={{ fontSize: "12px" }}
                >
                  Daily Deals
                </a>
              </div>

              <div className="col-auto">
                <a
                  href="/help"
                  className="text-dark text-decoration-none"
                  style={{ fontSize: "12px" }}
                >
                  Help & Contact
                </a>
              </div>

              <div className="col-auto ms-auto ship-to">
                <div className="btn btn-link p-0 text-decoration-none">
                  <div className="text-dark" style={{ fontSize: "12px" }}>
                    Ship To
                  </div>
                </div>
              </div>

              <div className="col-auto sell" style={{ fontSize: "12px" }}>
                <a href="/sell" className="text-decoration-none text-dark">
                  Sell
                </a>
              </div>

              <div className="col-auto watch-list">
                <div className="d-flex align-items-center">
                  <a
                    href="/watchlist"
                    title="Watchlist"
                    className="text-decoration-none text-dark"
                    style={{ fontSize: "12px" }}
                  >
                    Watchlist
                  </a>
                  <select
                    name="selectbar"
                    id=""
                    className="ms-1"
                    style={{ width: "20px", border: "none", cursor: "pointer" }}
                  >
                    <option value=""></option>
                  </select>
                </div>
              </div>

              <div className="col-auto my-ebay">
                <div className="d-flex align-items-center">
                  <a
                    href="/myebay"
                    title="My ebay"
                    className="text-decoration-none text-dark"
                    style={{ fontSize: "12px" }}
                  >
                    My ebay
                  </a>
                  <select
                    name="selectbar"
                    id=""
                    className="ms-1"
                    style={{ width: "20px", border: "none", cursor: "pointer" }}
                  >
                    <option value=""></option>
                  </select>
                </div>
              </div>

              <div className="col-auto notification">
                <LuBell className="fs-5" style={{ cursor: "pointer" }} />
              </div>

              <div className="col-auto">
                <RiShoppingCartLine
                  className="fs-5"
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="border-line w-100 mt-3"
          style={{ height: "1px", background: "#d6d2d9" }}
        ></div>

        <div className="sub-header-2">
         <a href="/">
         <img
            src="data:image/png;base64,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"
            alt=""
            className="ms-3 mt-2"
            style={{ height: "48px", widows: "auto" }}
          />
         </a>

          <SelectCat />

          {/* searchbar */}
          <div className="search-container">
            <div className="search-input-container">
              <CiSearch className="search-icon" />
              <CiSearch className="search-btn" />
              <input
                type="text"
                placeholder="Search for anything"
                className="search-input"
                style={{
                  border: "2px solid rgb(31, 31, 31)",
                  borderRight: "1px solid rgb(80, 80, 80)",
                }}
              />
              <select
                className="search-select"
                style={{
                  border: "2px solid rgb(31, 31, 31)",
                  height: "43px",
                  padding:"0px",
                  width:"max-content",
                  borderTopRightRadius: "40px",
                  borderBottomRightRadius: "40px",
                  borderTopLeftRadius: "0",
                  borderBottomLeftRadius: "0",
                  borderLeft: "1px solid rgb(80, 80, 80)",
                  fontSize: "14px",
                  outline: "none",
                  transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                  backgroundColor: "white",
                }}
              >
                <option className="" value="all">All Categories</option>

                <option value="collectibles_art">Collectibles & Art</option>
                <option value="electronics">Electronics</option>
                <option value="fashion">Fashion</option>
                <option value="sporting_goods">Sporting Goods</option>
                <option value="toys_hobbies">Toys & Hobbies</option>
                <option value="home_garden">Home & Garden</option>
                <option value="auto_parts">Auto Parts & Accessories</option>
                <option value="musical_instruments">
                  Musical Instruments & Gear
                </option>
                <option value="health_beauty">Health & Beauty</option>
                <option value="books">Books</option>
                <option value="jewelry_watches">Jewelry & Watches</option>
                <option value="industrial_equipment">
                  Industrial Equipment
                </option>
                <option value="baby_products">Baby Products</option>
                <option value="cameras_photography">
                  Cameras & Photography
                </option>
                <option value="office_supplies">Office Supplies</option>
                <option value="food_beverages">Food & Beverages</option>
                <option value="gaming">Gaming</option>
                <option value="collectibles_art">Collectibles & Art</option>
                <option value="electronics">Electronics</option>
                <option value="fashion">Fashion</option>
                <option value="sporting_goods">Sporting Goods</option>
                <option value="toys_hobbies">Toys & Hobbies</option>
                <option value="home_garden">Home & Garden</option>
                <option value="auto_parts">Auto Parts & Accessories</option>
                <option value="musical_instruments">
                  Musical Instruments & Gear
                </option>
                <option value="health_beauty">Health & Beauty</option>
                <option value="books">Books</option>
                <option value="jewelry_watches">Jewelry & Watches</option>
                <option value="industrial_equipment">
                  Industrial Equipment
                </option>
                <option value="baby_products">Baby Products</option>
                <option value="cameras_photography">
                  Cameras & Photography
                </option>
                <option value="office_supplies">Office Supplies</option>
                <option value="food_beverages">Food & Beverages</option>
                <option value="gaming">Gaming</option>
              </select>
            </div>
            <div className="btn-div">
              <button className="btn btn-primary search-button" type="button">
                Search
              </button>
            </div>
          </div>

          <ul>
            <li className="me-5 mt-2" style={{ listStyle: "none" }}>
              <a
                href="/advanced-search"
                className="text-decoration-none advanced"
                style={{ color: "grey" }}
              >
                Advanced
              </a>
            </li>
          </ul>
        </div>

        <div
          className="border-line w-100 mt-3"
          style={{ height: "1px", background: "#d6d2d9" }}
        ></div>

        {/* Lists for PCS */}
        <SubNav />
      </div>

      {/* Side bar for Small devices */}
      <div
        className="main-header-small"
        style={{ height: "124px", width: "100%", backgroundColor: "" }}
      >
        <div
          className="sub-header-small-1 d-flex align-items-center"
          style={{ height: "60px", width: "100%", backgroundColor: "" }}
        >
          <img
            src="data:image/png;base64,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"
            alt=""
            className="ms-3 mt-2"
            style={{ height: "38px", widows: "auto" }}
          />

          <div className="ms-auto d-flex me-2">
            <div className="col-auto">
              <LuBell className="fs-5" style={{ cursor: "pointer" }} />
            </div>

            <div className="col-auto ms-3">
              <RiShoppingCartLine
                className="fs-5"
                style={{ cursor: "pointer" }}
              />
            </div>

            <IoMenu className="ms-5 fs-1" onClick={toggleSidebar} />
          </div>
        </div>
        {/* Sidebar */}
        {isSidebarOpen && (
          <div
            className="sidebar"
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "white",
              color: "#fff",
              zIndex: 1000,
              padding: "20px",
              boxShadow: "2px 0 5px rgba(0, 0, 0, 0.5)",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            <button
              className="close-btn"
              style={{
                right: "0",
                background: "none",
                border: "none",
                color: "grey",
                fontSize: "30px",
                cursor: "pointer",
                marginBottom: "20px",
                position: "absolute", // Added to ensure proper placement with 'right'
              }}
              onClick={toggleSidebar}
            >
              <IoCloseSharp />
            </button>

            <ul
              style={{
                listStyleType: "none",
                padding: "70px 0px",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              <li className="pt-3">
                <a
                  href="/home"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Categories
                </a>
              </li>
              <li className="pt-3">
                <a
                  href="/about"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Deals
                </a>
              </li>
              <li className="pt-3">
                <a
                  href="/contact"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Sell
                </a>
              </li>
              <li className="pt-3">
                <a
                  href="/contact"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Help
                </a>
              </li>

              <li
                className="mt-4"
                style={{ height: "1px", backgroundColor: "grey" }}
              ></li>

              <div className="mt-3">
                <span>
                  <a href="/login" className="text-decoration-none ">
                    Sign In
                  </a>
                </span>
                <span className="text-dark ms-2">
                  {"or"}{" "}
                  <a href="/signup" className="text-decoration-none ">
                    Register
                  </a>
                </span>
              </div>
            </ul>
          </div>
        )}

        {/* Sidebar Overlay */}
        {isSidebarOpen && (
          <div
            className="overlay"
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.5)",
              zIndex: 999,
            }}
            onClick={toggleSidebar}
          ></div>
        )}

        <div className="sub-header-small-2">
          <div className="search-container-small">
            <div className="search-input-container-small mt-2">
              <input
                type="text"
                placeholder="Search for anything"
                className="search-input-small"
              />
              <div className="search-select-small">
                <CiSearch style={{ color: "white" }} />
              </div>
            </div>
          </div>
        </div>

        <div className="ms-4 mt-2">
          <span>
            <button
              className="tect-success"
              style={{
                border: "none",
                background: "white",
                color: "blue",
                cursor: "pointer",
              }}
            >
              <span>
                <BiSolidMap
                  className="me-2"
                  style={{ color: "blue", cursor: "pointer" }}
                />
              </span>
              ship to
            </button>
          </span>
        </div>

        <br />
        {location.pathname === "/" && ( // Check if the current route is "/"
          <div
            style={{
              overflowX: "auto",
              scrollbarWidth: "none", // For Firefox
              msOverflowStyle: "none",
              marginRight: "19px", // For Internet Explorer and Edge
            }}
          >
            <style>
              {`
                /* For Chrome, Safari, and Edge */
                div::-webkit-scrollbar {
                  display: none;
                }
              `}
            </style>
            <span>
            <ul
  style={{
    listStyle: "none",
    display: "flex",
    padding: 0,
    gap: "10px",
  }}
  className="ms-4"
>
  {["watchList", "Purchases", "Selling", "Bids & Offers", "Messages"].map(
    (text) => (
      <li key={text}>
        <button
          onClick={() =>
            (window.location.href = `/${text.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "")}`)
          }
          style={{
            textDecoration: "none",
            color: "black",
            borderRadius: "40px",
            border: "1px solid grey",
            backgroundColor: "white",
            padding: "8px 20px",
            whiteSpace: "nowrap",
            cursor: "pointer",
          }}
        >
          {text}
        </button>
      </li>
    )
  )}
</ul>


            </span>
          </div>
        )}
      </div>


    </div>
  );
}

export default Header;
