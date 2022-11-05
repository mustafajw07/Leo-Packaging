import Wrapper from "../asserts/styles/Navbar";
import { Link } from "react-router-dom";
import logo from "../asserts/images/logo.png";

function Navbar({ onClick }) {
  return (
    <Wrapper>
      <nav className="navbar">
        <div className="navbar-container container">
          <input type="checkbox" name="" id="" onClick={onClick} />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <ul className="menu-items">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <Link to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
        </div>
      </nav>
    </Wrapper>
  );
}

export default Navbar;
