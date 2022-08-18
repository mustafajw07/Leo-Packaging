import styled from "styled-components";

const Wrapper = styled.main`
  header {
    position: relative;
    height: 75vh;
    min-height: 25rem;
    width: 100%;
    overflow: inherit;
  }

  header video {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
    width: 100%;
    height: 767px;
    z-index: 0;
    -ms-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
  }

  header .container {
    position: relative;
    z-index: 2;
    height: 50%;
  }

  header .overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
  }
  .video {
    display: flex;
    text-align: center;
    height: 100%;
    align-items: center;
  }
  .video div {
    color: #F9F5F2;
    width: 100%;
  }
  .video div {
    margin-bottom: 0;
  }
  .top {
    font-size: 30px;
  }
  div h1 {
    font-size: 100px;
    font-weight: bold;
  }
  p {
    font-size: 30px;
  }
  @media (max-width: 768px) {
    header video {
      height: 374px;
    }
    header .container {
      height: 150px;
    }
    .top {
      font-size: 20px;
    }
    div h1 {
      font-size: 100px;
      font-weight: bold;
    }
    p {
      font-size: 20px;
    }
  }
`;
export default Wrapper;
