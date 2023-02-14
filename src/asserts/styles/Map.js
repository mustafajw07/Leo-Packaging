import styled from "styled-components";

const Wrapper = styled.main`
  .contact-wrapper {
    display: flex;
    align-items: center;
    margin-left: 12%;
    margin-bottom: 5%;
  }
  .map {
    width: 1100px;
    height: 450px;
  }
  @media (max-width: 767px) {
    .contact-wrapper {
      margin-left: 5%;
    }
    .map {
      width: 95%;
      height: 300px;
    }
  }
  @media (max-width: 1280px) {
    .contact-wrapper {
      margin-left: 5%;
    }
    .map {
      width: 95%;
      height: 400px;
    }
  }
`;
export default Wrapper;
