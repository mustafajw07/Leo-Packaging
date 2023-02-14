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
              <h1>Quality Speaks for itself </h1>
              <p>
                With a customer retention rate of more than 80%, Leo Paper & Packaging takes
                pride in being one of 
                <br />
                the most consistent and quality concious
                manufacturers of paper related products in UAE
              </p>
            </div>
          </div>
        </div>
      </header>
    </Wrapper>
  );
}

export default Photo;
