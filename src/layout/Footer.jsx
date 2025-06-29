import React from "react";
import "../styles/layout/Footer.css";
import { IoLogoFacebook } from "react-icons/io";
import { AiFillTwitterSquare } from "react-icons/ai";

function Footer() {
  return (
    <>
      <footer className="ebay-footer bg-light">
        <div className="" style={{
          width: "100%",
         padding:"26px 26px 0 26px",
         marginBottom: "0",
          marginTop: "50px",
          
        }}>
          <div className="row">
            <div className="col">
              <h5>Buy</h5>
              <ul>
                <li>
                  <a href="#">Registration</a>
                </li>
                <li>
                  <a href="#">eBay Money Back Guarantee</a>
                </li>
                <li>
                  <a href="#">Bidding & buying help</a>
                </li>
                <li>
                  <a href="#">Stores</a>
                </li>
                <li>
                  <a href="#">eBay Local</a>
                </li>
              </ul>
            </div>
            <div className="col">
              <h5>Sell</h5>
              <ul>
                <li>
                  <a href="#">Start selling</a>
                </li>
                <li>
                  <a href="#">Learn to sell</a>
                </li>
                <li>
                  <a href="#">Affiliates</a>
                </li>
              </ul>
            </div>
            <div className="col">
              <h5>Stay connected</h5>
              <ul>
                <li>
                  <a href="#">eBay's Blogs</a>
                </li>
                <li>
                  <IoLogoFacebook />
                  <a className="ms-2" href="#">
                    Facebook
                  </a>
                </li>
                <li>
                  <AiFillTwitterSquare />
                  <a className="ms-2" href="#">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div className="col">
              <h5>About eBay</h5>
              <ul>
                <li>
                  <a href="#">Company info</a>
                </li>
                <li>
                  <a href="#">News</a>
                </li>
                <li>
                  <a href="#">Investors</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Government relations</a>
                </li>
              </ul>
            </div>
            <div className="col">
              <h5>Help & Contact</h5>
              <ul>
                <li>
                  <a href="#">Seller Information Center</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
              </ul>
              <h5>Community</h5>
              <ul>
                <li>
                  <a href="#">Announcements</a>
                </li>
                <li>
                  <a href="#">Discussion boards</a>
                </li>
                <li>
                  <a href="#">eBay Giving Works</a>
                </li>
              </ul>
            </div>
            <p className="copyright text-center mt-5">
              Copyright © 1995-2025 eBay Inc. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Footer For mobiles */}
      <div
        className="footer-for-small-devices"
        style={{
          width: "100%",
         padding:"16px",
          
          marginBottom: "0",
          marginTop: "50px",
          backgroundColor: "#111820",
        }}
      >
        <ul className="footer-lists list-unstyled" style={{padding:"8px 0"}}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Sign in / Register</a>
          </li>
          <li>
            <a href="#">Sell an item </a>
          </li>
          <li>
            <a href="#">Help and Contact</a>
          </li>
          <li>
            <a href="#">Download the eBay app</a>
          </li>
         
        </ul>
        <div className="border-line bg-light" style={{height:"1px",width:"100%"}}> </div>
<div className="mt-5 footer-lists">
    <a href="#">Site map</a>{"  "}<a href="#">User Agreement</a>{"  "}<a href="#">Privacy</a>{"  "}
   
    <a href="#">Cookies</a>{"  "}<a href="#">Ad choice</a>
</div>
       
      </div>
    </>
  );
}

export default Footer;
