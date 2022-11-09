import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../asserts/styles/home/aboutCompany";

function aboutCompany() {
  return (
    <Wrapper>
      <div className="container-fluid mt5">
        <div className="container">
          <img
            className="img "
            src="https://static.wixstatic.com/media/3741e09170b346568583b6f222455446.jpg/v1/crop/x_467,y_0,w_1867,h_1867/fill/w_541,h_541,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Cardboard%20Boxes.jpg"
            alt="alt"
            height={432}
            width={432}
          />
          <span className="txt">
            ABOUT US
            <p className="smalltxt">
              Leo Paper Packaging is one of the leading Paper Core and
              Corrugated Sheet manufacturers in UAE.
            </p>
            <p className="smalltxt">
              With over 6 years of experience within the packaging industry, Leo
              Paper Packaging combines its technical expertise with market
              insights to deliver customized solutions that exceed customer
              expectations.
            </p>
            <Link to="/about">
              <button className="btn-flip">Read More</button>
            </Link>
          </span>
        </div>
      </div>
    </Wrapper>
  );
}

export default aboutCompany;
