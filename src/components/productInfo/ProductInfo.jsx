import React from "react";
import "./styles.css";
import { product } from "../../constants/product";
import Product from "../product/Product";

function ProductInfo({ addToCart }) {
  return (
    <main className="main-content">
      <div>
        <div className="categories">
          <p className="categories-text">Каталог</p>
          <span className="category-span">/</span>
          <p className="categories-text">Обувь</p>
          <span className="category-span">/</span>
          <p className="categories-text">Кроссовки</p>
          <span className="category-span">/</span>
          <p className="categories-text">Беговые</p>
        </div>
        <h1 className="main-content-title">{product.title}</h1>
      </div>
      <Product addToCart={addToCart}/>
    </main>
  );
}

export default ProductInfo;
