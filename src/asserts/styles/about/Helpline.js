import styled from "styled-components";

const Wrapper = styled.div`
  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    background-color: #f9f5f2;
  }

  .container1 {
    padding: 120px;
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
    color: #2d2d2d;
  }
  .info {
    text-align: center;
    font-size: 25px;
    padding-top: 20px;
    color: #2d2d2d;
  }
  @media (max-width: 768px) {
    .container {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      background-color: #f9f5f2;
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
      color: #2d2d2d;
    }
  }
`;
export default Wrapper;
