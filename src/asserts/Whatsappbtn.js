import styled from "styled-components";

const Wrapper = styled.main`
  .floating {
    padding: 10px;
    display: block;
  }
  .float {
    position: fixed;
    width: 60px;
    height: 60px;
    bottom: 60px;
    left: 95%;
    background-color: transparent;
    color: #999;
    border-radius: 50px;
    text-align: center;
    /* box-shadow: 2px 2px 3px #999; */
  }

  .my-float {
    margin-top: 22px;
  }
  @media (max-width: 768px) {
    .float {
      left: 83%;
      width: 50px;
      height: 50px;
    }
  }
`;
export default Wrapper;
