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
              Leo Paper & Packaging offers a good range of customized packaging
              solutions for various sorts of transport modes.
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
              Leo Paper & Packaging global network of packaging and logistics
              engineers give customers global access to high-quality competence.
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
              Leo Paper & Packaging provides a 24/7 support to help its
              customers solve their packaging issues. It is known for its
              customer loyalty.
            </p>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default Helpline;
