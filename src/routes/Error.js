// import { Link } from "react-router-dom";
import Wrapper from "../asserts/styles/Error";
import nf from "../asserts/images/nf.svg"


function Error() {
  return <Wrapper>
  <div>
      <img src={nf} alt = "not found"/>
<h3>Ohh! Page Not Found</h3>
</div>
</Wrapper>;
}

export default Error;
