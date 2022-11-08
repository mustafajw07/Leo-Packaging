import styled from "styled-components";

const Wrapper = styled.div`
  .container {
    background-color: #f9f5f2;
  }
  .name {
    background-color: #bf8f4e;
  }
  .head {
    text-align: center;
    padding-top: 40px;
    font-size: 40px;
    letter-spacing: 0.6em;
  }

  .smallcontainer {
    display: grid;
    gap: 10px;
    background-color: #bf8f4e;
    padding: 80px;
  }
  .heading {
    padding-bottom: 50px;
    text-align: center;
    letter-spacing: 0.6em;
    font-weight: 600;
  }
  .bg {
    background-color: #f9f5f2;
  }
  .brand-logo {
    padding-bottom: 50px;
    background-color: #f9f5f2;
  }
  .company {
    padding-left: 20px;
    display: flex;
    justify-content: space-evenly;
  }

  @media (max-width: 1200px) {
    .smallcontainer {
      display: grid;
      background-color: #bf8f4e;
      padding: 0px;
    }
  }

  @media (max-width: 1048px) {
    .smallcontainer {
      display: grid;
      gap: 10px;
      background-color: #bf8f4e;
      padding: 50px;
    }
    .heading {
      font-size: 20px;
      text-align: center;
      letter-spacing: 0.2em;
      font-weight: 600;
    }
    .brand-logo {
      padding-bottom: 30px;
    }
    
    .company {
      padding-left: 7px;
      padding-top: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
    }
    .logo {
    }
  }
  @media (max-width: 768px) {
    .head {
      text-align: center;
      padding-top: 30px;
      font-size: 30px;
      letter-spacing: 0.6em;
    }
  }
`;
export default Wrapper;
