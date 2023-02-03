import React from "react";
import Wrapper from "../../asserts/styles/about/aboutUs";

function aboutUs() {
  return (
    <Wrapper>
      <div className="container">
        <div className="paragraph">
          <h1>ABOUT US</h1>

          <p className="para">
            Leo Paper & Packaging LLC is one of the leading and fastest emerging
            corrugate roll and paper core manufacturers in the UAE working with
            customers across multiple industry segments.
          </p>
          <p className="para">
            Our state-of-the-art manufacturing facity with machinery imported
            from Germany, Italy, Japan, China etc. is equipped to produce
            corrugated sheets & paper cores with a variety of specifications as
            per the requirements of the clients.
          </p>
          <p className="para">
            We pride ourseleves in having an in house team of paper industry
            professionals who are constantly engaged in research and development
            of new products and technologies, allowing us to deliver the
            cheapest and most reliable solutions to businesses across
            multiple industries.
          </p>
        </div>
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
