import styled from "styled-components";

const Wrapper = styled.main`
  header {
    position: relative;
    background-color: black;
    height: 75vh;
    min-height: 25rem;
    width: 100%;
    overflow: hidden;
  }

  header video {
    position: absolute;
    top: 100%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    // width: auto;
    // height: auto;
    object-fit: cover;
    object-position: 50% 50
    width: 1519px; 
    height: 1009px
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
    .head {
      height: 0vh;
    }
  }
`;
export default Wrapper;
