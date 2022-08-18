import Wrapper from "../../asserts/styles/contact/Form";


function Form() {
  return (
    <>
      <Wrapper className="full-page">
        <div className="container">
          <div className="row">
            <div className="address">
              <p><i className="fa-solid fa-location-dot"></i>Address</p>
              <p><i className="fa-solid fa-phone"></i>+971 528676222</p>
              <p><i className="fa-brands fa-whatsapp"></i>+971 528676222</p>
              <p><i className="fa-solid fa-envelope"></i>moiz@alzamanpacks.com</p>
            </div>
            <div className="form">
              <form>
              <input placeholder="Name" type="text" className="input" required="" />
              <input placeholder="Email" type="text" className="input" required="" />
              <input placeholder="Phone" type="text" className="input" required="" />
              <textarea placeholder="Message" type="text" className="input" required="" />
              </form>
                {/* <button><a href="#" className="btn-flip" data-back="Submit" data-front="Ready?"></a></button> */}
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default Form;
