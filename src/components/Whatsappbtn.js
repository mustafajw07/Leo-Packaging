import React from "react";
import Wrapper from "../asserts/Whatsappbtn";
import img from "../asserts/images/whatsappbtn.png";

function Whatsappbtn() {
  return (
    <Wrapper>
      <div className="containerfloat">
        <a href="https://wa.me/+971547064974" target="_blank" rel="noreferrer">
          <img
            src={img}
            alt="/"
            width="50px"
            className="whatsapp_float_btn float"
          />
        </a>
      </div>
    </Wrapper>
  );
}

export default Whatsappbtn;
