import './App.css'
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductListing from './pages/ProductListing';
import CheckoutPage from './pages/CheckoutPage';
import PaymentStatusPage from './pages/PaymentStatusPage';
import Navbar from './components/Navbar';
import ProductDetails from './pages/ProductDetails';
import { cartContext } from './context/context';
import PaymentSuccess from './pages/PaymentSuccess';
import PaymentFailure from './pages/PaymentFailure';
import Footer from './components/Footer';


function App() {
  const [cartItems,setCartItems]=useState([]);

  return (
    <cartContext.Provider value={{ cartItems, setCartItems }}>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        {/* <Route path="/paymentstatus" element={<PaymentStatusPage />} /> */}
        <Route path="/payment-success" element={<PaymentSuccess/>} />
        <Route path="/payment-failure" element={<PaymentFailure />} />
      </Routes>
    </BrowserRouter>
    <Footer/>
  </cartContext.Provider>
  )
}

export default App
