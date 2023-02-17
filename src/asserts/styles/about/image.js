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
    z-index: 1;
    background-color: black;
    opacity: 0.3;
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
    margin-bottom: 75px;
  }
  p {
    font-size: 30px;
    visibility: visible;
    animation: fadeInUp ease 3s;
  }
  h1 {
    font-size: 50px;
    font-weight: bold;
    visibility: visible;
    animation: fadeInUp ease 3s;
  }
  @keyframes fadeInAnimation {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
@keyframes  fadeInUp{
    0% {
                opacity: 0;
                transform: translate3d(0, 30px, 0);
            }
            100% {
                opacity: 1;
                transform: translate3d(0, 0, 0);
            }
        }  

  @media (max-width: 768px) {
    header img {
      height: 200px;
    }
      header {
        height: 44vh;
        overflow: inherit;
        min-height: auto;
      }
      header .pic {
        top: 50%;
        height: inherit;
      }
      header .overlay{
        height: inherit;
        
    }
      header .container {
        height: 150px;
      }
      p {
        font-size: 20px;
      }
      h1 {
        font-size: 30px;
        font-weight: bold;
      }
    }
`;
export default Wrapper;
