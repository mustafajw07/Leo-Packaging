import React from "react";
import Wrapper from "../../asserts/styles/product/Product";
import pic1 from "../product/assets/p1.png";
import pic2 from "../product/assets/p2.png";

function productImg() {
  return (
    <Wrapper>
      <div className="box">
        <div>
          <img class="item" src={pic1} alt="Example image" />
          <p>Corrugated Roll</p>
        </div>
        <div>
          <img class="item" src={pic2} alt="Example image" />
          <p>Corrugated Roll</p>
        </div>
        <div>
          <img class="item" src={pic1} alt="Example image" />
          <p>Corrugated Roll</p>
        </div>
      </div>
    </Wrapper>
  );
}

export default productImg;
