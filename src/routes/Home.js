import Footer from "../components/Footer";
import Video from "../components/home/Video";
import Company from "../components/about/company";
import Service from "../components/home/Service";
import AboutCompany from "../components/home/aboutCompany";

function Home() {
  return (
    <>
      <Video />
      <AboutCompany />
      <Company />
      <Service />
      <Footer />
    </>
  );
}

export default Home;
