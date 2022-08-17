import React from "react";
import Wrapper from "../../asserts/styles/about/aboutUs";

function aboutUs() {
  return (
    <Wrapper>
      <div className="container">
        <span className="paragraph">
          <h1>ABOUT US</h1>
          Lulu Packaging is one among the most important producers of top
          quality folding cartons working with customers across industry
          segments.
        </span>
        <img
          className="size"
          src="https://static.wixstatic.com/media/nsplsh_5633596e46795a53473551~mv2.jpg/v1/fill/w_736,h_1148,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/nsplsh_5633596e46795a53473551~mv2.jpg"
          alt=""
        />
      </div>
    </Wrapper>
  );
}

export default aboutUs;
