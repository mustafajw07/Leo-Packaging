import React from "react";
import Wrapper from "../../asserts/styles/home/service";
// import service1 from "../asserts/images/service1.png";

function Service() {
  return (
    <Wrapper>
      <div className="container">
        <div className="container1">
          <img
            className="service1"
            src="https://static.wixstatic.com/media/cc923e_ca47b21b920d4879b497dbb47dc5685b~mv2.png/v1/fill/w_138,h_130,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/boxes%2520copy_edited.png"
            alt=""
          ></img>
          <p className="head">PLANNING & STRAGTEGY</p>
          <p className="info">
            AL-Zaman offers a wide range of customized packaging solutions for
            different types of transport modes.
          </p>
        </div>
        <div className="container1">
          <img
            className="service1"
            src="https://static.wixstatic.com/media/cc923e_ca47b21b920d4879b497dbb47dc5685b~mv2.png/v1/fill/w_138,h_130,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/boxes%2520copy_edited.png"
            alt=""
          ></img>
          <p className="head">CUSTOMER HAPPINESS</p>
          <p className="info">
            AL-Zaman offers services at offers that make our customers happy and
            trust us for all their packaging solutions.
          </p>
        </div>
        <div className="container1">
          <img
            className="service1"
            src="https://static.wixstatic.com/media/cc923e_ca47b21b920d4879b497dbb47dc5685b~mv2.png/v1/fill/w_138,h_130,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/boxes%2520copy_edited.png"
            alt=""
          ></img>
          <p className="head">WE DELIVER QUALITY</p>
          <p className="info">
            AL-Zaman delivers a top quality product. All the delivers go through
            multiple quality check before reaching the customer.
          </p>
        </div>
      </div>
    </Wrapper>
  );
}

export default Service;
