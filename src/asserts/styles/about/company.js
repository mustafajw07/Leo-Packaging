import styled from "styled-components";

const Wrapper = styled.div`
  .container {
    background-color: #f9f5f2;
  }
  .name {
    background-color: #bf8f4e;
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

  @media (max-width: 720px) {
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
    .containerlogo {
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
`;
export default Wrapper;
