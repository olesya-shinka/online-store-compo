/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./styles.css";
import { a } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <img src="Brand.svg" alt="logo" />
        <div className="header-menu-btn">
          <img src="Icon-menu.svg" alt="menu" />
          Меню
        </div>
        <div className="header-input-div">
          <div className="header-input-icons">
            <img src="X.svg" alt="x" />
            <img src="search-icon.svg" alt="search" />
          </div>
          <input
            type="text"
            placeholder="Название запроса"
            className="header-input"
          />
        </div>
        <div className="header-icons">
          <img src="Icon-notice.svg" alt="notice" />
          <img src="Line.svg" alt="|" />
          <img src="like.svg" alt="like" />
        </div>
        <div className="header-cart">
          <img src="cart.svg" alt="cart" />
          <p className="header-price">150 000Р</p>
        </div>
        <div className="header-profile">
          <img src="Avatar.svg" alt="avatar" />
          <p className="header-profile-name">Ермаков Е.</p>
          <img src="arrow.svg" alt="arrow" />
        </div>
      </div>
      <div className="header-services">
        <div className="header-services-links">
          <a className="header-services-link" href="#">
            Мои заказы
          </a>
          <a className="header-services-link" href="#">
            Сотрудники
          </a>
          <a className="header-services-link" href="#">
            Шаблоны заказов
          </a>
          <a className="header-services-link" href="#">
            Обращения
          </a>
        </div>
        <div>
          <div className="header-info">
            <div className="header-info-box">
              <img src="chat.svg" alt="chat" />
              <p className="header-info-text">Ваш менеджер</p>
            </div>
            <div className="header-info-box2">
              <img src="promotion.svg" alt="promotion" />
              <p className="header-info-text">Акции</p>
            </div>
            <p className="header-info-text">Блог</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
