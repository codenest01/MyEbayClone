import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ShowProducts from "./components/ShowProducts";
import Catogery from "./components/Catogery";
import Header from "./components/Header";
import Footer from "./layout/Footer";
import UserLogin from "./components/UserGateway/UserLogin";
import UserSignup from "./components/UserGateway/UserSignup";
import Overview from "./components/Overview";
import Recentview from "./components/Recentview";
import Watchlist from "./components/Watchlist";
import Purchases from "./components/Purchases";
import Saved from "./components/Saved";
import ProductDetails from "./components/ProductDetails";




function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

function Layout() {
  const location = useLocation();

  // Add all paths where Header/Footer should be hidden
  const hiddenPaths = ["/login", "/register"];

  const shouldHideHeaderFooter = hiddenPaths.includes(location.pathname);

  return (
    <>
      {!shouldHideHeaderFooter && <Header />}

      <Routes>
        <Route path="/" element={<ShowProducts />} />
        <Route path="/catogery" element={<Catogery />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/recent-view" element={<Recentview />} />
        <Route path="/purchases" element={<Purchases />} />
        <Route path="/product_details" element={<ProductDetails />} />
        
        <Route path="/summary" element={<Overview />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/register" element={<UserSignup />} />
        

       
      </Routes>

      {!shouldHideHeaderFooter && <Footer />}
    </>
  );
}

export default App;
