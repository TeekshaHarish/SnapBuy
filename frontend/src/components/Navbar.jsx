import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { cartContext } from "../context/context";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { cartItems } = useContext(cartContext);

  return (
    <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body pt-2" data-bs-theme="dark">
      <div className="container-fluid">
        {/* Brand */}
        <Link className="navbar-brand px-2" to="/">
          SnapBuy
        </Link>
        
        {/* Cart Icon - stays always visible and aligned to the right */}
        <Link to="/checkout" className="d-lg-none ms-auto">
          <div className="btn btn-secondary position-relative">
            <FaShoppingCart />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cartItems.length}
              <span className="visually-hidden">unread messages</span>
            </span>
          </div>
        </Link>

        {/* Navbar Toggler */}
        <button
          className="navbar-toggler ms-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu and Cart Icon */}
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          {/* Navigation Links - left aligned */}
          <div className="navbar-nav me-auto">
            <Link className="nav-link active" aria-current="page" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/products">
              All Products
            </Link>
            <Link className="nav-link" to="/checkout">
              Checkout
            </Link>
          </div>
          
          {/* Cart Icon - only visible on larger screens */}
          <Link to="/checkout" className="d-none d-lg-block ms-auto px-3 pt-2">
            <div className="btn btn-secondary position-relative">
              <FaShoppingCart />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartItems.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
