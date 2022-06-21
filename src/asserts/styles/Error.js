import styled from "styled-components";


const Wrapper = styled.main`
img{
    width: auto;
    height: 400px;
    margin: 50px 0;
}
div{
    text-align: center;
    font-family: monospace;
}
a{
    font-size: 20px;
}

@media (max-width: 768px){
    img{
    width: 375px;
    height: 400px;
    margin: 30px 0;
}
}
`

export default Wrapper;