import styled from "styled-components";

const Wrapper = styled.div`
  header {
    position: relative;
    height: 75vh;
    min-height: 25rem;
    width: 100%;
    overflow: hidden;
  }

  header .pic {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
    width: 100%;
    height: 500px;
    z-index: 0;
    -ms-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
  }

  header .container {
    position: relative;
    z-index: 2;
    height: 100%;
  }

  header .overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: black;
    opacity: 0.5;
    z-index: 1;
  }
  .video {
    display: flex;
    text-align: center;
    height: 100%;
    align-items: center;
  }
  .video div {
    color: white;
    width: 100%;
  }
  .video div {
    margin-bottom: 0;
  }
  @media (max-width: 768px) {
    header {
      height: 44vh;
      overflow: inherit;
      min-height: auto;
    }
    header .overlay{
      background-color: transparent;
    }
    header .pic{
      top: 50%;
      min-height: auto;
      height: 374px;
    }
    header .container{
      height: 110px;
    }
  }
`;
export default Wrapper;
