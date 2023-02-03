import Wrapper from "../asserts/styles/Footer";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Wrapper>
      <div className="footer">
        <div className="row">
          <ul>
            <li>
              <Link to="/contact">Talk to Our Team of Experts</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/products">Our Products</Link>
            </li>
          </ul>
        </div>

        <div className="row">
          Leo Paper & Packaging Copyright © 2022 Leo Paper & Packaging
        </div>
      </div>
    </Wrapper>
  );
}

export default Footer;
