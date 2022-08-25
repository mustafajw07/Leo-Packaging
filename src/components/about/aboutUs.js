import React from "react";
import Wrapper from "../../asserts/styles/about/aboutUs";

function aboutUs() {
  return (
    <Wrapper>
      <div className="container">
        <p className="paragraph">
          <h1>ABOUT US</h1>
          <br />
          Lulu Packaging is one among the most important producers of top
          quality folding cartons working with <br /> customers across industry
          segments.
          <br />
          <p className="para">
            With experience of 25+ years within the printing and packaging
            industry,AL-ZAMAN Packaging combines its technical expertise <br />
            with market insights to deliver customized solutions that exceed
            customer expectations
          </p>
          <p className="para">
            We engage with brand owners early within the development process to
            know their specific needs, and <br /> partner with them to make
            packs that stand out on the shelves and shape consumer experiences.
          </p>
        </p>
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
