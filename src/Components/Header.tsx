import React from "react";
import "./Header.css";
// import logo from "../images/icon.png";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <header className="Navbar">
        <h1 className="logo-alternative">R.R courses</h1>
        <div className="Nav-links">
          <Link to="/">
            <nav className="course-link">Courses</nav>
          </Link>
          <Link to="/wishlist">
            <nav>Wishlist</nav>
          </Link>
          <Link to="/cart">
            <nav>cart</nav>
          </Link>
          <Link to="/profile">
            <nav>Profile</nav>
          </Link>
        </div>
      </header>
      
    </div>
  );
}

export default Header;
