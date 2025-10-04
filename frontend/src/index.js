import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import HomePage from './landing_page/home/HomePage.js';
import Signup from './landing_page/signup/Signup.js';
import AboutPage from "./landing_page/about/AboutPage.js";
import ProductsPage from "./landing_page/products/ProductsPage.js";
import PricingPage from "./landing_page/pricing/PricingPage.js";
import SupportPage from "./landing_page/support/SupportPage.js";
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFount from './landing_page/NotFount.js';
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
   <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/> 
      <Route path="/signup" element={<Signup/>}/> 
      <Route path="/about" element={<AboutPage/>}/> 
      <Route path="/product" element={<ProductsPage/>}/> 
      <Route path="/pricing" element={<PricingPage/>} /> 
      <Route path="/support" element={<SupportPage/>} />
      <Route path="/*" element={<NotFount/>} />
    </Routes>
    <Footer/>
   </BrowserRouter>
);

 
