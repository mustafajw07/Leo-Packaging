import styled from "styled-components";

const Wrapper  = styled.div`
.card_wrapper {
  //   the important lines!
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  //
  margin: 0 auto;
  max-width: 1140px;
  padding: 30px 28px;
  grid-gap: 30px;
  align-items: stretch;
}

.card {
  display: block;
  transition: transform 0.3s cubic-bezier(0.374, 0.019, 0.035, 1.861);
  background-color: #eae5e1;    
  border-radius: 4px;
  box-shadow: 0 2px 2px 1px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 340px;
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
  width: 75%;
}
}
`

export default Wrapper;