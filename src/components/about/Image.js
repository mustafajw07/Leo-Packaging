import Wrapper from "../../asserts/styles/about/image";
import Navbar from "../Navbar";
import main from "./assets/main.jpeg";

function Image() {
  return (
    <Wrapper>
      <header className="head">
        <div className="overlay"></div>
        <Navbar />
        <img src={main} className="pic" alt="main" />
        <div className="container">
          <div className="video">
            <div>
              <p>COMPANY OVERVIEW</p>
              <h1>
                Providing Best Business Solution For Growing Your Business
              </h1>
              <p>We Have More Than 25+ Years Practical Experience</p>
            </div>
          </div>
        </div>
      </header>
    </Wrapper>
  );
}

export default Image;
