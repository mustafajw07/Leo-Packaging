import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../asserts/styles/product/Product";
import pic1 from "../product/assets/p1.png";
import pic2 from "../../asserts/images/product.jpg";
import pic3 from "../../asserts/images/product3.jpg";
import pic4 from "../../asserts/images/product4.jpg";

function productImg() {
  return (
    <Wrapper>
      <div className="box">
        <div className="tooltip">
          <Link to={"/contact"}>
            <img
              className="item"
              src={pic1}
              alt="Example "
              title="Get a Quote Now"
            />
          </Link>
          <p>Corrugated Roll</p>
        </div>
        <div>
          <Link to={"/contact"}>
            <img
              className="item"
              src={pic2}
              alt="Example "
              title="Get a Quote Now"
            />
          </Link>
          <p>Paper Core</p>
        </div>
        <div>
          <Link to={"/contact"}>
            <img
              className="item"
              src={pic3}
              alt="Example "
              title="Get a Quote Now"
            />
          </Link>
          <p>Paper Straws </p>
        </div>
        <div>
          <Link to={"/contact"}>
            <img
              className="item"
              src={pic4}
              alt="Example "
              title="Get a Quote Now"
            />
          </Link>
          <p>Paper Bag </p>
        </div>
      </div>
    </Wrapper>
  );
}

export default productImg;
