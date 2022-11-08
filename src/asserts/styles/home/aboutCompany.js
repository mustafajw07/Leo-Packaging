import styled from "styled-components";

const Wrapper = styled.main`
  .container-fluid {
    background: #bf8f4e !important;
    margin-top: 5%;
    border: 90px solid #bf8f4e;
    // height: 600px;
  }
  .container {
    height: 432px;
    width: 980px;
    background: #323237;
    display: flex;
    flex-direction: row;
    margin: 50px auto !important;
  }
  .txt {
    color: white;
    margin-left: 75px;
    margin-top: 30px;
    font-size: 70px;
  }
  .smtxt {
    font-size: 26px;
    width: 100%;
  }
  .smalltxt {
    margin-top: 10px;
    width: 60%;
    font-size: 18px;
  }
  .btn-flip {
    opacity: 1;
    outline: 0;
    color: #fff;
    background: #bf8f4e;
    position: relative;
    text-align: center;
    display: inline-block;
    text-decoration: none;
    font-size: 15px;
    padding-right: 20px;
    padding-left: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin: 10px;
    border: 1px solid #bf8f4e;
    transition: 400ms;
    cursor: pointer;
  }
  .btn-flip:hover {
    border: 1px solid white;
    color: #bf8f4e;
    background: white;
  }

  @media (min-width: 280px) {
    .container-fluid {
      background: #bf8f4e;
      margin-top: 5% !important;
      border: 10px solid #bf8f4e;
      margin-left: -1%;
    }
    .container {
      width: 980px;
      background: #323237;
      display: flex;
      flex-direction: row;
      margin-top: 10%;
    }
    .img {
      height: 430px;
      width: 410px;
      // margin-left: 17%;
    }
    .txt {
      color: white;
      margin-left: 70px;
      margin-top: 30px;
      font-size: 50px;
    }
    .smtxt {
      font-size: 20px;
      width: 100%;
    }
    .smalltxt {
      margin-top: 10px;
      width: 80%;
      font-size: 19px;
    }
  }
`;
export default Wrapper;
