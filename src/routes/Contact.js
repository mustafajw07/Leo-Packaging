import Navigator from "../components/Navigator";
import Form from "../components/contact/Form";
import Footer from "../components/Footer";
import Main from "../components/contact/Main";
import Whatsappbtn from "../components/Whatsappbtn";
import Map from "../components/Map";

function Contact() {
  return (
    <>
      <Navigator />
      <Main />
      <Form />
      <Map />
      <Whatsappbtn />
      <Footer />
    </>
  );
}

export default Contact;
