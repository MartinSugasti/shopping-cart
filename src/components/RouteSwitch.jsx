import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import Shop from './Shop';
import Checkout from './Checkout';

function RouteSwitch () {
  return(
    <BrowserRouter>
      <Navbar />
      <div className="custom-gradient">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default RouteSwitch;
