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
              <h1>
                A Class Apart
              </h1>
              <p>In our 6 years of existence, we have established a dominance in the GCC 
                <br />
                Paper Market owing to our unbeaten customer service and after sales support.</p>
            </div>
          </div>
        </div>
      </header>
    </Wrapper>
  );
}

export default Image;
