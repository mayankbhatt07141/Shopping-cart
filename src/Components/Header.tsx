import "./Header.css";
import cart from "../images/cart.png";
import profileicon from "../images/profile.png";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <header className="Navbar">
        <h1 className="logo-alternative">React-Redux</h1>
        <div className="Nav-links">
          <Link to="/">
            <nav className="course-link">Courses</nav>
          </Link>
          <Link to="/wishlist">
            <nav>Wishlist</nav>
          </Link>
          <Link to="/cart">
            <nav>
              <img className="icon-cart-image" src={cart} alt="cart icon" />
            </nav>
          </Link>
          <Link to="/profile">
            <nav>
              <img
                className="icon-profile-image"
                src={profileicon}
                alt="profile icon"
              />
            </nav>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
