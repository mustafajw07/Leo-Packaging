import Navigator from "../components/Navigator";
import Form from "../components/contact/Form";
import Footer from "../components/Footer";
import Main from "../components/contact/Main";


function Contact() {
  return <>
  <Navigator />
  <div className="bg">
  <Main />
  <Form />
  </div>
  <Footer />
  </>;
}

export default Contact;
