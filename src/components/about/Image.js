import Wrapper from "../../asserts/styles/about/image";
import Navbar from "../Navbar";
import main from "./assets/main.jpeg"

function Image() {
  return (
    <Wrapper>
      <header className="head">
        <div className="overlay"></div>
        <Navbar />
        <img
          src={main}
          className="pic"
          alt="main"
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
