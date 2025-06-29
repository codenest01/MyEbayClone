import React, { useRef, useState,useEffect } from "react";
import "../styles/ProductDetails.css";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import { RxZoomIn } from "react-icons/rx";
import { IoMdHeartEmpty } from "react-icons/io";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

function ProductDetails() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const mainImageRef = useRef(null);
  const thumbWrapperRef = useRef(null);

  const images = [
    "https://i.ebayimg.com/images/g/TPoAAOSwLUJoNhIb/s-l140.webp",
    "https://i.ebayimg.com/images/g/fNUAAOSwY3VnU4A1/s-l140.webp",
    "https://i.ebayimg.com/images/g/TPoAAOSwLUJoNhIb/s-l140.webp",
    "https://i.ebayimg.com/images/g/fNUAAOSwY3VnU4A1/s-l140.webp",
    "https://i.ebayimg.com/images/g/TPoAAOSwLUJoNhIb/s-l140.webp",
    "https://i.ebayimg.com/images/g/fNUAAOSwY3VnU4A1/s-l140.webp",
    "https://i.ebayimg.com/images/g/TPoAAOSwLUJoNhIb/s-l140.webp",
  ];

  const scrollThumbs = (direction) => {
    thumbWrapperRef.current.scrollBy({
      top: direction * 70,
      behavior: "smooth",
    });
  };

  const navigateImage = (step) => {
    const newIndex = (currentIndex + step + images.length) % images.length;
    setCurrentIndex(newIndex);
    setZoomed(false);
  };

  const handleMouseMove = (e) => {
    if (!zoomed || !mainImageRef.current) return;
    const img = mainImageRef.current;
    const rect = img.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    img.style.transformOrigin = `${x}% ${y}%`;
  };

  const openFullscreen = () => {
    const wrapper = mainImageRef.current?.parentElement;
    if (wrapper.requestFullscreen) wrapper.requestFullscreen();
    else if (wrapper.webkitRequestFullscreen) wrapper.webkitRequestFullscreen();
    else if (wrapper.msRequestFullscreen) wrapper.msRequestFullscreen();
  };

  const handleImageClick = () => setZoomed(!zoomed);
  const scrollRef = useRef(null);
  

  const handleScroll = () => {
    const scrollLeft = scrollRef.current.scrollLeft;
    const width = scrollRef.current.clientWidth;
    const index = Math.round(scrollLeft / width);
    setCurrentIndex(index);
  };

  useEffect(() => {
    const ref = scrollRef.current;
    ref.addEventListener("scroll", handleScroll);
    return () => ref.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="main-container mt-1 mt-md-5">
      <div className="row">
        {/* Thumbnails */}
        <div className="col-1 p-2 d-flex flex-column align-self-start additional-thumbs">
          <div className="additional-images">
            <HiChevronUp
              className="scroll-btn  mb-3"
              onClick={() => scrollThumbs(-1)}
              style={{ cursor: "pointer" }}
            />
            <div
              className="sm-images-container rounded "
              style={{
                height: "400px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                className="flex-grow-1  hide-scrollbar"
                ref={thumbWrapperRef}
              >
                <div>
                  {images.map((imgSrc, idx) => (
                    <div key={idx} className="mb-2">
                      <img
                        src={imgSrc}
                        className="img-fluid sm-image"
                        onClick={() => {
                          setCurrentIndex(idx);
                          setZoomed(false);
                        }}
                        alt={`Thumbnail ${idx}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <HiChevronDown
              className="scroll-btn mt-3"
              onClick={() => scrollThumbs(1)}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>

      
        
        {/* Main Image */}
        <div className="col-12 col-md-6 ms-md-5 major-image rounded align-self-start p-0">
          <div className="main-image">
            <div
              className="image-container-1 position-relative"
              onMouseMove={handleMouseMove}
              onMouseLeave={() => {
                setZoomed(false);
                if (mainImageRef.current)
                  mainImageRef.current.style.transform = "scale(1)";
              }}
            >
              <RxZoomIn className="zoom-icon" onClick={openFullscreen} />
              <div className="fav-icon">
  <span className="fav-count">933</span>
  <IoMdHeartEmpty size={18} color="#000" />
</div>
              <SlArrowLeft
                className="nav-btn left-btn"
                onClick={() => navigateImage(-1)}
              />
              <SlArrowRight
                className="nav-btn right-btn"
                onClick={() => navigateImage(1)}
              />
              <div className="zoom-wrapper">
                <img
                  ref={mainImageRef}
                  src={images[currentIndex]}
                  className="zoom-img"
                  alt="Zoomable"
                  onClick={handleImageClick}
                  style={{
                    transform: zoomed ? "scale(2)" : "scale(1)",
                    cursor: zoomed ? "zoom-out" : "zoom-in",
                  }}
                />
              </div>
            </div>
            <div className="d-flex">
            <span className="ms-auto me-4 share">
              <a href="#">share</a>
            </span>
          </div>
          </div>

          <div className="sm-size-devices">
  <div className="major-image-scroll-container" ref={scrollRef}>
    {images.map((image, index) => (
      <div className="image-slide" key={index}>
        <img src={image} alt={`Image ${index}`} />
        <div className="fav-icon">
  <span className="fav-count">933</span>
  <IoMdHeartEmpty size={18} color="black"/>
</div>
      </div>
    ))}
  </div>

  {/* Dot container outside image container */}
  <div className="dot-container">
    {images.map((_, i) => (
      <div
        key={i}
        className={`dot ${i === currentIndex ? "active" : ""}`}
      />
    ))}
   
  </div>
  
</div>





        
        </div>




 
        {/* Product Info */}
        <div className="col-md-4 mt-5 product-info">
          <span className="title mb-5">
            HP EliteBook 14" FHD Laptop AMD Ryzen 5 Pro Up To 32GB RAM 1TB SSD
            Windows 11 PC
          </span>
          <br />
          <div className="mt-5">
            <div className="additional-info">
              Condition: <b>Excellent - Refurbished</b>
              <div>
                <span className="ms-5 note">
                  “The item shows minimal wear and is backed by a one year
                  warranty. It is fully functional and has”
                  <a className="text-center" href="#">
                    read more
                  </a>
                </span>
              </div>
            </div>

            {/* Dropdowns */}
           <div className="dropdowns">
           <div className="mt-4 ms-5">
              <select className="w-100">
                <option>Ram : Select</option>
                <option>8GB</option>
                <option>16GB</option>
                <option>32GB</option>
              </select>
            </div>

            <div className="mt-4 ms-5">
              <select className="w-100">
                <option>SSD : Select</option>
                <option>256GB</option>
                <option>512GB</option>
                <option>1TB</option>
              </select>
            </div>
           

            <div className="mt-4 ms-5">
              <select className="w-100">
                <option>OS : Select</option>
                <option>Windows 10</option>
                <option>Windows 11</option>
              </select>
            </div>
         

            {/* Quantity */}
            <div className="mt-4 ms-5">
              <label htmlFor="quality" className="form-label">
                Quantity:
              </label>
              <input
                type="number"
                id="quality"
                name="quality"
                className="ms-2"
                min="1"
                max="10"
              />
            </div>
            </div>
            {/* Buttons */}
            <div className="">
              <button className="button-2 w-100  p-2 fw-bold bg-primary text-light">
                Buy it Now
              </button>
              <button className="button-2 w-100 mt-3 p-2 fw-bold text-primary">
                Add to cart
              </button>
              <button className="button-2 w-100 mt-3 p-2 fw-bold text-primary">
                Add to wishlist
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* About this item */}
      <div className="container my-4">
  <div className="item-box p-4">
    <h5 className="fw-semibold mb-3">Item specifics</h5>
    <div className="row">
     
      <div className="col-md-6 col-sm-12">
        <ul className="list-unstyled">
          <li><strong>Condition:</strong> New with tags: A brand-new, unused, and unworn item</li>
          <li><strong>Style:</strong> Diver</li>
          <li><strong>Department:</strong> Men</li>
          <li><strong>Features:</strong> Date Indicator</li>
          <li><strong>Band Color:</strong> Black</li>
          <li><strong>Band Material:</strong> Rubber</li>
          <li><strong>Display:</strong> Digital</li>
          <li><strong>Case Material:</strong> Stainless Steel</li>
          <li><strong>Dial Style:</strong> 12-Hour Dial, Seconds Hand</li>
        </ul>
      </div>

      
      <div className="col-md-6 col-sm-12">
        <ul className="list-unstyled">
          <li><strong>Brand:</strong> Invicta</li>
          <li><strong>MPN:</strong> 46129 46130 46131 46132 46133 46134 46135</li>
          <li><strong>Type:</strong> Wristwatch</li>
          <li><strong>Movement:</strong> Quartz</li>
          <li><strong>Dial Color:</strong> Black, Blue, Gold</li>
          <li><strong>Case Color:</strong> Silver</li>
          <li><strong>Case Size:</strong> 45 mm</li>
          <li><strong>Water Resistance:</strong> 50 m (5 ATM)</li>
          <li><strong>Watch Shape:</strong> Round</li>
        </ul>
      </div>
    </div>
  </div>
</div>

{/* Sellers Feed BAck */}
<div className="container my-4">
  <h4 className="fw-semibold mb-3">Seller feedback <span className="text-muted">(111,992)</span></h4>

  
  <ul className="nav nav-tabs mb-3">
  
   
  </ul>


  <div className="mb-4 d-flex flex-wrap gap-2">
    <select className="form-select form-select-sm w-auto">
      <option selected>All ratings</option>
      <option>5 Stars</option>
      <option>4 Stars</option>
      <option>3 Stars</option>
    </select>

  
  </div>

  
  <div className="feedback-item border-top pt-3">
    <div className="d-flex justify-content-between mb-1">
      <small><span className="text-success">+ </span>***a (384) - Past month</small>
      <small className="text-muted">Verified purchase</small>
    </div>
    <p className="mb-3">
      Item is fantastic! Great watch for the price, excellent value, looks far more expensive than it is...
      <br />Would deal with again and might be back for more color options and choices, Thank you!
    </p>
  </div>

  <div className="feedback-item border-top pt-3">
    <div className="d-flex justify-content-between mb-1">
      <small><span className="text-success">+ </span>***1 (10) - Past 6 months</small>
      <small className="text-muted">Verified purchase</small>
    </div>
    <p className="mb-0">
      I like this watch. It has a nice weight to it and it seems to be accurate... I have a Taco Stand and my hands are in and out of the water all day...
    </p>
  </div>
</div>

    </div>
  );
}

export default ProductDetails;
