import styled from "styled-components";

const Wrapper = styled.main`
  .container-fluid {
    background: #bf8f4e;
    margin-top: 7%;
    border: 90px solid #bf8f4e;
  }
  .container {
    margin-left: 13%;
    height: 432px;
    width: 980px;
    background: #323237;
    display: flex;
    flex-direction: row;
  }
  .img {
    align-item: center;
    // margin-left: 17%;
  }
  .txt {
    color: white;
    margin-left: 75px;
    margin-top: 30px;
    font-size: 70px;
  }
  .smtxt {
    font-size: 22px;
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
  }
  .btn-flip:hover {
    border: 1px solid white;
    color: #bf8f4e;
    background: white;
  }

  @media (max-width: 767px) {
    .container-fluid {
      background: #bf8f4e;
      margin-top: 0%;
      border: 5px solid #bf8f4e;
    }
    .container {
      margin-left: 0%;
      width: 100%;
      background: #323237;
      display: flex;
      flex-direction: column;
      height: 530px;
    }
    .img {
      margin-left: 26%;
      align-item: center;
      height: 190px;
      width: 190px;
      margin-top: 10px;
    }
    .txt {
      color: white;
      margin-left: 20px;
      margin-top: 20px;
      font-size: 50px;
    }
    .smtxt {
      font-size: 20px;
      width: 100%;
    }
    .smalltxt {
      margin-top: 10px;
      width: 80%;
      font-size: 16px;
    }
  }

  @media (min-width: 767px) and (max-width: 820px) {
    .container-fluid {
      background: #bf8f4e;
      margin-top: 0%;
      border: 10px solid #bf8f4e;
    }
    .container {
      margin-left: 10%;
      width: 80%;
      background: #323237;
      display: flex;
      flex-direction: row;
    }
    .img {
      height: 300px;
      width: 300px;
      align-item: center;
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
      width: 60%;
      font-size: 15px;
    }
  }
  @media (min-width: 821px) and (max-width: 1205px) {
    .container-fluid {
      background: #bf8f4e;
      margin-top: 15%;
      border: 10px solid #bf8f4e;
    }
    .container {
      margin-left: 10%;
      width: 80%;
      background: #323237;
      display: flex;
      flex-direction: row;
    }
    .img {
      height: 300px;
      width: 300px;
      align-item: center;
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
      width: 60%;
      font-size: 15px;
    }
  }
`;
export default Wrapper;
