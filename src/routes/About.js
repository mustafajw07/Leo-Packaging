import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/about/Banner";
import AboutUs from "../components/about/AboutUs";
import WhatWeDo from "../components/about/WhatWeDo";
import WhatSetUsApart from "../components/about/WhatSetUsApart";
import Team from "../components/about/Team";

function About() {
  return <>
  <Navbar />
  <Banner />
  <AboutUs />
  <WhatWeDo />
  <WhatSetUsApart />
  <Team />
  <Footer />
  </>;
}

export default About;
