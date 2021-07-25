import React from "react";
import "./Header.css";
import logo from "../images/icon.png";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <header className="Navbar">
        <img src={logo} alt="" className="logo"></img>
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
      <div>choose course</div>
    </div>
  );
}

export default Header;
