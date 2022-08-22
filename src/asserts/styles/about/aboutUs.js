import styled from "styled-components";

const Wrapper = styled.div`
  .container {
    display: flex;
    flex-direction: row;
    justify-content: end;
  }
  h1 {
    text-align: center;
  }
  .paragraph {
    font-size: 25px;
    text-align: center;
    padding: 50px;
  }
  .para {
    padding-top: 30px;
  }

  .size {
    height: 700px;
  }
  @media (max-width: 720px) {
    .container {
      display: flex;
      flex-direction: column;
      justify-content: end;
    }
    h1 {
      text-align: center;
    }
    .paragraph {
      padding: 50px;
    }

    .size {
      height: 400px;
    }
  }
`;
export default Wrapper;
