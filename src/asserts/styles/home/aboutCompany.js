import styled from "styled-components";

const Wrapper = styled.main`
  .maincontainer {
    display: flex;
    flex-direction: row;
    padding-top: 200px;
    justify-content: center;
    background-color: #bf8f4e;
  }

  .img {
    height: 300px;
  }
  .text {
    padding-left: 50px;
  }
  p {
    font-size: 20px;
  }
  @media (max-width: 720px) {
    .maincontainer {
      display: flex;
      flex-direction: column;
      padding-top: 10px;
      justify-content: center;
      background-color: #bf8f4e;
    }
    .img {
      padding-left: 50px;
      height: 300px;
    }
  }
`;
export default Wrapper;
