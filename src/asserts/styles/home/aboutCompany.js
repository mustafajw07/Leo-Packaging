import styled from "styled-components";

const Wrapper = styled.main`
  .maincontainer {
    display: flex;
    flex-direction: row;
    padding-top: 200px;
    justify-content: center;
    background-color: #bf8f4e;
  }

  .img {
    margin-left: 350px;
    width: 433px;
    height: 433px;
    align-items: center;
  }
  .text {
    padding-left: 50px;
  }
  h2 {
    font-size: 40px;
    padding-bottom: 10px;
  }
  .subtitle {
    padding-bottom: 20px;
    font-size: 20px;
    width: 40%;
  }
  .para {
    font-size: 18px;
    width: 50%;
  }
  .btn {
    border: none;
    color: #adadaf;
    background: #323237;
    padding: 16px 32px;
    text-align: center;
    font-size: 16px;
    margin: 100px 2px;
    transition: 0.3s;
  }
  .btn:hover {
    color: #323237;
    background: #adadaf;

    opacity: 1;
  }
  @media (max-width: 1200px) {
    .img {
      margin-left: 80px;
      width: 433px;
      height: 433px;
      align-items: center;
    }
    .subtitle {
      padding-bottom: 20px;
      font-size: 20px;
      width: 90%;
    }
    .para {
      font-size: 18px;
      width: 80%;
    }
  }
  @media (max-width: 768px) {
    .maincontainer {
      display: flex;
      flex-direction: column-reverse;
      padding-top: 10px;
      justify-content: center;
      align-items: center;
      background-color: #bf8f4e;
    }
    .container {
      margin-right: 350px;
    }
    .img {
      margin-left: 345px;
      padding-top: 50px;
      height: 300px;
      width: 300px;
    }

    h2 {
      font-size: 40px;
      padding-bottom: 10px;
    }
    .subtitle {
      padding-bottom: 20px;
      font-size: 20px;
      width: 60%;
    }
    .para {
      font-size: 18px;
      width: 85%;
    }
    button {
      padding-bottom: 20px;
    }
  }
`;
export default Wrapper;
