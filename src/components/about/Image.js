import React from "react";
import Wrapper from "../../asserts/styles/about/image";
import Navbar from "../Navbar";
function Image() {
  return (
    <Wrapper>
      <header className="head">
        <div className="overlay"></div>
        <Navbar />
        <img
          className="pic"
          alt="productimg"
          src="https://static.wixstatic.com/media/cc923e_3cc764de9dc1451598aae12930ad7a67~mv2.jpg/v1/fill/w_1899,h_990,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cc923e_3cc764de9dc1451598aae12930ad7a67~mv2.jpg"
        />

        <div className="container">
          <div className="video">
            <div>
              <h1>Al-Zaman</h1>
              <p>
                Al Zaman Packs is one of the leading Paper Core and Corrugated
                Sheet manufacturers in UAE.
              </p>
            </div>
          </div>
        </div>
      </header>
    </Wrapper>
  );
}

export default Image;
