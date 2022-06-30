// Modules
import { useState, useEffect } from "react";
import { productData } from "./data/data";

// Components
import NavBar from "./components/shared/NavBar";
import ProductDetails from "./components/ui/product/ProductDetails";

function App() {
  const [product, setProduct] = useState({});
  const [cart, setCart] = useState({});

  useEffect(() => {
    setProduct(productData);
  }, []);

  const addToCart = function (quantityNumber) {
    if (quantityNumber) {
      let newCart;
      // When cart has some keys. Just increment the quantity
      if (Object.keys(cart).length) {
        newCart = { ...cart, qty: cart.qty + quantityNumber };
      } else {
        // When the cart object is empty then spread the product and increment the counter
        newCart = { ...product, qty: quantityNumber };
      }
      setCart(newCart);
    }
  };

  const deleteCartItem = function () {
    // Set cart object to be empty
    setCart({});
  };

  return (
    <>
      <header className="header">
        <NavBar cart={cart} deleteCartItem={deleteCartItem} />
      </header>

      <main className="main">
        <ProductDetails product={product} addToCart={addToCart} />
      </main>
    </>
  );
}

export default App;
