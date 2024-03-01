import { Link } from "react-router-dom";
import Logo from "../../images/header-logo.png";
import "./Header.css";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { auth } from "../../firebase";

const Header = () => {
  const { user, cart } = useContext(GlobalContext);

  const logout = () => {
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/">
            <img className="header-logo" src={Logo} alt="logo-img" />
          </Link>
          <div className="header-search">
            <input className="header-searchInput" type="text" />
            <svg
              className="header-searchIcon"
              width={24}
              height={24}
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
            >
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </svg>
          </div>
          <div className="header-nav">
            {user ? (
              <div className="header-option">
                <span
                  style={{ cursor: "pointer" }}
                  onClick={logout}
                  className="header-optionLineTwo"
                >
                  Sign Out
                </span>
              </div>
            ) : (
              <Link to="/login">
                <div className="header-option" onClick={logout}>
                  <span className="header-optionLineTwo">Sign In</span>
                </div>
              </Link>
            )}
            <Link to="/orders">
              <div className="header-option">
                <span className="header-optionLineTwo">Orders</span>
              </div>
            </Link>
            <Link to="/checkout">
              <div className="header-optionBasket">
                <svg
                  className="cartIcon"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                >
                  <path d="m17.21 9-4.38-6.56c-.19-.28-.51-.42-.83-.42-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path>
                </svg>
                <span className="header-optionLineTwo header-basketCount">
                  {cart.length}
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
