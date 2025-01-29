import { useState } from 'react';
import ProductList from '/src/pages/ProductList.jsx';
import AboutUs from '/src/pages/AboutUs.jsx';
import CartItem from '/src/pages/CartItem.jsx';
import '/src/App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  const handleCartToggle = () => {
    setShowCart(!showCart);
  };

  const handleContinueShopping = () => {
    setShowCart(false);
  };

  return (
    <div className="app-container">
      {!showProductList ? (
        <div className="landing-page">
          <div className="background-image"></div>
          <div className="content">
            <div className="landing_content">
              <h1>Welcome To Paradise Nursery</h1>
              <div className="divider"></div>
              <p>Where Green Meets Serenity</p>
              <button className="get-started-button" onClick={handleGetStartedClick}>
                Get Started
              </button>
            </div>
            <div className="aboutus_container">
              <AboutUs />
            </div>
          </div>
        </div>
      ) : (
        <div className="product-list-container visible">
          {showCart ? (
            <CartItem onContinueShopping={handleContinueShopping} />
          ) : (
            <ProductList onCartClick={handleCartToggle} />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
