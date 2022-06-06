import React from "react";
//import Login from "../../pages/Login";
import {Link} from "react-router-dom"

// import Product from "../pages/Product"
// import Products from "../pages/Products"
// use react-router Link or NavLink


const Navbar = () => {
  return (
    <div data-cy="navbar">
   
      {/* <Link data-cy="navbar-home-link" to="/Product">Product</Link> */}
      <Link to="/Login">Login</Link>
      {/* <Link data-cy="navbar-home-link" to="/Products">Product</Link> */}
      <span data-cy="navbar-cart-items-count">{/* count here */}</span>
      <button data-cy="navbar-login-logout-button"></button>
    </div>
  );
};

export default Navbar;
