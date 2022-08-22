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
    width: 110px;
    height: 104px;
  }
  .head {
    padding-right: 20px;
    font-size: 22px;
    padding-top: 20px;
    color: #2d2d2d;
  }
  .info {
    font-size: 20px;
    padding-top: 20px;
    color: #2d2d2d;
  }
  @media (max-width: 720px) {
    .container {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      background-color: #f9f5f2;
    }
  }
`;
export default Wrapper;
