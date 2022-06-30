// Assets
import IconClose from "../../assets/images/icon-close.svg";

const NavbarMobile = ({ setIsMobileNavigationDropdownOpen }) => {
  return (
    <div
      className="navigation-mobile"
      onClick={() => setIsMobileNavigationDropdownOpen(false)}
    >
      <div
        className="navigation-mobile__group"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="navigation-mobile__action">
          <img
            className="navigation-mobile__close-icon is-cursor-pointer"
            src={IconClose}
            alt="close navigation"
            onClick={() => setIsMobileNavigationDropdownOpen(false)}
          />
        </div>
        <ul className="navigation-mobile__lists">
          <li className="navigation-mobile__list">
            <span className="navigation-mobile__name">Collections</span>
          </li>
          <li className="navigation-mobile__list">
            <span className="navigation-mobile__name">Men</span>
          </li>
          <li className="navigation-mobile__list">
            <span className="navigation-mobile__name">Women</span>
          </li>
          <li className="navigation-mobile__list">
            <span className="navigation-mobile__name">About</span>
          </li>
          <li className="navigation-mobile__list">
            <span className="navigation-mobile__name">Contact</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarMobile;
