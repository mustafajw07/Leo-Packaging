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
  @media (max-width: 750px) {
    .head {
      padding-top: 50px;
      font-size: 60px;
      text-align: center;
    }
    .container {
      padding-bottom: 50px;
      display: flex;
      flex-direction: column;
    }
    .container .para {
      padding-top: 50px;
      font-weight: lighter;
      padding-left: 0px;
      font-size: 25px;
    }
    .text {
      padding-top: 50px;
      padding-left: 0px;
      font-size: 40px;
    }
    .smallhead {
      padding-left: 0px;
      padding-top: 30px;
      font-size: 40px;
    }
    .company {
      padding-left: 50px;
      font-size: 40px;
    }
    .image {
      width: 320px;
      height: 400px;
    }
  }
`;
export default Wrapper;
