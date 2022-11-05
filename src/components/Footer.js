import Wrapper from "../asserts/styles/Footer";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Wrapper>
      <div className="footer">
        {/* <div className="row">
  <Link to="#"><i className="fa fa-facebook"></i></Link>
  <Link to="#"><i className="fa fa-instagram"></i></Link>
  <Link to="#"><i className="fa fa-youtube"></i></Link>
  <Link to="#"><i className="fa fa-twitter"></i></Link>
  </div> */}

        <div className="row">
          <ul>
            <li>
              <Link to="/contact">Contact us</Link>
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
          Leo Paper & Packaging Copyright © 2022 Leo Paper & Packaging - All
          rights reserved || Designed By: Mustafa
        </div>
      </div>
    </Wrapper>
  );
}

export default Footer;
