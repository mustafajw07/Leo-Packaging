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
.row{
  display: flex;
  flex-direction: row;
  padding: 10px;
  margin-bottom: 30px;
  margin-right: -15px;
  margin-left: -15px;
}
.address{
  width: 50%;
  margin-left: 10px;
  line-height: 1.5;
}
.address p{
 font-size: 30px;
 padding-left: 35px;
}
.address p{
  visibility: visible;
  animation: fadeInUp ease 7s;
}
.address p i {
  font-size: 20px;
  padding-right: 10px;
}
p{
  margin-top: 0;
    font-size: 16px;
    line-height: 1.8;
    letter-spacing: 0.01em;
    margin-bottom: 20px;
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
.form{
  margin-right: 10px;
  width: 50%;
}

/* From uiverse.io by @alexruix */
.input {
 line-height: 28px;
 width: 70% ;
 border: 2px solid transparent;
 border-bottom-color: #777;
 padding: .2rem 0;
 outline: none;
 background-color: transparent;
 color: #0d0c22;
 -webkit-transition: .3s cubic-bezier(0.645, 0.045, 0.355, 1);
 transition: .3s cubic-bezier(0.645, 0.045, 0.355, 1);
 margin: 12px;
}

.input::-webkit-input-placeholder {
 color: #777;
}

.input::-moz-placeholder {
 color: #777;
}

.input:-ms-input-placeholder {
 color: #777;
}

.input::-ms-input-placeholder {
 color: #777;
}

.input::placeholder {
 color: #777;
}

.input:focus::-webkit-input-placeholder {
 opacity: 0;
 -webkit-transition: opacity .3s;
 transition: opacity .3s;
}

.input:focus::-moz-placeholder {
 opacity: 0;
 -moz-transition: opacity .3s;
 transition: opacity .3s;
}

.input:focus:-ms-input-placeholder {
 opacity: 0;
 -ms-transition: opacity .3s;
 transition: opacity .3s;
}

.input:focus::-ms-input-placeholder {
 opacity: 0;
 -ms-transition: opacity .3s;
 transition: opacity .3s;
}

.input:focus::placeholder {
 opacity: 0;
 -webkit-transition: opacity .3s;
 transition: opacity .3s;
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