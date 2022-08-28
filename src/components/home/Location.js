import React from "react";
import Wrapper from "../../asserts/styles/home/Location";

function Location() {
  return (
    <>
      <Wrapper>
        <h1 className="head">Serving Worldwide</h1>
        <div className="container">
          <p className="para">
            With Technology Enabled and Verified Manufacturing & Supply Chain
            Partners
          </p>
          <h4 className="text"> 500 +</h4>
          <p className="company">COMPANY SERVED</p>
          <h4 className="smallhead">4 MILLION +</h4>
          <p className="company">BOX PRODUCED</p>
          <h4 className="smallhead">FLYING</h4>
          <p className="company">ACROSS GLOBE</p>

          <img
            className="image"
            src="https://static.wixstatic.com/media/cc923e_086a0c2d86b8402195597fd8b6d39d3c~mv2.png/v1/fill/w_700,h_979,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/cc923e_086a0c2d86b8402195597fd8b6d39d3c~mv2.png"
            alt="/"
          ></img>
        </div>
      </Wrapper>
    </>
  );
}

export default Location;
