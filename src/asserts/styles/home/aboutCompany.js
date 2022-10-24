import styled from "styled-components";

const Wrapper = styled.main`
  .container-fluid {
    background: white;
    margin-top: 8%;
    border: 90px solid white;
  }
  .container {
    margin-left: 15%;
    width: 70%;
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

  @media (max-width: 768px) {
    .container-fluid {
      background: white;
      margin-top: 0%;
      border: 5px solid white;
    }
    .container {
      margin-right:12%
     
      width: 100%;
      background: #323237;
      display: flex;
      flex-direction: column;
    }
    .img {
      margin-left:25px;
      align-item: center;
      height: 150px;
      width: 150px;
    }
    .txt {
      color: white;
      margin-left:20px;
      margin-top: 20px;
      font-size: 50px;
    }
    .smtxt {
      font-size: 20px;
      width: 100%;
    }
    .smalltxt {
      margin-top: 10px;
      width:80%;
      font-size: 16px;
    }
  }

  @media (min-width:769px) and (max-width:1130px){
    .container-fluid {
      background: white;
      margin-top: 15%;
      border:10px solid white;
    }
    .container {
      margin-left:10%;
      width: 80%;
      background: #323237;
      display: flex;
      flex-direction: row;
    }
    .img {
      height:300px;
      width:300px;
      align-item: center;
      // margin-left: 17%;
    }
    .txt {
      color: white;
      margin-left: 75px;
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
