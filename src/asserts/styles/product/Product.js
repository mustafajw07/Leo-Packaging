import styled from "styled-components";

const Wrapper = styled.div`
  .box {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    background-color: #f9f5f2;
  }

  .item {
    top: 50%;
    width: 200px;
    height: 300px;
    border-radius: 10px;
    object-fit: cover;
    transition: all 0.3s ease;
  }
   .item:hover {
    background-color: white;
    opacity: 0.2;
  }
  p {
    font-size: 30px;
  }
  @media (max-width: 768px) {
    .box {
      padding: 30px 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .item {
      top: 20%;
      width: 180px;
      height: 220px;
      border-radius: 10px;
    }
    p {
      padding-bottom: 20px;
      font-size: 20px;
      font-weight: 300;
    }
  }
`;
export default Wrapper;
