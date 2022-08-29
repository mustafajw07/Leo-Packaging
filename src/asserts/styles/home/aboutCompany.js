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
    font-family: "Open Sans";

    margin-top: 60px;
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
    color: #323237;
    display: block;
    transition: 0.5s;
    position: absolute;
    background: #adadaf;
    content: attr(data-back);
    transform: translateY(-50%) rotateX(90deg);
  }
  .btn-flip:before {
    top: 0;
    left: 0;
    opacity: 1;
    color: #adadaf;
    display: block;
    padding: 0 30px;
    line-height: 40px;
    transition: 0.5s;
    position: relative;
    background: #323237;
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
  @media (max-width: 720px) {
    .maincontainer {
      display: flex;
      flex-direction: column;
      padding-top: 10px;
      justify-content: center;
      background-color: #bf8f4e;
    }
    .img {
      padding-left: 50px;
      height: 300px;
    }
  }
`;
export default Wrapper;
