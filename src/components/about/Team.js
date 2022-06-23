import TeamCard from "./card/TeamCard";
import Wrapper from "../../asserts/styles/about/Team"

function Team() {
  return <>
  <Wrapper >
    <h2 id="title">Our Team</h2>
    <hr />
  <div className="team">
    <TeamCard name = "Moiz Vasowala" title = "Managing Director"/>
    <TeamCard name = "Murtaza Chechatwala" title = "Director of Operations"/>
    <TeamCard name = "Ibrahim Electricwala" title = "Head of Marketing and Design"/>
  </div>
  </Wrapper>
  </>;
}

export default Team;
