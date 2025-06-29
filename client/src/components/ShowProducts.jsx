import React from "react";
import "../styles/layout/ShowProducts.css"; 
import { FaRegHeart } from "react-icons/fa6";

function ShowProducts() {
  return (
    <div>
      <div className="image-container image-container-for-lg">
        <img
          src="https://i.ebayimg.com/images/g/~i0AAOSwwdJnXGOb/s-l2400.jpg"
          alt="Product"
          className="background-image"
        />
        
        <div className="content-overlay">
          <h2 className="heading">You don't run with the crowd</h2>
          <p className="description">
            Get fit your own way with health and wellness gear on eBay.
          </p>
          <button className="cta-button">Shop for your style</button>
        </div>
      </div>

      <div>
        <div className="pt-5">
          <div
            className="recent-items d-flex justify-content-between align-items-center"
            style={{ width: "100%" }}
          >
            <div>
              <span className="ms-3 recent-items-text">
                Your Recently Viewed Items
              </span>
            </div>

            <div>
              <span>
                <a href="#" className="text-end me-4 text-dark">
                  See all
                </a>
              </span>
            </div>
          </div>

          <div className="containerr">
            {" "}
            
            <div className="custom-col bg-color-1">
              <img
                src="https://i.ebayimg.com/images/g/5uUAAOSwQPFmF4Ye/s-l500.webp"
                className="product-image"
                alt="Product Image"
              />
              <div className="favorite-icon-container">
                <FaRegHeart className="favorite-icon" />
              </div>
              <div className="product-name">
                <a href="">ROKR hompson Submachine Gun </a>
              </div>
              <div className="product-price">$20.00</div>
              <div className="product-actions"></div>
            </div>



            <div className="custom-col bg-color-2">
              <img
                src=" https://i.ebayimg.com/images/g/9vcAAOSwfTJm69PD/s-l500.webp"
                className="product-image"
                alt="Product Image"
              />
             <div className="favorite-icon-container">
                <FaRegHeart className="favorite-icon" />
              </div>
              <div className="product-name">
                <a href="">ROKR hompson Submachine Gun </a>
              </div>
              <div className="product-price">$30.00</div>
              <div className="product-actions"></div>
            </div>
            <div className="custom-col bg-color-3">
              <img
                src="https://i.ebayimg.com/images/g/MfMAAOSwclpgq6aR/s-l500.webp"
                className="product-image"
                
                alt="Product Image"
              />
              <div className="favorite-icon-container">
                <FaRegHeart className="favorite-icon" />
              </div>
              <div className="product-name">
                <a href="">ROKR hompson Submachine Gun </a>
              </div>
              <div className="product-price">$40.00</div>
              <div className="product-actions"></div>
            </div>
            <div className="custom-col bg-color-4">
              <img
                src="https://i.ebayimg.com/images/g/RRgAAOSwbuFndosd/s-l500.webp"
                className="product-image"
                
                alt="Product Image"
              />
              <div className="favorite-icon-container">
                <FaRegHeart className="favorite-icon" />
              </div>
              <div className="product-name">
                <a href="">ROKR hompson Submachine Gun </a>
              </div>
              <div className="product-price">$50.00</div>
              <div className="product-actions"></div>
            </div>
            <div className="custom-col bg-color-5">
              <img
                src=" https://i.ebayimg.com/images/g/xD4AAOSwL2pnSWk3/s-l500.webp"
                className="product-image"
                alt="Product Image"
              />
              <div className="favorite-icon-container">
                <FaRegHeart className="favorite-icon" />
              </div>
              <div className="product-name">
                <a href="">ROKR hompson Submachine Gun </a>
              </div>
              <div className="product-price">$60.00</div>
              <div className="product-actions"></div>
            </div>
          </div>
          
        </div>
      </div>

      {/* recomended for you */}
      <div>
        <div className="">
          <div
            className="mt-3"
            style={{ width: "100%", display: "flex", flexDirection: "row" }}
          >
            <div>
              <span className="ms-3 recomended-items-text">
                <a href="" style={{ textDecoration: "none", color: "inherit" }}>
                  Building Toy Complete Sets & Packs
                </a>
              </span>
              <div className="ms-3" style={{ color: "#707070" }}>
                Recommended for you
              </div>
            </div>
          </div>
          <div className="containerr">
            {" "}
            <div className="custom-col bg-color-1">
              <img
                src="https://i.ebayimg.com/images/g/TpAAAOSwXHZm5ieV/s-l500.webp"
                className="product-image"
                alt="Product Image"
              />
              <div className="favorite-icon-container">
                <FaRegHeart className="favorite-icon" />
              </div>
              <div className="product-name">
                <a href="">ROKR hompson Submachine Gun </a>
              </div>
              <div className="product-price">$20.00</div>
              <div className="product-actions"></div>
            </div>
            <div className="custom-col bg-color-2">
              <img
                src="https://i.ebayimg.com/images/g/5RwAAOSwjltndYVx/s-l500.webp"
                className="product-image"
                alt="Product Image"
              />
              <div className="favorite-icon-container">
                <FaRegHeart className="favorite-icon" />
              </div>
              <div className="product-name">
                <a href="">ROKR hompson Submachine Gun </a>
              </div>
              <div className="product-price">$30.00</div>
              <div className="product-actions"></div>
            </div>
            <div className="custom-col bg-color-3">
              <img
                src="https://i.ebayimg.com/images/g/t0AAAOSwMNJnQZ7e/s-l500.webp"
                className="product-image"
                alt="Product Image"
              />
              <div className="favorite-icon-container">
                <FaRegHeart className="favorite-icon" />
              </div>
              <div className="product-name">
                <a href="">ROKR hompson Submachine Gun </a>
              </div>
              <div className="product-price">$40.00</div>
              <div className="product-actions"></div>
            </div>
            <div className="custom-col bg-color-4">
              <img
                src="https://i.ebayimg.com/images/g/fHoAAOSwFGJnZP4q/s-l500.webp"
                className="product-image"
                alt="Product Image"
              />
              <div className="favorite-icon-container">
                <FaRegHeart className="favorite-icon" />
              </div>
             
              <div className="product-name">
                <a href="">ROKR hompson Submachine Gun </a>
              </div>
              <div className="product-price">$50.00</div>
              <div className="product-actions"></div>
            </div>
            <div className="custom-col bg-color-5">
              <img
                src="https://i.ebayimg.com/images/g/rbUAAOSwg-lmlQGk/s-l500.webp"
                className="product-image"
                alt="Product Image"
              />
             
              <div className="favorite-icon-container">
                <FaRegHeart className="favorite-icon" />
              </div>
              <div className="product-name">
                <a href="">ROKR hompson Submachine Gun </a>
              </div>
              <div className="product-price">$60.00</div>
              <div className="product-actions"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Catogery image */}

      <div className="">
        <div className=" container mt-5">
          <span className="d-flex recent-items-text">Trending on ebay</span>
        </div>
        <div className="category-images">
          <div className="row">
            <div className="col-12 col-md-1 col-sm-2 col-1 column titles">
              <img
                src="https://i.ebayimg.com/00/s/NTUyWDU1Mw==/z/dLAAAOSw3tpmVtNS/$_1.JPG"
                alt=""
              />
              <div className="title    ">
                <a href="#">luxury</a>
              </div>
            </div>
            <div className="col-12 col-md-1 col-sm-2 col-1 column">
              <img
                src="https://ir.ebaystatic.com/cr/v/c01/03_PopularDestination_Tire.jpg"
                alt=""
              />
              <div className="title">
                <a href="#">Tire</a>
              </div>
            </div>
            <div className="col-12 col-md-1 col-sm-2 col-1 column">
              <img
                src="https://ir.ebaystatic.com/cr/v/c01/02_PopularDestination_Sneakers.jpg"
                alt=""
              />
              <div className="title    ">
                <a href="#">Sneakers</a>
              </div>
            </div>
            <div className="col-12 col-md-1 col-sm-2 col-1 column">
              <img
                src="https://ir.ebaystatic.com/cr/v/c01/ECM_PopularDestination_Reburbished.jpg"
                alt=""
              />
              <div className="title    ">
                <a href="#">Refurbished</a>
              </div>
            </div>
            <div className="col-12 col-md-1 col-sm-2 col-1 column">
              <img
                src="https://ir.ebaystatic.com/cr/v/c01/07_PopularDestination_Toys.jpg"
                alt=""
              />
              <div className="title ">
                <a href="#">Toys</a>
              </div>
            </div>
            <div className="col-12 col-md-1 col-sm-2 col-1 column">
              <img
                src="https://ir.ebaystatic.com/cr/v/c01/05_PopularDestination_Cards.jpg"
                alt=""
              />
              <div className="title">
                <a href="#">Trading Cards</a>
              </div>
            </div>
            <div className="col-7 col-md-1 col-sm-2 col-1 column">
              <img
                src="https://ir.ebaystatic.com/cr/v/c01/06_PopularDestination_PreLoved.jpg"
                alt=""
              />
              <div className="title    ">
                <a href="#">Pre-Loved Items</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* IMAge container for small devices */}
      <div className="image-container image-container-for-sm">
        <img
          src="https://i.ebayimg.com/images/g/~i0AAOSwwdJnXGOb/s-l2400.jpg"
          alt="Product"
          className="background-image"
        />
        <div className="content-overlay">
          <h2 className="heading">You don't run with the crowd</h2>
          <p className="description">
            Get fit your own way with health and wellness gear on eBay.
          </p>
          <button className="cta-button">Shop for your style</button>
        </div>
      </div>

      <div className="image-container image-for-lg-dev">
        <img
          src="https://i.ebayimg.com/images/g/KYAAAOSwqj1nYDAl/s-l2400.jpg"
          alt="Product"
          className="background-image"
        />
        <div className="content-overlay">
          <h2 className="heading">Get fit your way</h2>
          <p className="description">
            You don't need classes or trends to live your fitness lifestyle.
          </p>
          <button className="cta-button">Get your gear</button>
        </div>
      </div>

      <div className="image-for-lg-dev">
        <div
          className="mb-5 mt-5 bg-warning"
          style={{
            height: "360px",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center", // Vertically center content
          }}
        >
          <div
            className="text-content"
            style={{
              width: "50%",
              padding: "20px", // Add some padding for better alignment
              textAlign: "left", // Ensure text aligns to the left
            }}
          >
            <h2
              className=""
              style={{
                color: "#553B06",
                fontSize: "30px",
                fontWeight: "700",
                lineHeight: "40px",
              }}
            >
              Discover a kaleidoscope of <br />
              cards
            </h2>
            <p className="description" style={{ color: "#553B06" }}>
              Build your collection of trading cards and collectible card games.
            </p>
            <button
              className="cta-button"
              style={{
                backgroundColor: "rgb(82, 57, 6)",
                color: "rgb(245, 181, 19)",
              }}
            >
              Find your favourites
            </button>
          </div>
          <div style={{ width: "50%" }}>
            <img
              style={{ height: "360px", width: "100%", objectFit: "cover" }}
              src="https://i.ebayimg.com/images/g/xl4AAOSwOX5nEN6d/s-l960.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowProducts;
