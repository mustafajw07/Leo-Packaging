import styled from "styled-components";


const Wrapper = styled.section`
.styled-input {
   float: left;
   width: 293px;
   margin: 1rem 0;
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

 textarea:focus~span {
   width: 100%;
   -webkit-transition: all 0.075s ease;
   transition: all 0.075s ease;
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
  transition: var(--transition);
  border-top: 5px solid #BF8F4E;
}
.form-label {
  display: block;
  font-size: var(--smallText);
  margin-bottom: 0.5rem;
  text-transform: capitalize;
  letter-spacing: var(--letterSpacing);
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
    color: #F9F2ED;
  } 
  label{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: #F9F2ED;
  }
@media (max-width: 768px){
    .form {
    max-width: 360px;
    height: auto;
    background-color: #2D2D2D;
    opacity: 0.9;
  }
}
`

export default Wrapper;