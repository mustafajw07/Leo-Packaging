import styled from "styled-components";

const Wrapper = styled.main`

  .container-fluid {
    background: #bf8f4e;
    margin-top: 7%;
    border: 90px solid #bf8f4e;
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
  .btn-flip {
    opacity: 1;
    outline: 0;
    color: #fff;
    line-height: 40px;
    position: relative;
    text-align: center;
    letter-spacing: 1px;
    display: inline-block;
    text-decoration: none;
    font-size:20px;
    text-transform: uppercase;
   margin: 10px;
  
  }
  .btn-flip:hover:after {
    opacity: 1;
    transform: translateY(0) rotateX(0);
  }
  .btn-flip:hover:before {
    opacity: 0;
    transform: translateY(50%) rotateX(90deg);
  }
  .btn-flip:after {
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    color: white;
    display: block;
    transition: 0.5s;
    position: absolute;
    background: #bf8f4e;
    content: attr(data-back);
    transform: translateY(-50%) rotateX(90deg);
  }
  .btn-flip:before {
    top: 0;
    left: 0;
    opacity: 1;
    color: black;
    display: block;
    padding: 0 30px;
    line-height: 40px;
    transition: 0.5s;
    position: relative;
    // background: #323237;
    background:white;
    content: attr(data-front);
    transform: translateY(0) rotateX(0);
  }
  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
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
