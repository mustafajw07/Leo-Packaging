import styled from "styled-components";

const Wrapper = styled.main`
  .head {
    padding-top: 50px;
    font-size: 50px;
    text-align: center;
  }
  .container {
    padding-bottom: 180px;
    padding-left: 50px;
    display: flex;
    flex-direction: row;
  }
  .container .para {
    padding-top: 200px;
    font-weight: lighter;
    padding-left: 50px;
    font-size: 40px;
  }
  .text {
    padding-top: 50px;
    padding-left: 100px;
  }
  .smallhead {
    padding-left: 80px;
    padding-top: 30px;
  }
  .company {
    padding-left: 50px;
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
