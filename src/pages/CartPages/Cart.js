// src/pages/CartPages/Cart.js
import React, { useState } from "react";
import CartItem from "../../components/CartItem";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Kue Nastar",
      variation: "Coklat",
      price: 70000,
      quantity: 1,
      image: "/logo/kuenastar.jpg",
      checked: false,
    },
    {
      id: 2,
      name: "Kue Kastangel",
      variation: "Keju",
      price: 70000,
      quantity: 1,
      image: "/logo/kuekastengelll.jpg",
      checked: false,
    },
  ]);

  // Fungsi untuk meng-handle perubahan checklist
  const handleCheckItem = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleAddItem = (item) => {
    const updatedItems = cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    setCartItems(updatedItems);
  };

  const handleRemoveItem = (item) => {
    const updatedItems = cartItems.map((cartItem) =>
      cartItem.id === item.id && cartItem.quantity > 0
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
    setCartItems(updatedItems.filter((cartItem) => cartItem.quantity > 0));
  };

  const totalPrice = cartItems
    .filter((item) => item.checked)
    .reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Keranjang Belanja</h2>
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onAdd={handleAddItem}
          onRemove={handleRemoveItem}
          onCheck={handleCheckItem}
        />
      ))}
      <div className="cart-summary">
        <h3>Total: Rp{totalPrice.toLocaleString()}</h3>
        <button><Link to="/checkout">Checkout</Link></button>
      </div>
    </div>
  );
};

export default Cart;
