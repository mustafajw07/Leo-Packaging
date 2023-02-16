import React from "react";
import Wrapper from "../../asserts/styles/about/Helpline";
import faster from "../../asserts/images/serviceLogoWhite/Faster.png"
import cheaper from "../../asserts/images/serviceLogoWhite/Cheaper.png"
import quality from "../../asserts/images/serviceLogoWhite/Quality.png"


function Helpline() {
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="container1">
            <img
              className="service1"
              src={faster}
              alt=""
            ></img>
            <p className="head">PACKAGING</p>
            <p className="info">
            Leo Paper & Packaging offers a wide range of customized packaging
            solutions for different types of transport modes.
            </p>
          </div>
          <div className="container1">
            <img
              className="service1"
              src={quality}
              alt=""
            ></img>
            <p className="head">CONSULTATION</p>
            <p className="info">
            Leo Paper & Packaging offers services at offers that make our
            customers happy and trust us for all their packaging solutions.
            </p>
          </div>
          <div className="container1">
            <img
              className="service1"
              src={cheaper}
              alt=""
            ></img>
            <p className="head">SERVICE</p>
            <p className="info">
            Leo Paper & Packaging delivers a top quality product. All the
            delivers go through multiple quality check before reaching the
            customer.
            </p>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default Helpline;
