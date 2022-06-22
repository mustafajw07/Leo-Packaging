import styled from "styled-components";


const Wrapper = styled.section`
.styled-input {
   float: left;
   width: 293px;
   margin-bottom : 20px;
   position: relative;
   border-radius: 4px;
 }

 .styled-input.wide {
   width: 650px;
   max-width: 100%;
 }

 textarea {
   border: 0;
   width: 100%;
   background-color: #F9F5F2;
   color: #2D2D2D;
   border-radius: 5px;
 }

 input:focus,
 textarea:focus {
   outline: 0;
 }
 textarea {
    width: 100%;
  height: 10rem;
  padding: 0.375rem 0.75rem;
  border-radius: 5px;
 }
.form {
  /* width: 100%; */
  max-width: 100%;
  border-radius: 10px;
  box-shadow: var(--shadow-2);
  padding: 2rem 2.5rem;
  margin: 3rem auto;
  border-top: 5px solid #BF8F4E;
}
.form-label {
  display: block;
  font-size: 18px;
  margin-bottom: 0.5rem;
  text-transform: capitalize;
}
.form-input
{  
    background-color: #F9F5F2;
    color: #2D2D2D;
  width: 100%;
  height: 45px;
  padding: 0.375rem 0.75rem;
  border-radius: 5px;
}
.form-box{
  margin: 20px 0;
}
display: grid;
  align-items: center;
  .form {
    max-width: 775px;
    background-color: #2D2D2D;
    opacity: 0.9;
  }
  h3 {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    text-align: center;
    color: #F9F5F2;
    font-size: 35px;
    margin-bottom: 35px;
  } 
  label{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: #F9F5F2;
  }
  .btn-flip {
  opacity: 1;
  outline: 0;
  color: #fff;
  line-height: 40px;
  position: relative;
  text-align: center;
  letter-spacing: 1px;
  display: inline-block;
  text-decoration: none;
  font-family: "Open Sans";
  text-transform: uppercase;
}
.btn-flip:hover:after {
  opacity: 1;
  transform: translateY(0) rotateX(0);
}
.btn-flip:hover:before {
  opacity: 0;
  transform: translateY(50%) rotateX(90deg);
}
.btn-flip:after {
  top: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  color: #323237;
  display: block;
  transition: 0.5s;
  position: absolute;
  background: #adadaf;
  content: attr(data-back);
  transform: translateY(-50%) rotateX(90deg);
}
.btn-flip:before {
  top: 0;
  left: 0;
  opacity: 1;
  color: #adadaf;
  display: block;
  padding: 0 30px;
  line-height: 40px;
  transition: 0.5s;
  position: relative;
  background: #323237;
  content: attr(data-front);
  transform: translateY(0) rotateX(0);
}
button {
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
}

@media (max-width: 768px){
    .form {
    max-width: 370px;
    height: auto;
    background-color: #2D2D2D;
    opacity: 0.8;
    margin-top: 150px;
  }
  textarea {
    width: 100%;
  height: 7rem;
  padding: 0.375rem 0.75rem;
  border-radius: 5px;
 }
}
`

export default Wrapper;