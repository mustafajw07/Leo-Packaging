import styled from "styled-components";

const Wrapper = styled.main`
  .contact-wrapper {
    display: flex;
    align-items: center;
    margin: auto 0;
  }
  .map {
    width: 600px;
    height: 450px;
  }
  @media (max-width: 767px) {
    .map {
      width: 100%;
      height: 300px;
    }
`;
export default Wrapper;
