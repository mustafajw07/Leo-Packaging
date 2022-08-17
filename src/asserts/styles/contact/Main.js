import styled from "styled-components";


const Wrapper = styled.section`
.container {
    max-width: 1140px;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
.page-title{
    display: block;
    margin-top: 140px;
    margin-bottom: 55px;
    font-size: 40px;
    position: relative;
    animation: fadeInAnimation ease 4s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}
.title{
    visibility: visible;
    animation: fadeInUp ease 5s;
    margin : 0 0 150px;
}
.para{
    font-size: 46px;
    transform: matrix(1, 0, 0, 1, 0, 0);
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
`

export default Wrapper;