import styled from "styled-components";

const Wrapper = styled.div`
#title{
    margin-bottom: 1px;
    color: #2D2D2D;
    font-size: 40px;
    text-align: center;
}
hr {
    height: 3px;
    background-color: #BF8F4E;
    margin: auto;
    width: 235px;
    margin-top: 0em;
   margin-bottom: 0em;
}
.team {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  margin: 0 auto;
  max-width: 1140px;
  padding: 20px 28px 30px;
  grid-gap: 30px;
  align-items: stretch;
}
.card {
  position: relative;
  width: 100%;
  height: 400px;
  background: #fff;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(15px);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
}

.img-bx {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  transform: translateY(30px) scale(0.5);
  transform-origin: top;
}

.img-bx img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 30px;
}

.content .detail {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

.content .detail h2 {
  color: #444;
  font-size: 1.6em;
  font-weight: bolder;
}

.content .detail h2 span {
  font-size: 0.7em;
  color: #03a9f4;
  font-weight: bold;
}

.sci {
  position: relative;
  display: flex;
  margin-top: 5px;
}

.sci li {
  list-style: none;
  margin: 4px;
}

.sci li a {
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: transparent;
  font-size: 1.5em;
  color: #444;
  text-decoration: none;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: 0.5s;
}

.sci li a:hover {
  background: #03a9f4;
  color: #fff;
}
@media (max-width: 768px){
    .card{
  margin: 0 auto;
  width: 85%;
}
}
`

export default Wrapper;