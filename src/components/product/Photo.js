import React from "react";
import Wrapper from "../../asserts/styles/product/Photo";
import Navbar from "../Navbar";

function Photo() {
  return (
    <Wrapper>
      <header className="head">
        <div className="overlay"></div>
        <Navbar />

        <img
          className="pic"
          src="https://static.wixstatic.com/media/cc923e_942520dea7c9473a8534a7a31046102d~mv2.jpg/v1/fill/w_1000,h_377,al_c,q_85,enc_auto/cc923e_942520dea7c9473a8534a7a31046102d~mv2.jpg"
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

export default Photo;

{
  /* <header></header>
<Navbar />
<img
  className="pic"
  src="https://static.wixstatic.com/media/cc923e_942520dea7c9473a8534a7a31046102d~mv2.jpg/v1/fill/w_1000,h_377,al_c,q_85,enc_auto/cc923e_942520dea7c9473a8534a7a31046102d~mv2.jpg"
></img> */
}
