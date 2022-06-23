import styled from "styled-components";

const Wrapper  = styled.div`
.card_wrapper {
  //   the important lines!
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  //
  margin: 0 auto;
  max-width: 1140px;
  padding: 20px 28px 30px;
  grid-gap: 30px;
  align-items: stretch;
}
h2{
    text-align: center;
    margin-bottom: 1px;
    color: #2D2D2D;
    font-size: 40px;
}
hr {
    height: 3px;
    background-color: #BF8F4E;
    margin: auto;
    width: 375px;
    margin-top: 0em;
   margin-bottom: 0em;
}
.card {
  display: block;
  transition: transform 0.3s cubic-bezier(0.374, 0.019, 0.035, 1.861);
  background-color: #eae5e1;    
  border-radius: 4px;
  box-shadow: 0 2px 2px 1px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 320px;
  &:hover {
    transform: scale(1.03);
  }
}
.info{
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    color: #2d2d2d;
  margin: 50px 0 30px;
  padding: 0 30px;
    
}
.info h2{
   margin: 7px 0;
   font-size: 27px;
}
p{
    margin: 10px 0;
    font-size: 20px;
}
.info img{
    width: 60px;
    height: 60px;
    margin: 10px 0;
}
@media (max-width: 768px){
    .card{
  margin: 0 auto;
  width: 100%;
  height: 340px;
}
.info h2{
   font-size: 23px;
}
p{
    font-size: 17px;
}
.info img{
    width: 50px;
    height: 50px;
    margin: 10px 0;
}
h2{
    font-size: 35px;
}
hr {
    width: 325px;
}
}
`

export default Wrapper;