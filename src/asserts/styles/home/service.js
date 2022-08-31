import styled from "styled-components";

const Wrapper = styled.main`
  .container {
    display: flex;
    flex-direction: row;
    background-color: #2d2d2d;
  }

  .container1 {
    padding: 70px;
    align-items: center;
    justify-content: center;
  }
  .service1 {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 110px;
    height: 104px;
  }
  .head {
    text-align: center;
    font-size: 35px;
    padding-top: 20px;
    color: white;
  }
  .info {
    text-align: center;
    font-size: 20px;
    padding-top: 10px;
    color: white;
  }
  @media (max-width: 1200px) {
    .container1 {
      padding: 20px;
      padding-bottom: 50px;
      align-items: center;
      justify-content: center;
    }
    .service1 {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 100px;
      height: 94px;
    }
    .head {
      text-align: center;
      font-size: 30px;
      padding-top: 10px;
      color: white;
    }
    .info {
      text-align: center;
      font-size: 20px;
      padding-top: 10px;
      color: white;
    }
  }
  @media (max-width: 768px) {
    .container {
      display: flex;
      flex-direction: column;
      background-color: #2d2d2d;
    }
    .container1 {
      align-items: center;
      justify-content: center;
    }
    .service1 {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 70px;
      height: 68px;
    }
    .head {
      text-align: center;
      font-size: 30px;
      padding-top: 10px;
      color: white;
    }
    .info {
      text-align: center;
      font-size: 19px;
      padding-top: 10px;
      color: white;
    }
  }
`;

export default Wrapper;
