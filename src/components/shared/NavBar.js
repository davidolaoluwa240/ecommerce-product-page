// Modules
import { useState, useEffect } from "react";

// Components
import Cart from "./Cart";
import NavbarMobile from "./NavbarMobile";

// Assets
import Logo from "../../assets/images/logo.svg";
import IconCart from "../../assets/images/icon-cart.svg";
import ImageAvatar from "../../assets/images/image-avatar.png";
import IconMenu from "../../assets/images/icon-menu.svg";

const NavBar = ({ cart, deleteCartItem }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileNavigationDropdownOpen, setIsMobileNavigationDropdownOpen] =
    useState(false);

  useEffect(() => {
    const closeCart = () => {
      if (isCartOpen) {
        setIsCartOpen(false);
      }
    };
    // Close the cart when the document body is clicked
    document.body.addEventListener("click", closeCart);

    return () => {
      document.body.removeEventListener("click", closeCart);
    };
  }, [isCartOpen]);

  return (
    <nav className="navigation">
      <div className="navigation__container">
        <div className="navigation__brand">
          {/* Mobile Navigation menu toggle icon */}
          <img
            className="navigation__mobile-menu"
            src={IconMenu}
            alt="navigation menu toggle"
            onClick={() => setIsMobileNavigationDropdownOpen(true)}
          />

          {/* Logo */}
          <img
            className="navigation__brand-icon"
            src={Logo}
            alt="Sneakers Logo"
          />
        </div>

        <ul className="navigation__group">
          <li className="navigation__list">
            <span className="navigation__name">Collections</span>
          </li>
          <li className="navigation__list">
            <span className="navigation__name">Men</span>
          </li>
          <li className="navigation__list">
            <span className="navigation__name">Women</span>
          </li>
          <li className="navigation__list">
            <span className="navigation__name">About</span>
          </li>
          <li className="navigation__list">
            <span className="navigation__name">Contact</span>
          </li>
        </ul>
        <ul className="navigation__group">
          <li className="navigation__list navigation__list--cart">
            <span
              className="navigation__name"
              onClick={(e) => {
                e.stopPropagation();
                setIsCartOpen(!isCartOpen);
              }}
            >
              <img
                className="navigation__icon"
                src={IconCart}
                alt="cart icon"
              />
              {cart.qty && (
                <span className="navigation__name-cart-notification">
                  {cart.qty}
                </span>
              )}
            </span>
            {isCartOpen && <Cart cart={cart} deleteCartItem={deleteCartItem} />}
          </li>
          <li className="navigation__list">
            <span className="navigation__name">
              <img
                className="navigation__icon navigation__icon--user"
                src={ImageAvatar}
                alt="user"
              />
            </span>
          </li>
        </ul>
      </div>
      {/* Mobile Navigation Dropdown */}
      {isMobileNavigationDropdownOpen && (
        <NavbarMobile
          setIsMobileNavigationDropdownOpen={setIsMobileNavigationDropdownOpen}
        />
      )}
    </nav>
  );
};

NavBar.defaultProps = {
  cart: {},
};

export default NavBar;
