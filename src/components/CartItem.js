import React from "react";
import "./CartItem.css";

const CartItem = ({ item, onAdd, onRemove, onCheck }) => {
  return (
    <div className="cart-item">
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => onCheck(item.id)}
        className="cart-item-checkbox"
      />
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h3 className="cart-item-name">{item.name}</h3>
        <p className="cart-item-variation">Variasi: {item.variation}</p>
        <p className="cart-item-price">Harga Satuan: Rp{item.price.toLocaleString()}</p>
      </div>
      <div className="cart-item-actions">
        <button onClick={() => onRemove(item)} className="action-button">-</button>
        <span className="quantity">{item.quantity}</span>
        <button onClick={() => onAdd(item)} className="action-button">+</button>
      </div>
      <p className="cart-item-total-price">
        Total Harga: Rp{(item.price * item.quantity).toLocaleString()}
      </p>
    </div>
  );
};

export default CartItem;
