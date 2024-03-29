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
    .brand-logo {
      padding-bottom: 30px;
    }

    .company {
      padding-left: 20%;
      padding-top: 20px;
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    .img {
      height: 100px;
    }
  }
  @media (min-width: 248px) and (max-width: 767px) {
    .head {
      text-align: center;
      padding-top: 30px;
      font-size: 30px;
      letter-spacing: 0.6em;
    }
    .company {
      padding-left: 9%;
      padding-right: 30px;
      padding-top: 20px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 35px;
    }
    .img {
      height: 100px;
    }
  }
`;
export default Wrapper;
