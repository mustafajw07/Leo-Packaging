import styled from "styled-components";

const Wrapper = styled.div`
  .heading {
    padding: 60px 20px;
    text-align: center;
    letter-spacing: 0.6em;
    font-weight: 600;
  }
  .brand-logo {
    padding-bottom: 50px;
  }
  .company {
    padding-left: 20px;
    display: flex;
    justify-content: space-evenly;
  }

  @media (max-width: 720px) {
    .heading {
      font-size: 16px;

      padding: 60px 20px;
      text-align: center;
      letter-spacing: 0.6em;
      font-weight: 600;
    }
    .brand-logo {
      padding-bottom: 30px;
    }
    .containerlogo {
      background-color: rgb(230 242 238);
      padding-bottom: 30px;
    }

    .company {
      padding-left: 20px;
      padding-top: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
    }
  }
`;
export default Wrapper;
