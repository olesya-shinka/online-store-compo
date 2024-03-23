import { useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ProductInfo from "./components/productInfo/ProductInfo";

function App() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex(
      (item) => item.title === product.title
    );

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    setTotalPrice(totalPrice + parseInt(product.price.replace(/\s+/g, ""), 10));
  };
  return (
    <div className="App">
      <Header totalPrice={totalPrice} cart={cart} />
      <ProductInfo addToCart={addToCart} />
      <Footer />
    </div>
  );
}

export default App;
