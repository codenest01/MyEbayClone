import React from "react";
import "../styles/layout/Catogery.css"; // Optional: For external CSS styling
import { FaRegHeart } from "react-icons/fa6";
import productImage from "../images/shoe.jpg";

function Category() {
  return (
    <div className="new-container  mt-5">
      <h1 className="ms-2">Auto Parts & Accessories</h1>
      <div className="row">
        <div className="col-md-2 new-shop-category">
          <div className="">
            <h2>Shop by Category</h2>
            <ul>
              <li>eBay Motors</li>
              <li>Parts & Accessories</li>
              <li>ATV, Side-by-Side & UTV Parts & Accessories</li>
              <li>Apparel, Protective Gear & Merchandise</li>
              <li>Aviation Parts & Accessories</li>
              <li>Boat Parts</li>
              <li>Car & Truck Parts & Accessories</li>
            </ul>
          </div>
        </div>

        <div className="col-md-10 ">
          <div className="new-image-wrapper new-image-wrapper-lg">
            <img
              src="https://i.ebayimg.com/thumbs/images/g/CXMAAOSw7RFlHtQi/s-l1200.jpg"
              alt="Product"
              className="new-background-img"
            />
            <div className="new-overlay">
              <h2 className="new-heading">Parts & Accessories</h2>
              <p className="new-description">Discover the best sellers.</p>
              <button className="new-cta-btn">See all</button>
            </div>
          </div>

          <div className="new-best-selling mt-4">
            <h2>Best Selling</h2>

            <div className="d-flex  flex-grow-1 align-items-stretch cate-product mb-3">
              <div className="position-relative h-100">
                <img
                  src="https://i.ebayimg.com/images/g/5uUAAOSwQPFmF4Ye/s-l500.webp"
                  alt="Product"
                  className="product-image-2 img-fluid h-100"
                />
                <div className="position-absolute top-2 end-2 p-2 favorite-icon-container">
                  <FaRegHeart className="favorite-icon" />
                </div>
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

            <div className="d-flex  flex-grow-1 align-items-stretch cate-product mb-3">
              <div className="position-relative h-100">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="Product"
                  className="product-image-2 img-fluid h-100"
                />
                <div className="position-absolute top-2 end-2 p-2 favorite-icon-container">
                  <FaRegHeart className="favorite-icon" />
                </div>
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

            <div className="d-flex  flex-grow-1 align-items-stretch cate-product mb-3">
              <div className="position-relative h-100">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwxKo0Qln4rqj9ULMwht7W4VgT-acPypCdeg&s"
                  alt="Product"
                  className="product-image-2 img-fluid h-100"
                />
                <div className="position-absolute top-2 end-2 p-2 favorite-icon-container">
                  <FaRegHeart className="favorite-icon" />
                </div>
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
      </div>
    </div>
  );
}

export default Category;
