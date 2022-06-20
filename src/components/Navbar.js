import Wrapper from "../asserts/styles/Navbar"
import { Link } from "react-router-dom";
import logo from "../asserts/images/logo.png"

function Navbar() {
  return (
    <Wrapper>   
   <nav class="navbar">
        <div class="navbar-container container">
            <input type="checkbox" name="" id="" />
            <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>
            <ul class="menu-items">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <img src={logo} alt = "Logo" className="logo"/>
        </div>
    </nav>
    </Wrapper>
  );
}

export default Navbar;
