import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import Shop from './Shop';
import Checkout from './Checkout';

function RouteSwitch () {
  const [cart, setCart] = useState([]);

  const addItemToCart = (id) => {
    const item = cart.find((element) => element['id'] === id)
    const newItem = {
      id: id,
      quantity: 0
    }

    if (item) {
      newItem['quantity'] += item['quantity'] + 1;
    } else {
      newItem['quantity'] = 1;
    }

    const cartWithoutItem = cart.filter((element) => element['id'] !== id);
    setCart([...cartWithoutItem, newItem]);
  }

  const removeItemFromCart = (id) => {
    setCart(cart.filter((element) => element['id'] !== id));
  }

  return(
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop/*" element={<Shop addItemToCart={addItemToCart} />} />
        <Route path="/checkout" element={<Checkout cart={cart} removeItemFromCart={removeItemFromCart} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
