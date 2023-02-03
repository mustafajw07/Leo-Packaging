import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../asserts/styles/product/Product";
import pic1 from "../product/assets/p1.png";
import pic2 from "../product/assets/p2.png";

function productImg() {
  return (
    <Wrapper>
      <div className="box">
        <div className="tooltip">
          <Link to={"/contact"}>
            <img className="item" src={pic1} alt="Example " title="Get a Quote Now"/>
          </Link>
          <p>Corrugated Roll</p>
        </div>
        <div>
          <Link to={"/contact"}>
            <img className="item" src={pic2} alt="Example " title="Get a Quote Now"/>
          </Link>
          <p>Paper Core Boards</p>
        </div>
        <div>
          <Link to={"/contact"}>
            <img className="item" src={pic1} alt="Example " title="Get a Quote Now"/>
          </Link>
          <p>Paper Straws </p>
          <p>(Comming Soon)</p>
        </div>
      </div>
    </Wrapper>
  );
}

export default productImg;
