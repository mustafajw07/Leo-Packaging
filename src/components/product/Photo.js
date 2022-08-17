import Wrapper from "../../asserts/styles/product/Photo";
import Navbar from "../Navbar";
import main from "./assets/main.jpeg";

function Photo() {
  return (
    <Wrapper>
      <header className="head">
        <div className="overlay"></div>
        <Navbar />
        <img className="pic" alt="productimg" src={main} />

        <div className="container">
          <div className="video">
            <div>
              <h1>WE BELIEVE IN QUALITY PRODUCT </h1>
              <p>
                All products that we deliver are gone through many quality
                checks and then delivered. We want all our customers to be
                satisfied and trust us for all their packaging solutions.
              </p>
            </div>
          </div>
        </div>
      </header>
    </Wrapper>
  );
}

export default Photo;
