import styled from "styled-components";

const Wrapper = styled.div`
  .box {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;

    background-color: #f9f5f2;
  }
  .box .one {
    background-color: #f1f1f1;
    width: 100%;
    margin: 10px;
    text-align: center;
    height: 100px;
  }
  .item {
    top: 50%;
    width: 200px;
    height: 300px;
  }
  p {
    font-size: 20px;
    font-weight: 300;
  }
`;
export default Wrapper;
