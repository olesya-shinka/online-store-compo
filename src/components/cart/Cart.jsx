import React from "react";
import { SlClose } from "react-icons/sl";
import "./styles.css";

function Cart({ closeCart, cart, totalPrice }) {
  const formattedTotalPrice = totalPrice.toLocaleString("ru-RU");
  return (
    <div className="cart">
      <div className="cart-content">
        <div className="cart-content-div">
          <h2 className="cart-title">КОРЗИНА</h2>
          <SlClose style={{ cursor: "pointer" }} onClick={closeCart} />
        </div>
        {cart.map((item, i) => (
          <>
            <div key={i} className="cart-item-box">
              <img className="cart-product" src={item.photo} alt="product" />
              <p className="cart-subtitle">{item.title}</p>
              <p className="cart-price">{item.price} P</p>
            </div>
            <p className="cart-quantity">Кол-во уп.: {item.quantity}</p>
          </>
        ))}
        <div className="cart-item-box-price">
          <p className="cart-subtitle">ИТОГО:</p>
          <p className="cart-price">{formattedTotalPrice} P</p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
