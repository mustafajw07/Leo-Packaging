import AboutCompany from "../aboutCompany";
import Company from "../../about/company";

function companySection() {
  return (
    <>
      <AboutCompany />
      <h1 className="heading">Companies that trust us</h1>
      <Company />
    </>
  );
}

export default companySection;
