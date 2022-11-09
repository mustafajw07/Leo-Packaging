import React from "react";
import Wrapper from "../../asserts/styles/about/company";
import img1 from "../../asserts/images/home/1.png";
import img2 from "../../asserts/images/home/2.png";
import img3 from "../../asserts/images/home/3.png";
import img4 from "../../asserts/images/home/4.png";
import img5 from "../../asserts/images/home/5.png";
import img6 from "../../asserts/images/home/6.png";
import img7 from "../../asserts/images/home/7.png";
import img8 from "../../asserts/images/home/8.png";

function company() {
  return (
    <Wrapper>
      <div className="container">
        <div className="name">
          <h2 className="head">COMPANY THAT TRUST US</h2>
          <div className="smallcontainer">
            <div className="bg">
              <div id="brand-logo" className="brand-logo">
                <div
                  className="company 
                  "
                >
                  <div className="logo">
                    <img className="img" src={img1} alt="logo" />
                  </div>
                  <div className="logo">
                    <img className="img" src={img2} alt="logo" />
                  </div>
                  <div className="logo">
                    <img className="img" src={img3} alt="logo" />
                  </div>
                  <div className="logo">
                    <img className="img" src={img4} alt="logo" />
                  </div>
                </div>
              </div>
              <div className="containerlogo">
                <div id="brand-logo1" className="brand-logo">
                  <div
                    className="company 
                    "
                  >
                    <div className="logo">
                      <img className="img" src={img5} alt="logo" />
                    </div>
                    <div className="logo">
                      <img className="img" src={img6} alt="logo" />
                    </div>
                    <div className="logo">
                      <img className="img" src={img7} alt="logo" />
                    </div>
                    <div className="logo">
                      <img className="img" src={img8} alt="logo" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default company;
