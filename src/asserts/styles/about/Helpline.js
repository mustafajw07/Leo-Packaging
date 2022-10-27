import styled from "styled-components";

const Wrapper = styled.div`
  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    background-color: #2d2d2d;
  }

  .container1 {
    padding: 70px;
  }
  .service1 {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 110px;
    height: 104px;
    color: #f9f5f2;
  }
  .head {
    text-align: center;
    font-size: 35px;
    padding-top: 20px;
    color: #f9f5f2;
  }
  .info {
    text-align: center;
    font-size: 25px;
    padding-top: 20px;
    color: #f9f5f2;
  }
  @media (max-width: 1200px) {
    .container1 {
      padding: 50px;
    }
  }
  @media (max-width: 768px) {
    .container {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      background-color: #2d2d2d;
    }
    .service1 {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 82px;
      height: 75px;
    }
    .info {
      text-align: center;
      font-size: 20px;
      padding-top: 20px;
      color: #f9f5f2s;
    }
  }
`;
export default Wrapper;
