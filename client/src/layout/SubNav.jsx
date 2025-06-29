import React from "react";

function SubNav() {
  const navItems = [
    { href: "/explore", text: "Explore (New!)" },
    { href: "/Saved", text: "Saved" },
    { href: "/Electronics", text: "Electronics" },
    { href: "/Motors", text: "Motors" },
    { href: "/Fashion", text: "Fashion" },
    { href: "/Collectibles and Art", text: "Collectibles and Art" },
    { href: "/Sports", text: "Sports" },
    { href: "/Health & Beauty", text: "Health & Beauty" },
    { href: "/Industrial equipment", text: "Industrial equipment" },
    { href: "/Home & Garden", text: "Home & Garden" },
    { href: "/Deal", text: "Deels" },
    { href: "/Sell", text: "Sell" },
  ];

  const getHiddenItems = () => {
    const hiddenItems = [];
    for (let i = 0; i < navItems.length; i++) {
      const mediaQuery = window.matchMedia(`(max-width: ${1100 - i * 100}px)`);
      if (mediaQuery.matches) {
        hiddenItems.push(navItems[i]);
      }
    }
    return hiddenItems;
  };

  const getVisibleItems = () => {
    const visibleItems = [];
    for (let i = 0; i < navItems.length; i++) {
      const mediaQuery = window.matchMedia(`(max-width: ${1200 - i * 100}px)`);
      if (!mediaQuery.matches) {
        visibleItems.push(navItems[i]);
      }
    }
    return visibleItems;
  };

  const [visibleItems, setVisibleItems] = React.useState(getVisibleItems());
  const [hiddenItems, setHiddenItems] = React.useState(getHiddenItems());

  React.useEffect(() => {
    const handleResize = () => {
      setVisibleItems(getVisibleItems());
      setHiddenItems(getHiddenItems());
    };

    handleResize(); // Call on initial render
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {location.pathname === "/" && (
        <div className="ms-5 me-5 mt-4">
          <style>
            {`
          .nav-link {
            cursor: pointer;
            text-decoration: none;
            color: #333;
            font-size: 12px;
          }
          .nav-link:hover {
            text-decoration: underline;
            color: blue; /* Keeps the color same as the default */
          }
        .dropdown-menu {
        margin-top:12px;
  display: none;
  position: absolute;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  flex-direction: row;
  width: 90vw; 
  left: 50%; 
  transform: translateX(-50%);
  overflow-x: hidden; 
  border-radius:10px;
}


.nav-item-electronics:hover .dropdown-menu,
.nav-item-Fashion:hover .dropdown-menu,
.nav-item-Home-Garden:hover .dropdown-menu,
.nav-item-sell:hover .dropdown-menu,
.nav-item-Health-Beauty:hover .dropdown-menu,
.nav-item-Motors:hover .dropdown-menu,
.nav-item-Sports:hover .dropdown-menu,
.nav-item-Collectibles-and-Art:hover .dropdown-menu,
.nav-item-Industrial-equipment:hover .dropdown-menu {
  display: flex;
}

          .dropdown-menu > div {
            flex: 1;
          }
        `}
          </style>
          <ul
            style={{
              listStyleType: "none",
              display: "flex",
              justifyContent: "space-between",
              padding: 0,
              width: "100%",
            }}
          >
            {visibleItems.map((item, index) => (
              <>
                <React.Fragment key={item.href}>
                  <li
                    className={`nav-item-${index + 1} ${
                      item.text === "Electronics"
                        ? "nav-item-electronics"
                        : 
                        item.text === "Sell"
                        ? "nav-item-sell"
                        : 
                        item.text === "Home & Garden"
                        ? "nav-item-Home-Garden"
                        : 
                        item.text === "Health & Beauty"
                        ? "nav-item-Health-Beauty"
                        : 
                        item.text === "Sports"
                        ? "nav-item-Sports"
                        : 
                        item.text === "Collectibles and Art"
                        ? "nav-item-Collectibles-and-Art"
                        : 
                        item.text === "Fashion"
                        ? "nav-item-Fashion"
                        : 
                        item.text === "Motors"
                        ? "nav-item-Motors"
                        :
                        item.text === "Industrial equipment"
                        ? "nav-item-Industrial-equipment"
                        : ""
                    }`}
                  >
                    <a href={item.href} className="nav-link">
                      {item.text}
                    </a>

                    {item.text === "Electronics" && (
                      <div className="dropdown-menu">
                        <div className="p-3">
                          <div
                            className="ms-5"
                            style={{
                              fontWeight: "700",
                              marginBottom: "13px",
                              fontSize: "12px",
                              position: "relative",
                              display: "inline-block",
                            }}
                          >
                            Most popular categories
                            <div
                              style={{
                                position: "absolute",
                                bottom: "-6px",
                                left: "0",
                                width: "100%",
                                height: "1px",
                                backgroundColor: "#b3abab",
                              }}
                            ></div>
                          </div>

                          <ul style={{ display: "flex", flexWrap: "wrap" }}>
                            {[
                              "Smartphones and accessories",
                              "Video games and consoles",
                              "Computers and tablets",
                              "Cameras and photos",
                              "Camera drones",
                            ].map((item, index) => (
                              <li
                                key={index}
                                style={{
                                  fontSize: "12px",
                                  listStyleType: "none",
                                  textDecoration: "none",
                                  margin: "10px",
                                  whiteSpace: "nowrap",
                                  flexBasis: "200px",
                                }}
                              >
                                <a
                                  href="#"
                                  className=""
                                  style={{
                                    textDecoration: "none",
                                    color: "black",
                                  }}
                                  onMouseEnter={(e) => {
                                    e.target.style.color = "blue";
                                    e.target.style.textDecoration = "underline";
                                  }}
                                  onMouseLeave={(e) => {
                                    e.target.style.color = "black";
                                    e.target.style.textDecoration = "none";
                                  }}
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="p-3">
                          <div
                            className="ms-5"
                            style={{
                              fontWeight: "700",
                              marginBottom: "13px",
                              fontSize: "12px",
                              position: "relative",
                              display: "inline-block",
                            }}
                          >
                            More categories
                            <div
                              style={{
                                position: "absolute",
                                bottom: "-6px",
                                left: "0",
                                width: "100%",
                                height: "1px",
                                backgroundColor: "#b3abab",
                              }}
                            ></div>
                          </div>

                          <ul style={{ display: "flex", flexWrap: "wrap" }}>
                            {[
                              "Home appliances",
                              "Wearable technology",
                              "Audio and headphones",
                              "Networking equipment",
                              "Storage devices",
                            ].map((item, index) => (
                              <li
                                key={index}
                                style={{
                                  fontSize: "12px",
                                  listStyleType: "none",
                                  textDecoration: "none",
                                  margin: "10px",
                                  whiteSpace: "nowrap",
                                  flexBasis: "200px",
                                }}
                              >
                                <a
                                  href="#"
                                  className=""
                                  style={{
                                    textDecoration: "none",
                                    color: "black",
                                  }}
                                  onMouseEnter={(e) => {
                                    e.target.style.color = "blue";
                                    e.target.style.textDecoration = "underline";
                                  }}
                                  onMouseLeave={(e) => {
                                    e.target.style.color = "black";
                                    e.target.style.textDecoration = "none";
                                  }}
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="p-3">
                          <img
                            src="https://ir.ebaystatic.com/cr/v/c01/ROW-19392_Fallback_Electronics_770x270.png"
                            alt="Electronics"
                            style={{
                              borderRadius: "6px",
                              width: "auto",
                              height: "100%",
                            }}
                          />
                        </div>
                      </div>
                    )}

                    {item.text === "Industrial equipment" && (
                      <div className="dropdown-menu">
                        <div className="p-3">
                        <div
                            className="ms-5"
                            style={{
                              fontWeight: "700",
                              marginBottom: "13px",
                              fontSize: "12px",
                              position: "relative",
                              display: "inline-block",
                            }}
                          >
                            Most popular categories
                            <div
                              style={{
                                position: "absolute",
                                bottom: "-6px",
                                left: "0",
                                width: "100%",
                                height: "1px",
                                backgroundColor: "#b3abab",
                              }}
                            ></div>
                          </div>

                          <ul style={{ display: "flex", flexWrap: "wrap" }}>
                            {[
                              "Industrial smartphones and accessories",
                              "Industrial video games and consoles",
                              "Industrial computers and tablets",
                              "Industrial cameras and photos",
                              "Industrial camera drones",
                              "Refurbished industrial equipment",
                              "Industrial smart home",
                            ].map((item, index) => (
                              <li
                                key={index}
                                style={{
                                  fontSize: "12px",
                                  listStyleType: "none",
                                  textDecoration: "none",
                                  margin: "10px",
                                  whiteSpace: "nowrap",
                                  flexBasis: "200px",
                                }}
                              >
                                <a
                                  href="#"
                                  className=""
                                  style={{
                                    textDecoration: "none",
                                    color: "black",
                                  }}
                                  onMouseEnter={(e) => {
                                    e.target.style.color = "blue";
                                    e.target.style.textDecoration = "underline";
                                  }}
                                  onMouseLeave={(e) => {
                                    e.target.style.color = "black";
                                    e.target.style.textDecoration = "none";
                                  }}
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="p-3">
                        <div
                            className="ms-5"
                            style={{
                              fontWeight: "700",
                              marginBottom: "13px",
                              fontSize: "12px",
                              position: "relative",
                              display: "inline-block",
                            }}
                          >
                            More categories
                            <div
                              style={{
                                position: "absolute",
                                bottom: "-6px",
                                left: "0",
                                width: "100%",
                                height: "1px",
                                backgroundColor: "#b3abab",
                              }}
                            ></div>
                          </div>

                          <ul style={{ display: "flex", flexWrap: "wrap" }}>
                            {[
                              "Industrial machinery",
                              "Construction equipment",
                              "Heavy-duty tools",
                              "Industrial lighting",
                              "Warehouse equipment",
                            ].map((item, index) => (
                              <li
                                key={index}
                                style={{
                                  fontSize: "12px",
                                  listStyleType: "none",
                                  textDecoration: "none",
                                  margin: "10px",
                                  whiteSpace: "nowrap",
                                  flexBasis: "200px",
                                }}
                              >
                                <a
                                  href="#"
                                  className=""
                                  style={{
                                    textDecoration: "none",
                                    color: "black",
                                  }}
                                  onMouseEnter={(e) => {
                                    e.target.style.color = "blue";
                                    e.target.style.textDecoration = "underline";
                                  }}
                                  onMouseLeave={(e) => {
                                    e.target.style.color = "black";
                                    e.target.style.textDecoration = "none";
                                  }}
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="p-3">
                          <img
                            src="https://ir.ebaystatic.com/cr/v/c01/ROW-19398_Fallback_IndustrialEquipment_770x270.png"
                            alt="Industrial equipment"
                            style={{
                              borderRadius: "6px",
                              width: "auto",
                              height: "100%",
                            }}
                          />
                        </div>
                      </div>
                    )}

                    {item.text === "Motors" && (
                      <div className="dropdown-menu">
                        <div className="p-3">
                        <div
                            className="ms-5"
                            style={{
                              fontWeight: "700",
                              marginBottom: "13px",
                              fontSize: "12px",
                              position: "relative",
                              display: "inline-block",
                            }}
                          >
                            Most popular categories
                            <div
                              style={{
                                position: "absolute",
                                bottom: "-6px",
                                left: "0",
                                width: "100%",
                                height: "1px",
                                backgroundColor: "#b3abab",
                              }}
                            ></div>
                          </div>

                          <ul style={{ display: "flex", flexWrap: "wrap" }}>
                            {[
                              "Motors smartphones and accessories",
                              "Motors video games and consoles",
                              "Motors computers and tablets",
                              "Motors cameras and photos",
                              "Motors camera drones",
                              "Refurbished motors equipment",
                              "Motors smart home",
                            ].map((item, index) => (
                              <li
                                key={index}
                                style={{
                                  fontSize: "12px",
                                  listStyleType: "none",
                                  textDecoration: "none",
                                  margin: "10px",
                                  whiteSpace: "nowrap",
                                  flexBasis: "200px",
                                }}
                              >
                                <a
                                  href="#"
                                  className=""
                                  style={{
                                    textDecoration: "none",
                                    color: "black",
                                  }}
                                  onMouseEnter={(e) => {
                                    e.target.style.color = "blue";
                                    e.target.style.textDecoration = "underline";
                                  }}
                                  onMouseLeave={(e) => {
                                    e.target.style.color = "black";
                                    e.target.style.textDecoration = "none";
                                  }}
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="p-3">
                        <div
                            className="ms-5"
                            style={{
                              fontWeight: "700",
                              marginBottom: "13px",
                              fontSize: "12px",
                              position: "relative",
                              display: "inline-block",
                            }}
                          >
                           More categories
                            <div
                              style={{
                                position: "absolute",
                                bottom: "-6px",
                                left: "0",
                                width: "100%",
                                height: "1px",
                                backgroundColor: "#b3abab",
                              }}
                            ></div>
                          </div>

                          <ul style={{ display: "flex", flexWrap: "wrap" }}>
                            {[
                              "Motors parts and accessories",
                              "Motors tools and equipment",
                              "Motors performance upgrades",
                              "Motors tires and wheels",
                              "Motors repair and maintenance",
                            ].map((item, index) => (
                              <li
                                key={index}
                                style={{
                                  fontSize: "12px",
                                  listStyleType: "none",
                                  textDecoration: "none",
                                  margin: "10px",
                                  whiteSpace: "nowrap",
                                  flexBasis: "200px",
                                }}
                              >
                                <a
                                  href="#"
                                  className=""
                                  style={{
                                    textDecoration: "none",
                                    color: "black",
                                  }}
                                  onMouseEnter={(e) => {
                                    e.target.style.color = "blue";
                                    e.target.style.textDecoration = "underline";
                                  }}
                                  onMouseLeave={(e) => {
                                    e.target.style.color = "black";
                                    e.target.style.textDecoration = "none";
                                  }}
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="p-3">
                          <img
                            src="https://ir.ebaystatic.com/cr/v/c01/ROW-19399_Fallback_PandA_770x270.png"
                            alt="Motors"
                            style={{
                              borderRadius: "6px",
                              width: "auto",
                              height: "100%",
                            }}
                          />
                        </div>
                      </div>
                    )}


{item.text === "Fashion" && (
                      <div className="dropdown-menu">
                        <div className="p-3">
                          <ul style={{ display: "flex", flexWrap: "wrap" }}>
                            {[
                              "Motors smartphones and accessories",
                              "Motors video games and consoles",
                              "Motors computers and tablets",
                              "Motors cameras and photos",
                              "Motors camera drones",
                              "Refurbished motors equipment",
                              "Motors smart home",
                            ].map((item, index) => (
                              <li
                                key={index}
                                style={{
                                  fontSize: "12px",
                                  listStyleType: "none",
                                  textDecoration: "none",
                                  margin: "10px",
                                  whiteSpace: "nowrap",
                                  flexBasis: "200px",
                                }}
                              >
                                <a
                                  href="#"
                                  className=""
                                  style={{
                                    textDecoration: "none",
                                    color: "black",
                                  }}
                                  onMouseEnter={(e) => {
                                    e.target.style.color = "blue";
                                    e.target.style.textDecoration = "underline";
                                  }}
                                  onMouseLeave={(e) => {
                                    e.target.style.color = "black";
                                    e.target.style.textDecoration = "none";
                                  }}
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="p-3">
                          <ul style={{ display: "flex", flexWrap: "wrap" }}>
                            {[
                              "Motors parts and accessories",
                              "Motors tools and equipment",
                              "Motors performance upgrades",
                              "Motors tires and wheels",
                              "Motors repair and maintenance",
                            ].map((item, index) => (
                              <li
                                key={index}
                                style={{
                                  fontSize: "12px",
                                  listStyleType: "none",
                                  textDecoration: "none",
                                  margin: "10px",
                                  whiteSpace: "nowrap",
                                  flexBasis: "200px",
                                }}
                              >
                                <a
                                  href="#"
                                  className=""
                                  style={{
                                    textDecoration: "none",
                                    color: "black",
                                  }}
                                  onMouseEnter={(e) => {
                                    e.target.style.color = "blue";
                                    e.target.style.textDecoration = "underline";
                                  }}
                                  onMouseLeave={(e) => {
                                    e.target.style.color = "black";
                                    e.target.style.textDecoration = "none";
                                  }}
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="p-3">
                          <img
                            src="https://ir.ebaystatic.com/cr/v/c01/ROW-19393_Fallback_Moda_770x270.png"
                            alt="Motors"
                            style={{
                              borderRadius: "6px",
                              width: "auto",
                              height: "100%",
                            }}
                          />
                        </div>
                      </div>
                    )}
                    

                    {item.text === "Collectibles and Art" && (
                      <div className="dropdown-menu">
                        <div className="p-3">
                        <div
                            className="ms-5"
                            style={{
                              fontWeight: "700",
                              marginBottom: "13px",
                              fontSize: "12px",
                              position: "relative",
                              display: "inline-block",
                            }}
                          >
                            Most popular categories
                            <div
                              style={{
                                position: "absolute",
                                bottom: "-6px",
                                left: "0",
                                width: "100%",
                                height: "1px",
                                backgroundColor: "#b3abab",
                              }}
                            ></div>
                          </div>

                          <ul style={{ display: "flex", flexWrap: "wrap" }}>
                            {[
                              "Motors smartphones and accessories",
                              "Motors video games and consoles",
                              "Motors computers and tablets",
                              "Motors cameras and photos",
                              "Motors camera drones",
                              "Refurbished motors equipment",
                              "Motors smart home",
                            ].map((item, index) => (
                              <li
                                key={index}
                                style={{
                                  fontSize: "12px",
                                  listStyleType: "none",
                                  textDecoration: "none",
                                  margin: "10px",
                                  whiteSpace: "nowrap",
                                  flexBasis: "200px",
                                }}
                              >
                                <a
                                  href="#"
                                  className=""
                                  style={{
                                    textDecoration: "none",
                                    color: "black",
                                  }}
                                  onMouseEnter={(e) => {
                                    e.target.style.color = "blue";
                                    e.target.style.textDecoration = "underline";
                                  }}
                                  onMouseLeave={(e) => {
                                    e.target.style.color = "black";
                                    e.target.style.textDecoration = "none";
                                  }}
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="p-3">
                        <div
                            className="ms-5"
                            style={{
                              fontWeight: "700",
                              marginBottom: "13px",
                              fontSize: "12px",
                              position: "relative",
                              display: "inline-block",
                            }}
                          >
                           More categories
                            <div
                              style={{
                                position: "absolute",
                                bottom: "-6px",
                                left: "0",
                                width: "100%",
                                height: "1px",
                                backgroundColor: "#b3abab",
                              }}
                            ></div>
                          </div>

                          <ul style={{ display: "flex", flexWrap: "wrap" }}>
                            {[
                              "Motors parts and accessories",
                              "Motors tools and equipment",
                              "Motors performance upgrades",
                              "Motors tires and wheels",
                              "Motors repair and maintenance",
                            ].map((item, index) => (
                              <li
                                key={index}
                                style={{
                                  fontSize: "12px",
                                  listStyleType: "none",
                                  textDecoration: "none",
                                  margin: "10px",
                                  whiteSpace: "nowrap",
                                  flexBasis: "200px",
                                }}
                              >
                                <a
                                  href="#"
                                  className=""
                                  style={{
                                    textDecoration: "none",
                                    color: "black",
                                  }}
                                  onMouseEnter={(e) => {
                                    e.target.style.color = "blue";
                                    e.target.style.textDecoration = "underline";
                                  }}
                                  onMouseLeave={(e) => {
                                    e.target.style.color = "black";
                                    e.target.style.textDecoration = "none";
                                  }}
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="p-3">
                          <img
                            src="https://ir.ebaystatic.com/cr/v/c01/ROW-19397_Fallback_Collectibles_770x270.png"
                            alt="Motors"
                            style={{
                              borderRadius: "6px",
                              width: "auto",
                              height: "100%",
                            }}
                          />
                        </div>
                      </div>
                    )}


{item.text === "Sports" && (
                      <div className="dropdown-menu">
                        <div className="p-3">
                        <div
                            className="ms-5"
                            style={{
                              fontWeight: "700",
                              marginBottom: "13px",
                              fontSize: "12px",
                              position: "relative",
                              display: "inline-block",
                            }}
                          >
                            Most popular categories
                            <div
                              style={{
                                position: "absolute",
                                bottom: "-6px",
                                left: "0",
                                width: "100%",
                                height: "1px",
                                backgroundColor: "#b3abab",
                              }}
                            ></div>
                          </div>

                          <ul style={{ display: "flex", flexWrap: "wrap" }}>
                            {[
                              "Motors smartphones and accessories",
                              "Motors video games and consoles",
                              "Motors computers and tablets",
                              "Motors cameras and photos",
                              "Motors camera drones",
                              "Refurbished motors equipment",
                              "Motors smart home",
                            ].map((item, index) => (
                              <li
                                key={index}
                                style={{
                                  fontSize: "12px",
                                  listStyleType: "none",
                                  textDecoration: "none",
                                  margin: "10px",
                                  whiteSpace: "nowrap",
                                  flexBasis: "200px",
                                }}
                              >
                                <a
                                  href="#"
                                  className=""
                                  style={{
                                    textDecoration: "none",
                                    color: "black",
                                  }}
                                  onMouseEnter={(e) => {
                                    e.target.style.color = "blue";
                                    e.target.style.textDecoration = "underline";
                                  }}
                                  onMouseLeave={(e) => {
                                    e.target.style.color = "black";
                                    e.target.style.textDecoration = "none";
                                  }}
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="p-3">
                        <div
                            className="ms-5"
                            style={{
                              fontWeight: "700",
                              marginBottom: "13px",
                              fontSize: "12px",
                              position: "relative",
                              display: "inline-block",
                            }}
                          >
                           More categories
                            <div
                              style={{
                                position: "absolute",
                                bottom: "-6px",
                                left: "0",
                                width: "100%",
                                height: "1px",
                                backgroundColor: "#b3abab",
                              }}
                            ></div>
                          </div>

                          <ul style={{ display: "flex", flexWrap: "wrap" }}>
                            {[
                              "Motors parts and accessories",
                              "Motors tools and equipment",
                              "Motors performance upgrades",
                              "Motors tires and wheels",
                              "Motors repair and maintenance",
                            ].map((item, index) => (
                              <li
                                key={index}
                                style={{
                                  fontSize: "12px",
                                  listStyleType: "none",
                                  textDecoration: "none",
                                  margin: "10px",
                                  whiteSpace: "nowrap",
                                  flexBasis: "200px",
                                }}
                              >
                                <a
                                  href="#"
                                  className=""
                                  style={{
                                    textDecoration: "none",
                                    color: "black",
                                  }}
                                  onMouseEnter={(e) => {
                                    e.target.style.color = "blue";
                                    e.target.style.textDecoration = "underline";
                                  }}
                                  onMouseLeave={(e) => {
                                    e.target.style.color = "black";
                                    e.target.style.textDecoration = "none";
                                  }}
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="p-3">
                          <img
                            src="https://ir.ebaystatic.com/cr/v/c01/ROW-19396_Fallback_Sports_and_Leisure_770x270.png"
                            alt="Sports"
                            style={{
                              borderRadius: "6px",
                              width: "auto",
                              height: "100%",
                            }}
                          />
                        </div>
                      </div>
                    )}

{item.text === "Health & Beauty" && (
                      <div className="dropdown-menu">
                        <div className="p-3">
                        <div
                            className="ms-5"
                            style={{
                              fontWeight: "700",
                              marginBottom: "13px",
                              fontSize: "12px",
                              position: "relative",
                              display: "inline-block",
                            }}
                          >
                            Most popular categories
                            <div
                              style={{
                                position: "absolute",
                                bottom: "-6px",
                                left: "0",
                                width: "100%",
                                height: "1px",
                                backgroundColor: "#b3abab",
                              }}
                            ></div>
                          </div>

                          <ul style={{ display: "flex", flexWrap: "wrap" }}>
                            {[
                              "Motors smartphones and accessories",
                              "Motors video games and consoles",
                              "Motors computers and tablets",
                              "Motors cameras and photos",
                              "Motors camera drones",
                              "Refurbished motors equipment",
                              "Motors smart home",
                            ].map((item, index) => (
                              <li
                                key={index}
                                style={{
                                  fontSize: "12px",
                                  listStyleType: "none",
                                  textDecoration: "none",
                                  margin: "10px",
                                  whiteSpace: "nowrap",
                                  flexBasis: "200px",
                                }}
                              >
                                <a
                                  href="#"
                                  className=""
                                  style={{
                                    textDecoration: "none",
                                    color: "black",
                                  }}
                                  onMouseEnter={(e) => {
                                    e.target.style.color = "blue";
                                    e.target.style.textDecoration = "underline";
                                  }}
                                  onMouseLeave={(e) => {
                                    e.target.style.color = "black";
                                    e.target.style.textDecoration = "none";
                                  }}
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="p-3">
                        <div
                            className="ms-5"
                            style={{
                              fontWeight: "700",
                              marginBottom: "13px",
                              fontSize: "12px",
                              position: "relative",
                              display: "inline-block",
                            }}
                          >
                           More categories
                            <div
                              style={{
                                position: "absolute",
                                bottom: "-6px",
                                left: "0",
                                width: "100%",
                                height: "1px",
                                backgroundColor: "#b3abab",
                              }}
                            ></div>
                          </div>

                          <ul style={{ display: "flex", flexWrap: "wrap" }}>
                            {[
                              "Motors parts and accessories",
                              "Motors tools and equipment",
                              "Motors performance upgrades",
                              "Motors tires and wheels",
                              "Motors repair and maintenance",
                            ].map((item, index) => (
                              <li
                                key={index}
                                style={{
                                  fontSize: "12px",
                                  listStyleType: "none",
                                  textDecoration: "none",
                                  margin: "10px",
                                  whiteSpace: "nowrap",
                                  flexBasis: "200px",
                                }}
                              >
                                <a
                                  href="#"
                                  className=""
                                  style={{
                                    textDecoration: "none",
                                    color: "black",
                                  }}
                                  onMouseEnter={(e) => {
                                    e.target.style.color = "blue";
                                    e.target.style.textDecoration = "underline";
                                  }}
                                  onMouseLeave={(e) => {
                                    e.target.style.color = "black";
                                    e.target.style.textDecoration = "none";
                                  }}
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="p-3">
                          <img
                            src="https://ir.ebaystatic.com/cr/v/c01/ROW-19394_Fallback_Health_Beauty_770x270.png"
                            alt="Health-Beauty"
                            style={{
                              borderRadius: "6px",
                              width: "auto",
                              height: "100%",
                            }}
                          />
                        </div>
                      </div>
                    )}

{item.text === "Home & Garden" && (
                      <div className="dropdown-menu">
                        <div className="p-3">
                        <div
                            className="ms-5"
                            style={{
                              fontWeight: "700",
                              marginBottom: "13px",
                              fontSize: "12px",
                              position: "relative",
                              display: "inline-block",
                            }}
                          >
                            Most popular categories
                            <div
                              style={{
                                position: "absolute",
                                bottom: "-6px",
                                left: "0",
                                width: "100%",
                                height: "1px",
                                backgroundColor: "#b3abab",
                              }}
                            ></div>
                          </div>

                          <ul style={{ display: "flex", flexWrap: "wrap" }}>
                            {[
                              "Motors smartphones and accessories",
                              "Motors video games and consoles",
                              "Motors computers and tablets",
                              "Motors cameras and photos",
                              "Motors camera drones",
                              "Refurbished motors equipment",
                              "Motors smart home",
                            ].map((item, index) => (
                              <li
                                key={index}
                                style={{
                                  fontSize: "12px",
                                  listStyleType: "none",
                                  textDecoration: "none",
                                  margin: "10px",
                                  whiteSpace: "nowrap",
                                  flexBasis: "200px",
                                }}
                              >
                                <a
                                  href="#"
                                  className=""
                                  style={{
                                    textDecoration: "none",
                                    color: "black",
                                  }}
                                  onMouseEnter={(e) => {
                                    e.target.style.color = "blue";
                                    e.target.style.textDecoration = "underline";
                                  }}
                                  onMouseLeave={(e) => {
                                    e.target.style.color = "black";
                                    e.target.style.textDecoration = "none";
                                  }}
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="p-3">
                        <div
                            className="ms-5"
                            style={{
                              fontWeight: "700",
                              marginBottom: "13px",
                              fontSize: "12px",
                              position: "relative",
                              display: "inline-block",
                            }}
                          >
                           More categories
                            <div
                              style={{
                                position: "absolute",
                                bottom: "-6px",
                                left: "0",
                                width: "100%",
                                height: "1px",
                                backgroundColor: "#b3abab",
                              }}
                            ></div>
                          </div>

                          <ul style={{ display: "flex", flexWrap: "wrap" }}>
                            {[
                              "Motors parts and accessories",
                              "Motors tools and equipment",
                              "Motors performance upgrades",
                              "Motors tires and wheels",
                              "Motors repair and maintenance",
                            ].map((item, index) => (
                              <li
                                key={index}
                                style={{
                                  fontSize: "12px",
                                  listStyleType: "none",
                                  textDecoration: "none",
                                  margin: "10px",
                                  whiteSpace: "nowrap",
                                  flexBasis: "200px",
                                }}
                              >
                                <a
                                  href="#"
                                  className=""
                                  style={{
                                    textDecoration: "none",
                                    color: "black",
                                  }}
                                  onMouseEnter={(e) => {
                                    e.target.style.color = "blue";
                                    e.target.style.textDecoration = "underline";
                                  }}
                                  onMouseLeave={(e) => {
                                    e.target.style.color = "black";
                                    e.target.style.textDecoration = "none";
                                  }}
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="p-3">
                          <img
                            src="https://ir.ebaystatic.com/cr/v/c01/ROW-19395_Fallback_Home_Garden_770x270.png"
                            alt="Home-Garden"
                            style={{
                              borderRadius: "6px",
                              width: "auto",
                              height: "100%",
                            }}
                          />
                        </div>
                      </div>
                    )}

{item.text === "Sell" && (
                      <div className="dropdown-menu">
                        <div className="p-3">
                        <div
                            className="ms-5"
                            style={{
                              fontWeight: "700",
                              marginBottom: "13px",
                              fontSize: "12px",
                              position: "relative",
                              display: "inline-block",
                            }}
                          >
                            Most popular categories
                            <div
                              style={{
                                position: "absolute",
                                bottom: "-6px",
                                left: "0",
                                width: "100%",
                                height: "1px",
                                backgroundColor: "#b3abab",
                              }}
                            ></div>
                          </div>

                          <ul style={{ display: "flex", flexWrap: "wrap" }}>
                            {[
                              "Motors smartphones and accessories",
                              "Motors video games and consoles",
                              "Motors computers and tablets",
                              "Motors cameras and photos",
                              "Motors camera drones",
                              "Refurbished motors equipment",
                              "Motors smart home",
                            ].map((item, index) => (
                              <li
                                key={index}
                                style={{
                                  fontSize: "12px",
                                  listStyleType: "none",
                                  textDecoration: "none",
                                  margin: "10px",
                                  whiteSpace: "nowrap",
                                  flexBasis: "200px",
                                }}
                              >
                                <a
                                  href="#"
                                  className=""
                                  style={{
                                    textDecoration: "none",
                                    color: "black",
                                  }}
                                  onMouseEnter={(e) => {
                                    e.target.style.color = "blue";
                                    e.target.style.textDecoration = "underline";
                                  }}
                                  onMouseLeave={(e) => {
                                    e.target.style.color = "black";
                                    e.target.style.textDecoration = "none";
                                  }}
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="p-3">
                        <div
                            className="ms-5"
                            style={{
                              fontWeight: "700",
                              marginBottom: "13px",
                              fontSize: "12px",
                              position: "relative",
                              display: "inline-block",
                            }}
                          >
                           More categories
                            <div
                              style={{
                                position: "absolute",
                                bottom: "-6px",
                                left: "0",
                                width: "100%",
                                height: "1px",
                                backgroundColor: "#b3abab",
                              }}
                            ></div>
                          </div>

                          <ul style={{ display: "flex", flexWrap: "wrap" }}>
                            {[
                              "Motors parts and accessories",
                              "Motors tools and equipment",
                              "Motors performance upgrades",
                              "Motors tires and wheels",
                              "Motors repair and maintenance",
                            ].map((item, index) => (
                              <li
                                key={index}
                                style={{
                                  fontSize: "12px",
                                  listStyleType: "none",
                                  textDecoration: "none",
                                  margin: "10px",
                                  whiteSpace: "nowrap",
                                  flexBasis: "200px",
                                }}
                              >
                                <a
                                  href="#"
                                  className=""
                                  style={{
                                    textDecoration: "none",
                                    color: "black",
                                  }}
                                  onMouseEnter={(e) => {
                                    e.target.style.color = "blue";
                                    e.target.style.textDecoration = "underline";
                                  }}
                                  onMouseLeave={(e) => {
                                    e.target.style.color = "black";
                                    e.target.style.textDecoration = "none";
                                  }}
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="p-3">
                          <img
                            src="https://ir.ebaystatic.com/cr/v/c1/ROW-19400_Fallback_Sell_770x270_ROW.png"
                            alt="Sell"
                            style={{
                              borderRadius: "6px",
                              width: "auto",
                              height: "100%",
                            }}
                          />
                        </div>
                      </div>
                    )}

                  </li>
                </React.Fragment>
              </>
            ))}

            {hiddenItems.length > 0 && (
              <li>
                <select
                  className="nav-link"
                  onChange={(e) => (window.location.href = e.target.value)}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    border: "1px solid grey",
                  }}
                >
                  <option value="">More</option>
                  {hiddenItems.map((item) => (
                    <option key={item.href} value={item.href}>
                      {item.text}
                    </option>
                  ))}
                </select>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SubNav;
