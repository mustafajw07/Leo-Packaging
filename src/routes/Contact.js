import Navigator from "../components/Navigator";
import Form from "../components/contact/Form";
import Footer from "../components/Footer";
import Main from "../components/contact/Main";
import Whatsappbtn from "../components/Whatsappbtn";

function Contact() {
  return (
    <>
    <section className="bg">
      <Navigator />
      <Main />
      <Form />
      <Whatsappbtn />
      <Footer />
      </section>
    </>
  );
}

export default Contact;
