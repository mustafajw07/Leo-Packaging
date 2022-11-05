import React from "react";
import Wrapper from "../../asserts/styles/home/Location";

function Location() {
  return (
    <>
      <Wrapper>
        <h1 className="head">Let's Talk Numbers</h1>
        <div className="container">
          <span className="para">
            With Technology Enabled and Verified
            <br />
            Manufacturing & Supply Chain Partners
            <h4 className="text"> 180+</h4>
            <span className="company">Satisfied Clients</span>
            <h4 className="text">13 +</h4>
            <span className="company">Industries Served</span>
            <h4 className="text">12+</h4>
            <span className="company">Countries Covered</span>
          </span>

          <img
            className="image"
            src="https://static.wixstatic.com/media/cc923e_086a0c2d86b8402195597fd8b6d39d3c~mv2.png/v1/fill/w_1085,h_979,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/cc923e_086a0c2d86b8402195597fd8b6d39d3c~mv2.png"
            alt="/"
          ></img>
        </div>
      </Wrapper>
    </>
  );
}

export default Location;
