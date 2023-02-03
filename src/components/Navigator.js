import Wrapper from "../asserts/styles/Navigator";
import { Link } from "react-router-dom";
import logob from "../asserts/images/logobrown.png";

function Navigator() {
  return (
    <Wrapper>
      <nav className="navbar">
        <div className="navbar-container container">
          <input type="checkbox" name="" id="" />
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
              <Link to="/about">Our Legacy</Link>
            </li>
            <li>
              <Link to="/contact">Talk to Our Team of Experts</Link>
            </li>
          </ul>
          <Link to="/">
            <img src={logob} alt="Logo" className="logo" />
          </Link>
        </div>
      </nav>
    </Wrapper>
  );
}

export default Navigator;
