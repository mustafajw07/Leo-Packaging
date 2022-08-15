import styled from "styled-components";

const Wrapper = styled.div`
  header {
    position: relative;
    // background-color: black;
    height: 75vh;
    min-height: 25rem;
    width: 100%;
    overflow: hidden;
  }

  .pic {
    postion: absolute;
    width: 1519px;
    height: 572px;
    object-fit: cover;
    object-position: 50% 50%;
  }

  header .container {
    position: relative;
    z-index: 2;
    height: 100%;
  }

  // header .overlay {
  //   position: absolute;
  //   // top: 0;
  //   // left: 0;
  //   // height: 100%;
  //   // width: 100%;
  //   // background-color: black;
  //   // opacity: 0.5;
  //   z-index: 1;
  // }
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
