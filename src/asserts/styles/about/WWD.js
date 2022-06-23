import styled from "styled-components";

const Wrapper = styled.div`
.wwd{
  display: flex;
  align-items: center;
  width: 50%;
  margin: 50px auto 50px;
 
}
.wwd div {
    text-align: center;
}
h2{
    margin-bottom: 1px;
    color: #2D2D2D;
    font-size: 40px;
}
p{
    margin-top: 5px;
    color: #2D2D2D;
}
hr {
    height: 3px;
    background-color: #BF8F4E;
    margin: auto;
    width: 235px;
    margin-top: 0em;
   margin-bottom: 0em;
}

@media (max-width: 768px){
    .wwd{
  width: 75%;
}p{
    font-size: 20px;
}
}
`

export default Wrapper