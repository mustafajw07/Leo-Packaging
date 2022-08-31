import React from "react";
import Wrapper from "../../asserts/styles/about/Helpline";
function Helpline() {
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="container1">
            <img
              className="service1"
              src="https://cdn-icons-png.flaticon.com/128/1067/1067555.png"
              alt=""
            ></img>
            <p className="head">PACKAGING</p>
            <p className="info">
              AL-ZAMAN offers a good range of customized packaging solutions for
              various sorts of transport modes.
            </p>
          </div>
          <div className="container1">
            <img
              className="service1"
              src="https://cdn-icons-png.flaticon.com/128/2111/2111774.png"
              alt=""
            ></img>
            <p className="head">CONSULTATION</p>
            <p className="info">
              AL-Zaman global network of packaging and logistics engineers give
              customers global access to high-quality competence.
            </p>
          </div>
          <div className="container1">
            <img
              className="service1"
              src="https://cdn-icons-png.flaticon.com/128/950/950299.png"
              alt=""
            ></img>
            <p className="head">SERVICE</p>
            <p className="info">
              AL-Zaman provides a 24/7 support to help its customers solve their
              packaging issues. It is known for its customer loyalty.
            </p>
          </div>
        </div>
      </Wrapper>
      ;
    </>
  );
}

export default Helpline;
