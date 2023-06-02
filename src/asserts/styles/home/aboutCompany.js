import styled from "styled-components";

const Wrapper = styled.main`
  .container-fluid {
    background: #bf8f4e !important;
    margin-top: 15%;
    border: 25px solid #bf8f4e;
    // height: 600px;
  }

  .container {
    height: 432px;
    width: 940px;
    background: #323237;
    display: flex;
    flex-direction: row;
    margin: 0 auto !important;
  }
  .txt {
    color: white;
    margin-left: 55px;
    margin-top: 30px;
    font-size: 41px;
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

  @media (max-width: 767px) {
    .container-fluid {
      background: #bf8f4e;
      margin-top: 10%;
      border: 1px solid #bf8f4e;
      margin-left: 0%;
    }

    .container {
      height: 820px;
      width: 100%;
      display: flex;
      flex-direction: column;
    }
    .img {
      width: 100%;
    }
    .txt {
      color: white;
      font-size: 25px;
    }
    .smtxt {
      font-size: 19px;
      width: 100%;
    }
    .smalltxt {
      margin-top: 10px;
      width: 80%;
      font-size: 19px;
    }
  }
  @media (min-width: 914px) and (max-width: 1048px) {
    .container-fluid {
      background: #bf8f4e !important;
      margin-top: 17%;
      border: 10px solid #bf8f4e;
      // height: 600px;
    }

    .container {
      height: 432px;

      background: #323237;
      display: flex;
      flex-direction: row;
      margin: 0 auto !important;
    }
  }
  @media (min-width: 768px) and (max-width: 913px) {
    .container-fluid {
      background: #bf8f4e !important;
      margin-top: 10%;
      border: 10px solid #bf8f4e;
      // height: 600px;
    }

    .container {
      height: 532px;
      width: 100%;
      background: #323237;
      display: flex;
      flex-direction: row;
      margin: 0 auto !important;
    }
    .txt {
      color: white;
      margin-left: 75px;
      margin-top: 30px;
      font-size: 50px;
    }
    img {
      height: 532px;
    }
    .smtxt {
      font-size: 26px;
      width: 100%;
    }
    .smalltxt {
      margin-top: 10px;
      width: 80%;
      font-size: 18px;
    }
  }
`;
export default Wrapper;
