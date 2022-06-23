import styled from "styled-components";

const Wrapper = styled.div`
.banner{
    width: auto;
    margin: 0 0 20px;
    height: 20vh;
    background-color: #2D2D2D;
    opacity: 0.8;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 5px solid #BF8F4E;
}
h3{
    color: #F9F5F2;
    font-size: 80px;
}
@media (max-width: 768px){
    .banner{
        height: 15vh;
    }
    h3{
        font-size: 60px;
    }
}
`


export default Wrapper