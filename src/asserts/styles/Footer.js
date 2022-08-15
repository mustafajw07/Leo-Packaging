import styled from "styled-components";

const Wrapper = styled.footer`
  .footer {
    background: #2d2d2d;
    padding: 7px 0px;
    font-family: "Play", sans-serif;
    text-align: center;
  }

  .footer .row {
    width: 100%;
    margin: 1% 0%;
    padding: 0.6% 0%;
    color: gray;
    font-size: 15px;
  }

  .footer .row a {
    text-decoration: none;
    color: gray;
    transition: 0.5s;
  }

  .footer .row a:hover {
    color: #fff;
  }

  .footer .row ul {
    width: 100%;
    font-size: 14px;
  }

  .footer .row ul li {
    display: inline-block;
    margin: 0px 30px;
  }

  .footer .row a i {
    font-size: 2em;
    margin: 0% 1%;
  }

  @media (max-width: 720px) {
    .footer {
      text-align: left;
      padding: 5%;
    }
    .footer .row ul li {
      display: block;
      margin: 10px 0px;
      text-align: left;
    }
    .footer .row a i {
      margin: 0% 3%;
    }
  }
`;

export default Wrapper;
