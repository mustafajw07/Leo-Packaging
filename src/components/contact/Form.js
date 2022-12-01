import Wrapper from "../../asserts/styles/contact/Form";
import "bootstrap-icons/font/bootstrap-icons.css";

function Form() {

  return (
    <>
      <Wrapper className="full-page">
        <div className="container">
          <div className="row">
            <div className="address">
              <p onClick={() => window.open('https://www.google.com/maps?q=25.553108,55.680659', '_blank')} id='address'>
              <i class="bi bi-geo-alt-fill"></i>Location
              </p>
              <p>
                <a className="txt" href="tel:+971528676222">
                  <i className="bi bi-telephone-inbound"></i>
                </a>{" "}
                +971 528676222
              </p>
              <p>
                <i className="bi bi-whatsapp"></i>+971 528676222
              </p>
              <p>
                <i className="bi bi-envelope"></i>moiz@alzamanpacks.com
              </p>
            </div>
            <div className="form">
              <form>
                <input
                  placeholder="Name"
                  type="text"
                  className="input"
                  required=""
                />
                <input
                  placeholder="Email"
                  type="text"
                  className="input"
                  required=""
                />
                <input
                  placeholder="Phone"
                  type="text"
                  className="input"
                  required=""
                />
                <textarea
                  placeholder="Message"
                  type="text"
                  className="input"
                  required=""
                />
              </form>
              <button
                className="btn-flip"
                data-back="Submit"
                data-front="Ready?"
              ></button>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default Form;
