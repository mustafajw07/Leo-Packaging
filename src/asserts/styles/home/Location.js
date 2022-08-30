import styled from "styled-components";

const Wrapper = styled.main`
  .head {
    padding-top: 50px;
    font-size: 101px;
    padding-left: 150px;
    text-align: justify;
  }
  .container {
    padding-bottom: 30px;
    padding-left: 0;
    display: flex;
    flex-direction: row;
  }
  .para {
    width: 40%;
    text-align: center;
    padding-top: 200px;
    font-weight: lighter;
    font-size: 25px;
  }
  .text {
    font-size: 50px;
    padding-top: 30px;
  }

  .company {
    font-size: 30px;
  }
  .image {
    width: 60%;
    height: 783px;
  }
  @media (max-width: 768px) {
    .head {
      padding-left: 90px;
      padding-top: 50px;
      font-size: 60px;
    }
    .container {
      padding-top: 20px;
      display: flex;
      flex-direction: column;
    }
    .para {
      width: 100%;
      padding-left: 30px;
      padding-top: 10px;
      font-size: 20px;
    }
    .text {
      text-align: justify;
      font-size: 50px;
      padding-top: 30px;
    }
    .company {
      padding-right: 90px;
      text-align: justify;
      font-size: 30px;
    }

    .image {
      padding: 20px;
      width: 100%;
      height: 500px;
    }
  }
`;
export default Wrapper;
