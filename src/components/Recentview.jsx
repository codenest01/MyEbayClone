import React from 'react'
import Overview from './Overview'
import productImage from "../images/shoe.jpg"
import { FaRegHeart } from "react-icons/fa6"; 
function Recentview() {
  return (
    <div>
<Overview>
<div className="col-md-8">
<h4 className="mb-0 fw-bold mb-3 mt-5">Recent view</h4>
  <div className="d-flex  flex-grow-1 align-items-stretch cate-product mb-3">
              <div className="position-relative h-100">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="Product"
                  className="product-image-2 img-fluid h-100 "
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
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCytP-1BGm9A9fFyUasMQomk7R4eKnPCRQQA&s"
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
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSykUhFDLt30fbBfTxIm4h-tCKn8u9T-MKgQ&s"
                  alt="Product"
                  className="product-image-2 img-fluid h-100 "
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
                  className="product-image-2 img-fluid h-100 "
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
  </Overview>      
    </div>
  )
}

export default Recentview
