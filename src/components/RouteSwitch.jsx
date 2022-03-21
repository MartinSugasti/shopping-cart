import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import Shop from './Shop';
import Checkout from './Checkout';

function RouteSwitch () {
  const cartFromLocalStorage = () => {
    return (
      JSON.parse(localStorage.getItem('shoppingCart')) || []
    );
  }

  const [cart, setCart] = useState(cartFromLocalStorage());

  useEffect(() => {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
  }, [cart]);

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

  const totalItems = (cart) => {
    return cart.reduce((total, item) => {
      return total + item['quantity'];
    }, 0)
  }

  return(
    <BrowserRouter>
      <Navbar totalItems={totalItems(cart)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop/*" element={<Shop addItemToCart={addItemToCart} />} />
        <Route path="/checkout" element={<Checkout cart={cart} removeItemFromCart={removeItemFromCart} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
