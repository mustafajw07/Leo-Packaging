import styled from "styled-components";

const Wrapper = styled.div`
  .container {
    display: flex;
    flex-direction: row;
    justify-content: end;
  }
  h1 {
    text-align: center;
    margin-top: 15%;
  }
  .paragraph {
    font-size: 45px;
    text-align: center;
  }
  .para {
    margin-left: 290px;
    text-align: center;
    width: 49%;
    font-size: 20px;
    padding-top: 30px;
  }

  .size {
    width: 30%;
    height: 760px;
  }
  @media (max-width: 1200px) {
    .container {
      display: flex;
      flex-direction: row;
    }
    h1 {
      font-size: 65px;
      text-align: center;
      padding-top: 10px;
    }

    .para {
      margin-left: 40px;
      width: 75%;
      font-size: 20px;
      padding-top: 10px;
      padding-bottom: 30px;
    }
    .size {
      width: 100%;
      height: 700px;
    }
  }

  @media (max-width: 767px) {
    .container {
      display: flex;
      flex-direction: column;
    }
    h1 {
      font-size: 65px;
      // text-align: center;
      padding-top: 10px;
      margin-right: 30px;
    }

    .para {
      margin-left: 40px;

      font-size: 20px;
      padding-top: 10px;
      padding-bottom: 30px;
    }
    .size {
      width: 100%;
      height: 400px;
    }
  }
`;
export default Wrapper;
