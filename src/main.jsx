import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
// main.jsx
import './styles/Header.css';
import './styles/Watchlist.css';
import './styles/Recentview.css';
import './styles/Purchases.css';
import './styles/Overview.css';
import './styles/ProductDetails.css';
import './styles/Saved.css';
import './styles/Summary.css';

import './styles/layout/Footer.css';
import './styles/layout/SelectCat.css';
import './styles/layout/ShowProducts.css';
import './styles/layout/Catogery.css';
import './styles/layout/Recentview.css';

import './styles/layout/UserGateway/userLogin.css';
import './styles/layout/UserGateway/UserSignup.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
