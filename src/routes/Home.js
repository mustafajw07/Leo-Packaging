import Footer from "../components/Footer";
import Video from "../components/home/Video";
import Company from "../components/about/company";
import Service from "../components/home/Service";
import AboutCompany from "../components/home/aboutCompany";
import Location from "../components/home/Location";

function Home() {
  return (
    <>
      <Video />
      <AboutCompany />
      <Company />
      <Service />
      <Location />
      <Footer />
    </>
  );
}

export default Home;
