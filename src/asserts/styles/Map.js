import styled from "styled-components";

const Wrapper = styled.main`
  .contact-wrapper {
    max-width: 1140px;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  .map {
    width: 1100px;
    height: 450px;
  }
  @media (max-width: 767px) {
    .map {
      width: 95%;
      height: 300px;
    }
  }
  @media (max-width: 1280px) {
    .map {
      width: 95%;
      height: 400px;
    }
  }
`;
export default Wrapper;
