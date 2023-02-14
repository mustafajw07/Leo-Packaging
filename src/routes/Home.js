import Footer from "../components/Footer";
import Video from "../components/home/Video";
import Service from "../components/home/Service";
import Location from "../components/home/Location";
import CompanySection from "../components/home/companySection/companySection";
import Whatsappbtn from "../components/Whatsappbtn";

function Home() {
  return (
    <>
      
      <Video />
      <CompanySection />
      <Service />
      <Location />
      <Whatsappbtn />
      <Footer />
     
    </>
  );
}

export default Home;
