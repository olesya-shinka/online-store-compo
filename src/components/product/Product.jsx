import React from "react";
import { product } from "../../constants/product";
import "../productInfo/styles.css";

function Product({ addToCart }) {
  return (
    <div className="main-content-body">
      <div className="main-content-img">
        <img src={product.photo} alt="sneakers" />
        <div className="main-content-imgs">
          <img src="arrow-body1.svg" alt="arrow" />
          <img src="img2.png" alt="sneakers" />
          <img src="img3.png" alt="sneakers" />
          <img src="img4.png" alt="sneakers" />
          <img src="img5.png" alt="sneakers" />
          <img src="arrow-body2.svg" alt="arrow" />
        </div>
      </div>
      <div className="content-product-info">
        <div className="content-body-charactiristics">
          <div className="main-content-body-info">
            <div className="body-info-order">
              <div className="body-info-order-promotion">
                <p className="body-info-order-text">
                  166 534.00 P цена без скидки
                </p>
              </div>
              <div className="body-info-order-price">
                <p className="body-info-order-price-text">{product.price}</p>
                <img src="promo15.svg" alt="-15%" />
              </div>
              <div className="quantity-div">
                <div className="quantity">
                  <p className="quantity-text">{product.quntity} штук в уп.</p>
                </div>
                <label className="switch">
                  <input type="checkbox" defaultChecked />
                  <span className="slider round"></span>
                </label>
                <p className="label-text">Заказ упаковкой</p>
              </div>
            </div>
            <div className="main-content-delivery">
              <div className="main-content-delivery-item">
                <p className="delivery-item">Завтра</p>
                <p className="delivery-text">Доставка</p>
              </div>
              <div className="main-content-delivery-item">
                <p className="delivery-item">7 шт.</p>
                <p className="delivery-text">Тарасовка</p>
              </div>
              <div className="main-content-delivery-item">
                <p className="delivery-item">7 шт.</p>
                <p className="delivery-text">Тарасовка</p>
              </div>
            </div>
            <div className="main-content-body-to-cart">
              <div className="btn-to-cart" onClick={() => addToCart(product)}>
                <img src="Icon-cart.svg" alt="cart" />
                <p> В корзину</p>
              </div>
              <img src="Button-like.svg" alt="like" />
            </div>
          </div>
          <div className="main-content-characteristics">
            <h2 className="main-content-charac-title">Характеристики</h2>
            <div className="characteristics-items">
              <div className="item">
                <div className="characteristics-item">
                  <p className="item-text">ELC00696</p>
                  <p className="item-text2">Код поставщика</p>
                </div>
                <div className="characteristics-item">
                  <p className="item-text">ELC00696</p>
                  <p className="item-text2">Код РАЭК</p>
                </div>
                <div className="characteristics-item">
                  <p className="item-text">Electric used</p>
                  <p className="item-text2">Бренд</p>
                </div>
                <div className="characteristics-item">
                  <p className="item-text">ELC0200000696</p>
                  <p className="item-text2">Код производителя </p>
                </div>
              </div>
              <div className="item">
                <div className="characteristics-item">
                  <p className="item-text">ELC0200000696</p>
                  <p className="item-text2">Артикул</p>
                </div>
                <div className="characteristics-item">
                  <p className="item-text">ELC00696</p>
                  <p className="item-text2">Код ЕТМ</p>
                </div>
                <div className="characteristics-item">
                  <p className="item-text">ELC00696</p>
                  <p className="item-text2">Серия</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-info">
          <h2 className="product-text-title">Описание товара</h2>
          <p className="product-text">{product.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
